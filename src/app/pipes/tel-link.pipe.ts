import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'telLink', standalone: true })
export class TelLinkPipe implements PipeTransform {
  transform(phone: string | null | undefined): string {
    if (!phone) return '';

    // Use first number if multiple are provided separated by '/'
    const firstPart = phone.split('/')[0];

    // Keep only digits
    let digits = (firstPart.match(/\d+/g) || []).join('');

    if (!digits) return '';

    // Short emergency/service numbers (e.g., 190, 192, 193) should be dialed as-is
    if (digits.length <= 4 && /^1\d{2,3}$/.test(digits)) {
      return `tel:${digits}`;
    }

    // Remove leading zeros (in case of long distance prefixes like 0xx)
    digits = digits.replace(/^0+/, '');

    // Ensure Brazil country code (55) and output as E.164
    if (!digits.startsWith('55')) {
      digits = '55' + digits;
    }

    return `tel:+${digits}`;
  }
}


