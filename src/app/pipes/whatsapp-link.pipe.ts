import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'whatsappLink', standalone: true })
export class WhatsappLinkPipe implements PipeTransform {
  transform(phone: string | null | undefined): string {
    if (!phone) return '';

    // Use first number if multiple are provided separated by '/'
    const firstPart = phone.split('/')[0];

    // Keep only digits
    let digits = (firstPart.match(/\d+/g) || []).join('');

    // Remove leading zeros
    digits = digits.replace(/^0+/, '');

    // Add Brazil country code if missing
    if (!digits.startsWith('55')) {
      digits = '55' + digits;
    }

    return `https://wa.me/${digits}`;
  }
}


