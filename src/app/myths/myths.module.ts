import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MythsPageRoutingModule } from "./myths-routing.module";
import { MythsPage } from "./myths.page";
import { AccordionComponent } from "../components/accordion/accordion.component";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MythsPageRoutingModule],
  declarations: [MythsPage, AccordionComponent],
})
export class MythsPageModule {}
