
const BLACKHOLE_TEMPLATE = new BlackHoleTemplate('blackhole-template');
const CATEGORIES_TEMPLATE = new CategoriesTemplate('categories-template');
const SIGNIN_TEMPLATE = new SignInTemplate('signin-template');

class AppState {

    static previousTemplate = null;
    static currentTemplate = null;
    static user = null;
    static categorySelected = null;

    // This function changes the main template and calls appropriate setup routines.
    static changeMainTemplate(template) {
        AppState.previousTemplate = AppState.currentTemplate;
        AppState.currentTemplate = template;
        $('#main').empty().append($('#' + template.templateId).html());
        AppState.currentTemplate.setup();
    }

    /*
    static selectCategory(id) {
        var newSelection = null;
        var i = 0;
        while(!newSelection && i<CATEGORIES.length){
            if(CATEGORIES[i].id = id)
                newSelection = CATEGORIES[i]
            
            i++;
        }

        //TEST THIS
        AppState.categorySelected = newSelection;
    }
        */
}

$(function () {
    AppState.changeMainTemplate(SIGNIN_TEMPLATE);

    console.log(data);
});

const CATEGORIES = [
    {
        "id": "leisure",
        "name": "Leisure",
        "description": "",
    },
    {
        "id": "academic",
        "name": "Academic",
        "description": ""
    },
    {
        "id": "advocacy",
        "name": "Advocacy",
        "description": ""
    },
    {
        "id": "recreation",
        "name": "Recreation",
        "description": ""
    }
]

window.App = {
    State: AppState,
    Templates: {
        BLACKHOLE: BLACKHOLE_TEMPLATE,
        SIGNIN: SIGNIN_TEMPLATE,
        CATEGORIES: CATEGORIES_TEMPLATE,
    },
    Categories: CATEGORIES
}







