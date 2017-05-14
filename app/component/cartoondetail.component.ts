import { Component,OnInit,OnChanges,Input} from '@angular/core';
import { LoginModalComponent } from '../component/loginmodal.component';
import { CartoonService }  from '../service/cartoon.service';
import { CommentService }  from '../service/comment.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Page } from '../model/page';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'cartoon-detail-app',
  templateUrl:`../html/cartoondetail.html`
})
export class CartoonDetailComponent implements OnInit{

  id:string;
  @Input()
  cartoon:any;
  role:string;
  akira:string;
  director:string;
  isShowDirector:boolean;
  isShowAuthor:boolean;
  isEnd:string;
  score:number;
  constructor(private loginModal:LoginModalComponent,private cartoonService:CartoonService,private route: ActivatedRoute,private router: Router){

  }

  ngOnInit():void{
    let id = this.route.snapshot.params['id'];
    this.id=id;
    this.queryCartoonDetail(id);

  }

  queryCartoonDetail(id:string){
    this.cartoonService.queryCartoonDetail(id).then(res=>{
      if(res.code=='000000'){
        this.cartoon = res.data;
        this.score=res.data.score;
        console.log(this.cartoon.name);
        if(this.cartoon.isEnd!=null){
            if(this.cartoon.isEnd==0){
              this.isEnd="连载中";
            }else{
              this.isEnd="完结";
            }
        }else{
            this.isEnd="连载中";
        }
        this.role='';
        this.akira='';
        this.director='';
          for(let i=0;i<res.data.roleList.length;i++){
            if(i==0){
              this.role+=res.data.roleList[i].roleName;
            }else{
              this.role+="，"+res.data.roleList[i].roleName;
            }
          }

          for(let i=0;i<res.data.akiraList.length;i++){
            if(i==0){
              this.akira+=res.data.akiraList[i].akiraName;
            }else{
              this.akira+="，"+res.data.akiraList[i].akiraName;
            }
          }

          for(let i=0;i<res.data.directorList.length;i++){
            if(i==0){
              this.director+=res.data.directorList[i].directorName;
            }else{
              this.director+="，"+res.data.directorList[i].directorName;
            }
          }
          if(this.director=='' || this.director=='null'){
            this.isShowDirector=false;
          }else{
            this.isShowDirector=true;
          }
          if(res.data.author=='' || res.data.author=='null'){
            this.isShowAuthor=true;
          }else{
            this.isShowAuthor=true;
          }
      }

    }).catch();
  }

}
