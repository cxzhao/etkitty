import { Component,OnInit} from '@angular/core';

import { ArticleService }  from '../service/article.service';
import { TagService }  from '../service/tag.service';
import { Page } from '../model/page';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { LoginModalComponent } from '../component/loginmodal.component';

@Component({
  moduleId: module.id,
  selector: 'article-list-app',
  templateUrl: `../html/article.html`
})
export  class ArticleComponent implements OnInit {

  articleList:any;
  tagList:any;
  tagPage:Page;
  pageList:any[];
  pageNumber:number;
  isLast:boolean;
  hotList:any;
  isLastHot:boolean;
  pageNumberHot:number;

  constructor(private articleServce:ArticleService,private tagService:TagService,private loginModal:LoginModalComponent){

  }

  ngOnInit():void{
    this.queryArticle(1,20,'','');
    this.queryTag(1,20);
    this.queryHot(1,10);
  }

  queryArticle(pageNumber:number,pageSize:number,keyword:string,tagId:string){
    this.articleServce.query(pageNumber,pageSize,keyword,tagId).then(res=>{
      if(res.code=='000000'){
          this.articleList=res.data.list;
          this.pageNumber=res.data.pageNumber;
          this.isLast=res.data.last;
          let size=this.pageNumber+4;
          var number = this.pageNumber;
          this.pageList = new Array();
  				for(var i=0;i<5;i++){
  					this.pageList[i]=number++;
  				}
      }
    }).catch();
  }

  queryTag(pageNumber:number,pageSize:number){
    this.tagService.getHotTag(0,pageNumber,pageSize).then(res=>{
      if(res.code=='000000'){
        this.tagList = res.data.list;
        this.tagPage = new Page();
        this.tagPage.last = res.data.last;
        this.tagPage.pageNumber = res.data.pageNumber;
        this.tagPage.pageSize = res.data.pageSize;
        this.tagPage.total = res.data.total;
      }
    }).catch();
  }

  queryHot(pageNumber:number,pageSize:number){
    this.articleServce.hot(pageNumber,pageSize).then(res=>{
      if(res.code='000000'){
        this.hotList=res.data.list;
        this.isLastHot=res.data.last;
        this.pageNumberHot = res.data.pageNumber;
      }
    }).catch();
  }

  prep(){
    var page = this.pageNumber;
		if(page==1){
			alert("已经是第一页了！");
		}else{
			page--;
			this.queryArticle(page,20,'','');
		}
  }

  currentPage(page:number){
    alert(page);
    this.queryArticle(page,20,'','');
  }

  next(){
    if(this.isLast==true){
    		alert("已经是最后一页了！");
    		return;
    }
    var page = this.pageNumber;
    page++;
    this.queryArticle(page,20,'','');
  }

  prepTag(){
    var page = this.tagPage.pageNumber;
    if(page==1){
    }else{
      page--;
      this.queryTag(page,20);
    }
  }

  lastTag(){
    if(this.tagPage.last==true){
      return;
    }
    var page = this.tagPage.pageNumber;
    page++;
    this.queryTag(page,20);
  }

  queryByTag(tagId:string){
    this.queryArticle(1,20,'',tagId);
  }

  nextHotArticle(){
    if(this.isLastHot==true){
      return;
    }
    this.queryHot(this.pageNumberHot+1,10);
  }

  write(){
    let status=Cookie.get('status');
    if(status=='true'){

    }else{
      this.loginModal.open();
    }
  }

}
