
const BLACKHOLE_TEMPLATE = new BlackHoleTemplate('blackhole-template');
const CATEGORIES_TEMPLATE = new CategoriesTemplate('categories-template');
const SIGNIN_TEMPLATE = new SignInTemplate('signin-template');
const CLUB_SELECT_TEMPLATES = generateClubSelectTemplates();
const CLUB_PAGE_TEMPLATES = generateClubPageTemplates();

function generateClubPageTemplates() 
{
    var clubsPageTemplates = new Array(CLUBS_DATA.length);

    for(var clubId = 0 ; clubId<CLUBS_DATA.length ; clubId++)
    {
        var club = CLUBS_DATA[clubId];
        var clubSlug = club.slug;
        clubsPageTemplates[clubId] = new ClubPageTemplate('club-page-template', clubId, clubSlug);
    }
    return clubsPageTemplates;
}

function generateClubSelectTemplates()
{
    var clubSelectTemplates = new Array(CATEGORIES_DATA.length);

    for(var categoryId = 0 ; categoryId<CATEGORIES_DATA.length ; categoryId++)
    {
        var category = CATEGORIES_DATA[categoryId];
        var categorySlug = category.slug;
        clubSelectTemplates[categoryId] = new ClubSelectTemplate('club-select-template', categoryId, categorySlug);
    }
    return clubSelectTemplates;
}

class User 
{
    firstName;
    lastName;
    email;

    joined_clubs = [];
    joined_events = [];

    constructor(firstName, lastName, email) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

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

window.App = 
{
    State: AppState,
    Templates: 
    {
        BLACKHOLE: BLACKHOLE_TEMPLATE,
        SIGNIN: SIGNIN_TEMPLATE,
        CATEGORIES: CATEGORIES_TEMPLATE,
        CLUBS: CLUB_SELECT_TEMPLATES,
        CLUBSPAGES: CLUB_PAGE_TEMPLATES
    },
    Categories: CATEGORIES_DATA,
    Clubs: CLUBS_DATA,
    Posts: POSTS_DATA,
    Members: MEMBERS_DATA,
}







