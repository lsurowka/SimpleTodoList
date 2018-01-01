//const app = angular.module('myApp', []);

angular.module('myApp', []).controller('TodoCtrl', function ($scope) {

    $scope.todoList = [
        { text: "learn angularjs", isDone: false },
        { text: "prepare vm", isDone: true }
    ];

    $scope.getTotalTodos = () => $scope.todoList.length;


    $scope.addTodo = function () {
        $scope.todoList.push({ text: $scope.formTodoText, isDone: false });
        $scope.formTodoText = '';
    }

    $scope.removeTodo = () => {
        $scope.todoList = _.filter((i) => !i.isDone);
        console.log("removeTodo");
    }
});