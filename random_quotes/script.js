var quote = "";
var au = "";


function random_quote (){

var quotes = ['Get busy living or get busy dying.', 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself', 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'];


var author = ['Stephen King','Mark Caine','Helen Keller'];

  var i = Math.floor(Math.random()*quotes.length);

  quote = quotes[i];
  au = author[i];
    document.getElementById('content').innerHTML = '"'+quotes[i]+'"';

    document.getElementById('author').innerHTML = "--" + author[i] +'--';	
  }


 function tweet() {
      window.open(
        "https://twitter.com/intent/tweet?text=" +
          '"' +
           quote+
          '"' +
          "-" +
          au +
          "-"
      );
    };

 