import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { listDetails} from './Interface/detailsInterface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Article-with-comments';
  
  details : listDetails[] =[
    { name : 'Pravesh', comments : 'In my academics, I learnt only theoretical concepts of programming but ProGrad emphasized my coding knowledge by teaching me a different approach in solving all the coding problems. My mentor offered me excellent support by guiding us on each step to improve my progress.' },
    { name : 'Subham', comments : 'I am from Electronics and Communication Engineering background. Before starting this course, I couldn’t compile a code properly. Now I can solve complex problems. I have good knowledge of all the programming languages I have learnt.'}
  ];
  name : string ='';
  comment : string = '';


  getValues(name:string, comment:string) {

    this.name = name;
    this.comment = comment;

    this.details.push({"name" : name, "comments" : comment});
    console.log("Success");

  }
  
}


