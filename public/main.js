$(function() {
    $('.form').submit(sendMessage);
    console.log('It is working');
});

function sendMessage(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var image = $('#image').val();
    var urlMod = image.substr(4);
    console.log(urlMod);
    var message = $('#message').val();

    $.get(`/message/${name}/${email}/${urlMod}/${message}`)
        .done(function(data) {
            console.log(data);
        })
        .fail(function(error) {
            console.log(error);
        });
    console.log('message sent');
}
