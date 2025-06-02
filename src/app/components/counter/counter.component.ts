import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  increment() {
    this.counter.update((val) => val + 1)
  }
  
  decrement() {
    this.counter.update((val) => val - 1)
  }

  reset() {
    this.counter.set(0)
  }

  counter = signal(0);
}
