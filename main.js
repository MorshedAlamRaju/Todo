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
    var li = document.createElement("li");
    li.classList.add("collection-item");
    li.classList.add("active");
    var a = document.createElement("i");
    a.classList.add("material-icons");
    a.innerHTML = "delete";
    a.onclick = function() {
        deleteItem(this);
    };

    var textNode = document.createTextNode(text);

    li.appendChild(textNode);  
    li.appendChild(a);
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
    var item = anchor.parentNode.firstChild.textContent;
    var index = items.indexOf(item);
    if(index !== -1) {
        items.splice(index, 1);
        clearUL();
        attachItems(items);
    }
    console.log(index);
}

document.querySelector("#add-item").addEventListener("click", handleClickEvent);

attachItems(items);

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
  
    if(keyName === "Enter")
        handleClickEvent();
  });
  