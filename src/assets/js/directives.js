angular.module('ddjSite.directives',[])
.directive('tagEnter', function () {
  return function(scope, element, attrs) {

     element.bind("keydown keypress", function(event) {
         var keyCode = event.which || event.keyCode;

         // If enter key is pressed
         if (keyCode === 13) {
             scope.$apply(function() {
                     // Evaluate the expression
                 scope.$eval(attrs.dlEnterKey);
             });

             event.preventDefault();
         }
     });
   }
})
