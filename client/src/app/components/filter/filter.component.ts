import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})

// Early stage, much to be implemented
export class FilterComponent implements OnInit {
  @Input() title: string;
  @Input() list: any;
  @Output() filterList = new EventEmitter<any>();

  public searchbarOpen = false;
  public backupList;

  resetList(){
    this.list = this.backupList;
  }

  filter(evt){
    this.resetList();

    let searchTerm = evt.srcElement.value;

    if(!searchTerm){
      this.filterList.emit(this.list);
    }

    let filteredList = this.list.filter(item => {
      if(item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
        return true;
      }
      return false;
    });

    this.filterList.emit(filteredList);
  }

  constructor() { }

  ngOnInit() {
    this.backupList = this.list;
  }
}
