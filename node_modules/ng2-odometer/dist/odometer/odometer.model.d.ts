export interface OdometerModel {
    MAX_VALUES: number;
    digits: Array<HTMLElement>;
    el: HTMLElement;
    format: {
        precision: number;
        radix: any;
        repeating: string;
    };
    inside: HTMLElement;
    options: {
        el: HTMLElement;
        duration: number;
        theme: string;
        format: string;
        animation: string;
    };
    ribbons: any;
    transitionEndBound: boolean;
    value: 0;
    update(number: number): void;
}
