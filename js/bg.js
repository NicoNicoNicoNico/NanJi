	var bginBox = document.getElementById( 'bgin' );
	var bigbgBox = document.getElementById( 'bigbg' );
	var pBox = bginBox.getElementsByTagName( 'p' );
	var lineBox = document.getElementById( 'line' );
	// alert( pBox.length );
	var i = 0;
	// var num2 = 0;
	var num3 = 10;
	var num4 = 1;
	var timer2 = null;
	var timer3 = null;
	var timer4 = null;
	var timer5 = null;



	//设定显示文字函数
	function interruptP () {
		clearInterval( timer3 );
		clearInterval( timer2 );
		timer2 = setInterval( function() {
			if ( i == 5 ) {
				clearInterval( timer2 );
				clearInterval( timer3 );
			} else {
				changeAlpha ( pBox[i] );
				i++;
			}
		}, 800)
	}
	//移入鼠标事件-->修改bg高度
	bigbgBox.onmouseover = function () {
		var bigbgHeight = parseInt( getStyle( bigbgBox,'height' ) );
		// alert( bigbgHeight );
		changeAlpha( lineBox );
		clearInterval( timer4 );
		timer4 = setInterval( function(){
			var bigbgHeight2 = parseInt( getStyle( bigbgBox,'height' ) );
			if ( bigbgHeight2 >=500 ) {
				bigbgBox.style.height = 500 +'px';
				clearInterval( timer4 );
				clearInterval( timer2 );
				clearInterval( timer3 );
				interruptP();
			} else {
				// num3+=5;
				bigbgBox.style.height = bigbgHeight2 + num3 +'px';
			}
		},14 );
	}
	//移出鼠标事件
	bigbgBox.onmouseout = function () {
		//重置文字下标
		i = 0;
		clearInterval( timer2 );
		clearInterval( timer3 );
		clearInterval( timer4 );
		clearInterval( timer5 );
		lowChangeAlpha ( lineBox );
		for (var k = 0; k < pBox.length; k++) {
			pBox[k].style['opacity'] = 0;
		};
		timer4 = setInterval( function(){
			var bigbgHeight2 = parseInt( getStyle( bigbgBox,'height' ) );
			if ( bigbgHeight2 <= 200 ) {
				bigbgBox.style.height = 200 +'px';
				// clearInterval( timer2 );
				// clearInterval( timer3 );
				// clearInterval( timer4 );
				clearInterval( timer5 );
			} else {
				// num3-=5;
				bigbgBox.style.height = bigbgHeight2 - num3 +'px';
			}
		},14 );
	}

	//改变透明度函数封装--->增加
	function changeAlpha ( obj ) {
		var touming = getStyle( obj,'opacity' );
		var num2 = 0;
		// alert( touming );
		timer3 = setInterval( function () {
			var iT = Math.min( num2,100 )
			if ( num2>=100 ) {
				num2=100;
				clearInterval( timer3 );
			};
			obj.style['opacity'] = num2/100;
			num2+=5;
		},20 )
	}
	//改变透明度函数封装--->减少
	function lowChangeAlpha ( obj ) {
		var touming = getStyle( obj,'opacity' );
		var num2 = 100;
		// alert( touming );
		timer5 = setInterval( function () {
			var iT = Math.max( num2,0 )
			if ( iT == 0 ) {
				num2=0;
				clearInterval( timer5 );
			};
			obj.style['opacity'] = num2/100;
			num2-=5;
		},20 )
	}
	// getStyle方法
		function getStyle ( obj, attr ) {
			// body...
			return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle( obj )[attr];
		}
