const cautionContainer = document.querySelector(".caution"),
	cautionLink = cautionContainer.querySelector("[rel='js-caution__link'");

const cautionPass = () => {
	cautionContainer.classList.add("hidden");
};

function init() {
	console.log(cautionLink);
	cautionLink.addEventListener("click", cautionPass);
}

init();
