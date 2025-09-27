import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService, HospedagemJSON, HospedagemItem } from '../../services/data.service';
import { Observable, map } from 'rxjs';
import { TitleKeyPipe } from '../../pipes/title-key.pipe';
import { TelLinkPipe } from '../../pipes/tel-link.pipe';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';
import { FilterByTextPipe } from '../../pipes/filter-by-text.pipe';

@Component({
    selector: 'app-hospedagem',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, TitleKeyPipe, WhatsappLinkPipe, TelLinkPipe, FilterByTextPipe, FormsModule],
    templateUrl: './hospedagem.component.html',
    styleUrl: './hospedagem.component.scss'
})
export class HospedagemComponent {
  private data = inject(DataService);
  query: string = '';
  hospedagem$: Observable<HospedagemJSON> = this.data.getHospedagem();
  entries$: Observable<{ key: string; value: HospedagemItem[] }[]> = this.hospedagem$.pipe(
    map(obj => Object.entries(obj).map(([key, value]) => ({ key, value })))
  );
}
