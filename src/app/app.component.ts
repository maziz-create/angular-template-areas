import { Component } from '@angular/core';
import { PageType } from './models/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  page: PageType = PageType.Flex;

  pageTypeChange() {
    if (this.page === PageType.Flex) this.page = PageType.Grid;
    else this.page = PageType.Flex;
  }
}
