import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-information",
  templateUrl: "information.page.html",
  styleUrls: ["information.page.scss"],
})
export class InformationPage {
  constructor(public navCtrl: NavController) {}

  myths() {
    this.navCtrl.navigateForward("/myths");
  }
  navigate() {
    this.navCtrl.navigateForward("/general-faq");
  }
  symptoms() {
    this.navCtrl.navigateForward("/symptoms");
  }
}
