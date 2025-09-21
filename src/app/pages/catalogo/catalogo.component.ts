import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  template: `
  <section class="card card-elevated">
    <div class="card-body">
      <h1 class="h5 mb-3">Catálogo Turístico</h1>
      <p class="text-muted mb-3">Visualize o catálogo completo dentro do aplicativo.</p>
      <div class="ratio ratio-4x3 d-none d-md-block">
        <iframe src="/catalogo.pdf" title="Catálogo Turístico" style="border:0; border-radius: var(--radius-sm);"></iframe>
      </div>
      <div class="d-md-none">
        <a class="btn btn-primary w-100" href="/catalogo.pdf" target="_blank" rel="noopener">
          Abrir Catálogo (PDF)
        </a>
        <div class="small text-muted mt-2">O visualizador embutido é exibido em telas maiores. No celular, abrimos o PDF no navegador para melhor experiência.</div>
      </div>
    </div>
  </section>
  `
})
export class CatalogoComponent {}


