// initialize CONSTS for easier access to our templates
const BLACKHOLE_TEMPLATE = new BlackHoleTemplate('blackhole-template');
const CATEGORIES_TEMPLATE = new CategoriesTemplate('categories-template');
const SIGNIN_TEMPLATE = new SignInTemplate('signin-template');
const CLUB_SELECT_TEMPLATES = generateClubSelectTemplates();
const CLUB_PAGE_TEMPLATES = generateClubPageTemplates();
const DASHBOARD_TEMPLATE = new DashboardTemplate('user-dashboard-template');

function generateClubPageTemplates() {
    var clubsPageTemplates = new Array(CLUBS_DATA.length);

    for (var clubId = 0; clubId < CLUBS_DATA.length; clubId++) {
        var club = CLUBS_DATA[clubId];
        var clubSlug = club.slug;
        clubsPageTemplates[clubId] = new ClubPageTemplate('club-page-template', clubId, clubSlug);
    }
    return clubsPageTemplates;
}

function generateClubSelectTemplates() {
    var clubSelectTemplates = new Array(CATEGORIES_DATA.length);

    for (var categoryId = 0; categoryId < CATEGORIES_DATA.length; categoryId++) {
        var category = CATEGORIES_DATA[categoryId];
        var categorySlug = category.slug;
        clubSelectTemplates[categoryId] = new ClubSelectTemplate('club-select-template', categoryId, categorySlug);
    }
    return clubSelectTemplates;
}

//user class to keep track of user-specific things such as name, email, joined clubs/events, etc.
class User {
    firstName;
    lastName;
    email;

    joinedClubs = [];
    joinedEvents = [];

    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    addEvent(eventId){
        this.joinedEvents.push(eventId);
    }

    addClub(clubId){
        this.joinedClubs.push(clubId);
    }

    leaveClub(clubId) {
    }

    inClub(clubId) {
        return this.joinedClubs.includes(clubId);
    }

    inEvent(eventId) {
        return this.joinedEvents.includes(eventId);
    }

    getEvents() {
        const userEvents = [];
        for(var event = 0; event<this.joinedEvents.length; event++)
        {
            userEvents.push(window.App.Posts[this.joinedEvents[event]]);
        }
        return userEvents;
    }

    getClubs() {
        const userClubs = [];
        for(var club = 0; club<this.joinedClubs.length; club++)
        {
            userClubs.push(window.App.Clubs[this.joinedClubs[club]]);
        }
        return userClubs;
    }

    getPosts() {
        const userPosts = window.App.Posts.filter((post)=> {
            const postClubId = post.clubId;
            for(var club = 0; club<this.joinedClubs.length; club++)
            {
                if(postClubId == this.joinedClubs[club])
                {
                    return true;
                }  
            }
            return false;
        });
        return userPosts;
    }
}

class AppState {
    // vars for templates, user, current category & club a user has selected
    static previousTemplates = [];
    static currentTemplate = null;

    static user = null;

    // functions to change from screen to screen using templates
    static changeNextTemplate(template) {
        // add the current template screen we're on the an array of previous templates (for back button functionality)
        // unless current template is null, the signin screen, or the template we're CHANGING to is the signin screen
        if ((this.currentTemplate != null) && (this.currentTemplate != SIGNIN_TEMPLATE) && (template != SIGNIN_TEMPLATE)) {
            AppState.previousTemplates.push(this.currentTemplate);
        }

        // make back button visible if we have previous templates to navigate back to
        if (this.previousTemplates.length != 0) {
            $('#back-button').css('visibility', 'visible');
        }

        AppState.changeTemplate(template);
    }

    // function called when back button is pressed
    static changePreviousTemplate() {
        const previous = this.previousTemplates.pop();
        // hide back button if we cannot go back any further (user is at explore categories screen)
        if (this.previousTemplates.length == 0) {
            $('#back-button').css('visibility', 'hidden');
        }
        AppState.changeTemplate(previous);
    }

    // function to actually change the screen we're on by loading template's html and calling setup functions
    static changeTemplate(template) {
        // make sure we're only displaying home/dashboard button when it's appropriate (i.e. not on signin screen)
        if (template != SIGNIN_TEMPLATE && template != DASHBOARD_TEMPLATE) {
            $('#home-button').css('visibility', 'visible');
        }
        else if (template == DASHBOARD_TEMPLATE) {
            $('#home-button').css('visibility', 'hidden');
        }

        // Change the size of the home button on the blackhole screen to be larger.
        if(template == BLACKHOLE_TEMPLATE){
            $('#home-button').css({
                width: `10vw`
            })
        }
        else
        {
            $('#home-button').css({
                width: ''
            })
        }

        AppState.currentTemplate = template;
        $('#main').empty().append($('#' + template.templateId).html());
        AppState.currentTemplate.setup();
    }
}

// other functions for screen navigation
$(function () {
    // back button functionality
    $('#back-button').on('click', function () {
        AppState.changePreviousTemplate();
    })

    // home/dashboard button functionality
    $('#home-button').on('click', function () {
        AppState.changeNextTemplate(DASHBOARD_TEMPLATE);
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
        CLUB_SELECT: CLUB_SELECT_TEMPLATES,
        CLUB_PAGES: CLUB_PAGE_TEMPLATES,
        DASHBOARD: DASHBOARD_TEMPLATE
    },
    Categories: CATEGORIES_DATA,
    Clubs: CLUBS_DATA,
    Posts: POSTS_DATA,
    Members: MEMBERS_DATA,
}







