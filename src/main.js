const { invoke } = window.__TAURI__.core;

// Wrap each character in a .wave element with a <span>
function initWaveText() {
	document.querySelectorAll(".wave").forEach((element) => {
		const text = element.textContent;
		element.innerHTML = "";

		text.split("").forEach((char, index) => {
			const span = document.createElement("span");
			span.classList.add("char");
			span.textContent = char === " " ? "\u00A0" : char; // preserve spaces
			span.style.animationDelay = `${index * 0.1}s`; // stagger timing
			element.appendChild(span);
		});
	});
}

// Run on page load
document.addEventListener("DOMContentLoaded", initWaveText);
