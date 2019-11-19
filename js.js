
var addBtn = document.querySelector('#add');
var toDoList = document.querySelector('ul#list');
var completedList = document.querySelector('ul#completed');
addBtn.onclick = function(){
  var input = document.querySelector('#input');
  var li = document.createElement('li');
  li.setAttribute('class', 'group-list-item');
  var itemValue = input.value;
  console.log(itemValue);
  li.innerHTML = itemValue;
  var checkBox = document.createElement('input');

  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('id', 'myCheck');
  checkBox.setAttribute('style', 'float: left;margin-right: 10px;');
  li.appendChild(checkBox);

  checkBox.onchange = function(){

    var completedLi = document.createElement('li');
    li.removeChild(checkBox);

    completedLi.setAttribute('class', 'group-list-item');

    var itemStringValue = li.innerText.toString();
    var completedItemValue = li.innerText.toString().substr(0, itemStringValue.length - 6);
    completedLi.innerText = completedItemValue;
    var deleteButtonCompleted = document.createElement('button');
    deleteButtonCompleted.innerText = "Delete";
    deleteButtonCompleted.setAttribute('id', 'deleteCompleted');
    deleteButtonCompleted.setAttribute('style', 'float: left;');
    completedLi.appendChild(deleteButtonCompleted);
    deleteButtonCompleted.onclick = function(){
      console.log("Item deleted");
      completedList.removeChild(completedLi);
    }

    completedList.appendChild(completedLi);
    toDoList.removeChild(li);
  }
  // delete button
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = "Delete";
  deleteButton.setAttribute('id', 'delete');
  deleteButton.setAttribute('style', 'float: right;');
  li.appendChild(deleteButton);
  // event handler
  deleteButton.onclick = function(){
    console.log("Deleted");
    li.style.display = 'none';
  }
  if(itemValue === '')
	{
    alert("please add text");
  }
  else{
    toDoList.appendChild(li);
  }
  input.value = '';
}
