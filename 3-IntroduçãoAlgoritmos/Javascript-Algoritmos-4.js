function ordenaVelasApagadasPrimeiro(velas) {
    let ordenada = false;
    while (!ordenada) {
        ordenada = true;
        for (let i = 0; i < velas.length - 1; i++) {
            if (velas[i] && !velas[i + 1]) {
                let temp = velas[i]
                velas[i] = velas[i + 1]
                velas[i + 1] = temp

                ordenada = false;
            }
        }

    }
    return velas;
}

