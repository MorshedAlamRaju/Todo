// Activity list
var items = [];

// List to check for duplicate activity
set = new Set();

// This function creates "li" element using the activities then adds them on "ul" element
function attachItems(items) {
    if(items.length === 0){
        document.querySelector(".item-list").innerHTML = "No activity to accomplish!";
    }else {
        var ul = document.querySelector(".item-list");
        for(var i = 0; i < items.length; i++) {
            var li = makeListItem(items[i]);
            ul.appendChild(li);
        }
    }
}

// Helper function that creates "li" element
function makeListItem(text) {

		var div = document.createElement("div");
		var div1 = document.createElement("div");
		var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    div.classList.add("row");
    div1.classList.add("col");
    div2.classList.add("col"); 
    div3.classList.add("col");
    div1.classList.add("s10");
    div2.classList.add("s1");
    div3.classList.add("s1");
    var li = document.createElement("li");
    li.classList.add("collection-item");
    var i = document.createElement("i");
    i.classList.add("material-icons");
    i.innerHTML = "check_circle";
    i.onclick = function(){checkActivity(this)};
    div2.appendChild(i);
    var a = document.createElement("i");
    a.classList.add("material-icons");
    a.innerHTML = "delete";
    a.onclick = function() {deleteItem(this);};
    var textNode = document.createTextNode(text);
    div1.appendChild(textNode);
    div3.appendChild(a);
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);
    li.appendChild(div);
    return li;
}

// whaenever user adds/removes an activites from to-do list this 
// function clears the "ul" element first before updating the list 
function clearUL() {
    var ul = document.querySelector(".item-list");
    ul.innerHTML = ""
    document.querySelector("#new-item").value = "";
}

// Whenever the user presses 'Enter' key or 'Add activity' button this function
// gets called and works accordingly
function handleClickEvent() {
    var inpEl = document.querySelector("#new-item");
    var val = inpEl.value;
    if(set.has(val)){
        document.querySelector(".msg").innerHTML = "Activity already exist!"
        document.querySelector("#new-item").value = "";       
    }
    else if(val) {
        items.push(val);
        clearUL();
        attachItems(items);
        set.add(val);
    }
    else {
        document.querySelector(".msg").innerHTML = "No new activity found!"
    }
}

//Function deletes an activity from the activity list
function deleteItem(anchor) {
    var item = anchor.parentNode.parentNode.firstChild.textContent;
    var index = items.indexOf(item);
    if(index !== -1) {
        items.splice(index, 1);
        clearUL();
        attachItems(items);
    }
}

// It updates the status of accomplished activity 
function checkActivity(i){
	let done = i.parentNode.parentNode.parentNode;
	done.classList.add("active");
}

// Handles events
document.querySelector("#add-item").addEventListener("click", handleClickEvent);

//this function adds activities(if there is any) initially to the activity list
attachItems(items);

// This function enables 'Enter' key to work same as "add activty" button when pressesd
document.addEventListener('keypress', (event) => {
    const keyName = event.key;
  
    if(keyName === "Enter")
        handleClickEvent();
  });