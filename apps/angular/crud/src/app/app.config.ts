import { ApplicationConfig } from '@angular/core';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(HttpClientModule)],
};
