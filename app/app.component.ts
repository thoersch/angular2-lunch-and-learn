import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>
                Lunch 'N Learn
            </h1>
            <p> I got my {{ getFoodOfChoice() }} so let's roll.</p>`
})
export class AppComponent { 
  foodOfChoice: string = 'beans';

  constructor() {
    this.foodOfChoice = 'sushi';
  }

  getFoodOfChoice() {
    return this.foodOfChoice;
  }
}