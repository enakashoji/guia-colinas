import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, BemEstarJSON } from '../../services/data.service';
import { Observable } from 'rxjs';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';

@Component({
  selector: 'app-bem-estar',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink, WhatsappLinkPipe],
  templateUrl: './bem-estar.component.html',
  styleUrl: './bem-estar.component.scss'
})
export class BemEstarComponent {
  private data = inject(DataService);
  bemEstar$: Observable<BemEstarJSON> = this.data.getBemEstar();
}
