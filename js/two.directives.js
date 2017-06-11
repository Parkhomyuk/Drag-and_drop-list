(function(){

 function Draggable () {

        return {
            restrict: "A",
            link: function(scope, element, attributes, ctlr) {
                element.attr("draggable", true);

                element.bind("dragstart", function(eventObject) {
                    eventObject.originalEvent.dataTransfer.setData("text", attributes.itemid);
                });
            }
        };
    }

    function DropTarget () {

        return {
            restrict: "A",
            link: function (scope, element, attributes, ctlr) {

                element.bind("dragover", function(eventObject){
                    eventObject.preventDefault();
                });

                element.bind("drop", function(eventObject) {

                    // invoke controller/scope move method
                    scope.moveToBox(parseInt(eventObject.originalEvent.dataTransfer.getData("text")));

                    // cancel actual UI element from dropping, since the angular will recreate a the UI element
                    eventObject.preventDefault();
                });
            }
        };
    }



    angular.module('app')
        .directive("ddDraggable", [Draggable])
        .directive("ddDropTarget", [DropTarget]);



})()