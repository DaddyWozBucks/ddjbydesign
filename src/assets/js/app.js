angular.module('ddjSite',
    ['ddjSite.controllers',
      'ddjSite.services',
      'ddjSite.directives',
      'ui.router',
      'ngAnimate',
      'ngResource',
      '720kb.socialshare',
      'ng.deviceDetector',
      'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $stateProvider
              .state('app',{
                url: '/app',
                abstract: true,
                views: {
                  "header": { templateUrl: "templates/header.html", controller: "HeaderCtrl" }
                }
              })
              .state('app.art',{
                url: '/art',
                views: {
                  "main": { templateUrl: "templates/art.html", controller: "ArtCtrl"}
                }
              })
              .state('app.intro',{
                url: '/intro',
                views: {
                  "main": { templateUrl: "templates/intro.html", controller: "IntroCtrl"}
                }
              })
              .state('app.mirror',{
                url: '/art/mirror',
                resolve: {
                  seriesObj: function(){
                  return {value: 'mirror'};
                  },
                },
                views: {
                  "main": { templateUrl: "templates/art-series.html", controller: "ArtSeriesCtrl"}
                }

              })
              .state('app.rock',{
                url: '/art/rock',
                resolve: {
                  seriesObj: function(){
                  return {value: 'rock'};
                  },
                },
                views: {
                  "main": { templateUrl: "templates/art-series.html", controller: "ArtSeriesCtrl"}
                }

              })
              .state('app.adart',{
                url: '/art/adart',
                resolve: {
                  seriesObj: function(){
                  return {value: 'adart'};
                }
               },
                views: {
                  "main": { templateUrl: "templates/art-series.html", controller: "ArtSeriesCtrl"}
                }
              })
              .state('app.street',{
                url: '/art/street',
                resolve: {
                  seriesObj: function(){
                  return {value: 'street'};
                }
               },
                views: {
                  "main": { templateUrl: "templates/art-series.html", controller: "ArtSeriesCtrl"}
                }
              })
              .state('app.holo',{
                url: '/art/holo',
                resolve: {
                  seriesObj: function(){
                  return {value: 'holo'};
                }
               },
                views: {
                  "main": { templateUrl: "templates/art-series.html", controller: "ArtSeriesCtrl"}
                }
              })
              .state('app.design',{
                url: '/design',
                views: {
                  "main": { templateUrl: "templates/design.html", controller: "DesignCtrl"}
                }
              })
              .state('app.boards',{
                url: '/design/longboards',
                resolve: {
                  designObj: function(){
                  return {value: 'boards'};
                }
               },
                views: {
                  "main": { templateUrl: "templates/designseries.html", controller: "DesignSeriesCtrl"}
                }
              })
              .state('app.wardrobe',{
                url: '/design/wardrobe',
                resolve: {
                  designObj: function(){
                  return {value: 'wardrobe'};
                }
               },
                views: {
                  "main": { templateUrl: "templates/designseries.html", controller: "DesignSeriesCtrl"}
                }
              })
              .state('app.contact',{
                url: '/contact',
                views: {
                  "main": { templateUrl: "templates/contact.html", controller: "ContactCtrl"}
                }
              })
              .state('app.blog',{
                url: '/blog',
                views: {
                  "main": { templateUrl: "templates/blog.html", controller: "BlogCtrl"}
                }
              })
              .state('app.blog-detail',{
                url: '/blog/:postId',
                views: {
                  "main": { templateUrl: "templates/blog-detail.html", controller: "PostCtrl"}
                }
              })
              .state('app.chairs',{
                url: '/design/chairs',
                resolve: {
                  designObj: function(){
                  return {value: 'chairs'};
                }
               },
                views: {
                  "main": { templateUrl: "templates/designseries.html", controller: "DesignSeriesCtrl"}
                }
              })
              .state('app.property',{
                url: '/property',
                views: {
                  "main": { templateUrl: "templates/property.html", controller: "PropertyCtrl"}
                }
              })
              .state('app.photo',{
                url: '/photo',
                views: {
                  "main": { templateUrl: "templates/photo.html", controller: "PhotoCtrl"}
                }
              })
              .state('app.photo_image',{
                url: '/photo/:photoId',
                views: {
                  "main": { templateUrl: "templates/photo-detail.html", controller: "PhotoDetailCtrl"}
                }
              })
              .state('app.landing', {
                url: '/',
                views: {
                  "main": { templateUrl: "templates/landing.html", controller: "LandingCtrl"}
                }
              })

              $urlRouterProvider.otherwise('/app/')
            }])
