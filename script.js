const strongEle = document.querySelectorAll('strong');
function highlight() {
    //Write your code here
	strongEle.forEach(element =>{
		element.style.color = "rgb(0,28.0)"
	})
}


function return_normal() {
    //Write your code here
	strongEle.forEach(element =>{
		element.style.color = "rgb(0,0.0)"
	})
    
}
