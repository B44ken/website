let item = parseInt(document.location.hash.substring(1)) | 0
const itemNames = ["Home", "Projects", "More Links"]

const itemCount = document.querySelectorAll(".item").length - 1

document.querySelector(".nav-button.right")
	.addEventListener("click", () => updateItem(item + 1))

document.querySelector(".nav-button.left")
	.addEventListener("click", () => updateItem(item - 1))

document.addEventListener("keydown", event => {
	if(event.key == "ArrowLeft")
		updateItem(item - 1)
		
	if(event.key == "ArrowRight")
		updateItem(item + 1)
})

const updateItem = (newItem) => {
	if(typeof newItem == "string") 
		newItem = itemNames.indexOf(newItem)
	item = Math.min(Math.max(newItem, 0), itemCount)
	document.querySelector(".items-list").style.right = item * 100 + "vw"	
	document.location.hash = item
}

updateItem(item)let item = parseInt(document.location.hash.substring(1)) | 0
const itemNames = ["Home", "Projects", "More Links"]

const itemCount = document.querySelectorAll(".item").length - 1

document.querySelector(".nav-button.right")
	.addEventListener("click", () => updateItem(item + 1))

document.querySelector(".nav-button.left")
	.addEventListener("click", () => updateItem(item - 1))

document.addEventListener("keydown", event => {
	if(event.key == "ArrowLeft")
		updateItem(item - 1)
		
	if(event.key == "ArrowRight")
		updateItem(item + 1)
})

const updateItem = (newItem) => {
	if(typeof newItem == "string") 
		newItem = itemNames.indexOf(newItem)
	item = Math.min(Math.max(newItem, 0), itemCount)
	document.querySelector(".items-list").style.right = item * 100 + "vw"	
	document.location.hash = item
}

updateItem(item)let item = parseInt(document.location.hash.substring(1)) | 0
const itemNames = ["Home", "Projects", "More Links"]

const itemCount = document.querySelectorAll(".item").length - 1

document.querySelector(".nav-button.right")
	.addEventListener("click", () => updateItem(item + 1))

document.querySelector(".nav-button.left")
	.addEventListener("click", () => updateItem(item - 1))

document.addEventListener("keydown", event => {
	if(event.key == "ArrowLeft")
		updateItem(item - 1)
		
	if(event.key == "ArrowRight")
		updateItem(item + 1)
})

const updateItem = (newItem) => {
	if(typeof newItem == "string") 
		newItem = itemNames.indexOf(newItem)
	item = Math.min(Math.max(newItem, 0), itemCount)
	document.querySelector(".items-list").style.right = item * 100 + "vw"	
	document.location.hash = item
}

updateItem(item)