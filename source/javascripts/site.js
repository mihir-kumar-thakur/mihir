//= require angular
//= require_tree .

'use strict';

var app = angular.module('myApp', []);

app.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

app.controller("TestCtrl", ["$scope", function ($scope) {
  $scope.musics = [
        {
            title: 'secret base~君がくれたもの~',
            author: '茅野愛衣',
            url: 'http://devtest.qiniudn.com/secret base~.mp3',
            pic: 'http://devtest.qiniudn.com/secret base~.jpg'
        },
        {
            title: '回レ！雪月花',
            author: '小倉唯',
            url: 'http://devtest.qiniudn.com/回レ！雪月花.mp3',
            pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg'
        }
    ];
}]).directive("aplayer", ["$http", function ($http) {
  return {
    restrict : "AC",
    controller: function($scope) {
      this.setValue = function(value) {
        $scope.value = value;
      },
      $scope.ngFn = function () {
        console.log("ngFn is triggered!");
        var current_song_no = angular.element(document.querySelectorAll("ol li")).length;
        var player = $scope.value;
        player.addMusic([{
          title: 'Mihir TestCtrl',
          author: 'Mihir Hello',
          url: 'https://wynk-play.akamaized.net/srch_unisysinfo/music/64/1493270976/srch_unisysinfo_M0904771.mp3?token=1494727952_4cc9a4a5149708725b717a1efb526154',
          pic: 'http://devtest.qiniudn.com/あっちゅ～ま青春!.jpg'
        }])
        player.setMusic(current_song_no);
      }
    },
    link: function(scope, element, attrs, ctrl) {
      var nativeElement = element[0];
      var music = scope.musics;
      var ap1 = new APlayer({
        element: nativeElement,
        narrow: false,
        autoplay: false,
        showlrc: false,
        mutex: true,
        theme: '#ad7a86',
        mode: 'circulation',
        listmaxheight: '0px',
        music: music
      });
      // ctrl.setValue(ap1);
    }
  };
}]);
