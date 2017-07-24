import { AfterViewInit, ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Modal } from './shared/modal';
export declare class ModalComponent implements OnInit, AfterViewInit, Modal, OnDestroy {
    options: any;
    shown: EventEmitter<any>;
    hidden: EventEmitter<any>;
    loaded: EventEmitter<any>;
    classModal: boolean;
    classFade: boolean;
    elem: HTMLElement;
    private modal;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    handleHeightAdjustment(): void;
    hide(): void;
    isVisible(): any;
    show(): void;
    subscribeToModalEvents(): void;
    toggle(): void;
    ngOnDestroy(): void;
}
