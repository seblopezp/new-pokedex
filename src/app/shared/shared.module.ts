import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafehtmlPipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [SafehtmlPipe],
  imports: [CommonModule],
  exports: [SafehtmlPipe],
})
export class SharedModule {}
