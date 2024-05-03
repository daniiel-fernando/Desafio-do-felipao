function armazenaUsuario(nome, xp) {
    let usuario = {
        nome: nome,
        xp: xp
    };
    return usuario;
}

function eloDoUsuario(xp) {
    if(xp <= 1000) {
        return 'Ferro';
    } else if (xp <= 1001) {
        return 'Bronze';
    } else if (xp <= 5000) {
        return 'Prata';
    } else if (xp <= 7000) {
        return 'Ouro';
    } else if (xp <= 8000) {
        return 'Platina';
    } else if (xp <= 9000) {
        return 'Ascendente';
    } else if (xp <= 10000) {
        return 'Imortal';
    } else {
        return 'Radiante';
    }
}


let usuario1 = armazenaUsuario("ThaliaSenhoraDasBrigas", 900);
let usuario2 = armazenaUsuario("DanDanAktrovao", 5001);

console.log(usuario1);
console.log(usuario2);

console.log("O heroi de nome",usuario1.nome, "Esta no nivel:", eloDoUsuario(usuario1.xp))
console.log("O heroi de nome",usuario2.nome, "Esta no nivel:", eloDoUsuario(usuario2.xp))
