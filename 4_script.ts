function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];
    for (var i: number = 1; i <= szam; i++){
        if (szam % i === 0){
            osztok.push(i)
        }
    }
    return osztok;
}


function parosDarab(szamok: number[]): number {
    var db: number = 0;
    for (var i: number = 0; i < szamok.length; i++){
        if (szamok[i] % 2 === 0){
            db++;
        }
    }
    return db;
}


function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    var szoveg: string = fuggveny();
    var szovegSzokozNelkul: string = "";
    for (var i: number = 0; i < szoveg.length; i++){
        if (szoveg[i] !== " "){
            szovegSzokozNelkul += szoveg[i];
        }
    }
    for (var i :number = 0; i < szovegSzokozNelkul.length / 2; i++){
        if (szovegSzokozNelkul[i] !== szovegSzokozNelkul[szovegSzokozNelkul.length - i - 1]){
            return false;
        }
    }
    return true;
}