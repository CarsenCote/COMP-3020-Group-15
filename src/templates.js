// our base super class which all templates will be extended from
class Template {

    templateId;

    constructor(templateId) {
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
        $('.blackhole-title').on('click', function () {
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
        $('#signin-form').on('submit', function (event) {
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
            window.App.State.changeNextTemplate(window.App.Templates.CLUB_SELECT[categoryId]);
        })
    }

    setupElements() {
        // set up the elements on the category selection screen based on what's in our json category-data
        // will run until all categories from our data have been made into their own element with a respective id, 
        // displayed name, description, and img
        const categories = window.App.Categories;
        for (var i = 0; i < categories.length; i++) {
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

    static LEFT = 1;
    static RIGHT = -1;

    categoryId;
    categorySlug;

    categoryClubs;
    currentClubIndex;

    visibleClubs;
    visibleElements;
    totalVisibleClubs;
    totalVisibleElements;
    currentlyNavigating = false;

    constructor(templateId, categoryId, categorySlug) {
        super(templateId);
        this.categoryId = categoryId;
        this.categorySlug = categorySlug;
        this.currentClubIndex = 0;
    }

    setup() {
        this.categoryClubs = this.getCategoryClubs();
        this.totalVisibleClubs = Math.min(5, this.categoryClubs.length);
        this.totalVisibleElements = this.totalVisibleClubs + 2;
        super.setup();
    }

    setupEventListeners() {

        // Navigation arrows
        $('.nav-arrow.left').on('click', () => this.navigate(ClubSelectTemplate.LEFT));
        $('.nav-arrow.right').on('click', () => this.navigate(ClubSelectTemplate.RIGHT));

        // Add keyboard navigation
        $(document).on('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.navigate(ClubSelectTemplate.LEFT);
            } else if (e.key === 'ArrowRight') {
                this.navigate(ClubSelectTemplate.RIGHT);
            } else if (e.key === 'Enter') {
            }
        });

        $(window).on('resize', () => {
            this.updateWheel();
        });
    }

    setupElements() {

        // Add navigation arrows and sun container
        $('.clubs-select-container').prepend(`
            <div class="nav-arrow left">‹</div>
            <div class="nav-arrow right">›</div>
        `);

        this.updateWheel();
    }

    navigate(direction) {

        if(this.currentlyNavigating){
            return;
        }

        var newClubIndex = this.currentClubIndex + direction;

        if (newClubIndex < 0) {
            this.currentClubIndex = this.categoryClubs.length - 1;
        }
        else if (newClubIndex >= this.categoryClubs.length) {
            this.currentClubIndex = 0;
        }
        else {
            this.currentClubIndex = newClubIndex;
        }

        const CLUB_FADE_TIME = 100;
        const WHEEL_ROTATE_TIME = 200;
        const ROTATION_ANGLE = (direction == ClubSelectTemplate.LEFT) ? 30 : -30;

        this.currentlyNavigating = true;
        
        $('.club-name, .club-description').css({
            opacity: 0,
            transition: `${CLUB_FADE_TIME}ms ease`,
        });

        $('.center-club').css({
            transform: 'translate(-50%, -50%) scale(1)',
            transition: 'transform 0.1s ease'
        });

        const clubWheel = $('.clubs-wheel');

        setTimeout(() => {
            clubWheel.css({
                transition: `${WHEEL_ROTATE_TIME}ms ease`,
                transform: `rotate(${ROTATION_ANGLE}deg)`
            });
        }, CLUB_FADE_TIME)

        setTimeout(() => {
            this.updateWheel();
        }, CLUB_FADE_TIME + WHEEL_ROTATE_TIME);

        setTimeout(() => {
            this.currentlyNavigating = false;
        }, CLUB_FADE_TIME + WHEEL_ROTATE_TIME + 60);
    }

    getCategoryClubs() {

        const clubs = window.App.Clubs;

        const categoryClubs = clubs.filter((club) => {
            var categories = club.categories
            for (var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
                var category = categories[categoryIndex];
                if (category.slug == this.categorySlug) {
                    return true;
                }
            }
            return false;
        })
        return categoryClubs;
    }

    updateWheel() {

        const wheel = $('.clubs-wheel')
            .css({
                transform: ``,
                transition: ``,
            });

        wheel.empty();

        const visibleClubs = this.getVisibleClubs();
        var visibleClubIndex = 0;

        const fullRotationAngle = -210;
        const angleIncrement = fullRotationAngle / this.totalVisibleElements;

        // Calculate radius based on viewport dimensions (use smaller dimension for better fit)
        const radiusFromWheel = Math.max(window.innerWidth, window.innerHeight) * 0.40;

        for (var element = 0; element < this.totalVisibleElements; element++) {

            const clubHtml = $('#club-bubble-template').html();
            const newClub = $(clubHtml);

            if ((element != 0) && (element != (this.totalVisibleElements - 1))) {

                const clubData = visibleClubs[visibleClubIndex++];
                newClub.attr('id', clubData.id)
                newClub.find('.club-name').text(clubData.name);
                newClub.find('.club-description').text(clubData.description);
            }

            const angle = element * angleIncrement * (Math.PI / 180); // Convert to radians
            const xPos = radiusFromWheel * Math.cos(angle);
            const yPos = radiusFromWheel * Math.sin(angle);

            const isCenterElement = element == Math.floor(this.totalVisibleElements / 2);
            if (isCenterElement) {
                newClub.addClass('center-club');
            }

            newClub.css({
                position: 'absolute',
                left: `calc(50% + ${xPos}px)`,
                top: `calc(50% + ${yPos}px)`,
                transform: 'translate(-50%, -50%)',
            });

            newClub.on('click', function () {
                const clubId = $(this).attr('id');
                window.App.State.changeNextTemplate(window.App.Templates.CLUB_PAGES[clubId]);
            })

            wheel.append(newClub);
        }

        setTimeout(() => {
            const centerClub = $('.center-club');

            centerClub.css({
                transform: 'translate(-50%, -50%) scale(1.5)',
                transition: 'transform 0.2s ease'
            });

            centerClub.find('.club-description').css({
                transition: `0.2s ease`,
                opacity: 1,
                maxHeight: `100%`,
            });

        }, 100);

    }

    getVisibleClubs() {

        const visibleClubs = [];
        const halfVisibleClubs = Math.floor(this.totalVisibleClubs / 2);
        const totalClubs = this.categoryClubs.length;

        // Calculate the starting offset (left-most club to display)
        const startOffset = -halfVisibleClubs;

        // Get all visible clubs using modulo arithmetic for circular wrapping
        for (let i = 0; i < this.totalVisibleClubs; i++) {
            const offset = startOffset + i;
            // Use modulo to wrap around circularly (handles both negative and positive)
            let clubIndex = (this.currentClubIndex + offset) % totalClubs;

            if (clubIndex < 0) {
                clubIndex += totalClubs;
            }

            visibleClubs.push(this.categoryClubs[clubIndex]);
        }

        return visibleClubs;
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
        // get the user's name based on signin variables saved from first screen
        const user = window.App.State.user;
        const userEvents = user.getEvents();
        const userClubs = user.getClubs();
        const userPosts = user.getPosts();

        const name = user.firstName + " " + user.lastName;

        const userNameHtml = $('#user-name-container');

        // display the user's name in the .user-name element of user-name-container div
        userNameHtml.find('.user-name-text').text(name);
    }

    setupPosts(posts) {

    }

    setupEvents(events) {

    }
}


class ClubPageTemplate extends Template {

    clubId;
    clubSlug;

    membersMenuCollapsed = true;

    constructor(templateId, clubId, clubSlug) {
        super(templateId);
        this.clubId = clubId;
        this.clubSlug = clubSlug;
    }

    setupEventListeners() {
        
        const user = window.App.State.user;

        // Join / Leave button click callbacks
        const joinLeaveButton = $('#join-leave-btn');

        joinLeaveButton.on('click', () => {

            if (joinLeaveButton.hasClass('join-btn')) {
                user.addClub(this.clubId);
                joinLeaveButton.removeClass('join-btn');
            } else if (joinLeaveButton.hasClass('leave-btn')) {
                user.leaveClub(this.clubId)
                joinLeaveButton.removeClass('leave-btn');
            }

            this.setupJoinLeaveButton();
        })

        const addRemoveEventButtons = $('.add-remove-event-button');
        
        for(var buttonIndex = 0 ; buttonIndex<addRemoveEventButtons.length ; buttonIndex++)
        {
            const addRemoveButton = $(addRemoveEventButtons[buttonIndex]);
            addRemoveButton.on('click', ()=> {

                const eventId = addRemoveButton.parents('.event-container').attr('id');

                if(addRemoveButton.hasClass('add-event-button')){
                    user.addEvent(eventId);
                    addRemoveButton.removeClass('add-event-button');
                } else if(addRemoveButton.hasClass('remove-event-button')) {
                    user.leaveEvent(eventId);
                    addRemoveButton.removeClass('remove-event-button');
                }
                this.setupAddRemoveEventButtons();
            })
        }

        

        // Member menu collapsable button
        const membersMenuButton = $('#members-button')

        membersMenuButton.on('click', () => {

            // Toggle collapsed value
            this.membersMenuCollapsed = !this.membersMenuCollapsed;

            $('.members-container').css({
                maxHeight: this.membersMenuCollapsed ? `` : `100%`,
                visibility: this.membersMenuCollapsed ? `` : `visible`,
                transition: `0.2s ease`
            })
        });


    }

    setupElements() {
        const club = window.App.Clubs[this.clubId];
        const clubPageContainer = $('#club-page-container');
        clubPageContainer.find('.club-name').text(club.name);
        clubPageContainer.find('.about-us-header-description').text(club.description);

        const clubPosts = window.App.Posts.filter((post) => {
            return this.clubId == post.clubId;
        });

        clubPosts.sort((post1, post2) => {
            return this.sortByDateDesc(post1.date, post2.date);
        })

        const clubEvents = clubPosts.filter((post) => {
            return post.event;
        })

        clubEvents.sort((event1, event2) => {
            return this.sortByDateDesc(event1.date, event2.date);
        })

        const clubMembers = window.App.Members.filter((member) => {
            const memberClubs = member.clubs;
            for (var clubIndex = 0; clubIndex < memberClubs.length; clubIndex++) {
                const club = memberClubs[clubIndex];
                if (club.id == this.clubId) {
                    return true;
                }
            }
            return false;
        })

        this.setupJoinLeaveButton();
        this.setupPosts(clubPosts);
        this.setupEvents(clubEvents);
        this.setupMembers(clubMembers);
        this.setupAddRemoveEventButtons();
    }

    setupJoinLeaveButton() {
        const user = window.App.State.user;
        const userInClub = user.inClub(this.clubId);
        const joinLeaveButtonText = userInClub ? 'Leave' : 'Join';
        const joinLeaveButtonClass = userInClub ? 'leave-btn' : 'join-btn';
        $('#join-leave-btn').addClass(joinLeaveButtonClass).text(joinLeaveButtonText);
    }

    setupAddRemoveEventButtons() {
        const user = window.App.State.user;
        const addRemoveEventButtons = $('.add-remove-event-button');
        
        for(var i = 0; i < addRemoveEventButtons.length; i++)
        {
            const addRemoveButton = $(addRemoveEventButtons[i]);
            const eventId = addRemoveButton.parents('.event-container').attr('id');
            const userInEvent = user.inEvent(eventId);
            const addRemoveButtonText = userInEvent ? 'Remove' : 'Add';
            const addRemoveButtonClass = userInEvent ? 'remove-event-button' : 'add-event-button';
            addRemoveButton.addClass(addRemoveButtonClass).text(addRemoveButtonText);
        }
    }

    setupPosts(clubPosts) {
        const postsContainer = $('.post-element-container');

        for (var postIndex = 0; postIndex < clubPosts.length; postIndex++) {
            const post = clubPosts[postIndex];
            const postHtml = $('#post-template').html();
            const newPost = $(postHtml);

            newPost.find('.post-title').text(post.title);
            newPost.find('.post-content').text(post.content);
            newPost.find('.post-date').text(post.date);

            postsContainer.append(newPost);
        }
    }

    setupEvents(clubEvents) {
        const eventsContainer = $('.event-element-container');

        for (var eventIndex = 0; eventIndex < clubEvents.length; eventIndex++) {
            const event = clubEvents[eventIndex];
            const eventHtml = $('#event-template').html();
            const newEvent = $(eventHtml);

            newEvent.attr('id', event.id);
            newEvent.find('.event-title').text(event.title);
            newEvent.find('.event-date').text(event.date);
            newEvent.find('.event-time').text(`${event.start_time} - ${event.end_time}`);

            eventsContainer.append(newEvent);
        }
    }

    setupMembers(clubMembers) {
        const membersContainer = $('.members-container');
        for (var memberIndex = 0; memberIndex < clubMembers.length; memberIndex++) {
            const member = clubMembers[memberIndex];
            const memberHtml = $('#member-template').html();
            const newMember = $(memberHtml);

            const memberImg = newMember.find('.member-img');
            if(member.clubs.find((club) => {
                return club.id == this.clubId && club.admin;
            })) {
                memberImg.css('display','block');
            }

            newMember.find('.member-name').text(`${member.fname} ${member.lname}`);

            membersContainer.append(newMember);
        }
    }

    sortByDateDesc(date1, date2) {

        const [dayA, monthA, yearA] = date1.split('-');
        const [dayB, monthB, yearB] = date2.split('-');

        // Create a YYYYMMDD string for comparison
        const formattedDateA = `${yearA}${monthA}${dayA}`;
        const formattedDateB = `${yearB}${monthB}${dayB}`;

        // Compare the formatted strings
        if (formattedDateA < formattedDateB) {
            return 1;
        }
        if (formattedDateA > formattedDateB) {
            return -1;
        }
        return 0; // Dates are equal
    }
}


