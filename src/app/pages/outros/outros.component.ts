import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, OutrosJSON } from '../../services/data.service';
import { Observable, map } from 'rxjs';
import { TitleKeyPipe } from '../../pipes/title-key.pipe';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';

@Component({
    selector: 'app-outros',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, TitleKeyPipe, WhatsappLinkPipe],
    templateUrl: './outros.component.html',
    styleUrl: './outros.component.scss'
})
export class OutrosComponent {
  private data = inject(DataService);
  outros$: Observable<OutrosJSON> = this.data.getOutros();
  entries$ = this.outros$.pipe(
    map(obj => Object.entries(obj.outros_servicos).map(([key, value]) => ({ key, value })))
  );
}
