function random_quote (){
  var quotes = ['a','b','c','d'];
  var random_number = Math.floor(Math.random()*quotes.length);

    //return quotes[random_number];

    //return document.write(quotes[random_number]);

    return document.getElementById('showing').innerHTML = quotes[random_number];
  }


  //console.log(random_quote());

  document.getElementById('btn').addEventListener('click', random_quote());