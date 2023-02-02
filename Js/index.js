window.onload = getSetGo;

function getSetGo() {
	
	// Getting required Elements
	var sun = document.getElementById("sun");
	var bg = document.getElementById("main");
	var button = document.getElementById("toggle");
	
	var play = true;
	function toggleAnimation() {
		if (play){
			button.innerText = "Play";
			bg.style.animationPlayState = "paused";
			sun.style.animationPlayState = "paused";
			
		}
		else {
			button.innerText = "Pause";
			bg.style.animationPlayState = "running";
			sun.style.animationPlayState = "running";
		}
		play = !play;
	}
	
	// Setting up event listeners
	button.onclick = toggleAnimation;
}