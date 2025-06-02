import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BackdropComponent],
  template: `
    <app-header />
    <main>
      <app-backdrop />
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        position: relative; /* Needed for absolute positioning of the pseudo-element within */
        overflow-x: hidden; /* Prevent potential horizontal scrollbar */
      }

      :host::before {
        content: '';
        position: fixed; /* Fixed to the viewport */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, white 100%),
          url('./home/images/background.jpg');
        background-size: cover;
        background-position: center;
        z-index: -1; /* Place it behind the content */
      }

      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative; /* Ensure main content is above the background */
        z-index: 1;
      }
    `,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
