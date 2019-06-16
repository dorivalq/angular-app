import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html'
})
export class HeadlinesComponent implements OnInit {

  news: any;
  categories = [
    'Sports',
    'Politics',
    'Entertainment'
  ]
  ;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  onGetCategoryData(category){
    console.log('Category: ' + category);
    this.getCategoryData(category);
  }

  getCategoryData(category){
    this.newsService.getData (`top-headlines?country=br&category=${category.toLowerCase()}`)//(`everthing?q=bitcoin`)
    .subscribe(data => {
      console.log(data);
      this.news = data;
    });
  }

  // getData(){
  //   this.newsService.getData('top-headlines?country=us')
  //   .subscribe(data =>{
  //     this.news = data;
  //   })
  // }
}
