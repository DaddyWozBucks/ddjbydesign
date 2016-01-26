angular.module('ddjSite.controllers', ['ddjSite.services'])

.controller('HeaderCtrl', ['$scope', 'deviceDetector', function($scope, deviceDetector) {
  $scope.deviceDetector = deviceDetector;
  $scope.mobilecheck = deviceDetector.isMobile();
  $scope.menuShow = false;
  $scope.showMenu = function() {
    $scope.menuShow = !$scope.menuShow
  }
  if ($scope.mobilecheck) {
    $scope.mobilebuffer = {
      "margin": "7% 0"
    }
  }
  $scope.indexOf = function(arr, obj){
        for(var i = 0; i < arr.length; i++){
            if(angular.equals(arr[i], obj)){
                return i;
            }
        };
        return -1;
    }
  console.log($scope.mobilecheck);
}])
.controller('LandingCtrl', ['$scope','Images', function($scope, Images){
  $scope.images = Images.imageArray;
  $scope.name = "";
  $scope.logoShow = false;
  $scope.$watch("name", function(newValue, oldValue) {
    if ($scope.name.length > 0) {
      $scope.greeting = "Greetings " + $scope.name;
    }
  });


}])

.controller('DesignSeriesCtrl', ['$scope', 'Design', 'designObj','$uibModal', function($scope, Design, designObj, $uibModal){
  $scope.currSeries = Design.getDesignSeries(designObj.value);
    $scope.seriesArray = Design.seriesArray;

  $scope.centerDesign = $scope.currSeries.photos[0];
  $scope.viewChange = function(pieceId) {

    var array = $scope.currSeries.photos

    for (var i = 0; i < array.length; i++) {
      if (array[i].id == pieceId) {

        $scope.centerDesign = array[i]
      }
    }


  };
  $scope.hoverOut = function () {
      this.showButton = false;
    };
  $scope.hoverIn = function () {
      this.showButton = true;
    };

  $scope.openDModal = function (photo) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'templates/design_modal.html',
      controller: 'DesignModalCtrl',
      resolve: {
        designs: function () {
          return $scope.currSeries;
        },
        photo: photo
      }
    });
  };
}])
.controller('DesignModalCtrl', function($scope, $uibModalInstance, designs, photo) {
  $scope.shareShow = false;
  $scope.showShareOptions = function(){
    if ($scope.shareShow) {
      $scope.shareShow = false;
    } else {
      $scope.shareShow = true;
    }
  }
  $scope.designs = designs.photos;
  $scope.getMdIndex = function(arr, obj) {
    for(var i = 0; i < arr.length; i++){
        if(angular.equals(arr[i], obj)){
            return i;
        }
    };
  };
  $scope.mdIndex = $scope.getMdIndex($scope.designs, photo);
  $scope.modalCenter = $scope.designs[$scope.mdIndex];
  console.log($scope.mdIndex)
  $scope.nextView = function() {

    if ($scope.mdIndex < $scope.designs.length -1 ) {
      $scope.mdIndex += 1;
      $scope.modalCenter = $scope.designs[$scope.mdIndex]
    } else if ($scope.mdIndex === $scope.designs.length -1 )  {
      $scope.mdIndex = 0;
      $scope.modalCenter = $scope.designs[$scope.mdIndex];
    };
  };
  $scope.lastView = function() {

    if ($scope.mdIndex > 0 ) {
      $scope.mdIndex -= 1;
      $scope.modalCenter = $scope.designs[$scope.mdIndex];
    } else if ($scope.mdIndex === 0) {
      $scope.mdIndex = $scope.designs.length -1;
      $scope.modalCenter = $scope.designs[$scope.mdIndex];
    };
  };

  $scope.close = function(){
    $uibModalInstance.close();
  }
})
.controller('DesignCtrl', ['$scope','Design', function($scope, Design){
  $scope.seriesArray = Design.seriesArray;
  console.log($scope.seriesArray);
  $scope.boardsHide = false;
  $scope.wardrobeHide = false;
  $scope.chairsHide = false;
  $scope.showButton = false;


  $scope.hoverOut = function () {
      this.showButton = false;
    };
  $scope.hoverIn = function () {
      this.showButton = true;
    };


}])
.controller('IntroCtrl', ['$scope','Parade','$interval', 'deviceDetector',function($scope, Parade, $interval, deviceDetector) {
  $scope.mobilecheck = deviceDetector.isMobile();
  $scope.parade = Parade.parade;
  console.log($scope.mobilecheck);
  $scope.mIndex = 0;
  if ($scope.mobilecheck) {
    $scope.mparade = $scope.parade[$scope.mIndex];
    $interval(function() {
      if ($scope.mIndex < $scope.parade.length -1) {
        $scope.mIndex += 1;
        $scope.mparade = $scope.parade[$scope.mIndex];
      } else if ($scope.mIndex == $scope.parade.length -1) {
        $scope.mIndex = 0;
      }
    }, 1000);
    // $scope.mparade = $scope.parade[0];
    // $interval(function() {
    //   var slide = $scope.parade[0];
    //   $scope.parade.splice(0, 1);
    //   $scope.parade.push(slide);
    //   $scope.mparade = $scope.parade[0];
    // }, 1000);
  } else {
    $interval(function() {
      var slide = $scope.parade[0];
      $scope.parade.splice(0, 1);
      $scope.parade.push(slide);
    }, 1000);
  }
}])
.controller('PhotoCtrl', ['$scope', 'Photo', '$uibModal', function($scope, Photo, $uibModal){
  $scope.logoShow = true;
  $scope.photoObj = Photo.photoObj;
  $scope.photoDetail = function(photoId){
    $scope.modalImage = Photo.getPhoto(photoId);

  };
  $scope.animationsEnabled = true;

  $scope.open = function (image) {
    $scope.modalImage = image
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'templates/photo-detail.html',
      controller: 'PhotoModalCtrl',
      resolve: {
        image: function () {
          return image;
        },
        images: function(){
          return $scope.photoObj.images
        }
      }
    });

  };

}])
.controller('PhotoModalCtrl', function ($scope, $uibModalInstance, image, images) {
  $scope.shareShow = false;
  $scope.showShareOptions = function(){
    if ($scope.shareShow) {
      $scope.shareShow = false;
    } else {
      $scope.shareShow = true;
    }
  }
  $scope.modalImage = image;

  $scope.mViewArray = images;
  console.log($scope.mViewArray);
  console.log(images);
  $scope.getMdIndex = function(arr, obj) {
    for(var i = 0; i < arr.length; i++){
        if(angular.equals(arr[i], obj)){
            return i;
        }
    };
  };
  $scope.mViewIndex = $scope.getMdIndex($scope.mViewArray, $scope.modalImage);
  $scope.nextView = function() {

    if ($scope.mViewIndex < $scope.mViewArray.length -1 ) {
      $scope.mViewIndex += 1;
      $scope.modalImage = $scope.mViewArray[$scope.mViewIndex]
    } else if ($scope.mViewIndex === $scope.mViewArray.length -1 )  {
      $scope.mViewIndex = 0;
      $scope.modalImage = $scope.mViewArray[$scope.mViewIndex];
    };
  };
  $scope.lastView = function() {

    if ($scope.mViewIndex > 0 ) {
      $scope.mViewIndex -= 1;
      $scope.modalImage = $scope.mViewArray[$scope.mViewIndex];
    } else if ($scope.mViewIndex === 0) {
      $scope.mViewIndex = $scope.mViewArray.length -1;
      $scope.modalImage = $scope.mViewArray[$scope.mViewIndex];
    };
  };
  $scope.close = function(){
    $uibModalInstance.close();
  }

})
.controller('PhotoDetailCtrl', ['$scope', 'Photo', '$stateParams', function($scope, Photo, $stateParams){
  $scope.logoShow = true;
  $scope.photo = Photo.getPhoto($stateParams.photoId);
  console.log($scope.photo);

}])
.controller('ArtCtrl', ['$scope', 'Images', function($scope, Images){
  $scope.logoShow = true;
  $scope.seriesArray = Images.series;
  $scope.arthouseArray = Images.arthouse;
  $scope.showButton = false;
  $scope.hoverOut = function () {
      this.showButton = false;
    };
  $scope.hoverIn = function () {
      this.showButton = true;
    };
}])
.controller('ArtSeriesCtrl', ['$scope', 'seriesObj','Images','$uibModal',
 function($scope, seriesObj, Images, $uibModal){
  $scope.seriesArray = Images.series;
  $scope.logoShow = true;
  $scope.rockCheck = false;
  if (seriesObj.value === 'rock') {
    $scope.rockCheck = true;

  }

    $scope.currLib = Images.getSeries(seriesObj.value);

    $scope.openAModal = function (photo) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'templates/art_modal.html',
        controller: 'ArtModalCtrl',
        resolve: {
          art: function () {
            return $scope.currLib;
          },
          photo: photo
        }
      });
    };
}])
.controller('ArtModalCtrl', function($scope, $uibModalInstance, art, photo) {
  $scope.shareShow = false;
  $scope.showShareOptions = function(){
    if ($scope.shareShow) {
      $scope.shareShow = false;
    } else {
      $scope.shareShow = true;
    }
  }
  $scope.designs = art.photos;
  $scope.getMdIndex = function(arr, obj) {
    for(var i = 0; i < arr.length; i++){
        if(angular.equals(arr[i], obj)){
            return i;
        }
    };
  };
  $scope.mdIndex = $scope.getMdIndex($scope.designs, photo);
  $scope.modalCenter = $scope.designs[$scope.mdIndex];
  console.log($scope.mdIndex)
  $scope.nextView = function() {

    if ($scope.mdIndex < $scope.designs.length -1 ) {
      $scope.mdIndex += 1;
      $scope.modalCenter = $scope.designs[$scope.mdIndex]
    } else if ($scope.mdIndex === $scope.designs.length -1 )  {
      $scope.mdIndex = 0;
      $scope.modalCenter = $scope.designs[$scope.mdIndex];
    };
  };
  $scope.lastView = function() {

    if ($scope.mdIndex > 0 ) {
      $scope.mdIndex -= 1;
      $scope.modalCenter = $scope.designs[$scope.mdIndex];
    } else if ($scope.mdIndex === 0) {
      $scope.mdIndex = $scope.designs.length -1;
      $scope.modalCenter = $scope.designs[$scope.mdIndex];
    };
  };

  $scope.close = function(){
    $uibModalInstance.close();
  }
})
.controller('ContactCtrl', ['$scope', function($scope){

}])
.controller('PropertyCtrl', ['$scope','Property', '$interval', '$uibModal', function($scope, Property, $interval, $uibModal){
  $scope.logoShow = true;
  $scope.propArray = Property.allProp;
  $scope.viewIndex = 0;
  $scope.centerProp = $scope.propArray[0];
  $scope.viewArray = $scope.centerProp.photos;
  $scope.centerView = $scope.centerProp.photos[$scope.viewIndex];
  $scope.proptext = Property.propText;
  console.log($scope.viewArray.length);

  $scope.imageChange = function(imgId) {
    var array = $scope.centerProp.photos
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == imgId) {
        $scope.centerView = array[i]
      }
    }
  };

  $scope.nextView = function() {

    if ($scope.viewIndex < $scope.viewArray.length -1 ) {
      $scope.viewIndex += 1;
      $scope.centerView = $scope.viewArray[$scope.viewIndex]
    } else if ($scope.viewIndex === $scope.viewArray.length -1 )  {
      $scope.viewIndex = 0;
      $scope.centerView = $scope.viewArray[$scope.viewIndex];
    };
  };
  $scope.lastView = function() {

    if ($scope.viewIndex > 0 ) {
      $scope.viewIndex -= 1;
      $scope.centerView = $scope.viewArray[$scope.viewIndex];
    } else if ($scope.viewIndex === 0) {
      $scope.viewIndex = $scope.viewArray.length -1;
      $scope.centerView = $scope.viewArray[$scope.viewIndex];
    };
  };


   $scope.propChange = function(propId) {
     var array = $scope.propArray;
     for (var i = 0; i < array.length; i++) {
       if (array[i].id == propId) {
         $scope.centerProp = array[i];
         $scope.centerView = array[i].photos[0];
         $scope.viewArray = array[i].photos;
         $scope.viewIndex = 0;

       }
     }
   };
   $scope.openPModal = function (prop) {
     var modalInstance = $uibModal.open({
       animation: $scope.animationsEnabled,
       templateUrl: 'templates/propmodal.html',
       controller: 'PropModalCtrl',
       resolve: {
         prop: prop,
         propArray: function(){
           return $scope.viewArray;
         }
       }
     });
   };
}])
.controller('PropModalCtrl', function ($scope, $uibModalInstance, prop, propArray) {
  $scope.modalProp = prop;
  console.log(propArray);
  $scope.mViewArray = propArray;
  $scope.mViewIndex = 0;
  $scope.nextView = function() {

    if ($scope.mViewIndex < $scope.mViewArray.length -1 ) {
      $scope.mViewIndex += 1;
      $scope.modalProp = $scope.mViewArray[$scope.mViewIndex]
    } else if ($scope.mViewIndex === $scope.mViewArray.length -1 )  {
      $scope.mViewIndex = 0;
      $scope.modalProp = $scope.mViewArray[$scope.mViewIndex];
    };
  };
  $scope.lastView = function() {

    if ($scope.mViewIndex > 0 ) {
      $scope.mViewIndex -= 1;
      $scope.modalProp = $scope.mViewArray[$scope.mViewIndex];
    } else if ($scope.mViewIndex === 0) {
      $scope.mViewIndex = $scope.mViewArray.length -1;
      $scope.modalProp = $scope.mViewArray[$scope.mViewIndex];
    };
  };
  $scope.close = function(){
    $uibModalInstance.close();
  }
})
.controller('BlogCtrl', ['$scope', 'Blog', '$uibModal', function($scope, Blog, $uibModal){
  $scope.stories = Blog.stories;
  $scope.openBModal = function (story, image) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'templates/blogmodal.html',
      controller: 'BlogModalCtrl',
      resolve: {
        image: image,
        story: story
      }
    });
  };
  }])
