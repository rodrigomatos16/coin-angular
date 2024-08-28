import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { CryptoCardsComponent } from '../../components/crypto-cards/crypto-cards.component';
import { CryptoTableComponent } from '../../components/crypto-table/crypto-table.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule, CryptoCardsComponent,CryptoTableComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'], 
})
export class ListComponent {
  isHighlighted: boolean = false;
myDataArray: any;

  toggleHighlight() {
    console.log(
      'Highlights estão:',
      this.isHighlighted ? 'ativados' : 'desativados'
    );
    // Outras ações baseadas no estado do switch
  }
}
