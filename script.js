var app = angular.module('plunker', ['ngRoute']);

angular.module("plunker").directive('foo', function () {
  return {
    template: 'foo',
    restrict: 'E',
    link: function postLink(scope) {
      var qnasrc1 = '<link rel="stylesheet" href="//static.www.turnto.com/tra4_3/tra.css" /><script type="text/javascript" src="/js/cookie_fn.js?v=08132013" async></script><script type="text/javascript" src="/js/turnto_vs.js" async></script><script type="text/javascript">var turnToConfig = {siteKey: "I1h5bZdr3OSP4fMsite",skipCssLoad:true,setupType: "dynamicEmbed",registration : { localGetLoginStatusFunction : localGetLoginStatusFunction,localRegistrationUrl : "/p/gadgets/turntoLogin.jsp", localGetUserInfoFunction : localGetUserInfoFunction,localLogoutFunction : localLogoutFunction}};window.onload= function(){var tt = document.createElement("script"); tt.type = "text/javascript"; tt.src = document.location.protocol + "//static.www.turnto.com/sitedata/I1h5bZdr3OSP4fMsite/v4_3/' + 123 + '/d/itemjs";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(tt, s);var tt = document.createElement("script"); tt.type = "text/javascript"; tt.async = true;tt.src = document.location.protocol + "//static.www.turnto.com/traServer4_3/trajs/" + turnToConfig.siteKey + "/tra.js";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(tt, s);};'
      var qnasrc2 = '<script>var TurnToItemSku = "' + 123 + '";var itemjsUrl = "//static.www.turnto.com/sitedata/I1h5bZdr3OSP4fMsite/v4_3/' + 123 + '/d/itemjs";</script>';
      scope.qna1 = qnasrc1;
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