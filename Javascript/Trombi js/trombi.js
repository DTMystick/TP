document.write('<div class="container-fluid">')
document.write('<div class="row">')
document.write('<div id="texte" class="col-sm-2">')
document.write('<p>Bonjour, voici quelques stars du 7ème art</p>')
document.write('</div>')
document.write('<div class="col-sm-10" id="blk">')


// for(cpt1 = 1 ; cpt1 < 16 ; cpt1++){
//     document.write('<div class="row">')
//     document.write('</div>')
// }

for (cpt = 0 ; cpt < 47 ; cpt++){
    


    if (cpt%3 != 0){
        document.write('<div class="row">')
    }

    
    document.write("<div class='col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center photo'>")
    document.write("<img src='./image/" + cpt + ".jpg'></img>")
    document.write("</div>")
    document.write("<div class='col-xs-6 col-sm-4 col-md-3 col-lg-2 text-center photo'>")
    document.write("<img src='./image/" + cpt + "-petit.jpg'></img>")
    document.write("</div>")
    
    if (cpt%3 != 0){
        document.write('</div>')
    }
}


document.write('</div>')
document.write('</div>')
document.write('</div>')
