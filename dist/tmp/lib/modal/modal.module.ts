import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ],
  providers: [
  ]
})
export class ModalModule { }

export { ModalComponent };
