import { Component,OnInit,OnChanges,Input,SimpleChanges} from '@angular/core';

import { NewsService }  from '../service/news.service';
import { TagService }  from '../service/tag.service';

import { NewsInfo } from '../model/newsinfo';
import { Page } from '../model/page';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'info-app',
  templateUrl:'../html/newslist.html'
})
export class InformationComponent implements OnInit,OnChanges{

	newsArray : NewsInfo [];
	page:Page;
	pageList : any[];
  tagList : any[];
	constructor(private newsService:NewsService,private tagService:TagService){}

	ngOnChanges(changes:SimpleChanges):void{
		 console.log('ngOnChanges');
	}

	ngOnInit():void{
		this.getNews(0,1,20);
    this.getHotTag(1,1,20);
		var isEnd = 1+'';
	}

  private getHotTag(type:number,pageNumber:number,pageSize:number){
    this.tagService.getHotTag(type,pageNumber,pageSize).then(res=>{
      if('000000'==res.code){
        this.tagList = res.data.list;
      }
    });
  }

  private getNews(type:number,pageNumber:number,pageSize:number){
    this.newsService.getNews(type,pageNumber,pageSize).then(res=>{
      if('000000'==res.code){
        var data = res.data.list;
        if(data!=null){
          this.newsArray = new Array();
          for(let i=0;i<data.length;i++){
            var news = new NewsInfo();
            news.id = data[i].id;
            news.title = data[i].title;
            news.image = data[i].newsImage;
            news.time = data[i].createTime;
            news.source = data[i].source;
            news.introduction = data[i].introduction;
            news.readCount = data[i].readCount;
            this.newsArray[i]=news;
          }

          var number =res.data.pageNumber;
          this.pageList = new Array();
  				for(var i=0;i<5;i++){
  					this.pageList[i]=number++;
            console.log('--------------'+number+'-----------');
  				}

        }
      }
    });
  }
}
