import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  displayNameInput: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private stateService: StateService) { }

  ngOnInit(): void {
    this.displayNameInput = this.formBuilder.group({
      displayName: ''
    });
  }

  get isGameStartable() {
    if (this.displayNameInput.value.displayName.length > 0) {
      return true;
    }
  }

  onStartGame() {
    const displayName = this.displayNameInput.value.displayName;
    this.stateService.setDisplayName(displayName);
  }

}
