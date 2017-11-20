// variables
var area = document.getElementById('tweet-space');
var boton = document.getElementById('twittear');
var lista = document.getElementById('newsfeed-tweets');
var textArea = document.getElementById('textArea');
var date = moment().format('LT'); 
var caracteresTweet = document.getElementById('caracteres');

// boton habilitado/desabilitado y contador
textArea.addEventListener('keyup', function(event) {
  caracteresTweet.textContent = (140 - textArea.value.length);

  if (textArea.value.length === 0 || textArea.value === ' ') {
    boton.disabled = true; // desabilita el boton
  } else if (textArea.value.length >= 1 && textArea.value.length < 120) {
    boton.disabled = false; // habilita el boton
    caracteresTweet.classList.add('correct'); // agrega color azul
  } else if (textArea.value.length >= 120 && textArea.value.length < 130) {
    boton.disabled = false; // habilita el boton
    caracteresTweet.classList.add('color1');  // agrega color verde
  } else if (textArea.value.length >= 130 && textArea.value.length < 140) {
    boton.disabled = false; // habilita el boton
    caracteresTweet.classList.add('color2'); // agrega color fuxia
  } else {
    boton.disabled = true; // desabilita el boton
    caracteresTweet.classList.add('incorrect'); // agrega color rojo
  }
});
// evento de "twittear"
boton.addEventListener('click', function(event) {
  if (textArea.value) { 
    var li = document.createElement('li');
    var tweet = document.createElement('p');
    
    tweet.textContent = textArea.value;
    tweet.classList.add('li'); 
    li.appendChild(tweet);
    lista.appendChild(tweet);
    textArea.value = ' '; // para que textarea aparezca nuevamente en lbanco

}
});

// Hora
boton.addEventListener('click', function(event) {
  var li = document.createElement('li');
  var textOftheTime = document.createElement('div');
    
  textOftheTime.textContent = date;
  textOftheTime.classList.add('time');
  li.appendChild(textOftheTime);
  lista.appendChild(textOftheTime);
});
