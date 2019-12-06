//I need a global variable that will store the total number of guests.
var room1total = 0;
var room2total = 0;


//////////////// START Room 1 /////////////////////////////////
function checkIn() {

    if (room1total > 4) {  //I am going to check if the room has more than 4 guests
        alert("room is full");
    }
    else {
        room1total++;
        var x = new Date();
        var r = x.toLocaleString();
        var newList = document.createElement('li');
        var a = document.getElementById('user').value + ' '+r ;
        var newText = document.createTextNode(a);
        newList.appendChild(newText);
        var position = document.getElementById('olOne'); 
        position.appendChild(newList);
        document.getElementById('user').value = "";
        
    } 
}

function removeMe() {
    room1total =-1;
    var personNum = document.getElementById("remNum").value;
   var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
   document.getElementById('remNum').value = " ";
   }
   function clear() {
  
}
var onoff=true;
function vtest(){
    if(onoff == true){
        document.getElementById('away').style.visibility = "hidden";
        onoff= false;
    }
    else {
        document.getElementById('away').style.visibility = "visible";
        onoff = true;
    }
}

//////////////// END Room 1 /////////////////////////////////

//////////////// START Room 2 /////////////////////////////////
function checkInTwo() {
    if (room2total > 4) {
        alert("room is full");
    }
    else {
        room2total++; //I am going to add +1 to the room2total variable
        var x = new Date();
        var r = x.toLocaleString();
        var newList = document.createElement('li');
        var a = document.getElementById('userTwo').value + ' '+r ;
        var newText = document.createTextNode(a);
        newList.appendChild(newText);
        var position = document.getElementById('olTwo'); 
        position.appendChild(newList);
        document.getElementById('userTwo').value = "";
        
    } 
}

function removeMeTwo() {
    room2total=-1; //I will -1 from the room2total variable
    var personNum = document.getElementById("remNumTwo").value;
   var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
   document.getElementById('remNumTwo').value = "";
   }

   var onoff=true;
function vtestTwo(){
    if(onoff == true){
        document.getElementById('awayTwo').style.visibility = "hidden";
        onoff= false;
    }
    else {
        document.getElementById('awayTwo').style.visibility = "visible";
        onoff = true;
    }
}
//////////////// END Room 2 /////////////////////////////////


//////room 3////
function checkInThree() {
    var roomThree = document.getElementsByTagName('li');
    if (roomThree.length > 4) {
        alert("room is full");
    }
    else {
        var x = new Date();
        var r = x.toLocaleString();
        var newList = document.createElement('li');
        var a = document.getElementById('userThree').value + ' '+r ;
        var newText = document.createTextNode(a);
        newList.appendChild(newText);
        var position = document.getElementById('olThree'); 
        position.appendChild(newList);
        document.getElementById('userThree').value = "";
        
    } 
}

function removeMeThree() {
    var personNum = document.getElementById("remNumThree").value;
   var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
   document.getElementById('remNumThree').value = " ";
   }

   function vtestThree(){
    if(onoff == true){
        document.getElementById('awayThree').style.visibility = "hidden";
        onoff= false;
    }
    else {
        document.getElementById('awayThree').style.visibility = "visible";
        onoff = true;
    }
}

/////room 4/////
function checkInFour() {
    var roomFour = document.getElementsByTagName('li');
    if (roomFour.length > 4) {
        alert("room is full");
    }
    else {
        var x = new Date();
        var r = x.toLocaleString();
        var newList = document.createElement('li');
        var a = document.getElementById('userFour').value + ' '+r ;
        var newText = document.createTextNode(a);
        newList.appendChild(newText);
        var position = document.getElementById('olFour'); 
        position.appendChild(newList);
        document.getElementById('userFour').value = "";
        
    } 
}

function removeMeFour() {
    var personNum = document.getElementById("remNumFour").value;
   var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
   document.getElementById('remNumFour').value = " ";
   }

function vtestFour(){
    if(onoff == true){
        document.getElementById('awayFour').style.visibility = "hidden";
        onoff= false;
    }
    else {
        document.getElementById('awayFour').style.visibility = "visible";
        onoff = true;
    }
}

//////room 5//////
function checkInFive() {
    var roomFive = document.getElementsByTagName('li');
    if (roomFive.length > 4) {
        alert("room is full");
    }
    else {
        var x = new Date();
        var r = x.toLocaleString();
        var newList = document.createElement('li');
        var a = document.getElementById('userFive').value + ' '+r ;
        var newText = document.createTextNode(a);
        newList.appendChild(newText);
        var position = document.getElementById('olFive'); 
        position.appendChild(newList);
        document.getElementById('userFive').value = "";
        
    } 
}

function removeMeFive() {
    var personNum = document.getElementById("remNumFive").value;
   var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
   document.getElementById('remNumFive').value = " ";
   }

function vtestFive(){
    if(onoff == true){
        document.getElementById('awayFive').style.visibility = "hidden";
        onoff= false;
    }
    else {
        document.getElementById('awayFive').style.visibility = "visible";
        onoff = true;
    }
}

////room 6/////
function checkInSix() {
    var roomSix = document.getElementsByTagName('li');
    if (roomSix.length > 4) {
        alert("room is full");
    }
    else {
        var x = new Date();
        var r = x.toLocaleString();
        var newList = document.createElement('li');
        var a = document.getElementById('userSix').value + ' '+r ;
        var newText = document.createTextNode(a);
        newList.appendChild(newText);
        var position = document.getElementById('olSix'); 
        position.appendChild(newList);
        document.getElementById('userSix').value = "";
        
    } 
}

function removeMeSix() {
    var personNum = document.getElementById("remNumSix").value;
   var x = parseInt(personNum);
    var getChild = document.getElementsByTagName('li')[x - 1];
    var getParent = getChild.parentNode;
    getParent.removeChild(getChild);
   document.getElementById('remNumSix').value = " ";
   }

   function vtestSix(){
    if(onoff == true){
        document.getElementById('awaySix').style.visibility = "hidden";
        onoff= false;
    }
    else {
        document.getElementById('awaySix').style.visibility = "visible";
        onoff = true;
    }
}
