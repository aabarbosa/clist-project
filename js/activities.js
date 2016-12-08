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
		var label = document.createElement('span');
		var img = document.createElement('img');

		label.textContent = newTask;
		img.setAttribute('src', 'images/x-icon.png');
		checkbox.type = 'checkbox';
		checkbox.addEventListener('click', onCheck);
		el.appendChild(checkbox);
		el.appendChild(label);
		el.appendChild(img);

		img.onclick = function () {
			this.parentElement.removeChild(this);
			checkbox.parentElement.removeChild(checkbox);
			label.parentElement.removeChild(label);
	    };

		return el;
	};

	var addTask = function(task) {
		lists.todo.appendChild(task);
	}
	
	var onCheck = function(event) {
		var task = event.target.parentElement;
		var list = task.parentElement.id;

		if (list == 'done') {
			lists['todo'].appendChild(task);
			this.checked = false;
		} else {
			lists['done'].appendChild(task);
			this.checked = true;
		}
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

	button.addEventListener('click', onInput);
	input.addEventListener('keyup', function(event) {
		var code = event.keyCode;
		if (code === 13) {
			onInput();
		}
	});

	input.focus();
	
}());
