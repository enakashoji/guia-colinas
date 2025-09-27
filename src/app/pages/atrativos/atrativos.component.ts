import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, Atrativo } from '../../services/data.service';
import { Observable } from 'rxjs';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';
import { TelLinkPipe } from '../../pipes/tel-link.pipe';

@Component({
    selector: 'app-atrativos',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, WhatsappLinkPipe, TelLinkPipe],
    templateUrl: './atrativos.component.html',
    styleUrl: './atrativos.component.scss'
})
export class AtrativosComponent {
  private data = inject(DataService);
  atrativos$: Observable<Atrativo[]> = this.data.getAtrativos();
}
