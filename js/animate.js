	function animate(obj, target,callback) {
			    var timer = setInterval(function() {
				// var step= Math.ceil((target-div.offsetLeft)/10)
				var step= (target-obj.offsetLeft)/10
				step=step>0? Math.ceil(step) :Math.floor(step);
			        if (obj.offsetLeft == target) {
			            // 停止动画 本质是停止定时器
			            clearInterval(timer);
						if(callback){
							callback();
						}
			        }
			        obj.style.left = obj.offsetLeft +step+ 'px';
			
			    }, 15);
			}