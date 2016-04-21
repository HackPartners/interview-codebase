'use strict';

module RailTech {
export module ThingsToDo {

export class OverviewController {

    public title;

    public static $inject = [
        'thingsToDo.thingsToDoService'];

    constructor() {

        this.title = "Things To Do Overview!!!!";
    }

}

angular.module('thingsToDo')
    .controller('thingsToDo.OverviewController', OverviewController)


} // Repay
} // RailTech
