import { Component, OnInit } from '@angular/core';
import { DisplayName } from 'src/app/models/DisplayName';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  displayName: DisplayName;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.displayName = this.stateService.getDisplayName();
  }

}
