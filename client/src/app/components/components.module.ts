import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FilterComponent } from './filter/filter.component';

/* The components.module.ts consists all the required components */

@NgModule({
    imports: [
        IonicModule
    ],
    declarations: [
        ToolbarComponent,
        FilterComponent
    ],
    exports: [
        ToolbarComponent,
        FilterComponent
    ]
})

export class ComponentsModule { }