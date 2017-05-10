//= require angular
//= require_tree .



var app = angular.module('myApp', []);

app.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

app.directive("aplayer", function() {
  return {
    restrict : "AC",
    link: function(scope, element, attrs) {
      var nativeElement = element[0];
      var ap1 = new APlayer({
        element: nativeElement,
        narrow: false,
        autoplay: true,
        showlrc: false,
        mutex: true,
        theme: '#e6d0b2',
        preload: 'metadata',
        mode: 'circulation',
        music: {
          title: attrs["playerTitle"],
          author: attrs["playerAuthor"],
          url: attrs["playerUrl"],
          pic: attrs["playerPic"]
        }
      });
    }
  };
});
