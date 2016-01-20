

$(function(){
  $('#mainContent').hide();
});


$(function(){
$(".topLink").click(function(){
	$("#mainContent").hide();
	$("#topContent").show();

});
});

$(function(){
  $('#moreBtn').click(function(){
      $('#topContent').hide();
      $('#mainContent').show();
  });
});
