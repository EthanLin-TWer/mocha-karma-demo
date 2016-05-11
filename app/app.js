import angular from 'angular'
import FirstController from './first/first-controller'

angular.module('mocha-karma', [])
    .controller('FirstController', FirstController);
