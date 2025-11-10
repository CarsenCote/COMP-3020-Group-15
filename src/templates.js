
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

    setupEventListeners() 
    {

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
}