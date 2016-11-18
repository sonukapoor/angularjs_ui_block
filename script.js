var app = angular.module('plunker', ['ngRoute']);

angular.module("plunker").directive('foo', function () {
  return {
    template: 'foo',
    restrict: 'E',
    link: function ($scope) {
      var qnasrc1 = '<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/emojione/1.3.0/lib/js/emojione.min.js" async></script>';
      $scope.qna1 = qnasrc1;
    }
  }
});

angular.module("plunker").directive('includeScriptInHead', function () {
  return {
    restrict: 'A',
    link: function ($scope, $el) {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.6/lib/js/emojione.min.js'
      document.head.appendChild(script);
    }
  }
});

app.config(function ($routeProvider) {
  $routeProvider.when(
    '/', {
      templateUrl: 'product.html',
      controller: 'MainCtrl'
    })
});

app.filter('trusted', ['$sce', function ($sce) {
  return function (html) {
    return $sce.trustAsHtml(html)
  }
}])

app.controller('MainCtrl', function () {
  var vm = this;
});