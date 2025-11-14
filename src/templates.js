
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

class ClubSelectTemplate extends Template {
    categoryId;
    categorySlug;
    currentIndex;
    visibleClubs;
    categoryClubs;

    constructor(templateId, categoryId, categorySlug) {
        super(templateId);
        this.categoryId = categoryId;
        this.categorySlug = categorySlug;
        this.currentIndex = 0;
        this.visibleClubs = [];
    }

    setupEventListeners() {
        // Navigation arrows
        $('.nav-arrow.left').on('click', () => this.navigate(-1));
        $('.nav-arrow.right').on('click', () => this.navigate(1));
        
        // Club click events
        $(document).on('click', '.club-orbiter', function() {
            if ($(this).hasClass('center')) {
                const clubId = $(this).attr("id");
                window.App.State.changeNextTemplate(window.App.Templates.CLUBSPAGES[clubId]);
            }
        });

    
    }

    navigate(direction) {
        const clubs = this.getClubsForCategory();
        if (clubs.length === 0) return;
        
        this.currentIndex = (this.currentIndex - direction + clubs.length) % clubs.length;
        this.updateWheel();
    }

    getClubsForCategory() {
        const clubs = window.App.Clubs;
        const categoryClubs = [];
        
        for (const clubId in clubs) {
            if (clubs.hasOwnProperty(clubId)){
                const club = clubs[clubId]
                const categories = club.categories;
            
            
                for (let categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
                    const currentCategorySlug = categories[categoryIndex].slug;
                    if (this.categorySlug === currentCategorySlug) {
                        categoryClubs.push(club);
                        break;
                    }
                }
            }
        }
        
        return categoryClubs.sort((a, b) => a.id - b.id);
    }

    updateWheel() {
        const clubs = this.getClubsForCategory();
        const wheel = $('.clubs-wheel');
        wheel.empty();
        
        if (clubs.length === 0) return;
        
        setTimeout(() => {
            const wheelWidth = wheel.width();
            const wheelHeight = wheel.height();
            
            // Calculate which clubs to show but only show 5 max
            const totalVisible = Math.min(5, clubs.length);
            const centerY = wheelHeight * 0.4; // vertical pos of the arch
            const archWidth = wheelWidth * 0.8; // width of arch
            const archHeight = 100; // height of arch curve

            
            const centerPosition = Math.floor(totalVisible / 2);

            // DEBUG: Log the current state
            console.log('=== UPDATE WHEEL ===');
            console.log('Current index:', this.currentIndex);
            console.log('Total clubs:', clubs.length);
            console.log('Clubs order:', clubs.map(c => c.name));
            console.log('Center position:', centerPosition);
            

        
            // create horizontal arch positions
            for (let i = 0; i < totalVisible; i++) {
                //calc index based on what the curr position is so order is kept

                let clubIndex = (this.currentIndex + i - centerPosition + clubs.length) % clubs.length;
                const club = clubs[clubIndex];

                // Calculate horizontal position so it spaced out even
                const x = (i / (totalVisible - 1)) * archWidth + (wheelWidth - archWidth) / 2;

                
                // Calculate vertical position aka where on the arch
                const progress = i / (totalVisible -1); // 0 to 1
                const curve = Math.sin(progress* Math.PI); // Sine wave for arch
                const y = centerY - (curve * archHeight);
                
                //make sure the center pos is in the middle of whats visible
                const isCenter = i === centerPosition;
                
                const clubOrbiter = $('<div class="club-orbiter"></div>');
                clubOrbiter.attr('id', club.id);
                clubOrbiter.data('description', club.description);
                
                if (isCenter) {
                    clubOrbiter.addClass('center');
                    $('.sun-description').text(club.description).addClass('active');
                }
                
                const clubSize = isCenter ? 200 : 160;
                
                clubOrbiter.css({
                    left: (x - clubSize /2) + 'px',
                    top: (y -clubSize / 2) + 'px',
                    width: clubSize + 'px',
                    height: clubSize + 'px'
                });
                
                const clubName = $('<p class="club-name"></p>').text(club.name);
                const clubDescription = $('<p class="club-description"></p>').text(club.description);
                
                clubOrbiter.append(clubName);
                clubOrbiter.append(clubDescription);
                
                wheel.append(clubOrbiter);
            }
        }, 50);
    }

        

    

    setupElements() {
        const container = $('#main');
        const templateHtml = $('#club-select-template').html();
        container.html(templateHtml);
        
        // Add navigation arrows and sun container
        $('.clubs-select-container').prepend(`
            <div class="nav-arrow left">‹</div>
            <div class="nav-arrow right">›</div>
            <div class="sun-container">
                <div class="sun-description"></div>
                <div class="sun"></div>
            </div>
        `);
        
        this.updateWheel();
        
        // Add keyboard navigation
        $(document).on('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.navigate(-1);
            } else if (e.key === 'ArrowRight') {
                this.navigate(1);
            } else if (e.key === 'Enter') {
                $('.club-orbiter.center').click();
            }
        });
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
    

