import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isGameStarted: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.isGameStarted = true;
  }

}
