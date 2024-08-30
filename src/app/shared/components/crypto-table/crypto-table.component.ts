import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [
    'position', 
    'coin',     // Novo: Combina 'name' e 'symbol' com ícone
    'price', 
    'change1h', // Novo: Mudança em 1 hora
    'change24h', 
    'volume',   // Novo: Volume de 24 horas
    'buy'       // Novo: Botão de compra
  ];
  
  @Input() allFavorites = false;
  
  @Output() toggleFavorites = new EventEmitter<boolean>();

  toggleAllFavorites(): void {
    this.allFavorites = !this.allFavorites;
    this.dataSource.forEach(item => item.isFavorite = this.allFavorites);
    this.toggleFavorites.emit(this.allFavorites);
  }
}  