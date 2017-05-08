import { Component,OnInit,OnChanges,Input,SimpleChanges} from '@angular/core';

import { NewsService }  from '../service/news.service';
import { CartoonService }  from '../service/cartoon.service';
import { TypeService }  from '../service/type.service';
import { UserService } from '../service/user.service';

import { NewsInfo } from '../model/newsinfo';
import { Page } from '../model/page';
import { CartoonSearch } from '../model/CartoonSearch';

import { LoginModalComponent } from '../component/loginmodal.component';
import { CommentModalComponent } from '../component/commentmodal.component';

declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'rank-app',
  templateUrl:'../html/rank.html',
  providers: [ CartoonService,TypeService,LoginModalComponent,CommentModalComponent]
})

export class RankComponent implements OnInit,OnChanges{

	@Input()
	cartoonArray:any;
	typeArray :any;
	newsArray : NewsInfo [];
	infoArray : NewsInfo [];
	page:Page;
	pageList:any[];
	cartoon:CartoonSearch;

	constructor(private loginModal:LoginModalComponent,private commentmodal:CommentModalComponent,private newsService:NewsService,private cartoonService:CartoonService,private typeService:TypeService){}

	ngOnChanges(changes:SimpleChanges):void{
		 console.log('ngOnChanges');
	}



	ngOnInit():void{
		this.getNews();
		var isEnd = 1+'';
		this.getCartoon('','',1,20,isEnd,'japan');
		this.getType();
		console.log('ngOnInit');
	}


	getType(){
	 this.typeService.getType().then(res=>{
		 if(res.code=='000000'){
			 this.typeArray = res.data;
		 }
	 });
	}

	getCartoon(type:string,keyword:string,pageNumber:number,pageSize:number,isEnd:string,area:string){
		this.cartoon = new CartoonSearch();
		this.cartoon.type = type;
		this.cartoon.keyword = keyword;
		this.cartoon.isEnd  = isEnd;
		this.cartoon.area = area;

		this.cartoonService.getCartoon(type,keyword,pageNumber,pageSize,isEnd,area).then(res=>{
			if(res.code=='000000'){
				this.cartoonArray=res.data.list;
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
		});
	}

	getCartoonByType(type:string){
		var area = '';
		var isEnd = '';

		jQuery('input:checkbox[name=area]:checked').each(function(i){
	        if(0==i){
	        	area = jQuery(this).val();
	        }else{
	        	area += (","+jQuery(this).val());
	        }
	    });

		jQuery('input:checkbox[name=isEnd]:checked').each(function(i){
	        if(0==i){
	        	isEnd = jQuery(this).val();
	        }else{
	        	isEnd += (","+jQuery(this).val());
	        }
	    });

		if(type=='0'){
			this.getCartoon('','',1,20,isEnd,area);
		}else{
			this.getCartoon(type,'',1,20,isEnd,area);
		}


	}

    getNews(){
    	this.newsService.getNews(1,1,5,'','').then(res=>{
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
    					this.newsArray[i]=news;
        			}
    			}
    		}
    	});

    	this.newsService.getNews(0,1,5,'','').then(res=>{
    		if('000000'==res.code){
    			var data = res.data.list;
    			if(data!=null){
    				this.infoArray = new Array();
    				for(let i=0;i<data.length;i++){
    					var news = new NewsInfo();
    					news.id = data[i].id;
    					news.title = data[i].title;
    					news.image = data[i].newsImage;
    					news.time = data[i].createTime;
    					this.infoArray[i]=news;
        			}
    			}
    		}
    	});
    }

    masonry(){
    	var $container = jQuery('.result');
		$container.imagesLoaded(function() {
			 $container.masonry({
					columnWidth : '.result-item',
					itemSelector : '.result-item',
					isAnimated: true
			});
		});
    }

    reloadmasonry(){
    	var $container = jQuery('.result');
		$container.imagesLoaded(function() {
			$container.masonry('destroy');
			$container.masonry();
		});
    }

   prep():void{
		var page = this.page.pageNumber;
		if(page==1){
			alert("已经是第一页了！");
		}else{
			page--;
			this.getCartoon(this.cartoon.type,this.cartoon.type,page,20,this.cartoon.isEnd,this.cartoon.area);
		}
	}

	pageSearch(page:number):void{
		this.getCartoon(this.cartoon.type,this.cartoon.type,page,20,this.cartoon.isEnd,this.cartoon.area);
	}

	last():void{
		if(this.page.last==true){
			alert("已经是最后一页了！");
			return;
		}
		var page = this.page.pageNumber;
		page++;
		this.getCartoon(this.cartoon.type,this.cartoon.type,page,20,this.cartoon.isEnd,this.cartoon.area);
	}

	comment(id:string):void{
    this.loginModal.open();
    //this.commentmodal.open();
	}
}
