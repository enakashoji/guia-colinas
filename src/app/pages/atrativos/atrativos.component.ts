import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService, Atrativo } from '../../services/data.service';
import { Observable } from 'rxjs';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';
import { TelLinkPipe } from '../../pipes/tel-link.pipe';
import { FilterByTextPipe } from '../../pipes/filter-by-text.pipe';

@Component({
    selector: 'app-atrativos',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, WhatsappLinkPipe, TelLinkPipe, FilterByTextPipe, FormsModule],
    templateUrl: './atrativos.component.html',
    styleUrl: './atrativos.component.scss'
})
export class AtrativosComponent {
  private data = inject(DataService);
  query: string = '';
  atrativos$: Observable<Atrativo[]> = this.data.getAtrativos();
}
