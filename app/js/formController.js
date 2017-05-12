var app=angular.module('formApp');
app.controller('formController',function($scope,$window){
    $scope.counter = 0;
    var navbuttons = angular.element(document.querySelector('#cbutton'));
 navbuttons.addClass('invisible');
  navbuttons.removeClass('show');
  angular.element(document.querySelector('.buttonclass')).css("width","30%");
   angular.element(document.querySelector('.formclass')).css("width","70%");
    $scope.collapse=function(inc){
        $scope.counter += inc;
        if($scope.counter%2!=0){
var navbuttons = angular.element(document.querySelector('#nav_buttons'));
 navbuttons.addClass('show');
  navbuttons.removeClass('invisible');
    angular.element(document.querySelector('.buttonclass')).css("width","30%");
   angular.element(document.querySelector('.formclass')).css("width","70%");
  
    }
    else{
        var navbuttons = angular.element(document.querySelector('#nav_buttons'));
 navbuttons.addClass('invisible');
  navbuttons.removeClass('show');
  navbuttons.addClass('collapse');
    angular.element(document.querySelector('.buttonclass')).css("width","0%");
   angular.element(document.querySelector('.formclass')).css("width","100%");
   
    }
}
  var clientWidth = document.documentElement.clientWidth;
 
// angular.element($window).bind('width',function(){
//     $scope.$apply(function(){
//         console.log("hello");
//      var classtoadd1= angular.element(document.querySelector('#cbutton'));
//        classtoadd1.addClass('invisible');
//   classtoadd1.removeClass('show');
// })
// })
     angular.element($window).bind('resize', function(){
$scope.$apply(function(){


    $scope.isVisible = true;
       var clientWidth = document.documentElement.clientWidth;
        var classtoadd = angular.element(document.querySelector('#nav_buttons'));
        var classtoadd1= angular.element(document.querySelector('#cbutton'));
        
if (clientWidth > 1024) {
    console.log(clientWidth);
  classtoadd1.addClass('invisible');
  classtoadd1.removeClass('show');
  classtoadd.addClass('show');
  classtoadd.removeClass('invisible');
  classtoadd.addClass('collapse');
   angular.element(document.querySelector('.buttonclass')).css("width","30%");
   angular.element(document.querySelector('.formclass')).css("width","70%");

} else {
  classtoadd.addClass('invisible');
  classtoadd.removeClass('show');
  classtoadd1.addClass('show');
  classtoadd1.removeClass('invisible');
   angular.element(document.querySelector('.buttonclass')).css("width","0%");
   angular.element(document.querySelector('.formclass')).css("width","100%");
}
})
});
})