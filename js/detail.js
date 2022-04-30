window.addEventListener('load',function(){
	var preview_img=document.querySelector('.preview_img');
	var mask=document.querySelector('.mask');
	var big=document.querySelector('.big');
	
	preview_img.addEventListener('mouseover',function(){
		mask.style.display='block';
		big.style.display='block';
	})
	preview_img.addEventListener('mouseout',function(){
		mask.style.display='none';
		big.style.display='none';
	})
	preview_img.addEventListener('mousemove',function(e){
		var x=e.pageX - this.offsetLeft;
		var y=e.pageY - this.offsetTop;
		// console.log(x,y)
		var maskx=x-mask.offsetWidth/2;
		var masky=y-mask.offsetHeight/2;
		if(maskx<=0){
			maskx=0;
		}else if(maskx>=preview_img.offsetWidth-mask.offsetWidth){
			maskx=preview_img.offsetWidth-mask.offsetWidth;
		}
		if(masky<=0){
			masky=0;
		}else if(masky>=preview_img.offsetHeight-mask.offsetHeight){
			masky=preview_img.offsetHeight-mask.offsetHeight;
		}
		mask.style.left=maskx+'px';
		mask.style.top=masky+'px';
		var maskMax=preview_img.offsetWidth-mask.offsetWidth
		var begimg=document.querySelector('.bigImg');
		 // 大图片最大移动距离
		var bigmax=begimg.offsetWidth-big.offsetWidth
		var bigx=maskx*bigmax/maskMax;
		var bigy=masky*bigmax/maskMax;
		begimg.style.left=-bigx+'px';
		begimg.style.top=-bigY+'px';
	})
	
})
