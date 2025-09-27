import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService, BemEstarJSON } from '../../services/data.service';
import { Observable } from 'rxjs';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';
import { TelLinkPipe } from '../../pipes/tel-link.pipe';
import { FilterByTextPipe } from '../../pipes/filter-by-text.pipe';

@Component({
    selector: 'app-bem-estar',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, WhatsappLinkPipe, TelLinkPipe, FilterByTextPipe, FormsModule],
    templateUrl: './bem-estar.component.html',
    styleUrl: './bem-estar.component.scss'
})
export class BemEstarComponent {
  private data = inject(DataService);
  query: string = '';
  bemEstar$: Observable<BemEstarJSON> = this.data.getBemEstar();
}
