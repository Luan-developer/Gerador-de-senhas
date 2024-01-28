const campo = document.querySelector('input');

function gerar(){
  let generation = Math.random().toString(26).slice(-8);
  campo.value = generation;
}