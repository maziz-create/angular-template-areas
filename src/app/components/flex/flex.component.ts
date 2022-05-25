import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css'],
})
export class FlexComponent implements OnInit {
  @Input() changePage!: () => void;

  constructor() {}

  ngOnInit(): void {}
}
