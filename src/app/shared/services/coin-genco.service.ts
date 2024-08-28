import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoService {
  private baseUrl = 'https://www.coingecko.com';

  constructor(private http: HttpClient) { }

  getTopCoins(): Observable<any> {
    return this.http.get(`${this.baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`);
  }

  getCoinDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/coins/${id}`);
  }

  searchCoins(term: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search?query=${term}`);
  }
}
