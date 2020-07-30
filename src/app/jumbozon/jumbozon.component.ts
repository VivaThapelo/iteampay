import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbozon',
  templateUrl: './jumbozon.component.html',
  styleUrls: ['./jumbozon.component.css']
})
export class JumbozonComponent implements OnInit {
  coverImage = 'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80';
  videoPath = 'https://www.youtube.com/watch?v=o7_qowewl2w&list=PL8p2I9GklV45JZerGMvw5JVxPSxCg8VPv&index=18';
  constructor() { }

  ngOnInit(): void {
  }

}
