const Personagem = require("./class/Personagem")

const bellatrix = new Personagem("Bellatrix", "Mago", 99)

const leonidas  = new Personagem("Leonidas", "Guerreiro", 87)

const apollo = new Personagem("Apollo", "Arqueiro", 54)

bellatrix.ataque()
bellatrix.mostrarInfo()

leonidas.ataque()
leonidas.mostrarInfo()

apollo.ataque()
apollo.mostrarInfo()
