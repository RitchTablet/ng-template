// Rutas principales de la app
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "help",
    loadChildren: () => import("@modules/help/help.routes").then((m) => m.routes),
  },
];
