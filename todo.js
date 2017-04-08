var prompt = require('prompt');

prompt.start();

var todoList = {
  Item_1: 'empty',
}

console.log('Here is your todo list')
console.dir(todoList)

// prompt.get(['todo', 'email'], function (err, result) {
// 	console.log('Command-line input received:');
// 	console.log(' todo: ' + result.todo);
// 	console.log(' email: ' + result.email);
// });
