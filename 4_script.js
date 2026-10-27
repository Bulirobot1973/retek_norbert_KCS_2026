"use strict";
function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var db = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 === 0) {
            db++;
        }
    }
    return db;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var szoveg = fuggveny();
    var szovegSzokozNelkul = "";
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] !== " ") {
            szovegSzokozNelkul += szoveg[i];
        }
    }
    for (var i = 0; i < szovegSzokozNelkul.length / 2; i++) {
        if (szovegSzokozNelkul[i] !== szovegSzokozNelkul[szovegSzokozNelkul.length - i - 1]) {
            return false;
        }
    }
    return true;
}
