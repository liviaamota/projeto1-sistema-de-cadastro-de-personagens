class Personagem {
    #pontosDeVida
    constructor(nome, classe, pontosDeVida) {
        this.nome = nome
        this.classe = classe
        this.#pontosDeVida = pontosDeVida
    }

    ataque() {
        console.log(`${this.nome} atacou`)
    }

    mostrarInfo() {
        console.log(`Nome do personagem: ${this.nome}. Classe do personagem: ${this.classe}. Pontos de vida: ${this.#pontosDeVida}`)
    }
}

module.exports = Personagem