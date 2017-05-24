angular.module('starter.services', [])

.factory('More', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
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
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 5,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 6,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 7,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 8,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 9,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})



.factory("HomeGoodlists",function(){
  var homeGoodlistRows = [
    [{ "id":0, "title":"测试", "main":"测试","imgsrc":"书签01.jpg"},
      {"id":1, "title":"测试","main":"测试","imgsrc":"书签02.jpg"}],
    [{ "id":2, "title":"测试","main":"测试","imgsrc":"书签03.jpg"},
     { "id":3, "title":"测试","main":"测试","imgsrc":"书签04.jpg"}]
  ];
  return{
    all:function(){
      return homeGoodlistRows;
    }
  };
})

.factory("HomeNewLists",function(){
	var homeNewListRows = [
	  [{ "id":0, "title":"测试", "main":"测试","imgsrc":"书签05.jpg"},
	    {"id":1, "title":"测试","main":"测试","imgsrc":"书签06.jpg"}],
	  [{ "id":2, "title":"测试","main":"测试","imgsrc":"书签07.jpg"},
	    { "id":3, "title":"测试","main":"测试","imgsrc":"书签08.jpg"}]
	];
	return{
	  all:function(){
	    return homeNewListRows;
	  }
	};
  })

.factory("HomeLikeLists",function(){
	var homeLikeListRows = [
	  { "id":0, "title":"测试", "main":"测试","imgsrc":"书签09.jpg"},
	    {"id":1, "title":"测试","main":"测试","imgsrc":"书签11.jpg"},
	  { "id":2, "title":"测试","main":"测试","imgsrc":"书签12.jpg"},
	    { "id":3, "title":"测试","main":"测试","imgsrc":"书签01.jpg"}
	];
	return{
	  all:function(){
	    return homeLikeListRows;
	  }
	};
  })