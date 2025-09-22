import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, HospedagemJSON, HospedagemItem } from '../../services/data.service';
import { Observable, map } from 'rxjs';
import { TitleKeyPipe } from '../../pipes/title-key.pipe';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';

@Component({
    selector: 'app-hospedagem',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, TitleKeyPipe, WhatsappLinkPipe],
    templateUrl: './hospedagem.component.html',
    styleUrl: './hospedagem.component.scss'
})
export class HospedagemComponent {
  private data = inject(DataService);
  hospedagem$: Observable<HospedagemJSON> = this.data.getHospedagem();
  entries$: Observable<{ key: string; value: HospedagemItem[] }[]> = this.hospedagem$.pipe(
    map(obj => Object.entries(obj).map(([key, value]) => ({ key, value })))
  );
}
