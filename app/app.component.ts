import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<h1>
                Lunch 'N Learn
            </h1>
            <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent implements OnInit {

  ngOnInit() : void {
    console.log('initialized');
  }
}