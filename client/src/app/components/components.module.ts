/* The components.module.ts contains components which can be used in different pages. */

import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        ToolbarComponent
    ],
    exports: [
        ToolbarComponent
    ]
})

export class ComponentsModule { }