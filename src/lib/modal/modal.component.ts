import {
    AfterViewInit, Component, Directive, ElementRef, EventEmitter,
    HostBinding, HostListener, Input, OnChanges, OnInit, OnDestroy, Optional, Output, SimpleChanges
} from '@angular/core';

import { Modal } from './shared/modal';

@Component({
    selector: 'rd-modal',
    template: '<div><ng-content></ng-content></div>'
})
export class ModalComponent implements OnInit, AfterViewInit, Modal, OnDestroy {
    @Input() options: any = {};
    @Output() shown: EventEmitter<any> = new EventEmitter<any>();
    @Output() hidden: EventEmitter<any> = new EventEmitter<any>();
    @Output() loaded: EventEmitter<any> = new EventEmitter<any>();
    @HostBinding('class.modal') classModal = true;
    @HostBinding('class.fade') classFade = true;

    public elem: HTMLElement;
    private modal: any;

    constructor(elementRef: ElementRef) {
        this.elem = elementRef.nativeElement;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // $(this.elem).modal($.extend({
        //     backdrop: true,
        //     keyboard: true,
        //     show: false
        // }, this.options));

        // this.modal = $(this.elem).data('bs.modal');
        // this.subscribeToModalEvents();
    }

    handleHeightAdjustment() {
        $(this.elem).modal('handleUpdate');
    }

    hide() {
        $(this.elem).modal('hide');
    }

    isVisible() {
        return this.modal && this.modal.isShown;
    }

    show() {
        $(this.elem).modal('show');
    }

    subscribeToModalEvents() {
        $(this.elem).on('shown.bs.modal', () => {
            this.shown.emit(null);
        });

        $(this.elem).on('hidden.bs.modal', () => {
            this.hidden.emit(null);
        });

        $(this.elem).on('loaded.bs.modal', () => {
            this.loaded.emit(null);
        })
    }

    toggle() {
        $(this.elem).modal('toggle');
    }

    ngOnDestroy() {
        //$(this.elem).data('bs.modal', null);
    }
}
