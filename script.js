var $task = document.getElementById('inpTaskName').value; //placeholder for task name 


function addTask() {

	$task = document.getElementById('inpTaskName').value;

	var $ul = document.getElementById('ulCurrent');

	var $li = document.createElement("li");

	var $divTask = document.createElement("div"); //create div#task

	$divTask.id += "task"; 

	var $sectionTaskGrid = document.createElement("section");

	$sectionTaskGrid.id += "taskGrid";

	var $divOne = document.createElement("div"); //create div with task name and description

	var $taskTitle = document.createElement("h2"); 

	$taskTitle.appendChild(document.createTextNode($task));

	var $divButtonsTaskPane = document.createElement("div");

	$divButtonsTaskPane.id += "buttonsTaskPane";

	//create three i tags for the buttons 

	var $iCheck = document.createElement("i");
	var $iPencil = document.createElement("i");
	var $iBan = document.createElement("i");

	//assign classes to each button i tag

	$iCheck.className += "fa fa-check fa-2x";
	$iPencil.className += "fa fa-pencil fa-2x";
	$iBan.className += "fa fa-ban fa-2x";

	//attach buttons i tags to buttonsTaskPane
	$divButtonsTaskPane.appendChild($iCheck);
	$divButtonsTaskPane.appendChild($iPencil);
	$divButtonsTaskPane.appendChild($iBan);

	//add button functionality
	$iBan.addEventListener("click", function(){

		this.closest('li').remove();

	});

	//complete task, also transforms into return task to curent

	$iCheck.addEventListener("click", function(){

		
		var $ulComplete = document.getElementById('ulComplete'); //placeholder for 'completed' task ul
		
		if ($iCheck.className === "fa fa-check fa-2x") { //this is a conditional based on the DOM class tag for the button, based on the icon

		this.closest('#task').style.backgroundColor ='#6F6A6C';
		this.closest('#task').style.opacity = '0.4';
		this.closest('#task').style.border = 'none';	

		$ulComplete.appendChild(this.closest('li'));
		$iCheck.className = "";
		$iCheck.className += "fa fa-repeat fa-2x";		

	} else {
		
		$ul.appendChild(this.closest('li'));
		$iCheck.className = "";
		$iCheck.className += "fa fa-check fa-2x"; //return button icon to check

		this.closest('#task').style.backgroundColor =''; //change css props back to original 'current' styling
		this.closest('#task').style.opacity = '1';
		this.closest('#task').style.border = '1px solid #39393a';

	}

	});

	//edit task

	$iPencil.addEventListener('click', function(){

		alert('edit');

	});



	$divOne.appendChild($taskTitle); 	//attach h2 to divOne
	$sectionTaskGrid.appendChild($divOne); //attach first div to #taskGrid
	$sectionTaskGrid.appendChild($divButtonsTaskPane); //attach second div to #taskGrid
	$divTask.appendChild($sectionTaskGrid); //attach #taskGrid to div#task
	$li.appendChild($divTask); //attach div#task to li
	$ul.appendChild($li); //attach li to ul

	//$li.appendChild(document.createTextNode($task));
	//$ul.appendChild($li);


}





//fxn to add task
document.getElementById('btnTaskEnter').onclick = function(){

	var $input = document.getElementById('inpTaskName');

	if ($input.value != "") {
		addTask();
	}
}

//fxn for each ban button to remove parent task

