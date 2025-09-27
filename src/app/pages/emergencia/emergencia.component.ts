import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService, EmergenciaJSON } from '../../services/data.service';
import { Observable } from 'rxjs';
import { TelLinkPipe } from '../../pipes/tel-link.pipe';
import { FilterByTextPipe } from '../../pipes/filter-by-text.pipe';

@Component({
    selector: 'app-emergencia',
    imports: [NgFor, NgIf, AsyncPipe, RouterLink, TelLinkPipe, FilterByTextPipe, FormsModule],
    templateUrl: './emergencia.component.html',
    styleUrl: './emergencia.component.scss'
})
export class EmergenciaComponent {
  private data = inject(DataService);
  query: string = '';
  emergencia$: Observable<EmergenciaJSON> = this.data.getEmergencia();
}
