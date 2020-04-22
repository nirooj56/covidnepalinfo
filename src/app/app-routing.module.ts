import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "sources",
    loadChildren: () =>
      import("./sources/sources.module").then((m) => m.SourcesPageModule),
  },
  {
    path: 'general-faq',
    loadChildren: () => import('./general-faq/general-faq.module').then( m => m.GeneralFAQPageModule)
  },
  {
    path: 'myths',
    loadChildren: () => import('./myths/myths.module').then( m => m.MythsPageModule)
  },
  {
    path: 'symptoms',
    loadChildren: () => import('./symptoms/symptoms.module').then( m => m.SymptomsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
