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

  if (textArea.value.length === 0 || textArea.value ===' ') {
    boton.disabled = true;
  } else if (textArea.value.length < 140) {
    boton.disabled = false;
    caracteresTweet.classList.add('correct');
  } else if (textArea.value.length === 120) {
    boton.disabled = false;
    caracteresTweet.classList.add('cientoveinte')
  } else if (textArea.value.length === 130) {
    boton.disabled = false;
    caracteresTweet.classList.add('cientotreinta');
  } else {
    boton.disabled = true; 
    caracteresTweet.classList.add('incorrect');
    textArea.classList.add('incorrect');
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
    textArea.value = ' ';

  }
});
// date
boton.addEventListener('click', function(event) {
  var li = document.createElement('li');
  var textOftheTime = document.createElement('div');
    
  textOftheTime.textContent = date;
  textOftheTime.classList.add('time');
  li.appendChild(textOftheTime);
  lista.appendChild(textOftheTime);
});

