/// <reference path="../../src/odometer/odometer.d.ts" />
import { OnInit, OnDestroy, OnChanges, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Ng2OdometerConfigModel } from './odometer.config';
export declare class Ng2OdometerComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private subscription;
    private odometer;
    container: ElementRef;
    number: number;
    config: Ng2OdometerConfigModel;
    observable: Observable<boolean>;
    animation: string;
    format: string;
    theme: string;
    value: number;
    duration: number;
    auto: boolean;
    private themes;
    private initOdometer();
    private initConfig();
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
