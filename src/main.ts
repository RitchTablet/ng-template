import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { App } from "./app/app";

bootstrapApplication(App, appConfig).catch((err) => {
  // eslint-disable-next-line no-console -- Permitir logs solo para errores de bootstrap
  console.error(err);
});
