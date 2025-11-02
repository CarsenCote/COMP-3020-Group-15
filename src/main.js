// Template classes

class Template {

    templateId;
    
    constructor(templateId) {
        this.templateId = templateId;
    }

    setup () {
        this.setupEventListeners();
        this.setupElements();
    }

    setupEventListeners () {
        
    }

    setupElements () {

    }
}

class BlackHoleTemplate extends Template {

    constructor(templateId) {
        super(templateId);
    }

    setupEventListeners() {
        
        $('.blackhole-container').on('click', function () {
            changeMainTemplate(CATEGORIES_TEMPLATE);
        });
    }

    setupElements() {

    }
}

class SignInTemplate extends Template {

    constructor(templateId) {
        super(templateId);
    }
    
    setupEventListeners() {
        $('#signin-form').on('submit', function (event) {
            event.preventDefault();
            var dataString = $(this).serialize();
            var params = new URLSearchParams(dataString);
            const fname = params.get('fname');
            const lname = params.get('lname');
            const email = params.get('email');
            user = new User(fname, lname, email);
            changeMainTemplate(BLACKHOLE_TEMPLATE);
        })
    }

    setupElements() {

    }
}

class CategoriesTemplate extends Template {

    constructor(templateId) {
        super(templateId);
    }

    setupEventListeners() {
        
    }

    setupElements() {

    }
}

// General classes

class User {
    firstName;
    lastName;
    email;

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}



/*
This is the main section of code execution after classes have been declared.
*/

const BLACKHOLE_TEMPLATE = new BlackHoleTemplate('blackhole-template');
const CATEGORIES_TEMPLATE = new CategoriesTemplate('categories-template');
const SIGN_IN_TEMPLATE = new SignInTemplate('signin-template');

var currentPage;
var user;

// This function is executed when the interface is first opened and the document is ready.
$(function () {
    changeMainTemplate(SIGN_IN_TEMPLATE);
});

function changeMainTemplate(template) {
    currentPage = template;
    $('#main').empty().append($('#' + template.templateId).html());
    currentPage.setup();
}



