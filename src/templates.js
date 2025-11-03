
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
            window.App.State.changeMainTemplate(window.App.Templates.CATEGORIES);
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

        // Event listener for submission of the signin form.
        $('#signin-form').on('submit', function (event) {
            event.preventDefault();
            var dataString = $(this).serialize();
            var params = new URLSearchParams(dataString);
            const fname = params.get('fname');
            const lname = params.get('lname');
            const email = params.get('email');
            // Create user using the User class from window.App
            window.App.State.user = new User(fname, lname, email);
            window.App.State.changeMainTemplate(window.App.Templates.BLACKHOLE);
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