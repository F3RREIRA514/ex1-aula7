class jogador{
    constructor(id, nome, pontos, status = true) {
        this.id = id;
        this.nome = nime;
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