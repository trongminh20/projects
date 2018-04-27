$(document).ready(function(){
var url ="https://api.twitch.tv/kraken/channels/freecodecamp/follows?client_id=fvy9xqxms5e2xgdevcatogv6ut8pgb";
$.getJSON(url,function(data){
	if(data){
		$('#status').innerHTML = data;
	}

})

});