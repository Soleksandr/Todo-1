var input = document.querySelector ('input');
var buttonOchistit = document.getElementById ('ochistit');
var buttonAdd = document.getElementById ('add')
var ul = document.querySelector('ul');
var i = 0;
var k = 0;
var r = 0;
var j = 0;
var data = new Date();
var day = data.getDay()
console.log (input)
console.log (buttonAdd.getAttribute ('id'))

var defaultTaskStyle = {
    color: 'black',
    TextDecoder: 'none',
    padding: "15px"
   }

    function getCurrentDate () {
    var data = new Date();
    var yer = data.getFullYear();
    var month = (data.getMonth() + 1) <10 ? '0' + (data.getMonth() + 1) : (data.getMonth() + 1);
    var day = data.getDate()  <10 ? '0'+ (data.getDate()):(data.getDate() );
    var hour = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();
    var date = day + '.' + month + '.' + yer + '; ' + hour + ':' + minutes + ':' + seconds;
    return date
    }


    function addText () {

    var li = document.createElement('li');
    var newButton = document.createElement ('button');
    var checkedDone = document.createElement ('input');
    var span = document.createElement("span");
    var spanDate = document.createElement ('span');
    var div = document.createElement ('div');
    var div1 = document.createElement ('div');
    var label = document.createElement ('label');

     
   if (input.value === "")    {
       alert ('Вы не ввели задачу!')
   } else {
       

        checkedDone.type = 'checkbox';

        ul.appendChild (li);
        newButton.setAttribute ("id", "del" + ++i);
        label.setAttribute ('for', 'done'+ ++j);
        checkedDone.setAttribute ('id', 'done' + ++k);
        span.setAttribute ('id', 'sp' + ++r);
        span.className = 'textSpan';
        newButton.className = 'buttonDel';
        spanDate.className = 'spanData';
        div.className = 'divLi';
        div1.className = 'divDataDel';

        li.appendChild (div);
        li.appendChild (div1);
        div.appendChild (checkedDone);
        div.appendChild (label);
        div.appendChild (span);
        div1.appendChild (spanDate);
        div1.appendChild (newButton);
                
        
        spanDate.innerHTML = getCurrentDate ();
        newButton.innerText = ('+');
        span.innerText = input.value;
        input.value = "";

   span.addEventListener("dblclick", function(e) {
    var inputEdit = document.createElement ('input');
    inputEdit.value = span.innerText;
    e.target.parentNode.replaceChild(inputEdit, span);
    inputEdit.setAttribute ( 'id', 'rep' + ++j);
    inputEdit.className = 'newText'
        
   })
    li.addEventListener ('keydown', function (e) {
        var target = event.target;
        if (target.tagName === 'INPUT' && target.id.indexOf ('rep') !== -1 && e.keyCode === 13){
        console.log (target)
        e.target.parentNode.replaceChild (span, target)
        span.innerText = target.value;
            }
        })
    }
};

function deleteNoteText   (event) {
    var target = event.target;
    var task = target.nextSibling
    
    console.log (target, target.tagName, task)
  
    if (target.tagName = 'BUTTON' && target.id.indexOf("del") !== -1 ) {
        var parent = target.parentNode.parentNode;
        console.log (parent)
        ul.removeChild (parent);
    };

    if (target.tagName = 'INPUT' && target.checked && target.id.indexOf ('done') !== -1) {
        task.nextSibling.style.setProperty ("text-decoration", "line-through");
        task.nextSibling.style.color = 'rgb(195,195,195)'
        task.style.color = 'white';
       
    }   
    else if (target.tagName = 'INPUT' && target.checked === false && target.id.indexOf ('done') !== -1) {
        task.nextSibling.style = defaultTaskStyle;

    }

};

// function clear (e) {
//     var target = event.target;
//     if (target.tagName = 'BUTON' && target.id === "ochistit") {
//         ul.removeChild ()
//         console.log (target)
//     }
// }

buttonAdd.addEventListener('click', addText);

input.addEventListener ("keydown", function (e) {
    if (e.keyCode === 13) {
        addText()
    }
});

ul.addEventListener("click", deleteNoteText);

// buttonOchistit.addEventListener ("click", clear)












