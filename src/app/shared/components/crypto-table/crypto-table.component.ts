import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';




@Component({
  selector: 'app-crypto-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './crypto-table.component.html',
  styleUrl: './crypto-table.component.scss',
})

export class CryptoTableComponent {
  dataSource = [
    { position: 1, name: 'Bitcoin BTC', price: '$40,435.62', change24h: '-1.46%', change7d: '-2.13%', marketValue: '$768,904,009,242', isFavorite: true },
    { position: 2, name: 'Ethereum ETH', price: '$2,799.69', change24h: '-1.46%', change7d: '-2.13%', marketValue: '$768,904,009,242', isFavorite: false },
    { position: 3, name: 'Tether USDT', price: '$1.00', change24h: '-2.13%', change7d: '-2.13%', marketValue: '$768,904,009,242', isFavorite: false },
    { position: 4, name: 'BNB BNB', price: '$386.64', change24h: '-1.46%', change7d: '-2.13%', marketValue: '$768,904,009,242', isFavorite: true },
    { position: 5, name: 'USD Coin USDC', price: '$0.9996', change24h: '-1.46%', change7d: '-2.13%', marketValue: '$768,904,009,242', isFavorite: false },
    { position: 6, name: 'XRP XRP', price: '$0.78', change24h: '-1.46%', change7d: '-2.13%', marketValue: '$768,904,009,242', isFavorite: false },
  ];

  displayedColumns: string[] = ['position', 'name', 'change24h', 'change7d', 'marketValue'];

  allFavorites = false; 


  toggleAllFavorites(): void {
    this.allFavorites = !this.allFavorites;  
    this.dataSource.forEach(item => item.isFavorite = this.allFavorites);  // Aplica a todos
  }
}  