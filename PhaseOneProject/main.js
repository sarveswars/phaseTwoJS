//JavaScript document

/*This is the function to add an
 *activity to the to-do-list
 */
function addActivity() {

    //declaring and assigning
    let list = document.createElement("li");
    let activity = document.getElementById("text").value;
    let text = document.createTextNode(activity);
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";
    list.appendChild(checkbox);

    list.appendChild(text);
    //Not allowing empty inputs by the user
    if (activity == "") {
        alert("Please don't leave the box empty")
    } else {
        document.getElementById("activityList").appendChild(list);
    }


    //clearing the value in the textbox
    document.getElementById("text").value = "";



    let btn = document.createElement("button");
    let value = document.createTextNode("Delete");
    btn.className = "close";

    btn.appendChild(value);
    list.appendChild(btn);


    // to Delete the activity when the Clicks the delete button
    let close = document.getElementsByClassName('close');
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    var list2 = document.querySelector('ul');
    list2.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
      }, false);
}
