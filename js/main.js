//AFFICHAGE DATE ET HEURE

function HeureCheckEJS()

	{

	krucial = new Date;

	heure = krucial.getHours();

	min = krucial.getMinutes();

	sec = krucial.getSeconds();

	jour = krucial.getDate();

	mois = krucial.getMonth()+1;

	annee = krucial.getFullYear();

	if (sec < 10)

		sec0 = "0";

	else

		sec0 = "";

	if (min < 10)

		min0 = "0";

	else

		min0 = "";

	if (heure < 10)

		heure0 = "0";

	else

		heure0 = "";

	if (mois == 1)

		mois = "Janvier";

	if (mois == 2)

		mois = "Février";

	if (mois ==3)

		mois = "Mars";

	if (mois == 4)

		mois = "Avril";

	if (mois == 5)

		mois = "Mai";

	if (mois == 6)

		mois = "Juin";

	if (mois == 7)

		mois = "Juillet";

	if (mois == 8)

		mois = "Août";

	if (mois == 9)

		mois = "Septembre";

	if (mois == 10)

		mois = "Octobre";

	if (mois == 11)

		mois = "Novembre";

	if (mois == 12)

		mois = "Décembre";

	if (jour == 1)

		jour1 = "er";

	else

		jour1 = "";

	DinaHeure = "Il est " + heure0 + heure + "h" + min0 + min  + " et nous sommes le " + jour + jour1 + " " + mois + " " + annee;

	which = DinaHeure

	if (document.getElementById){

		document.getElementById("ejs_heure").innerHTML=which;

	}

	setTimeout("HeureCheckEJS()", 1000)

	}

window.onload = HeureCheckEJS;

//AFFICHER LE ALT AUX IMAGES

var mesimages = document.getElementsByTagName("img");

for (var i = 0; i < mesimages.length; i++) {

  mesimages[i].addEventListener ("mouseover", function() {
    var alt = this.alt;
    div1.textContent = alt;
    div2.textContent = alt;
    div3.textContent = alt;
		div4.textContent = alt;
  });
}


//BOUTON CONFIRMATION

var element = document.getElementById('btn');

element.onclick = function () {
	confirm('Êtes-vous sûr ?');
};


//CHRONOMETRE SECONDE

                  var seconde=0;
                  function chrono()
                  {
                    document.getElementById("mychrono").innerHTML="Connecté depuis " +seconde+" secondes";
                    seconde++;
                  }
                  setInterval(chrono, 1000);
