import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml',
})
export class SafehtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(value?: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
