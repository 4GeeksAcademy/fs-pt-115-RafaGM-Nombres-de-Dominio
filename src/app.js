import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        const dominio = pronoun[i] + adj[j] + noun[k] + ".com";
        console.log(dominio);
      }
    }
  }
  const pronouns = ['the', 'our'];
  const adjs = ['great', 'big'];
  const nouns = ['jogger', 'racoon'];
  const dominios = []
  pronouns.map(pronombre => {
    adjs.map(adjetivo => {
      nouns.map(nombre => {
        dominios.push(pronombre + adjetivo + nombre + '.com')
      })
    })
  })
  console.log(dominios);
  for (let i = 0; i < dominios.length; i++){
   console.log(dominios[i]);
    
  }
};

