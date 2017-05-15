//= require angular
//= require_tree .

(function() {
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
}]).directive("aplayer", [function () {
  return {
    restrict : "AC",
    controller: ['$scope', '$http', function($scope, $http) {
      this.setValue = function(value) {
        $scope.value = value;
      },
      $scope.ngFn = function () {
        var current_song_no = angular.element(document.querySelectorAll("ol li")).length;
        var player = $scope.value;
        $http.get("https://raw.githubusercontent.com/thakurmihir/mihir/master/data/songs.json")
          .then(function(response) {
            debugger
            alert(response.data.songs);
            player.addMusic(response.data.songs);
            player.setMusic(current_song_no);
        });
      }
    }],
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
      ctrl.setValue(ap1);
    }
  };
}]);

})();
