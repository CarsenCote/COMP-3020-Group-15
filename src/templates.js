
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
        $('.blackhole-title').on('click', function () 
        {
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

    // this will get the id of whichever category is clicked - use it for club selection page? 
    // (maybe save in app state)

    //TODO: clean up var names so it's not me being a fake gangsta
    setupEventListeners() {
        $('.category').on('click', function () {
            var categoryId = $(this).attr("id");
            window.App.State.changeNextTemplate(window.App.Templates.CLUBS[categoryId])
        })
    }

    setupElements() 
    {

        const categories = window.App.Categories;
        for (var i = 0; i < categories.length; i++) 
        {
            const category = categories[i];

            // Get the template content and create a new element from it
            const templateHtml = $('#category-template').html();
            const newCategory = $(templateHtml);

            // Set the attributes and text
            newCategory.find('.category').attr('id', category.id);
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


class ClubPageTemplate extends Template 
{

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

        const clubPosts = window.App.Posts.filter((post) => 
        {
            return this.clubId == post.clubId;
        });

        const clubEvents = clubPosts.filter((post) => 
        {
            return post.event;
        })

        const clubMembers = window.App.Members.filter((member) => 
        {
            const memberClubs = member.clubs;
            for(var clubIndex = 0 ; clubIndex<memberClubs.length; clubIndex++)
            {
                const club = memberClubs[clubIndex];
                if(club.id == this.clubId)
                {
                    return true;
                }  
            }
            return false;
        })

        this.setupPosts(clubPosts);
        this.setupEvents(clubEvents);
        this.setupMembers(clubMembers);
    }

    setupPosts(clubPosts)
    {
        const postsContainer = $('.posts-container');

        for(var postIndex = 0; postIndex<clubPosts.length ; postIndex++)
        {
            const post = clubPosts[postIndex];
            const postHtml = $('#post-template').html();
            const newPost = $(postHtml);

            newPost.find('.post-title').text(post.title);
            newPost.find('.post-content').text(post.content);
            newPost.find('.post-date').text(post.date);

            postsContainer.append(newPost);
        }
    }

    setupEvents(clubEvents)
    {
        const eventsContainer = $('.events-container');

        for(var eventIndex = 0 ; eventIndex<clubEvents.length ; eventIndex++)
        {
            const event = clubEvents[eventIndex];
            const eventHtml = $('#event-template').html();
            const newEvent = $(eventHtml);

            newEvent.find('.event-title').text(event.title);
            newEvent.find('.event-date').text(event.date);
            newEvent.find('.event-time').text(`${event.start_time} - ${event.end_time}`);

            eventsContainer.append(newEvent);
        }
    }

    setupMembers(clubMembers)
    {
        const membersContainer = $('.members-container');

        for(var memberIndex = 0 ; memberIndex<clubMembers.length ; memberIndex++)
        {
            const member = clubMembers[memberIndex];
            const memberHtml = $('#member-template').html();
            const newMember = $(memberHtml);

            newMember.find('.member-name').text(`${member.fname} ${member.lname}`);

            membersContainer.append(newMember);
        }
    }
}
    

