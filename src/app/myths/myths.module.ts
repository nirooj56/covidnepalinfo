import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MythsPageRoutingModule } from "./myths-routing.module";
import { MythsPage } from "./myths.page";
import { SharedModule } from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MythsPageRoutingModule,
    SharedModule,
  ],
  declarations: [MythsPage],
})
export class MythsPageModule {}
