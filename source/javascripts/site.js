//= require jquery
//= require bootstrap
//= require jquery_flexslider
//= require angular
//= require angular-flexslider
//= require_tree .

(function() {
  'use strict';
var app = angular.module('myApp', ['angular-flexslider']);

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

app.controller('AlbumsController', ["$scope", function ($scope) {
  $scope.slides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg',
    'https://www.planwallpaper.com/static/cache/ed/77/ed77608a0de73dc372295d292ba94096.jpg',
    'https://www.planwallpaper.com/static/cache/00/b7/00b7a21d94164cb8764457a894063606.jpg',
    'https://www.planwallpaper.com/static/cache/a1/4e/a14e880ef245c3d159ba96ebbeb4c8c3.jpg',
    'https://www.planwallpaper.com/static/cache/e2/2f/e22fb97e62c21f7205c0ffff498aae4c.jpg',
    'https://www.planwallpaper.com/static/cache/b3/57/b357b668312d2f875419b72a7f35996a.jpg',
    'https://www.planwallpaper.com/static/cache/b0/a4/b0a46365aeba2ea94e557e9f3da91a07.jpg',
    'https://www.planwallpaper.com/static/cache/4e/4f/4e4ffcdb4e1cd3b42a65db2bb209c910.jpg'
  ];
}]);

})();
