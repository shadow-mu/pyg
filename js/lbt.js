window.addEventListener('load', function() {
	var arrowl = document.querySelector('.arrow-l')
	var arrowr = document.querySelector('.arrow-r')
	var focus = document.querySelector('.focus');
	var focusw = focus.offsetWidth;
	focus.addEventListener('mouseenter', function() {
		arrowl.style.display = 'block';
		arrowr.style.display = 'block';
		clearInterval(timer);
		timer=null;
		//清除定时器变量
	})
	focus.addEventListener('mouseleave', function() {
		arrowl.style.display = 'none';
		arrowr.style.display = 'none';
		timer =setInterval(function(){
			// 手动调用点击事件
			arrowr.click()
			
		},2000)
	})
	// 动态生成小圆点
	var ul = focus.querySelector('ul');
	var circle = focus.querySelector('.circle');

	for (var i = 0; i < ul.children.length; i++) {
		var li = document.createElement('li');
		circle.appendChild(li)
		li.setAttribute('index', i);
		li.addEventListener('click', function() {
			for (var i = 0; i < circle.children.length; i++) {
				circle.children[i].className = ''
			}
			this.className = 'current'
			var index = this.getAttribute('index');
			num = index;
			circlel = index;
			var focusw = focus.offsetWidth;
			animate(ul, -(index * focusw))
		})
	}
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	circle.children[0].className = 'current';
	var num = 0;
	var circlel = 0;
	// 节流阀
	var flag=true;
	arrowr.addEventListener('click', function() {
		if(flag){
			flag=false;
			//关闭节流阀
			if (num == ul.children.length - 1) {
				ul.style.left = 0;
				num = 0;
			}
			num++;
			animate(ul, -focusw * num,function(){
				flag=true;
				// 打开节流阀
			});
			circlel++;
			if (circlel == circle.children.length) {
				circlel = 0;
			}
			circlechange();
		}
	})

	arrowl.addEventListener('click', function() {
		if(flag){
			if (num == 0) {
				flag=false;
				//关闭节流阀
				num = ul.children.length - 1;
				ul.style.left = (-num) * focusw + 'px';
			}
			num--;
			animate(ul, -focusw * num,function(){
				flag=true;
			});
			circlel--;
			// if(circlel<0){
			// 	circlel=circle.children.length-1;
			// }
			circlel = circlel < 0 ? circlel = circle.children.length - 1 : circlel;
			circlechange();
		}
	})

	function circlechange() {
		for (var i = 0; i < circle.children.length; i++) {
			circle.children[i].className = ''
		}
		circle.children[circlel].className = 'current';
	}
	// 自动播放
	var timer =setInterval(function(){
		// 手动调用点击事件
		arrowr.click()
		
	},3000)
})
