import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, EmergenciaJSON } from '../../services/data.service';
import { Observable } from 'rxjs';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';

@Component({
  selector: 'app-emergencia',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink, WhatsappLinkPipe],
  templateUrl: './emergencia.component.html',
  styleUrl: './emergencia.component.scss'
})
export class EmergenciaComponent {
  private data = inject(DataService);
  emergencia$: Observable<EmergenciaJSON> = this.data.getEmergencia();
}
