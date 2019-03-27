function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if (xhr.readyState===4 && xhr.status=="200") {
    callback(xhr.responseText);
  }
}
xhr.send();
}
loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
console.log(data);
profile(data.profile);
Career(data.Career);
EducationalDeatils(data.EducationalDeatils);
Skills(data.Skills);
})


var details=document.querySelector(".details");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  details.append(image);


  var name=document.createElement("h2");
  name.textContent=p.name;
  details.append(name);

var designation=document.createElement("h2");
designation.textContent=p.designation;
details.append(designation);

var Mobile=document.createElement("h2");
Mobile.textContent=p.Mobile;
details.append(Mobile);

var email=document.createElement("h2");
email.textContent=p.email;
details.append(email);
}

var right=document.querySelector(".right");
function Career(ka){
  var h1=document.createElement("h2");
  h1.textContent="career Objective";
  right.append(h1);

var hr=document.createElement("hr");
right.append(hr);
var info=document.createElement("h5");

info.textContent=ka.info;
right.append(info);

}
var right=document.querySelector(".right");
function EducationalDeatils(ED){
var h1=document.createElement("h2");
h1.textContent="Educational Deatils";
right.append(h1);

var h2=document.createElement("hr");
right.append(h2);

var table=document.createElement("table");
table.border="2";
var tr1="<tr><th>Degree</th><th>Institute</th><th>percentage</th><th>yop</th></tr>";
var tr2="";
for(i=0;i<ED.length;i++){
  tr2=tr2+"<tr><td>"+ED[i].Degree+"</td><td>"+ED[i].Institute+"</td><td>"+ED[i].percentage+"</td><td>"+ED[i].yop+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);

}
var right=document.querySelector(".right");
function Skills(s){
  var h1=document.createElement("h2");
  h1.textContent="Skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);

  var ul=document.createElement("ul");
  for(var i in s)
  {
    var li=document.createElement("li");
    li.innerHTML=s[i].Name+":"+s[i].info;
    ul.append(li);

  }
  right.append(ul);
}
