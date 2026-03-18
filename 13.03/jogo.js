class Personagem{
    constructor(nome,titulo,hp,mana,energia){
    this.nome = nome;
    this.titulo = titulo;
    this.hp = hp;
    this.mana = mana;
    this.energia= energia;
}
atacar(alvo,habilidade){

}
}

class habilidade {
    constructor(id,nome,dano,custo,energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

// 

 let hero = new Personagem("Naruto Uzumaki","O futuro Hokage",110,150,0);
 let boss = new Personagem ("Sasuke Uchiha", "O Último Uchiha",130,120,60);
 //prencher Status

 document.getElementById("nome-heroi").textContent = `${hero.nome}`;
 document.getElementById("Titulo-heroi").textContent = `${hero.titulo}`

  document.getElementById("nome-heroi").textContent = `${boss.nome}`;
 document.getElementById("Titulo-heroi").textContent = `${boss.titulo}`;

 let  container = document.getElementById("controles");
 let listaHabilidades = [
    new Habilidade (1,"attack",4,0,0),
    new Habilidade (2,"skill",8,10,0),
    new Habilidade (3,"ultimate",15,0,100)
 ];

 listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerHTML = hab.nome;
    btn.classList.add("btn","btn-dark")
    
 })
