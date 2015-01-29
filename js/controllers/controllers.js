'use strict';

angular.module('TreeViewApp.controllers', [])
  .controller('mainCtrl', ['$scope', '$http', 'GetTestDataService', function($scope, $http, GetTestDataService) {
  	$scope.delete = function(data) {
  		if(data.nodes.length > 0) {
      	data.nodes = [];
  		}
  		else {
  			deleteBfs($scope.tree[0], data.name);
  		}
    };

    $scope.add = function(data) {
      var post = data.nodes.length + 1;
      var newName = data.name + '-' + post;
      data.nodes.push({name: newName,nodes: []});
      $scope.json = angular.toJson($scope.tree);
    };

    $scope.tree = [{name: "Node", nodes: []}];

		function deleteBfs(node, name) {
	    var q = [node];
	    while (q.length > 0) {
        node = q.shift();
    		for(var i = 0; i < node.nodes.length; i++) {
    			if(node.nodes[i].name == name) {
    				node.nodes.splice(i, 1);
    				return;
    			}
    			q.push(node.nodes[i]);
    		}
	    }
		};

    var apply = function(data){
      $scope.tree = data;
    };

		var forceUpdate = function(){
      GetTestDataService.get(function(response){
      	console.log(response);
      	apply(response);
      });
    };   

    $scope.changeStatus = function(obj) {
      if(obj.target.classList[2] == "showBtn") {
        $("#" + obj.target.id).attr('class', 'glyphicon glyphicon-chevron-up hideBtn');
        $("#" + obj.target.id + "-div").attr('class', 'show');
      }
      else {
        $("#" + obj.target.id).attr('class', 'glyphicon glyphicon-chevron-down showBtn');
        $("#" + obj.target.id + "-div").attr('class', 'hide');
      }
    }

    forceUpdate();

  }])
