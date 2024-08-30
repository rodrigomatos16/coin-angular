import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


export interface Cryptocurrency {
  marketValue: any;
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
  @Input() cryptocurrencies: Cryptocurrency[] = [];
  @Output() toggleFavorite = new EventEmitter<string>();

  onToggleFavorite(name: string) {
    this.toggleFavorite.emit(name);
  }
}
