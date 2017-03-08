import { Component,OnInit,OnChanges,Input,SimpleChanges} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsService }  from '../service/news.service';
import { CommentService }  from '../service/comment.service';
import { Page } from '../model/page';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { LoginModalComponent } from '../component/loginmodal.component';

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
  commentList:any[];
  keyword:string;
  tagId:string;
  newsId:string;
  news:{};
  pageNumber:number;
  objUserId:string;
  userId:string;
  objId:string;

  isLast:boolean;

  @Input()
  comment:string;

  @Input()
  replyContext:string;

	constructor(private newsService:NewsService,private commentService:CommentService,private route: ActivatedRoute,private router: Router,private loginModal:LoginModalComponent){

  }


	ngOnInit():void{
    //this.newsId='1234567890';
    let id = this.route.snapshot.params['id'];
    this.newsId = id;
    this.userId=Cookie.get('id');
    this.getNewsDetail(id);
    this.getComment(1,20,id,0);
	}

  private getNewsDetail(newsId:string){
    this.newsService.getDetail(newsId).then(res=>{
      if(res.code=='000000'){
        this.news=res.data;
      }
    }).catch();
  }

  private getComment(page:number,size:number,objId:string,type:number){
    this.pageNumber=page;
    this.commentService.getComment(page,size,objId,type).then(res=>{
      if(res.code=='000000'){
        this.commentList=res.data.list;
        this.isLast= res.data.last;
      }
    }).catch();
  }

  saveComment(){
    let status=Cookie.get('status');
    console.log(this.comment);
    if(status=='true'){
      this.commentService.saveComment(this.newsId,this.comment,'2').then(res=>{
        if(res.code=='000000'){
          console.log('评论成功');
          this.getComment(1,20,this.newsId,0);
        }else{
          console.log('评论失败');
        }
      }).catch();
    }else{
      this.loginModal.open();
    }
  }

  reply(){
    let status=Cookie.get('status');
    if(status=='true'){
      this.commentService.reply(this.objId,this.replyContext,2,this.objUserId).then(res=>{
        if(res.code!='000000'){
          alert("评论失败");
        }else{
          this.getComment(1,20,this.newsId,0);
        }
      }).catch();
    }else{
      this.loginModal.open();
    }
  }

  love(newsComment : any){
    console.log(newsComment.id);

    this.commentService.love(newsComment.id).then(res=>{
      if(res.code=='000000'){
        newsComment.agree++;
      }
    }).catch();
  }

  /*控制评论框是否显示*/
  showReply(comment:any){
    this.objUserId = comment.userId;
    this.objId = comment.id;
    if(comment.isShow==undefined){
      comment.isShow=true;
    }else{
      if(comment.isShow==true){
        comment.isShow=false;
      }else{
        comment.isShow=true;
      }
    }
  }

  childReplyShow(comment:any,reply:any){
    this.objUserId = reply.userId;
    this.objId = comment.id;
    if(comment.isShow==undefined){
      comment.isShow=true;
    }else{
      if(comment.isShow==true){
        comment.isShow=false;
      }else{
        comment.isShow=true;
      }
    }
  }

  prep(){
    if(this.pageNumber==1){
      return;
    }
    this.getComment(this.pageNumber-1,20,this.newsId,0);
  }

  next(){
    if(this.isLast==true){
      alert("已经是最后的评论了");
    }else{
      this.getComment(this.pageNumber+1,20,this.newsId,0);
    }
  }

  deleteComment(id:string,objectId:string,type:number){
      this.commentService.deleteComment(id,objectId,type).then(res=>{
        if(res.code!='000000'){
          alert(res.message);
        }else{
          this.getComment(this.pageNumber,20,this.newsId,0);
        }
      }).catch();
  }



}
