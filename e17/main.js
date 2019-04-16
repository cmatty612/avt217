$(document).ready(function() {
    var number = Math.floor(Math.random() * 501);
    console.log(number);
    $('#buttonArea').click(function() {
        var guess = $('input').val();
        console.log(guess);
        if (number == guess) {
            $('h1').text(number + ' is right!');
            $('input').val('');
        } else if (number < guess) {
            $('h1').text(guess + ' is too high');
            $('input').val('')
        } else {
            $('h1').text(guess + ' is too low');
            $('input').val('');
        }
    });
});
