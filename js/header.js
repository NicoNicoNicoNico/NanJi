window.onload = function () {
	var findDreamBtn = document.getElementById( 'find_dream' );
	var heroListBox = document.getElementById( 'hero_list' );
	var jiangIcon = document.getElementById( 'jiang_icon' );
	var loginList = document.getElementById( 'login' );
	var loginLiBox = document.getElementById( 'loginli' );
	var dengluBox = document.getElementById( 'denglu' );
	var userNameBox = document.getElementById( 'username' );
	var passWordBox = document.getElementById( 'password' );
	var loginBtn = document.getElementById( 'login_btn' );
	var closeBtn = document.getElementById( 'close_btn' );
	var myHome = document.getElementById( 'my_home' );
	var myhome_ul = document.getElementById( 'geren' );
	var myhomeLiBox = myhome_ul.getElementsByTagName('li');
	var timer = null;

	//英雄下弹窗绑定事件
	findDreamBtn.onclick = function () {
		hideOrBlock( heroListBox );
	}
	//登录下弹窗绑定事件
	loginList.onclick = function () {
		hideOrBlock( dengluBox );
	}
	//登录窗口
	closeBtn.onclick = function () {
		dengluBox.style.display = 'none';
	}
	loginBtn.onclick = function () {
		var userName = userNameBox.value;
		var passWord = passWordBox.value;
		if ( userName!= '' ) {
			if (passWord!= '' ) {
				// alert(userName);
				alert( '登录成功！' );
				loginLiBox.style.display = 'none';
				myHome.style.display = 'block';
			} else {
				alert( '请输入密码' );
			}
		} else {
			alert( '请输入用户名' );
		}
	}
	//登录成功|显示个人信息
	myHome.onmouseover = function () {
		myhome_ul.style.display = 'block';
	}
	myHome.onmouseout = function () {
		myhome_ul.style.display = 'none';
	}
	//给下弹窗添加鼠标事件
	for (var i = 0; i < myhomeLiBox.length; i++) {
		myhomeLiBox[i].index = i;
		myhomeLiBox[i].onmouseover = function () {
			for (var j = 0; j < myhomeLiBox.length; j++) {
				myhomeLiBox[j].style.backgroundColor = '#fff';
			};
			this.style.backgroundColor = '#eaeaea';
		}
	};
	//设置奖图标跳动
	function fancyIcon () {
		var icon_width = parseInt( getStyle2 ( jiangIcon,'width' ) );
		if ( icon_width == 13 ) {
			jiangIcon.style.width = '17px';
		} else {
			jiangIcon.style.width = '13px';
		}
	}
	timer = setInterval( fancyIcon, 500 );


	//显示与隐藏封装
	function hideOrBlock ( obj , fn ) {
		// body...
		var disAttr =  getStyle2( obj , 'display' );
		if ( disAttr == 'none') {
			obj.style.display = 'block';
			//回调函数
			if ( fn ) {
				obj.call( fn );
			};
		} else {
			obj.style.display = 'none';
		}
	}

	// getStyle2方法
	function getStyle2 ( obj, attr ) {
		// body...
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle( obj )[attr];
	}

}