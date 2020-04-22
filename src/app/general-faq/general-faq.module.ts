import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { GeneralFAQPageRoutingModule } from "./general-faq-routing.module";
import { GeneralFAQPage } from "./general-faq.page";
import { AccordionComponent } from "../components/accordion/accordion.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralFAQPageRoutingModule,
  ],
  declarations: [GeneralFAQPage, AccordionComponent],
})
export class GeneralFAQPageModule {}
