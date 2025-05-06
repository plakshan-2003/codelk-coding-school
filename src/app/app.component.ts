import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
    }
  }
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
