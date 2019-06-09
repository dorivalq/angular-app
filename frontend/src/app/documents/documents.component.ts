import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  news: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    this.newsService.getData('top-headlines?country=us')
    .subscribe(data =>{
      this.news = data;
    })
  }

}
