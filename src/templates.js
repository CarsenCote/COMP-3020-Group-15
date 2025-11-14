// our base super class which all templates will be extended from
class Template {

    templateId;

    constructor(templateId) 
    {
        this.templateId = templateId;
    }

    setup() {
        this.setupElements();
        this.setupEventListeners();
    }

    setupEventListeners() {

    }

    setupElements() {

    }
}

class BlackHoleTemplate extends Template {

    categoryContainers;

    constructor(templateId) {
        super(templateId);
    }

    setupEventListeners() {
        $('.blackhole-container').on('click', function () {
            window.App.State.changeNextTemplate(window.App.Templates.CATEGORIES);
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
        $('#signin-form').on('submit', function (event) 
        {
            event.preventDefault();
            var dataString = $(this).serialize();
            var params = new URLSearchParams(dataString);
            const fname = params.get('fname');
            const lname = params.get('lname');
            const email = params.get('email');
            // Create user using the User class from window.App
            window.App.State.user = new User(fname, lname, email);
            window.App.State.changeNextTemplate(window.App.Templates.BLACKHOLE);
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
        // this event listener will run when a category element is clicked
        // grabs the id (category name) of the element to determine which category the user clicked
        $('.category').on('click', function () {
            var categoryId = $(this).attr("id");
            window.App.State.changeNextTemplate(window.App.Templates.CLUBS[categoryId])
        })
    }

    setupElements() {
        // set up the elements on the category selection screen based on what's in our json category-data
        // will run until all categories from our data have been made into their own element with a respective id, 
        // displayed name, description, and img
        const categories = window.App.Categories;
        for (var i = 0; i < categories.length; i++) 
        {
            const category = categories[i];

            // Get the template content and create a new element from it
            const templateHtml = $('#category-template').html();
            const newCategory = $(templateHtml);

            // Set the attributes and text
            newCategory.attr('id', category.id);
            newCategory.find('.category-name').text(category.name);
            newCategory.find('.category-description').text(category.description);
            newCategory.find('.category-img').attr('src', `./public/category-icons/${category.slug}.png`);
            // Append the new category element
            $('#categories-container').append(newCategory);
        }
    }
}

class ClubSelectTemplate extends Template 
{

    categoryId;
    categorySlug;

    constructor(templateId, categoryId, categorySlug) 
    {
        super(templateId);
        this.categoryId = categoryId;
        this.categorySlug = categorySlug;
    }

    setupEventListeners() 
    {
        $('.club').on('click', function () {
            var clubId = $(this).attr("id");
            window.App.State.changeNextTemplate(window.App.Templates.CLUBSPAGES[clubId]);
        })
    }

    setupElements() 
    {
        const clubs = window.App.Clubs;
        for(var clubIndex=0; clubIndex<clubs.length; clubIndex++){
            const club = clubs[clubIndex];
            const categories = club.categories;
            for(var categoryIndex = 0 ; categoryIndex<categories.length ; categoryIndex++)
            {
                var currentCategorySlug = categories[categoryIndex].slug;
                if(this.categorySlug == currentCategorySlug)
                {
                    // Get the template content and create a new element from it
                    const templateHtml = $('#club-bubble-template').html();
                    const newClub = $(templateHtml);
                    
                    // Set the attributes and text
                    newClub.attr('id', club.id);
                    newClub.find('.club-name').text(club.name);
                    newClub.find('.club-description').text(club.description);
                    // Append the new category element
                    $('#clubs-container').append(newClub);
                }
            }
        }
    }
}

class DashboardTemplate extends Template {
    dashboardElements;

    constructor(templateId) {
        super(templateId);
    }

    setupEventListeners() {

    }

    setupElements() {
        //TODO: test this works

        // get the user's name based on signin variables saved from first screen
        const user = window.App.State.user;
        const name = user.firstName + " " + user.lastName;
        
        const userNameHtml = $('#user-name-container');

        // display the user's name in the .user-name element from the dashboard template html
        userNameHtml.find('.user-name-text').text(name);
    }
}


class ClubPageTemplate extends Template {

    clubId;
    clubSlug;

    constructor(templateId, clubId, clubSlug) 
    {
        super(templateId);
        this.clubId = clubId;
        this.clubSlug = clubSlug;
    }

    setupEventListeners() 
    {
        
    }

    setupElements() 
    {
        const club = window.App.Clubs[this.clubId];
        const clubPageContainer = $('#club-page-container');
        clubPageContainer.find('.club-name').text(club.name);
        clubPageContainer.find('.about-us').text(club.description);

    }
}
    

