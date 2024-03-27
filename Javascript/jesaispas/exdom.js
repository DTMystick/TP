function deviner(){
    var elt = document.documentElement.lastChild;
    alert("je suis un " + elt.nodeName);
    var anotherElt = document.getElementsByTagName("h1")[0];
    alert("je suis un " + anotherElt.nodeValue);
    var enfant = anotherElt.firstChild;
    alert("je suis un " + enfant.nodeValue);
    elt = document.getElementById("felin").lastChild;
    alert("je suis un " + elt.nodeValue);
    alert("je suis un " +
    elt.parentNode.getAttributeNode("id").nodeValue);
}