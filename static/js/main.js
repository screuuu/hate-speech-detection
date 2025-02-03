function disablebtn(){
    $('#response').show();
}

$(function() {
console.log("JS LOADED !")
$('#btn_test_model').click(function() {
  var data = {query:$('#query').val()};
  console.log(data);
  $.ajax({
      type: 'POST',
      url: '/model_check_api',
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: 'json',
      success: function(result) {
          $('#query').val('');
          $('#td_query').text(data.query);
          $('#td_answer').text(result);
          $('#response').show();
          console.log("Log Status: ",result)
      },
      error: function(e){
          console.log('Error occured while testing the model',e);
      }
  });
});
})