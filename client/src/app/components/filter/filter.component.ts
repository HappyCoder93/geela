import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

// Early stage, much to be implemented
export class FilterComponent implements OnInit {
  @Input() title: string;
  @Input() options: boolean; // Display options item?
  @Input() optionsParameter: any; // Which paramter of the list is the option about?
  @Input() list: any;
  @Output() filterList = new EventEmitter<any>();

  public searchbarOpen = false;
  public optionsOpen = false;

  toggleOptions() {
    this.optionsOpen = !this.optionsOpen;
    if(this.searchbarOpen) {
      this.searchbarOpen = false;
    }
  }

  filter(event){
    // Stub function
    console.log(event.taget.value);
    this.list += 10;
    this.filterList.emit(this.list);
  }

  constructor() { }

  ngOnInit() {}

}
