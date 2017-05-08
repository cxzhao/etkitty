import { Component,OnInit} from '@angular/core';

import { ArticleService }  from '../service/article.service';
import { TagService }  from '../service/tag.service';
import { Page } from '../model/page';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { LoginModalComponent } from '../component/loginmodal.component';

declare var wangEditor:any;

@Component({
  moduleId: module.id,
  selector: 'edit-article-app',
  templateUrl: `../html/edit_article.html`
})
export  class EditArticleComponent implements OnInit {



  constructor(private articleServce:ArticleService,private loginModal:LoginModalComponent){

  }

  ngOnInit():void{
    var editor = new wangEditor('#comment-text');
    editor.create();
  }



  write(){
    let status=Cookie.get('status');
    if(status=='true'){

    }else{
      this.loginModal.open();
    }
  }

}
