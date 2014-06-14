var myApp = angular.module('myApp',['ngAnimate','swipe']); 


        function MyCtrl($scope) {

          ///Array of all the image names.
          ///pattern is column-order.  
          ///assumes images jpg. can easily change. 
          $scope.imgArr = ["images/1-1.jpg","images/1-2.jpg","images/1-3.jpg","images/1-4.jpg","images/2-1.jpg","images/2-2.jpg","images/2-3.jpg","images/2-4.jpg","images/3-1.jpg","images/3-2.jpg","images/3-3.jpg","images/3-4.jpg"];

          //set the first image
          $scope.category = 1;
          $scope.img = 1;
          $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
           
          //listener for swipe action
          //determine direction, set animation, and then determine the image needs to loop back the first in the list  
          $scope.wipeHandler = function(dir){            
            if(dir =="swipeup"){
                $scope.slideDir = 'slide-up';
                if($scope.img != 1){
                    $scope.img = $scope.img - 1;
                    $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                }else{
                   $scope.img = 4; 
                   $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                }
            }
            if(dir =="swipedown"){   
                $scope.slideDir = 'slide-down';             
                //$scope.checked = false;                
                if($scope.img != 4){
                    $scope.img = $scope.img + 1;
                    $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                    $scope.checked = true;
                }else{
                   $scope.img = 1; 
                   $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                   $scope.checked = true;
                }
            }
            if(dir =="swipeleft"){
                $scope.slideDir = 'slide-left';    
                if($scope.category != 3){
                    $scope.category = $scope.category + 1;
                    $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                }else{
                   $scope.category = 1; 
                   $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                }
            }
            if(dir =="swiperight"){
                 $scope.slideDir = 'slide-right';
                if($scope.category != 1){
                    $scope.category = $scope.category - 1;
                    $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                }else{
                   $scope.category = 3; 
                   $scope.imgSrc = "images/"+ $scope.category +"-"+ $scope.img +".jpg";
                }
            }    
           }
        }
