		(function(){
			var input = document.getElementById('input');
				var button = document.getElementById('button');
				var lists = {
					todo: document.getElementById('todo'),
					done: document.getElementById('done')
				};

			var makeTaskHtml = function(newTask, onCheck) {
				var el = document.createElement('li');
				var checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				checkbox.addEventListener('click', onCheck);
				el.appendChild(checkbox);

				
				var label = document.createElement('span');
				label.textContent = newTask;
				el.appendChild(label);
				
				return el;
			};

			var addTask = function(task) {
				lists.todo.appendChild(task);
			}
			
			var onCheck = function(event) {
				var task = event.target.parentElement;
				var list = task.parentElement.id;

				lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
				this.checked = false;
				input.focus();
			};

			var onInput = function() {
				var newTask = input.value.trim();

				if (newTask.length > 0) {
					addTask(makeTaskHtml(newTask, onCheck));
					input.value = '';
					input.focus();
				} 
			};

			/*
			var delSelectedTask = function('click', function(event)) {

				if (input.value.trim().length == 0) {
					var task = event.target.parentElement;
					var checkboxObject = document.getElementById(task.id);
					var parentObject = document.getElementById(
							task.parentObject.id); 
					parentObject.removeChild(checkboxObject);
				}
			}; */

			button.addEventListener('click', onInput);
			input.addEventListener('keyup', function(event) {
				var code = event.keyCode;
				if (code === 13) {
					onInput();
				}
			});

			input.focus();

		}());
