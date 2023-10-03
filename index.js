const template = document.querySelector("#result-item-template")

function buscarPalabra (){
  const formEl= document.querySelector(".shearch-form");
  formEl.addEventListener('submit',function(e){
    e.preventDefault();
    const palabra = e.target.search.value
    fetch("https://api.mercadolibre.com/sites/MLA/search?q="+ palabra).then(response => response.json())
    .then(data => showResults(data))
  })
}
function showResults (results){
  // console.log(results)
  const name = template.querySelector("results-item-name")
 

}

function main () {
  buscarPalabra()
}

main();
