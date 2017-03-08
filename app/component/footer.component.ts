import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'footer-app',
  styles:[`
      .spacework{
        margin-left:20px;
      }
  `],
  template:`
  <div class="footer">
		<div class="col-xs-12 col-sm-12 col-md-12">
			<div class="col-xs-12 col-sm-12 col-md-12"><h5 style="text-align: center" class="span-footer">@ETkitty.com</h5>
				
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 span-footer">
				<span class="span-footer"><span class="spacework"></span><span class="spacework"></span><a
					href="work.html">合作</a><span class="spacework"></span><a
					href="about.html">关于我们</a><span class="spacework"></span><a
					href="contact.html">联系我们</a><span class="spacework"></span>黔ICP备14005169号-2
				</span>
			</div>
		</div>
	</div>
  `
})

export  class FooterComponent{
   
}
