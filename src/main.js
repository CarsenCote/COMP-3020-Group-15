const BLACKHOLE_TEMPLATE = 'blackhole-template';
const CATEGORIES_TEMPLATE = 'categories-template';

var userFirstName;
var userLastName;
var userEmail;

// This function is executed when the interface is first opened and the document is ready.
$(function () {
    $('#main').append($('#signin-template').html());
});

// This is a callback function that is called when the form on the sign-in page is submitted.
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
        changeMainTemplate(BLACKHOLE_TEMPLATE);
    })
});

function changeMainTemplate(templateId) {
    $('#main').empty().append($('#' + templateId).html());

    // Set up event listeners based on which template was loaded
    switch (templateId) {
        case BLACKHOLE_TEMPLATE:
            setupBlackholeEvents();
            break;
        case CATEGORIES_TEMPLATE:
            setupCategoriesEvents();
            break;
    }
}

function setupBlackholeEvents() {
    $('.blackhole-container').on('click', function () {
        changeMainTemplate(CATEGORIES_TEMPLATE);
    });
}

function setupCategoriesEvents() {
    $('.categories-container')
}



