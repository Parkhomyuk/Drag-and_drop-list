
(function(){

    function firstCtrl(){
        var vn=this;

        vn.text='Shalom';

        // array for dropped items
        vn.dropped = [];
        // array of items for dragging
        vn.items = [
            {id: 1, name: "Microwave"},
            {id: 2, name: "Dishwasher" },
            {id: 3, name: "Phone" },
            {id: 4, name: "Punching Bag" }
        ];

        vn.moveToBox = function(id) {

            for (var i = 0; i < vn.items.length; i++) {

                var item = vn.items[i];

                if (item.id == id) {
                    // add to dropped array
                    vn.dropped.push(item);

                    // remove from items array
                    vn.items.splice(i, 1);
                }
            }

            vn.$apply();
        };

        vn.showItmesLeft = function () {
            alert(vn.items.length + " items left.");
        };

        vn.showItmesDropped = function () {
            alert(vn.dropped.length + " items in drop-box.");
        };




    }


    angular.module('app')
        .controller('firstCtrl',[firstCtrl]);

})()
angular.module('app')