import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, ServicosJSON } from '../../services/data.service';
import { Observable } from 'rxjs';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';
import { TelLinkPipe } from '../../pipes/tel-link.pipe';

@Component({
    selector: 'app-servicos',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, WhatsappLinkPipe, TelLinkPipe],
    templateUrl: './servicos.component.html',
    styleUrl: './servicos.component.scss'
})
export class ServicosComponent {
  private data = inject(DataService);
  servicos$: Observable<ServicosJSON> = this.data.getServicos();
}
