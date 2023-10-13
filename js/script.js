let campo = document.getElementById('campo');


function Gerar(){
  let generation = Math.random().toString(26).slice(-8);
  campo.value = generation;
}
function Copiar(){
  navigator.clipboard.writeText(campo.value).then(()=>{
    alert("Copiado com sucesso!")
  })
}
