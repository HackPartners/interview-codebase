
module RailTech {
export module ThingsToDo {

export class ThingsToDoService {

    private modal;
    private ticketImage64;

    static $inject = [
        "$q",
        "$timeout"];

    constructor(
            private $q,
            private $timeout) {

    }

}

angular.module('thingsToDo')
    .service('thingsToDo.thingsToDoService', ThingsToDoService)

} // Repay
} // RailTech