
const BLACKHOLE_TEMPLATE = new BlackHoleTemplate('blackhole-template');
const CATEGORIES_TEMPLATE = new CategoriesTemplate('categories-template');
const SIGNIN_TEMPLATE = new SignInTemplate('signin-template');

class AppState {

    static previousTemplate = null;
    static currentTemplate = null;
    static user = null;

    // This function changes the main template and calls appropriate setup routines.
    static changeMainTemplate(template) {
        AppState.previousTemplate = AppState.currentTemplate;
        AppState.currentTemplate = template;
        $('#main').empty().append($('#' + template.templateId).html());
        AppState.currentTemplate.setup();
    }
}

$(function () {
    AppState.changeMainTemplate(SIGNIN_TEMPLATE);
});

window.App = {
    State: AppState,
    Templates: {
        BLACKHOLE: BLACKHOLE_TEMPLATE,
        SIGNIN: SIGNIN_TEMPLATE,
        CATEGORIES: CATEGORIES_TEMPLATE,
    },
    Categories: CATEGORIES
}







