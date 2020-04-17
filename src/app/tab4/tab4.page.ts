import { Component } from "@angular/core";
import { ToastController, NavController } from "@ionic/angular";

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"],
})
export class Tab4Page {
  constructor(
    public toastController: ToastController,
    public navCtrl: NavController
  ) {}
  async presentToast() {
    const toast = await this.toastController.create({
      message: "Checking for data updates.",
      duration: 1500,
      color: "dark",
    });
    toast.present();
  }

  close(url: string) {
    window.open(url, "_blank");
  }
  navigate() {
    this.navCtrl.navigateForward("/sources");
  }
}
