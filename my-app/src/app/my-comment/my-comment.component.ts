import { Component, OnInit, Input } from '@angular/core';

export class Comments {
  id: number;
  text: string;
  mark: number;
}
const COMMENTS: Comments[] = [
	{ id: 1, text : 'text 1', mark : 1000 },
	{ id: 2, text : 'text 2', mark : 0 },
	{ id: 3, text : 'text 3', mark : 5 },
	{ id: 4, text : 'text 4', mark : 3 },
	{ id: 5, text : 'text 5', mark : 4 },
	{ id: 6, text : 'text 6', mark : null },
	{ id: 7, text : 'text 7', mark : 5 },
	{ id: 8, text : 'text 8', mark : 2 },
	{ id: 9, text : 'text 9', mark : 1 },
	{ id: 10, text : 'text 10', mark : 4 },
];

@Component({
  selector: 'app-my-comment',
  templateUrl: './my-comment.component.html',
  styleUrls: ['./my-comment.component.css']
})
export class MyCommentComponent implements OnInit {
  comments = COMMENTS;

  // visible: boolean = true;

  // hide() {
  //   this.visible = false;
  // }

  @Input()
    row: number = 0;

  constructor() { }

  ngOnInit() {

  }

}
