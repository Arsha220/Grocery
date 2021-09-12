function visible(){
    document.getElementById("tb").style.visibility="visible";
   }
function groc(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response=JSON.parse(this.responseText);
        var Newgroc=response.grocery;
        console.log(Newgroc);
        var html_content="";
        for (var i=0;i<Newgroc.length;i++) {
            var out=Newgroc[i];
            html_content=html_content+"<tr><td>" + out.Slno + "</td> <td>" +out.Name + "</td> <td>" + out.Quantity + "</td> <td>" + out.Unit + "</td> <td>" + out.Dept + "</td> <td>" + out.Notes + "</td></tr>";
        }
        document.getElementById("click").innerHTML="";
        document.getElementById("tbody").innerHTML=html_content;
        document.getElementById("tb").style.border="1px solid green";
        document.getElementById("tbody").style.backgroundColor="white";
        document.getElementById("tb").style.marginLeft="20px";
        document.getElementById("tb").style.padding="20px";
        document.getElementById("tb").style.marginRight="50px";
        document.getElementById("tb").style.width="1315px";
       
    }
};
xhttp.open("GET","grocery.json",true);
xhttp.send();
}
