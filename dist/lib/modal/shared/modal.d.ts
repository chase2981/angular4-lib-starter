import { EventEmitter } from '@angular/core';
export interface Modal {
    options: any;
    hidden: EventEmitter<any>;
}
