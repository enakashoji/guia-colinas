import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, EmergenciaJSON } from '../../services/data.service';
import { Observable } from 'rxjs';
import { TelLinkPipe } from '../../pipes/tel-link.pipe';

@Component({
    selector: 'app-emergencia',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, TelLinkPipe],
    templateUrl: './emergencia.component.html',
    styleUrl: './emergencia.component.scss'
})
export class EmergenciaComponent {
  private data = inject(DataService);
  emergencia$: Observable<EmergenciaJSON> = this.data.getEmergencia();
}
