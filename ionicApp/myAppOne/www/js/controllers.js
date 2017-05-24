angular.module('starter.controllers', [])

.controller('DiscoCtrl', function($scope,$ionicSideMenuDelegate,HomeGoodlists,HomeNewLists,HomeLikeLists) {
	$scope.personList=function(){
		$ionicSideMenuDelegate.toggleLeft();
	};
	//好评榜
	$scope.HomeGoodListRows=HomeGoodlists.all();
	//最新课程
	$scope.HomeNewListRows=HomeNewLists.all();
	//猜你喜欢
	$scope.HomeLikeListRows=HomeLikeLists.all();
	
	//分类查看主题
	$scope.slides=[{
		"id":0,
		"picSrc":"抽象01.jpg",
		"text":"时尚",
		"text_one":"Fashion",
	},{
		"id":1,
		"picSrc":"抽象02.jpg",
		"text":"ACG",
		"text_one":"Music",
	},{
		"id":2,
		"picSrc":"抽象03.jpg",
		"text":"艺术",
		"text_one":"Art",
	},{
		"id":3,
		"picSrc":"抽象05.jpg",
		"text":"设计",
		"text_one":"Design",
	},{
		"id":4,
		"picSrc":"抽象05.jpg",
		"text":"运动",
		"text_one":"Sports",
	},{
		"id":5,
		"picSrc":"抽象07.jpg",
		"text":"社会",
		"text_one":"Society",
	},{
		"id":6,
		"picSrc":"抽象09.jpg",
		"text":"科技",
		"text_one":"Tech",
	},{
		"id":7,
		"picSrc":"抽象01.jpg",
		"text":"生活",
		"text_one":"Lifestyle",
	},{
		"id":8,
		"picSrc":"抽象02.jpg",
		"text":"音乐",
		"text_one":"Music",
	},{
		"id":9,
		"picSrc":"抽象03.jpg",
		"text":"阅读",
		"text_one":"Books",
	},{
		"id":10,
		"picSrc":"抽象05.jpg",
		"text":"趣味",
		"text_one":"Fun",
	},{
		"id":11,
		"picSrc":"抽象07.jpg",
		"text":"科普",
		"text_one":"Science",
	},{
		"id":12,
		"picSrc":"抽象02.jpg",
		"text":"影视",
		"text_one":"Film&TV",
	},{
		"id":13,
		"picSrc":"抽象05.jpg",
		"text":"造物主",
		"text_one":"Creator",
	},];
})

.controller('MoreCtrl', function($scope,More,$timeout,$ionicScrollDelegate) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = More.all();
  
  $scope.remove = function(chat) {
    More.remove(chat);
  };
  //点击按钮内容切换
  $scope.myList=true;
  
  $scope.toggle=function(){
  	$scope.myList=!$scope.myList;
  };
  //下拉刷新
  $scope.doRefresh=function(){
  	$scope.$broadcast('scroll.refreshComplete');
  };
  //上拉加载
  $scope.loadMore=function(){
  	$timeout(function(){
  		$scope.chats.push(
		  	{
		  		id: 0,
		    	name: 'Ben Sparrow',
		    	lastText: 'You on your way?',
		    	face: 'img/ben.png'
		  	}, {
		    	id: 1,
		    	name: 'Max Lynx',
			    lastText: 'Hey, it\'s me',
			    face: 'img/max.png'
			  }, {
			    id: 2,
			    name: 'Adam Bradleyson',
			    lastText: 'I should buy a boat',
			    face: 'img/adam.jpg'
			  });
		$scope.$broadcast('scroll.infiniteScrollComplete');
  	},1000);
  };
  
//滚动
	$scope.scrollTop=function(){
		$ionicScrollDelegate.scrollTop(true)
	}
  
})


//社区
.controller('homeCtrl', function($scope) {})

.controller('PersonCtrl', function($scope) {})

.controller("slideCtrl",function($scope){
	$scope.myActiveSlide=1;
	$scope.pics=[{
		"id":0,
		"picSrc":"透明图04.jpg",
	},{
		"id":1,
		"picSrc":"透明图07.jpg",
	},{
		"id":2,
		"picSrc":"透明图01.jpg",
	},{
		"id":3,
		"picSrc":"透明图10.jpg",
	},{
		"id":4,
		"picSrc":"透明图09.jpg",
	},{
		"id":5,
		"picSrc":"透明图02.jpg",
	}];
})

.controller('ZhuceCtrl', function($scope,) {});