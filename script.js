 function spoiler(a) {
    if (a.parentNode.parentNode.getElementsByTagName("div")[1].style.display != "") { 
    a.parentNode.parentNode.getElementsByTagName("div")[1].style.display = "";
    a.innerText = "";
    a.value = "(скрыть)"; 
    }
else {
    a.parentNode.parentNode.getElementsByTagName("div")[1].style.display = "none";
    a.innerText = "";
    a.value = "(показать)";
    }
    }
    
 function spoiler1(a) {
    if (a.parentNode.parentNode.getElementsByTagName("div")[1].style.display != "") { 
    a.parentNode.parentNode.getElementsByTagName("div")[1].style.display = "";
    }
else {
    a.parentNode.parentNode.getElementsByTagName("div")[1].style.display = "none";
    }
    }