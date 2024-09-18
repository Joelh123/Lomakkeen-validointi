function validoiLomake() {
    tarkistaKayttajaID();
    tarkistaSalasana();
    tarkistaNimi()
    tarkistaOsoite()
    tarkistaMaa()
    tarkistaPostinumero()
    tarkistaSahkoposti()
    tarkistaSukupuoli()
    tarkistaKieli()
}

function tarkistaKayttajaID() {
    const kayttajaID = document.getElementById("kayttaja-id").value;

    if (kayttajaID.length == 0) {
        document.getElementById("ktID-virhe").innerHTML = "Syötä käyttäjä ID"
        return;
    }

    if (kayttajaID.length < 6) {
        document.getElementById("ktID-virhe").innerHTML = "Käyttäjä ID:n tulee olla vähintään 6 merkkiä pitkä";
    } else {
        document.getElementById("ktID-virhe").innerHTML = "";
    }
}

function tarkistaSalasana() {
    const salasana = document.getElementById("salasana").value;
    let loytyi = false;
    const numerot = "0123456789";
    const erikoismerkit = "!@£$€&%#";
    const isotKirjaimet = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ"

    if (salasana.length == 0) {
        document.getElementById("salasana-virhe").innerHTML = "Syötä salasana"
        return;
    }

    if (salasana.length < 6) {
        document.getElementById("salasana-virhe").innerHTML = "Salasanan tulee olla vähintään 6 merkkiä pitkä";
        return;
    }

    for (const merkki of salasana) {
        for (const isoKirjain of isotKirjaimet) {
            if (merkki == isoKirjain) {
                loytyi = true;
                break
            }
        }
        if (loytyi) {
            break;
        }
    }
    
    if (!loytyi) {
        document.getElementById("salasana-virhe").innerHTML = "Salasanassa tulee olla vähintään 1 iso kirjain";
        return;
    } else {
        document.getElementById("salasana-virhe").innerHTML = "";
    }
    loytyi = false

    for (const merkki of salasana) {
        for (const numero of numerot) {
            if (merkki == numero) {
                loytyi = true;
                break
            }
        }
        if (loytyi) {
            break;
        }
    }

    if (!loytyi) {
        document.getElementById("salasana-virhe").innerHTML = "Salasanassa tulee olla vähintään 1 numero";
        return;
    } else {
        document.getElementById("salasana-virhe").innerHTML = "";
    }
    loytyi = false

    for (const merkki of salasana) {
        for (const erikoismerkki of erikoismerkit) {
            if (merkki == erikoismerkki) {
                loytyi = true;
                break
            }
        }
        if (loytyi) {
            break;
        }
    }

    if (!loytyi) {
        document.getElementById("salasana-virhe").innerHTML = "Salasanassa tulee olla vähintään 1 erikoismerkki";
        return;
    } else {
        document.getElementById("salasana-virhe").innerHTML = "";
    }
}

function tarkistaNimi() {
    const nimi = document.getElementById("nimi").value;

    if (nimi.length == 0) {
        document.getElementById("nimi-virhe").innerHTML = "Syötä nimi"
    } else {
        document.getElementById("nimi-virhe").innerHTML = ""
    }
}

function tarkistaOsoite() {
    const osoite = document.getElementById("osoite").value;

    if (osoite.length == 0) {
        document.getElementById("osoite-virhe").innerHTML = "Syötä osoite"
    } else {
        document.getElementById("osoite-virhe").innerHTML = ""
    }
}

function tarkistaMaa() {
    const valittuMaa = document.getElementById("valitse-maa").value;

    if (valittuMaa == "oletusarvo") {
        document.getElementById("maa-virhe").innerHTML = "Valitse maa"
    } else {
        document.getElementById("maa-virhe").innerHTML = ""
    }
}

function tarkistaPostinumero() {
    const postinumero = document.getElementById("postinumero").value;

    if (postinumero.length == 0) {
        document.getElementById("postinumero-virhe").innerHTML = "Syötä postinumero"
        return;
    }

    if (isNaN(postinumero)) {
        document.getElementById("postinumero-virhe").innerHTML = "Postinumerossa tulee olla vain numeroita"
        return;
    }

    if (postinumero.length < 5, postinumero.length > 5) {
        document.getElementById("postinumero-virhe").innerHTML = "Postinumerossa tulee olla tasan 5 numeroa"
    } else {
        document.getElementById("postinumero-virhe").innerHTML = ""
    }
}

function tarkistaSahkoposti() {
    const sahkoposti = document.getElementById("sahkoposti").value;
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (sahkoposti.length == 0) {
        document.getElementById("sahkoposti-virhe").innerHTML = "Syötä sähköposti"
        return;
    }

    if (regex.test(sahkoposti) == true) {
        document.getElementById("sahkoposti-virhe").innerHTML = ""
    } else {
        document.getElementById("sahkoposti-virhe").innerHTML = "Sähköposti on väärän muotoinen"
    }
}

function tarkistaSukupuoli() {
    const sukupuoli = document.querySelector('input[name="sukupuoli"]:checked');

    if (sukupuoli == null) {
        document.getElementById("sukupuoli-virhe").innerHTML = "Valitse sukupuoli"
    } else {
        document.getElementById("sukupuoli-virhe").innerHTML = ""
    }
}

function tarkistaKieli() {
    const valittuSuomi = document.getElementById("suomenkieli").checked;
    const valittuMuukieli = document.getElementById("muu-kieli").checked;

    if (! valittuSuomi && ! valittuMuukieli) {
        document.getElementById("kieli-virhe").innerHTML = "Valitse kieli"
    } else {
        document.getElementById("kieli-virhe").innerHTML = ""
    }
}