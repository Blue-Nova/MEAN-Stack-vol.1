import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { withFetch } from '@angular/common/http'; // Import the 'withFetch' function

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration()]
};
