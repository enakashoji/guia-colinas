import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, CatJSON } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [NgIf, AsyncPipe, RouterLink],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.scss'
})
export class CatComponent {
  private data = inject(DataService);
  cat$: Observable<CatJSON> = this.data.getCat();
}
