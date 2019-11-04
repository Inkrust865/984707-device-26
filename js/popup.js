var modalMap = document.querySelector(".modal-map");
var buttonMap = document.querySelector(".button-map");
var mapClose = modalMap.querySelector(".button-close");

buttonMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalMap.classList.remove("modal-show");
})

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalMap.classList.contains("modal-show")) {
			evt.preventDefault();
			modalMap.classList.remove("modal-show");
		}
	}
})

var modalFeedback = document.querySelector(".modal-feedback");
var buttonFeedback = document.querySelector(".button-feedback");
var buttonClose = modalFeedback.querySelector(".button-close");
var userName = modalFeedback.querySelector("[name=user-name]");
var form = modalFeedback.querySelector("form");
var email = modalFeedback.querySelector("[name=user-e-mail]");
var message = modalFeedback.querySelector("[name=user-message]");

var isStorageSupport = "true";
var storage = "";

try {
	storage = localStorage.getItem("userName");
} catch(err) {
	isStorageSupport = "false";
}

buttonFeedback.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalFeedback.classList.add("modal-show");
	
	if (storage) {
		userName.value = storage;
		email.focus();
	} else {
		userName.focus();
	}
});

buttonClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	modalFeedback.classList.remove("modal-show");
	modalFeedback.classList.remove("modal-error");
})

form.addEventListener("submit", function(evt) {
	if (!userName.value || !email.value || !message.value) {
		evt.preventDefault();
		modalFeedback.classList.remove("modal-error");
		modalFeedback.offsetWidth = modalFeedback.offsetWidth;
		modalFeedback.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
		}
	}
})

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (modalFeedback.classList.contains("modal-show")) {
			evt.preventDefault();
			modalFeedback.classList.remove("modal-show");
			modalFeedback.classList.remove("modal-error");
		}
	}
})