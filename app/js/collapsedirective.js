var app=angular.module('formApp');
app.directive('top', function($window) {


  return {

    restrict: 'AE',
    link: function(s, e, a) {
      var body = angular.element(document.getElementsByTagName("body"));


      $window.onresize = function(event) {
        var clientWidth = document.documentElement.clientWidth;


        if (clientWidth < 768)

        {
          e.removeClass('multistage')
         
        } else {
         
          e.addClass('multistage');
          


        }
      }
      }
    }
  })
