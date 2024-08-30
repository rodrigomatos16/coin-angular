import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CryptoCardsComponent, Cryptocurrency } from '../../components/crypto-cards/crypto-cards.component';
import { CryptoTableComponent } from '../../components/crypto-table/crypto-table.component';
import { HeaderComponent } from "../../components/header/header.component";
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CoinGeckoService } from '../../services/coin-genco.service';



interface TableData {
  position: number;
  name: string;
  price: number;
  change24h: number;
  change7d: number;
  marketValue: string;
  isFavorite: boolean;
}



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule, CryptoCardsComponent, CryptoTableComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'], 
})
export class ListComponent implements OnInit {
  isHighlighted: boolean = false;
  cryptocurrencies: Cryptocurrency[] = [];
  tableDataSource: TableData[] = [];
  
  private searchTerms = new Subject<string>(); // Correção aqui

  constructor(private coinGeckoService: CoinGeckoService) {}

  ngOnInit(): void {
    this.fetchCryptocurrencyData();

    this.searchTerms.pipe(
      debounceTime(4000), 
      distinctUntilChanged(),
      switchMap((term: string) => this.coinGeckoService.searchCoins(term))
    ).subscribe({
      next: (response: any) => {
        console.log('Search results:', response);
        this.tableDataSource = response.map((crypto: any, index: number) => ({
          position: index + 1,
          name: crypto.name,
          price: crypto.current_price,
          change24h: crypto.price_change_percentage_24h,
          change7d: crypto.price_change_percentage_7d || 0,
          marketValue: crypto.market_cap,
          isFavorite: false,
        }));
      },
      error: (err) => {
        console.error('Error during search:', err);
      }
    });
  }

  fetchCryptocurrencyData() {
    console.log('Iniciando requisição à API CoinGecko...');

    this.coinGeckoService.getTopCoins().subscribe({
      next: (response) => {
        console.log('Dados recebidos:', response);
        this.cryptocurrencies = response.map((crypto: any) => ({
          name: crypto.name,
          price: crypto.current_price,
          change: crypto.price_change_percentage_24h,
          icon: crypto.image,
          marketValue: crypto.market_cap,
        }));

        this.tableDataSource = response.map((crypto: any, index: number) => ({
          position: index + 1,
          name: crypto.name,
          price: crypto.current_price,
          change24h: crypto.price_change_percentage_24h,
          change7d: crypto.price_change_percentage_7d || 0,
          marketValue: crypto.market_cap,
          isFavorite: false,
        }));

        console.log('cryptocurrencies:', this.cryptocurrencies);
        console.log('tableDataSource:', this.tableDataSource);
      },
      error: (err) => {
        console.error('Erro ao carregar dados:', err);
      },
    });
  }

  onSearchTermReceived(term: string) {
    this.searchTerms.next(term);
  }

  handleToggleFavorites(allFavorites: boolean) {
    console.log('All Favorites Toggled:', allFavorites);
  }

  handleToggleFavorite(name: string) {
    console.log('Favorite Toggled for:', name);
  }

  toggleHighlight() {
    console.log(
      'Highlights estão:',
      this.isHighlighted ? 'ativados' : 'desativados'
    );
  }
}
