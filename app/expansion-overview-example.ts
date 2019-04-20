import {Component} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
  hdrSelection = "notyet";

  selectedIndex = 0;
  selectedIndexChange(e) {
    this.selectedIndex = e;
  }
  selectedTabChanged(e) {
    console.log("selectedTabChanged",e);
  }

  onTabClick(e:Event) {
    console.log("onTabClick",e);
    if (this.panelOpenState) e.stopPropagation();
  }

  setSelection(e:Event, v:string){
    this.hdrSelection = v;
    if (this.panelOpenState)
      e.stopPropagation();
    //doesn't work to stop expansion toggle: return false;
  }
}



/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */