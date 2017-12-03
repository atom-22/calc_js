function Calculator(){
	function initFunc(){
		var digits = document.getElementsByClassName('digits'),
		mathButtons = document.getElementsByClassName('mathButtons'),
		equal = document.getElementById('equal'),
		display = document.getElementById('display'),
		audio  = document.getElementById('audio'),
		clearBut = document.getElementById('clearButton'),
		allButtons = document.getElementsByClassName('button');

		display.focus();
		clearBut.onclick = clearFunc;

		for(var i=0;i<digits.length;i++){
			digits[i].onclick = digitClick;
		}
		for (var i = 0; i < mathButtons.length; i++) {
			if(mathButtons[i]!=equal){
			   mathButtons[i].onclick = mathClick;}
		}

		document.onkeydown = keyPress;
		equal.onclick = calcEqual;
		
		for (var i = 0; i < allButtons.length; i++) {
			allButtons[i].addEventListener("click", playAudio, true);
		}

	}
	

	function playAudio() {
    	audio.play();
    	return true;
	}


	function calcEqual(){
		if (display.value === '') {
		alert('Input some expression!!!');
		}else{
			var res = eval(display.value);
			display.value = res;
		}
	}


	function clearFunc(){
		display.value = '';
		
	}
	function addValue(value){
		display.value += value;
	}
	
	function digitClick(){
		if (display.value === '' && this.value == 0) {
			return true;
		}
		addValue(this.value);
		
	}
	function mathClick(){
		
		mathOper(this.value);

	}
	
	function mathOper(op){
		if(display.value==""){
			return;
		}
		var dl=display.value.length;
		var lastChar=display.value[dl-1];
		if(lastChar=="+" || lastChar=="-" || lastChar=="*" || lastChar=="/"){
			var s=display.value.substr(0,dl-1);
			display.value=s+op;
		}
		else {addValue(op);}
		
	}
	
	function keyPress(e){
		var key=e.keyCode;
		if (key===46) {
			clearFunc();
		}
		else if (key===8) {
			let string = display.value,
				newStr = string.substring(0, string.length-1);
				display.value = newStr;	
		}
		else if(key<=105 && key>=96){
			addValue(e.key);
		}
		else if(key>=106 && key<=107 || key===109 || key===111){
			mathOper(e.key);	
		}
		else if (key===13) {
			calcEqual();
		}
		return false;
		
		}

	
	this.setColor = function(cssColor){
		var container = document.getElementById("main");
		container.style.backgroundColor = cssColor;
	}
	this.appendHtml = function(contId){
		var container = document.getElementById(contId);
			
			var mainDiv = document.createElement("div");
			mainDiv.setAttribute('class','container newStyle');
			mainDiv.setAttribute('id','main');
			container.appendChild(mainDiv);
		
			var nestedDiv = document.createElement("div");
			nestedDiv.setAttribute('class','nestedStyle');
			mainDiv.appendChild(nestedDiv);


			var inputField = document.createElement('input');
			inputField.setAttribute('id','display');
			inputField.setAttribute('class','calcDisplay');
			inputField.setAttribute('type','text');
			inputField.setAttribute('name','display');
			nestedDiv.appendChild(inputField);

			var buttonSeven = document.createElement('input');
			buttonSeven.setAttribute('type','button');
			buttonSeven.setAttribute('class','button digits');
			buttonSeven.setAttribute('value','7');
			nestedDiv.appendChild(buttonSeven);

			var buttonEight = document.createElement('input');
			buttonEight.setAttribute('type','button');
			buttonEight.setAttribute('class','button digits');
			buttonEight.setAttribute('value','8');
			nestedDiv.appendChild(buttonEight);

			var buttonNine = document.createElement('input');
			buttonNine.setAttribute('type','button');
			buttonNine.setAttribute('class','button digits');
			buttonNine.setAttribute('value','9');
			nestedDiv.appendChild(buttonNine);

			var buttonPlus = document.createElement('input');
			buttonPlus.setAttribute('type','button');
			buttonPlus.setAttribute('class','button mathButtons');
			buttonPlus.setAttribute('value','+');
			nestedDiv.appendChild(buttonPlus);

			var buttonFour = document.createElement('input');
			buttonFour.setAttribute('type','button');
			buttonFour.setAttribute('class','button digits');
			buttonFour.setAttribute('value','4');
			nestedDiv.appendChild(buttonFour);

			var buttonFive = document.createElement('input');
			buttonFive.setAttribute('type','button');
			buttonFive.setAttribute('class','button digits');
			buttonFive.setAttribute('value','5');
			nestedDiv.appendChild(buttonFive);

			var buttonSix = document.createElement('input');
			buttonSix.setAttribute('type','button');
			buttonSix.setAttribute('class','button digits');
			buttonSix.setAttribute('value','6');
			nestedDiv.appendChild(buttonSix);

			var buttonMinus = document.createElement('input');
			buttonMinus.setAttribute('type','button');
			buttonMinus.setAttribute('class','button mathButtons');
			buttonMinus.setAttribute('value','-');
			nestedDiv.appendChild(buttonMinus);

			var buttonOne = document.createElement('input');
			buttonOne.setAttribute('type','button');
			buttonOne.setAttribute('class','button digits');
			buttonOne.setAttribute('value','1');
			nestedDiv.appendChild(buttonOne);

			var buttonTwo = document.createElement('input');
			buttonTwo.setAttribute('type','button');
			buttonTwo.setAttribute('class','button digits');
			buttonTwo.setAttribute('value','2');
			nestedDiv.appendChild(buttonTwo);

			var buttonThree = document.createElement('input');
			buttonThree.setAttribute('type','button');
			buttonThree.setAttribute('class','button digits');
			buttonThree.setAttribute('value','3');
			nestedDiv.appendChild(buttonThree);

			var buttonMult = document.createElement('input');
			buttonMult.setAttribute('type','button');
			buttonMult.setAttribute('class','button mathButtons');
			buttonMult.setAttribute('value','*');
			nestedDiv.appendChild(buttonMult);

			var buttonClear = document.createElement('input');
			buttonClear.setAttribute('type','button');
			buttonClear.setAttribute('class','button');
			buttonClear.setAttribute('id','clearButton');
			buttonClear.setAttribute('value','C');
			nestedDiv.appendChild(buttonClear);

			var buttonZero = document.createElement('input');
			buttonZero.setAttribute('type','button');
			buttonZero.setAttribute('class','button digits');
			buttonZero.setAttribute('value','0');
			nestedDiv.appendChild(buttonZero);

			var buttonEqual = document.createElement('input');
			buttonEqual.setAttribute('type','button');
			buttonEqual.setAttribute('class','button mathButtons');
			buttonEqual.setAttribute('id','equal');
			buttonEqual.setAttribute('value','=');
			nestedDiv.appendChild(buttonEqual);

			var buttonDivide = document.createElement('input');
			buttonDivide.setAttribute('type','button');
			buttonDivide.setAttribute('class','button mathButtons');
			buttonDivide.setAttribute('value','/');
			nestedDiv.appendChild(buttonDivide);

			initFunc();
			
	}
}