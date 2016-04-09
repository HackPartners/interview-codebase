'use strict';

module RailTech {

export class LauncherController {

    public static $inject = [
        '$scope',
        'ionicMaterialInk', 
        'ionicMaterialMotion'];

    constructor(
            private $scope,
            ionicMaterialInk, 
            ionicMaterialMotion) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(false);

        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
    }

}

angular.module('railtech')
    .controller('LauncherController', LauncherController)


} // RailTech
