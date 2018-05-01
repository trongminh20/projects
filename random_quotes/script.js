function quotes_source(quotes, author){
  this.quotes = quotes;
  this.author = author;

  this.random = function(){
    var i = Math.floor(Math.random()*quotes.length);

    return quotes[i] + '<br/>' + '--'+author[i]+'--';
  }
}

var quo = new quotes_source(['Get busy living or get busy dying.', 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself', 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'], ['Stephen King','Mark Caine','Helen Keller']);

//console.log(quo.random());

function click_event(){
  document.getElementById('content').innerHTML = quo.random();
}


 function tweet() {
      window.open(
        "https://twitter.com/intent/tweet?text=" +
          '"' +
           quo.random()+
          '"' 
      );
    };

 