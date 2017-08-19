app.service('Items', ['$localStorage', function($localStorage) {
   // $localStorage.$reset();
  
   let items = [];


   if ($localStorage.savedData) {
      items = $localStorage.savedData;
   } 
   else items = [{
      name: 'First item with custom name',
      comments: ['A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s', 
      'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
       'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s']
   }, {
      name: 'Second item with custom name',
      comments: ['A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
       'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s',
       'A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s']
   }, ];


   return {
      setLocalStorage: function() {
         $localStorage.savedData = items;
      },
      addNewItem: function(item) {
         var singleItem = {
            name: item,
            comments: []
         };
         items.push(singleItem);
      },
      deleteItem: function(index) {
         items.splice(index, 1);
         this.setLocalStorage();
      },
      getItems: function() {
         return items;
      },
      newComment: function(text, index) {
         items[index].comments.push(text);
         this.setLocalStorage();
      },
   };
}]);