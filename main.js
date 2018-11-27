var items = [
    "Go to the market", 
    "Clean the room", 
    "Clean the laptop", 
    "Buy books",
];

set = new Set();

function attachItems(items) {
    var ul = document.querySelector(".item-list");
    for(var i = 0; i < items.length; i++) {
        var li = makeListItem(items[i]);
        ul.appendChild(li);
    }
}

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

function clearUL() {
    var ul = document.querySelector(".item-list");
    ul.innerHTML = ""
    document.querySelector("#new-item").value = "";
}

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

function deleteItem(anchor) {
    var item = anchor.parentNode.parentNode.firstChild.textContent;
    var index = items.indexOf(item);
    if(index !== -1) {
        items.splice(index, 1);
        clearUL();
        attachItems(items);
    }
}

function checkActivity(i){
	let done = i.parentNode.parentNode.parentNode;
	done.classList.add("active");
}

document.querySelector("#add-item").addEventListener("click", handleClickEvent);

attachItems(items);

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
  
    if(keyName === "Enter")
        handleClickEvent();
  });