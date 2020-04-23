import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { GeneralFAQPageRoutingModule } from "./general-faq-routing.module";
import { GeneralFAQPage } from "./general-faq.page";
import { SharedModule } from "../shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralFAQPageRoutingModule,
    SharedModule,
  ],
  declarations: [GeneralFAQPage],
})
export class GeneralFAQPageModule {}
