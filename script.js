class jogador{
    constructor(id, nome, pontos, status = true) {
        this.id = id;
        this.nome = nome;
        this.pontos = pontos;
        this.status = status;
    }

    getData(){
        console.log(`
        ----Dados do jogador----
        id: ${this.id}
        Nome: ${this.nome}
        pontos: ${this.pontos}
        status: ${this.status ? Ativo : Inativo}
        ------------------------`)
    }
}

let jogador1 = new jogador(1, "zé da manga", 578);

console.table(jogador1);