.controller('BlogModalCtrl', function ($scope, $uibModalInstance, image, story) {
  $scope.shareShow = false;
  $scope.showShareOptions = function(){
    if ($scope.shareShow) {
      $scope.shareShow = false;
    } else {
      $scope.shareShow = true;
    }
  }
  $scope.modalProp = image;
  $scope.story = story;
  $scope.mViewArray = $scope.story.images;
  $scope.getMdIndex = function(arr, obj) {
    for(var i = 0; i < arr.length; i++){
        if(angular.equals(arr[i], obj)){
            return i;
        }
    };
  };

  $scope.mViewIndex = $scope.getMdIndex($scope.mViewArray, $scope.modalProp);

  $scope.modalProp = $scope.mViewArray[$scope.mViewIndex];
    console.log( $scope.modalProp)
    console.log($scope.mViewArray)
    console.log($scope.mViewIndex)
  $scope.nextView = function() {

   if ($scope.mViewIndex < $scope.mViewArray.length -1 ) {
     $scope.mViewIndex += 1;
     $scope.modalProp = $scope.mViewArray[$scope.mViewIndex]
   } else if ($scope.mViewIndex === $scope.mViewArray.length -1 )  {
     $scope.mViewIndex = 0;
     $scope.modalProp = $scope.mViewArray[$scope.mViewIndex];
   };
  };
  $scope.lastView = function() {

   if ($scope.mViewIndex > 0 ) {
     $scope.mViewIndex -= 1;
     $scope.modalProp = $scope.mViewArray[$scope.mViewIndex];
   } else if ($scope.mViewIndex === 0) {
     $scope.mViewIndex = $scope.mViewArray.length -1;
     $scope.modalProp = $scope.mViewArray[$scope.mViewIndex];
   };
  };
  $scope.close = function(){
   $uibModalInstance.close();
  }
})
.controller('PostCtrl', ['$scope', 'Blog','$stateParams', function($scope, Blog, $stateParams){
  $scope.story = Blog.getStory($stateParams.postId);
}])
