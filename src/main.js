// initialize CONSTS for easier access to our templates
const BLACKHOLE_TEMPLATE = new BlackHoleTemplate('blackhole-template');
const CATEGORIES_TEMPLATE = new CategoriesTemplate('categories-template');
const SIGNIN_TEMPLATE = new SignInTemplate('signin-template');
const CLUBS_TEMPLATE = new ClubsTemplate('clubs-template');
const CLUBSPAGE_TEMPLATE = new ClubsPageTemplate('clubspage-template');
const DASHBOARD_TEMPLATE = new DashboardTemplate('user-dashboard-template');

// global AppState class, which will save and deal with variables we want to be able to access from anywhere in our code
class AppState {

    // vars for templates, user, current category & club a user has selected
    static previousTemplates = [];
    static currentTemplate = null;
    static user = null;
    static categorySelected = null;

    // functions to change from screen to screen using templates
    static changeNextTemplate(template) {
        // add the current template screen we're on the an array of previous templates (for back button functionality)
        // unless current template is null, the signin screen, or the template we're CHANGING to is the signin screen
        if((this.currentTemplate != null) && (this.currentTemplate != SIGNIN_TEMPLATE) && (template != SIGNIN_TEMPLATE)) 
        {
            AppState.previousTemplates.push(this.currentTemplate);
        }

        // make back button visible if we have previous templates to navigate back to
        if(this.previousTemplates.length != 0)
        {
            $('#back-button').css('visibility', 'visible');
        }

        AppState.changeTemplate(template);
    }

    // function called when back button is pressed
    static changePreviousTemplate() {
        const previous = this.previousTemplates.pop();
        // hide back button if we cannot go back any further (user is at explore categories screen)
        if(this.previousTemplates.length == 0)
        {
            $('#back-button').css('visibility', 'hidden');
        }
        AppState.changeTemplate(previous);
    }

    // function to actually change the screen we're on by loading template's html and calling setup functions
    static changeTemplate(template){
        // make sure we're only displaying homse/dashboard button when it's appropriate (i.e. not on signin screen)
        if(template != SIGNIN_TEMPLATE && template != DASHBOARD_TEMPLATE)
        {
            $('#home-button').css('visibility', 'visible');
        }
        else if(template == DASHBOARD_TEMPLATE){
            $('#home-button').css('visibility', 'hidden');
        }

        AppState.currentTemplate = template;
        $('#main').empty().append($('#' + template.templateId).html());
        AppState.currentTemplate.setup();
    }
}

// other functions for screen navigation
$(function () 
{
    // back button functionality
    $('#back-button').on('click', function()
    {
        AppState.changePreviousTemplate();
    })

    // home/dashboard button functionality
    $('#home-button').on('click', function ()
    {
        AppState.changeNextTemplate(DASHBOARD_TEMPLATE);
    })

    AppState.changeNextTemplate(SIGNIN_TEMPLATE);
});

// user class to globally keep track of user details (name, email)
class User 
{
    firstName;
    lastName;
    email;

    constructor(firstName, lastName, email) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

window.App = 
{
    State: AppState,
    Templates: 
    {
        BLACKHOLE: BLACKHOLE_TEMPLATE,
        SIGNIN: SIGNIN_TEMPLATE,
        CATEGORIES: CATEGORIES_TEMPLATE,
        CLUBS: CLUBS_TEMPLATE,
        CLUBSPAGE: CLUBSPAGE_TEMPLATE,
        DASHBOARD: DASHBOARD_TEMPLATE
    },
    Categories: CATEGORIES_DATA,
    Clubs: CLUBS_DATA,
}







