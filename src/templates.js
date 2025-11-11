
class Template 
{

    templateId;

    constructor(templateId) 
    {
        this.templateId = templateId;
    }

    setup() 
    {
        this.setupElements();
        this.setupEventListeners();
    }

    setupEventListeners() 
    {

    }

    setupElements() 
    {

    }
}

class BlackHoleTemplate extends Template 
{

    categoryContainers;

    constructor(templateId) 
    {
        super(templateId);
    }

    setupEventListeners() 
    {
        $('.blackhole-container').on('click', function () {
            window.App.State.changeNextTemplate(window.App.Templates.CATEGORIES);
        });
    }

    setupElements() 
    {

    }
}

class SignInTemplate extends Template 
{

    constructor(templateId) 
    {
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

class CategoriesTemplate extends Template 
{

    constructor(templateId) 
    {
        super(templateId);
    }

<<<<<<< HEAD
    // this will get the id of whichever category is clicked - use it for club selection page? 
    // (maybe save in app state)
=======
    setupEventListeners() 
    {
>>>>>>> main

    //TODO: clean up var names so it's not me being a fake gangsta
    setupEventListeners() {
        $('.category').on('click', function () {
            var anotha = $(this).attr("id");
            //alert("clicked a category " + anotha);
            window.App.State.categorySelected = anotha;
            window.App.State.changeMainTemplate(window.App.Templates.CLUBS)
        })
    }

    setupElements() 
    {

        const Categories = window.App.Categories;
        for (var i = 0; i < Categories.length; i++) 
        {
            const category = Categories[i];

            // Get the template content and create a new element from it
            const templateHtml = $('#category-template').html();
            const newCategory = $(templateHtml);

            // Set the attributes and text
            newCategory.attr('id', category.id);
            newCategory.find('.category-name').text(category.name);
            newCategory.find('.category-description').text(category.description);
            newCategory.find('.category-img').attr('src', `./public/category-icons/${category.id}.png`);
            // Append the new category element
            $('#categories-container').append(newCategory);
        }
    }
}

<<<<<<< HEAD
class ClubsTemplate extends Template {

    clubsElements;

    constructor(templateId) {
        super(templateId);
    }

    setupEventListeners() {

    }

    setupElements() {
        const currentCategory = window.App.State.categorySelected;
        const Clubs = window.App.Clubs;
        for(var i=0; i<Clubs.length; i++){
            const club = Clubs[i];
            if(club.categoryId == currentCategory)
            {
                // Get the template content and create a new element from it
                const templateHtml = $('#club-select-template').html();
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

=======
class ScrollingTemplate extends Template 
{
    constructor(templateId)
    {
        super(templateId);
    }

    setupElements()
    {

    }

    setupEventListeners()
    {

    }
>>>>>>> main
}