import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content: any = {
    // original json
    Info: {
      // data to be displayed in masonry layout
      Head1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
      Head2: ['J', 'K', 'L'],
      Head3: ['M', 'N', 'O'],
      Head4: ['P', 'Q', 'R', 'S', 'T']
    }
  };
  leftList: string[] = [];
  rightList: string[] = [];

  ngOnInit() {
    // here we can get json "content" from another file
    this.setSides(); // has to be done after json is retrieved and before page load
  }

  setSides() {
    var keys = Object.keys(this.content.Info); // to get array of json objects and access using keys stored in this variable
    let subtotal = 0; // if greater than 0 then rightList is bigger else leftList is bigger
    for (let index = 0; index < keys.length; index++) {
      var obj = this.content.Info[keys[index]]; // when we don't know keys to access we use Object.keys
      var tLen = obj.length; // size of array to be put in card
      if (subtotal > 0) {
        // right side heavy so add to leftside div
        subtotal = subtotal - (tLen * 20 + (tLen + 1) * 8 + 80); // approx size of HTML card is calculated
        this.rightList.push(keys[index]);
      } else {
        // left side heavy so add to rightside div
        subtotal = subtotal + (tLen * 20 + (tLen + 1) * 8 + 80);
        this.leftList.push(keys[index]);
      }
    }
  }
}
