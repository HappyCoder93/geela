// The shared.module.ts contains all the required modules which are used in each page.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        IonicModule
    ]
})

export class SharedModule { }