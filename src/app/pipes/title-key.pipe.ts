import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleKey', standalone: true })
export class TitleKeyPipe implements PipeTransform {
  private explicit: Record<string, string> = {
    // Restaurantes
    'no_atrativo': 'No Atrativo',
    'self_service_caseira': 'Self-Service / Caseira',
    'artesanais_massas_brasa': 'Artesanais, Massas e Brasa',
    'lanches_sanduiches': 'Lanches e Sanduíches',
    'bares_petiscarias': 'Bares e Petiscarias',

    // Hospedagem
    'hospedagem_lago_serra_mesa': 'Hospedagem - Lago Serra da Mesa',
    'hoteis_pousadas': 'Hotéis e Pousadas',
    'hospedagem_atrativos': 'Hospedagem em Atrativos',
    'chales_suites_casas': 'Chalés, Suítes e Casas',
    'campings': 'Campings',

    // Outros serviços
    'chaveiro': 'Chaveiro',
    'guincho': 'Guincho',
    'farmacias': 'Farmácias'
  };

  transform(value: string | null | undefined): string {
    if (!value) return '';
    const key = value.toString().trim();
    const lower = key.toLowerCase();
    if (this.explicit[lower]) return this.explicit[lower];

    // Fallback: snake/kebab -> Title Case, com correções de acentos comuns
    let s = lower.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
    s = s.replace(/\b\w/g, c => c.toUpperCase());

    s = s
      .replace(/\bHoteis\b/g, 'Hotéis')
      .replace(/\bSanduiches\b/g, 'Sanduíches')
      .replace(/\bFarmacias\b/g, 'Farmácias')
      .replace(/\bChales\b/g, 'Chalés')
      .replace(/\bSuites\b/g, 'Suítes')
      .replace(/\b Da\b/g, ' da')
      .replace(/\b Do\b/g, ' do')
      .replace(/\b De\b/g, ' de');

    // Ajuste específico
    s = s.replace(/\bLago Serra Mesa\b/g, 'Lago Serra da Mesa');

    return s;
  }
}
