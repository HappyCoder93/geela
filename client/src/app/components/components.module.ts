import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';

/* The components.module.ts consists all the required components */

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