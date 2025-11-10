
const BLACKHOLE_TEMPLATE = new BlackHoleTemplate('blackhole-template');
const CATEGORIES_TEMPLATE = new CategoriesTemplate('categories-template');
const SIGNIN_TEMPLATE = new SignInTemplate('signin-template');

class AppState 
{

    static previousTemplates = [];
    static currentTemplate = null;
    static user = null;

    static changeNextTemplate(template) 
    {
        if((this.currentTemplate != null) && (this.currentTemplate != SIGNIN_TEMPLATE) && (template != SIGNIN_TEMPLATE)) 
        {
            AppState.previousTemplates.push(this.currentTemplate);
        }

        if(this.previousTemplates.length != 0)
        {
            $('#back-button').css('visibility', 'visible');
        }

        AppState.changeTemplate(template);
    }

    static changePreviousTemplate() 
    {
        const previous = this.previousTemplates.pop();
        if(this.previousTemplates.length == 0)
        {
            $('#back-button').css('visibility', 'hidden');
        }
        AppState.changeTemplate(previous);
    }

    static changeTemplate(template)
    {
        if(template != SIGNIN_TEMPLATE)
        {
            $('#home-button').css('visibility', 'visible');
        }

        AppState.currentTemplate = template;
        $('#main').empty().append($('#' + template.templateId).html());
        AppState.currentTemplate.setup();
    }
}

$(function () 
{
    $('#back-button').on('click', function()
    {
        AppState.changePreviousTemplate();
    })

    AppState.changeNextTemplate(SIGNIN_TEMPLATE);
});

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
    },
    Categories: CATEGORIES_DATA,
    Clubs: CLUBS_DATA,
}







