
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
    ],
    providers: [],
})
export class MaterialDesignModule {
}
