 app.controller('ItemsCtrl', ['$scope', 'Items', 
    function ($scope, Items) {

        $scope.items = Items.getItems();
        $scope.IsVisible = false;
       
        $scope.addNew = function(item){
        	Items.addNewItem(item);
            console.log($scope.newItem);
            $scope.newItem = '';
        };

        $scope.deleteItem = function(item){
        	var index = $scope.items.indexOf(item);
        	Items.deleteItem(index);
        };

        
        $scope.ShowHide = function (selectedItem, $event) {
        	var index = $scope.items.indexOf(selectedItem);
        	$scope.selected = index;
            let myElement = $event.target;
            angular.element(myElement).hasClass('sel');

            $scope.IsVisible = ($scope.IsVisible && angular.element(myElement).hasClass('sel'))? false : true;
            
            $scope.item = $scope.items[index];
            return $scope.item;
        };

        $scope.addComment = function (newComment, item) {
            var index = $scope.items.indexOf(item);
            Items.newComment(newComment, index);
     
        };

}]);

 
