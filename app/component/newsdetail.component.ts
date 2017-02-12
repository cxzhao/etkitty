import { Component,OnInit,OnChanges,Input,SimpleChanges} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService }  from '../service/news.service';

import { Page } from '../model/page';

import 'rxjs/add/operator/switchMap';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'news-detail-app',
  templateUrl:'../html/news_detail.html'
})
export class NewsDetailComponent implements OnInit{

	//newsArray : NewsInfo [];
	page:Page;
	pageList : any[];
  keyword:string;
  tagId:string;
  newsId:string;

	constructor(private newsService:NewsService,private route: ActivatedRoute,private router: Router){

  }


	ngOnInit():void{
    this.newsId='1234567890';
	}

  private getNewsDetail(newsId:string){

  }


}
