import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../home/home.module").then((m) => m.HomePageModule),
          },
        ],
      },
      {
        path: "world",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../world/world.module").then((m) => m.WorldPageModule),
          },
        ],
      },
      {
        path: "information",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../information/information.module").then(
                (m) => m.InformationPageModule
              ),
          },
        ],
      },
      {
        path: "options",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../options/options.module").then(
                (m) => m.OptionsPageModule
              ),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
