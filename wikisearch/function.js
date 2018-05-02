$(document).ready(function(){
	$('btn').click(function(){
	function search_(data){
		var query = $('#query').val(); 
	var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      query +
      "&format=json&callback=?";

      $.getJSON(url, function(data){
      	console.log(data);
      })
	}
	


	
	});
});