import { Component,OnInit,OnChanges,Input,SimpleChanges} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService }  from '../service/news.service';
import { TagService }  from '../service/tag.service';

import { NewsInfo } from '../model/newsinfo';
import { Page } from '../model/page';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'news-app',
  templateUrl:'../html/newslist.html'
})
export class NewsComponent implements OnInit,OnChanges{

	newsArray : NewsInfo [];
	page:Page;
  tagPage:Page;
	pageList : any[];
  tagList : any[];
  keyword:string;
  tagId:string;
  type:number;

	constructor(private newsService:NewsService,private tagService:TagService,private route: ActivatedRoute,private router: Router){}

	ngOnChanges(changes:SimpleChanges):void{
		 console.log('ngOnChanges');
	}

	ngOnInit():void{
    let type = this.route.snapshot.params['type'];
    this.type=type;
    if(type=='0'){
        this.getNews(0,1,20,'','');
        this.getHotTag(0,1,20);
    }else if(type=='1'){
      this.getNews(1,1,20,'','');
      this.getHotTag(1,1,20);
    }else{
      this.getNews(1,1,20,'','');
      this.getHotTag(1,1,20);
    }

		var isEnd = 1+'';
	}

  private getHotTag(type:number,pageNumber:number,pageSize:number){
    this.tagService.getHotTag(type,pageNumber,pageSize).then(res=>{
      if('000000'==res.code){
        this.tagList = res.data.list;
        this.tagPage = new Page();
        this.tagPage.last = res.data.last;
        this.tagPage.pageNumber = res.data.pageNumber;
        this.tagPage.pageSize = res.data.pageSize;
        this.tagPage.total = res.data.total;
      }
    });
  }

  private getNews(type:number,pageNumber:number,pageSize:number,keyword:string,tagId:string){
    this.keyword=keyword;
    this.tagId=tagId;
    this.newsService.getNews(type,pageNumber,pageSize,keyword,tagId).then(res=>{
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

          this.page = new Page();
  				this.page.last = res.data.last;
  				this.page.pageNumber = res.data.pageNumber;
  				this.page.pageSize = res.data.pageSize;
  				this.page.total = res.data.total;

          var number =res.data.pageNumber;
          this.pageList = new Array();
  				for(var i=0;i<5;i++){
  					this.pageList[i]=number++;
  				}

        }
      }
    });
  }


  prep():void{
   var page = this.page.pageNumber;
   if(page==1){
     alert("已经是第一页了！");
   }else{
     page--;
     this.getNews(this.type,page,20,this.keyword,this.tagId);
   }
 }

 pageSearch(page:number):void{
   this.getNews(this.type,page,20,this.keyword,this.tagId);
 }

 last():void{
   if(this.page.last==true){
     alert("已经是最后一页了！");
     return;
   }
   var page = this.page.pageNumber;
   page++;
   this.getNews(this.type,page,20,this.keyword,this.tagId);
 }

 prepTag(){
   var page = this.tagPage.pageNumber;
   if(page==1){
   }else{
     page--;
     this.getHotTag(this.type,page,20);
   }
 }

 lastTag(){
   if(this.tagPage.last==true){
     return;
   }
   var page = this.tagPage.pageNumber;
   page++;
   this.getHotTag(this.type,page,20);
 }

 queryByTag(tagId:string){
   this.getNews(this.type,1,20,this.keyword,tagId);
 }
}
