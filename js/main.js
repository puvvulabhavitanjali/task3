var arrHead = new Array();	
arrHead = ['DEGREE', 'INSTITUTION','YEAR OF PASSING',"MARKS"];

function createTable() {
   
}


function getJson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status == "200"){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
//Calling function
getJson("js/data.json",function(text){
    var data = JSON.parse(text);
    // console.log(data)
    displayData(data.data)
    tdd(data.trainers,data.ssc,data.Skills)
    
})

var bodyElement=document.querySelector("body");
var maindiv = document.createElement("div");
maindiv.classList.add ("maindiv");
bodyElement.appendChild(maindiv);


function displayData(info)
{
    var leftdiv = document.createElement("div");
    leftdiv.classList.add("leftdiv");
    maindiv.appendChild(leftdiv);
    var img = document.createElement("img");
    img.src = info.image;
    leftdiv.appendChild(img);
    var h1 = document.createElement("h1");
    h1.textContent = "198W1F0049";
    leftdiv.appendChild(h1);
    var h1 = document.createElement("h1");
    h1.textContent = info.name;
    leftdiv.appendChild(h1);
  
    var h2 = document.createElement("h2");
    h2.textContent = "PERSONAL DETAILS";
    leftdiv.appendChild(h2);
    var h3 = document.createElement("h3");
    h3.textContent = info.mail;
    leftdiv.appendChild(h3);
    var h3 = document.createElement("h3");
    h3.textContent = info.PhoneNumber;
    leftdiv.appendChild(h3);
  
    var h3 = document.createElement("h3");
    h3.textContent = info.address;
    leftdiv.appendChild(h3);
   
} 

function tdd(trd,ssc,skills)
{
    var rightdiv = document.createElement("div");
    rightdiv.classList.add("rightdiv");
    maindiv.appendChild(rightdiv);
    var tdiv=document.createElement("div");
    rightdiv.appendChild(tdiv);
    var h1= document.createElement("h1");
    h1.textContent= "OBJECTIVE";
    tdiv.appendChild(h1);

    for(i in ssc){
    if(i==0){
        var h3= document.createElement("h3");
        h3.textContent= ssc[i].object;
        tdiv.appendChild(h3);
    }}
    var h1= document.createElement("h1");
    h1.textContent= "Education Qualification";
    tdiv.appendChild(h1);
     var table = document.createElement('table');
     table.setAttribute('id', 'empTable'); 
     tdiv.appendChild(table);
     var tr = empTable.insertRow(-1);
    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th'); // create table headers  /empname designation age/
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }
for(i in ssc){
   
    if(i>0){
    var empTab = document.getElementById('empTable');
    var rowCnt = empTab.rows.length;   
    var tr = empTab.insertRow(rowCnt); // the table row.
    tr = empTab.insertRow(rowCnt);
    
     for (var c = 0; c < arrHead.length; c++) {
         console.log(arrHead.length);
         var td = document.createElement('td'); // table definition.
         td = tr.insertCell(c);

         if (c == 0) {      // the first column.
            var h1=document.createElement("h1");
				var textnode = document.createTextNode(ssc[i].Degree);
                h1.appendChild(textnode); 
                td.appendChild(h1);
         }
         else if(c==1) {
            var h1=document.createElement("h1");
            var textnode = document.createTextNode(ssc[i].institution);
            h1.appendChild(textnode); 
            td.appendChild(h1);
         }else if(c==2){
            var h1=document.createElement("h1");
            var textnode = document.createTextNode(ssc[i].yearofpassing);
            h1.appendChild(textnode); 
            td.appendChild(h1);
            
         }else if(c==3){
            var h1=document.createElement("h1");
            var textnode = document.createTextNode(ssc[i].marks);
            h1.appendChild(textnode); 
            td.appendChild(h1);
         }


     }
     tr.appendChild(td);
    }}
    var h1= document.createElement("h1");
    h1.textContent= "Skills";
    tdiv.appendChild(h1);

            var h2=document.createElement("h2");
            var textnode = document.createTextNode("FRONT END");
            h2.appendChild(textnode); 
            tdiv.appendChild(h2);

for(i in skills.FrontEnd){
console.log(skills.FrontEnd[i]);
var ul=document.createElement("ul");
        tdiv.appendChild(ul);
    var li=document.createElement("li");
    var textnode = document.createTextNode(skills.FrontEnd[i]);
    li.appendChild(textnode); 
    ul.appendChild(li);
}
var h2=document.createElement("h2");
            var textnode = document.createTextNode("BACK END");
            h2.appendChild(textnode); 
            tdiv.appendChild(h2);

for(i in skills.BackEnd){
    console.log(skills.BackEnd[i]);  
    var ul=document.createElement("ul");
        tdiv.appendChild(ul);
    var li=document.createElement("li");
    var textnode = document.createTextNode(skills.BackEnd[i]);
    li.appendChild(textnode); 
    ul.appendChild(li);
}
}
