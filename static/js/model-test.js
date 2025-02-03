function disablebtn(){
    if($('#query').val()=='') $('#btn_test_model').prop('disabled',true);
    else $('#btn_test_model').prop('disabled',false);
    }

$(function() {
    $('#test_result').hide();
    $('#spin').hide();
    $('#response').hide();
    $('#btn_test_model').prop('disabled',true);

$.ajax({
    url: '/cdqa/api/model/version',
    contentType: "application/json",
    dataType: 'json',
    success: function(data) {
        if(data.list.includes('0')){
            $('#query').prop('disabled',true);$('#btn_test_model').prop('disabled',true);
            $('<option/>').val(data.list).html('none').appendTo('#model_version_list');
            $('#model_not_found').removeClass("d-none");
            $("#content_div").hide();
        }
        else{
        var date_info = data.date_invoked.reverse()
        data.list.reverse().forEach(function(item, index) {
            $('<option/>').val(item).html(item+" (trained on "+ date_info[index]+")").appendTo('#model_version_list');
        });
        $('#model_version_list option:first').html(data.version + " (trained on "+date_info[0]+") most recent version ");
    }
    },
    error: function(e){
            console.log('Error occures while checking the model version',e);
    }
});


$('#btn_test_model').click(function() {
    $('#btn_test_model').prop('disabled',true);
    $('#message').text('Processing');$('#clipboard').hide();$('#spin').show();
    $('#response').hide();
    if(!($('#query').val()).includes('?')) $('#query').val($('#query').val()+'?');
    var data = {query:$('#query').val(),version:$('#model_version_list option:selected').val()};
    console.log(data);
    $.ajax({
        type: 'POST',
        url: '/cdqa/test',
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: 'json',
        success: function(data) {
            $('#message').text('Ask question');$('#clipboard').show();$('#spin').hide();
            $('#td_query').text(data.query);
            $('#td_title').text(data.title);
            $('#td_answer').text(data.answer);
            $('#td_paragraph').text(data.paragraph);
            $('#btn_test_model').prop('disabled',true);
            $('#query').val('');
            $('#response').show();
        },
        error: function(e){
            console.log('Error occured while testing the model',e);
        }
    });
});
})