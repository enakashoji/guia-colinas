import { Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, RestaurantesJSON, RestauranteGrupo } from '../../services/data.service';
import { Observable, map } from 'rxjs';
import { TitleKeyPipe } from '../../pipes/title-key.pipe';
import { WhatsappLinkPipe } from '../../pipes/whatsapp-link.pipe';

@Component({
  selector: 'app-restaurantes',
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink, TitleKeyPipe, WhatsappLinkPipe],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.scss'
})
export class RestaurantesComponent {
  private data = inject(DataService);
  restaurantes$: Observable<RestaurantesJSON> = this.data.getRestaurantes();
  entries$: Observable<{ key: string; value: RestauranteGrupo[] }[]> = this.restaurantes$.pipe(
    map(obj => Object.entries(obj).map(([key, value]) => ({ key, value })))
  );
}
