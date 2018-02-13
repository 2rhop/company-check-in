import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ListComponent } from "./complements/pr-list/pr-list.component";

//--
const complements = [
    ListComponent
]
//--
@NgModule({
    imports: [RouterModule, FormsModule,CommonModule],
    exports: [...complements],
    declarations: [...complements],
    providers: []
})

export class SharedModule { }