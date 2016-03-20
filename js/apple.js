//js原生
/*document.addEventListener('readystatechange',function(){
	if(document.readyState === 'complete'){
		var slides = document.querySelectorAll('.slide');
		var btns = document.querySelectorAll('li');
		var WW = document.documentElement.clientWidth;
		window.onresize=function(){
			WW = document.documentElement.clientWidth;
			for(var i = 0;i<slides.length;i++){
				slides[i].style.left = i*WW+'px';
			}
		}
		window.onresize();

		var move=(function(){
			var num = 1;
			return function(){
				var off = -num*WW;
				console.log(btns[num]);
				for(var i = 0;i<slides.length;i++){
					slides[i].style.transform='translateX('+off+'px)'
					btns[i].style.background='rgba(0,0,0,0.3)';
				}
				btns[num].style.background='rgba(255,255,255,0.8)';
				num++;
				if(num === 3){
					num = 0;
				}
			}
		})();
		var t = setInterval(move,2000);

		for(var i = 0;i<btns.length;i++){
			btns[i].index = i;
			btns[i].onclick = function(){
				var off = -this.index*WW;
				clearInterval(t);
				for(var j = 0;j<btns.length;j++){
					btns[j].style.background='rgba(0,0,0,0.3)';
				}
				this.style.background = 'rgba(255,255,255,0.8)';
				for(var k = 0;k<slides.length;k++){
					slides[k].style.transform='translateX('+off+'px)'
				}
			}
		}
	}
})*/
$(function(){
	var WW=$(window).width();
	$('.ban').css({'left':function(i){
		return i*WW;
	}})
	$(window).resize(function(){
		WW=$(window).width();
		$('.ban').css({'left':function(i){
			return i*WW;
		}})
	})
	move = (function(){
		var num = 1;
		return function(){
			$('.btnbox li').removeClass('btn');
			$('.btnbox li').eq(num).addClass('btn');
			var off = -num*WW;
			$('.ban').css({'transform':'translateX('+off+'px)'});
			num+=1;
			if(num === 3){
				num =  0;
			}
		}
	})();

	var t = setInterval(move,2000);
	//闭包 函数在定义时会记录下可见区域内的变量
	//     从近到远形成链，成为作用域链
	//     函数在调用时，整个链上的变量都是可见状态
	//     链的近端会覆盖远端变量
	//常见用法： 消除全局变量
	//           传递临时状态
	$('.btnbox li').each(function(i){
		$(this).data('a',i);
	})
	$('.btnbox li').click(function(){
		clearInterval(t);
		$('.btnbox li').removeClass('btn');
		$(this).addClass('btn');
		var off=-$(this).data('a')*WW;
		$('.ban').css({'transform':'translateX('+off+'px)'});
	})
})