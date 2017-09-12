import { Component, OnInit } from '@angular/core';

import { HackerNewsService } from './hacker-news.service';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit {

  news = {};
  constructor(private HackerNewsService: HackerNewsService) {
    this.HackerNewsService.getNews().subscribe(data => this.news = data);
  }

  ngOnInit() {
  }

}
