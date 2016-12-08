
/**
	this function is wrong, it should be fixed
*/
function updateProgressBar(){
	var todoSize = document.getElementById('todo').getElementsByTagName("li").length;
	var doneSize = document.getElementById('done').getElementsByTagName("li").length;
	//console.log(todoSize);
	//console.log(doneSize);

	var progressBarSim = doneSize/(doneSize+todoSize)*100 || 0;
	progressBarSim = Math.trunc(progressBarSim);
	//console.log(progressBarSim);

	var a = document.querySelector(".progress");
	var i = 0;

	if(a.style.width == progressBarSim + "%") {
	} else {
		a.style.width = progressBarSim + "%";
		a.innerHTML = progressBarSim + "%";
	}
};
updateProgressBar();
