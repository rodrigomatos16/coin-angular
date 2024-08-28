import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


export interface Cryptocurrency {
  name: string;
  price: number;
  change: number;
  icon: string;
}

@Component({
  selector: 'app-crypto-cards',
  standalone: true,
  imports: [MatCardModule, CommonModule, ],
  templateUrl: './crypto-cards.component.html',
  styleUrl: './crypto-cards.component.scss',
})
export class CryptoCardsComponent {
toggleFavorite(_t6: any) {
throw new Error('Method not implemented.');
}
  cryptocurrencies: Cryptocurrency[] = [
    { name: 'BTC', price: 1844.39, change: -3.44, icon: 'path/to/btc-icon.png' },
    { name: 'ETH', price: 1844.39, change: 10.44, icon: 'path/to/eth-icon.png' },
    { name: 'ETH', price: 1844.39, change: 10.44, icon: 'path/to/eth-icon.png' },
    { name: 'ETH', price: 1844.39, change: 10.44, icon: 'path/to/eth-icon.png' }

    
    // Adicione mais criptomoedas conforme necessário
  ];
}
