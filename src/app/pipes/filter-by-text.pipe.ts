import { Pipe, PipeTransform } from '@angular/core';

function normalizeText(value: unknown): string {
  if (value == null) return '';
  const str = String(value).toLowerCase();
  // Remove diacritics for better matching in PT-BR
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
}

@Pipe({ name: 'filterByText', standalone: true, pure: true })
export class FilterByTextPipe implements PipeTransform {
  transform<T>(items: T[] | null | undefined, query: string | null | undefined): T[] {
    if (!items || items.length === 0) return items || [];
    if (!query || query.trim().length === 0) return items;

    const q = normalizeText(query.trim());

    return items.filter((item: any) => this.matchesItem(item, q));
  }

  private matchesItem(item: any, normalizedQuery: string): boolean {
    if (item == null) return false;
    if (typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean') {
      return normalizeText(item).includes(normalizedQuery);
    }

    if (Array.isArray(item)) {
      return item.some(entry => this.matchesItem(entry, normalizedQuery));
    }

    // For objects, look into common fields and any string/array-of-strings
    const candidateValues: unknown[] = [];

    // Common fields in this app's data
    for (const key of ['nome', 'descricao', 'servico', 'instagram']) {
      if (key in item) candidateValues.push(item[key]);
    }

    // Fallback: iterate all own properties that are strings or arrays
    for (const key of Object.keys(item)) {
      const val = item[key];
      if (typeof val === 'string') candidateValues.push(val);
      if (Array.isArray(val)) candidateValues.push(...val);
    }

    return candidateValues.some(val => normalizeText(val).includes(normalizedQuery));
  }
}


