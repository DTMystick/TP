function effacerDOM(elt) {
    if (elt != null) {
        while (elt.hasChildNodes()) {
            let nf = elt.firstChild;
            elt.removeChild(nf);
        }
    }
}

function remplacerTexte(elt, texte) {
    if (elt != null) {
        effacerDOM(elt);
        let newNoeud = document.createTextNode(texte);
        elt.appendChild(newNoeud);
    }
}

function getTexte(elt) {
    var texte = "";
    if (elt != null) {
        if (elt.hasChildNodes()) {
            for (var i = 0; i < elt.childNodes.length; i++) {
                var nf = elt.childNodes[i];
                if (nf.nodeValue != null) {
                    texte += nf.nodeValue;
                } else {
                    texte += getTexte(nf);
                }
            }
        }
    }
    return texte;
}

function effacerTitre(elt) {
    if (elt != null) {
        while (elt.hasChildNodes()) {
            let nf = elt.firstChild;
            elt.removeChild(nf);
        }
        elt.parentElement.removeChild(elt);
    }
}