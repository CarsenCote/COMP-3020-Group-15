var userFirstName;
var userLastName;
var userEmail;

// This function is executed when the interface is first opened and the document is ready.
$(function () {
    $('#main').append($('#signin-template').html());
});

$(function () {
    $('#signin-form').on('submit', function (event) {
        event.preventDefault();
        var dataString = $(this).serialize();
        var params = new URLSearchParams(dataString);
        const fname = params.get('fname');
        const lname = params.get('lname');
        const email = params.get('email');
        userFirstName = fname;
        userLastName = lname;
        userEmail = email;
        changeMainTemplate('blackhole-template');
    })
});

function changeMainTemplate(templateId) {
    $('#main').empty().append($('#' + templateId).html())
}



