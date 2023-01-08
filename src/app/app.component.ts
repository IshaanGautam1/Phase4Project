import { Component } from '@angular/core';
import questions from './questions.json';
import answerdata from './answers.json';
interface question{
  id:number
  question:string;
  A: string;
  B:string;
  C:string;
  D:string
}
interface answerdata{
  ans:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phase4project';
  submitted=false;
  questions: question[] = questions;
  answerdata:answerdata[]=answerdata;
  score=0;
  length=0;
  correct:number[]=[];
  answers:string[]=[];
  constructor() { }

  ngOnInit(): void {
    this.length=this.questions.length;
    for(let i=0;i<this.length;i++){
      this.answers.push("No option Selected");
    }
  }
  setans(questioninp:question,option:string){
    let quenum = questioninp.id;
    let queans = option;
    this.answers[quenum-1]=queans;
  }
  onsubmit(){
    if(this.answers.includes("No option Selected")){
      alert("answer all the questions");
    }
    else{
      for(let i in answerdata){
        if(answerdata[i].ans === this.answers[i]){
          this.score+=1;
          this.correct.push(parseInt(i)+1);
        }
      }
      this.submitted=true;
    }
    
  }

}
