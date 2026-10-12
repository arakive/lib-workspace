import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'rocket-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
  host: {
    class: 'border-gradient',
  },
})
export class RocketCard {}
