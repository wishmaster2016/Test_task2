'use strict';

angular.module('TreeViewApp.services', ['ngResource'])
	.factory('GetTestDataService', ['$resource', '$cacheFactory', function($resource, $cacheFactory) {
	  var cache = $cacheFactory('ContentSummariesService');
    var resource = $resource('test_data/test.json', {}, {get: {method:'GET', params:{}, isArray:true, cache: cache}});
    /*resource.updateAll = function(){ cache.removeAll(); $rootScope.$broadcast('ContentSummariesService:force_updated',{}); };*/
    return resource;
	}])
