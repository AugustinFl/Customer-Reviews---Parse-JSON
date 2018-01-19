var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var obj = JSON.parse(xhttp.responseText);
       console.log(obj);
    }
};
xhttp.open("GET", "file.json", true);
xhttp.send();


var view = {

}
