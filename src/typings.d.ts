/// <reference types="node" />
/// <reference types="jquery" />
/// <reference types="jasmine" />
/// <reference types="karma" />

interface JQuery {
    pickmeup(options?: {});
    pickmeup(eventName: string, value?: any);
    modal(optionsOrEvent?: any);
}