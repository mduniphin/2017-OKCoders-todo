const prompt = require('prompt');

	const todoList = {
	  tasks: ['Empty'],
	  begin: function(){
	  	console.log('Choose an number:\n (1) Add task \n (2) Mark complete \n (3) View todo list \n (4) Quit');
	  	prompt.get('option', function(err,result){
	  		if (err) todoList.quitTasks();
	  		else {
	  			switch(result.option.charAt(0)){
	  				case "1":
	  					todoList.addTask();
	  					break;
	  				case "2":
	  					todoList.completeTask();
	  					break;
	  				case "3":
	  					todoList.viewTasks();
	  					break;
	  				case "4":
	  					todoList.quitTasks('Goodbye');
	  					break;
	  				default:
	  					console.log('Type a number to get started.');
	  					todoList.begin();
	  					break;
	  			}
	  		}
	  	});
	  },
	  addTask: function(){
	  	prompt.start();
	  	prompt.get('task', function(err, result){
	  		if (err) todoList.quitTasks(err); 
	  		else {
	  			todoList.tasks.push(result.task);
	  			todoList.begin();
	  		}
	  	});
	  },
	  completeTask: function(){
	  	prompt.start();
	  	prompt.get('complete', function(err, result){
	  		if (err) todoList.quitTasks(err);
	  		else {
	  			todoList.tasks.splice(Number(result.complete) - 1, 1);
	  			todoList.begin();
	  		}
	  	});
	  },
	  viewTasks: function(){
	  	console.log("Todo List:");
	  	for(var i = 0; i < todoList.tasks.length; i++){
	  		console.log( i+1 + " " + this.tasks[i]);
	  	}
	  	console.log('~~');
	  	setTimeout(todoList.begin, 4000);
	  },
	  quitTasks: function(err){
	  	console.log(err);
	  },
	  init: function(){
	  	prompt.start();
	  	todoList.begin();
	  }
}

todoList.init();
