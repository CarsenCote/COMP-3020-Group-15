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
        // Use a regular function but store 'this' reference
        const self = this;
        
        $('.category').on('click', function () {
            var categoryId = $(this).attr("id");
            console.log('Raw category ID from click:', categoryId, 'Type:', typeof categoryId);
            self.animateCategoryTransition($(this), categoryId);
        });
    }

    animateCategoryTransition(clickedCategory, categoryId) {
        console.log('Starting animation for category:', categoryId);
        
        $('.category').off('click');
        
        const categories = window.App.Categories;
        let category = categories.find(cat => cat.id == categoryId);
        
        if (!category) {
            console.error('Category not found in data. Clicked ID:', categoryId);
            window.App.State.changeNextTemplate(window.App.Templates.CLUB_SELECT[categoryId]);
            return;
        }

        const categoryRect = clickedCategory[0].getBoundingClientRect();
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        
        const transitionContainer = $('<div class="category-transition-container"></div>');
        $('body').append(transitionContainer);
        
        // Create transition element with gradient overlay
        const transitionElement = $(`
            <div class="category-transition-element">
                <div class="gradient-overlay"></div>
                <img class="category-transition-icon" src="${clickedCategory.find('.category-img').attr('src')}" alt="${category.name}">
                <div class="category-transition-name">${category.name}</div>
            </div>
        `);

        transitionContainer.append(transitionElement);
        
        const initialSize = categoryRect.width;
        
        // Configure main container - NO BACKGROUND HERE
        transitionElement.css({
            width: `${initialSize}px`,
            height: `${initialSize}px`,
            left: `${categoryRect.left}px`,
            top: `${categoryRect.top + scrollY}px`,
            opacity: 1,
            borderRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
            background: 'transparent' // No background on main element
        });

        // USE THE EXACT SAME GRADIENT FROM START TO FINISH
        const sunGradient = `radial-gradient(ellipse at 50% 70%,
            #fff9d6 0%,
            #fff1a8 10%,
            #ffd54d 25%,
            #ffb300 40%,
            #e69100 55%,
            rgba(230, 145, 0, 0.7) 65%,
            rgba(230, 145, 0, 0.4) 75%,
            rgba(230, 145, 0, 0.2) 85%,
            transparent 95%)`;

        // Set gradient overlay with the FINAL gradient from the start
        transitionElement.find('.gradient-overlay').css({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: sunGradient, // Use the same gradient throughout
            borderRadius: '50%',
            filter: 'blur(1px)',
            pointerEvents: 'none'
        });
        
        $('.category').css({ opacity: 0, transition: 'opacity 0.6s ease-out' });
        $('.category-galaxy-img').css({ opacity: 0, transition: 'opacity 0.5s ease-out' });
        $('.categories-title').css({ opacity: 0, transition: 'opacity 0.6s ease-out' });
        
        // Get the EXACT position and dimensions of the existing sun
        const existingSun = $('.sun');
        let finalWidth, finalHeight, finalLeft, finalTop;
        
        if (existingSun.length > 0) {
            const sunRect = existingSun[0].getBoundingClientRect();
            finalWidth = sunRect.width;
            finalHeight = sunRect.height;
            finalLeft = sunRect.left;
            finalTop = sunRect.top + scrollY;
        } else {
            // Fallback: create temp sun to get dimensions
            const tempSunContainer = $('<div class="sun-container"></div>').css({
                position: 'absolute',
                bottom: '-105px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '55vw',
                height: '45vh',
                zIndex: 5,
                pointerEvents: 'none',
                visibility: 'hidden'
            });
            
            const tempSun = $('<div class="sun"></div>').css({
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '55vw',
                height: '45vh',
                background: sunGradient, // Same gradient
                borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                filter: 'blur(2px)'
            });
            
            tempSunContainer.append(tempSun);
            $('body').append(tempSunContainer);
            
            const sunRect = tempSun[0].getBoundingClientRect();
            finalWidth = sunRect.width;
            finalHeight = sunRect.height;
            finalLeft = sunRect.left;
            finalTop = sunRect.top + scrollY;
            
            tempSunContainer.remove();
        }
        
        console.log('Category start position:', categoryRect.top + scrollY);
        console.log('Sun target position:', finalTop);
        console.log('Sun dimensions:', finalWidth, 'x', finalHeight);
        
        // PHASE 1: Quick fade out of content
        setTimeout(() => {
            transitionElement.find('.category-transition-name, .category-transition-icon').css({
                opacity: 0,
                transition: 'opacity 0.3s ease'
            });
        }, 50);

        // PHASE 2: Expand to sun position and size
        setTimeout(() => {
            transitionElement.css({
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                width: `${finalWidth}px`,
                height: `${finalWidth}px`,
                left: `${finalLeft}px`,
                top: `${finalTop}px`,
                borderRadius: '50%'
            });
            
            // Gradually increase blur to match final sun
            transitionElement.find('.gradient-overlay').css({
                transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                filter: 'blur(1.5px)' // Intermediate blur
            });
        }, 100);

        // PHASE 3: Transform to half-sun shape with final appearance
        setTimeout(() => {
            transitionElement.css({
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                height: `${finalHeight}px`,
                borderRadius: '50% 50% 0 0 / 100% 100% 0 0'
            });
            
            // Final appearance - SAME GRADIENT, just shape change
            transitionElement.find('.gradient-overlay').css({
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                filter: 'blur(2px)' // Final blur
                // NO background change - it's been consistent the whole time
            });
        }, 600);
        
        // Complete transition and navigate
        setTimeout(() => {
            transitionContainer.remove();
            window.App.State.changeNextTemplate(window.App.Templates.CLUB_SELECT[categoryId]);
        }, 1000); 
    }
        


    setupElements() {
        const categories = window.App.Categories;
        console.log('Setting up categories with data:', categories);
        
        for (var i = 0; i < categories.length; i++) {
            const category = categories[i];
            console.log('Creating category element:', category.id, category.name);

            // Get the template content and create a new element from it
            const templateHtml = $('#category-template').html();
            const newCategory = $(templateHtml);

            // Set the attributes and text - make sure we're using the correct ID
            newCategory.find('.category').attr('id', category.id); // Use the actual category ID
            newCategory.find('.category-name').text(category.name);
            newCategory.find('.category-description').text(category.description);
            newCategory.find('.category-img').attr('src', `./public/category-icons/${category.slug}.png`);
            
            // Append the new category element
            $('#categories-container').append(newCategory);
        }
        
        console.log('Finished setting up categories. Total:', $('.category').length);
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
    currentlyNavigating = false;
    wheelInitialized = false;

    constructor(templateId, categoryId, categorySlug) {
        super(templateId);
        this.categoryId = categoryId;
        this.categorySlug = categorySlug;
        this.currentClubIndex = 0;
        this.wheelInitialized = false;
    }

    setup() {
        this.categoryClubs = this.getCategoryClubs();
        this.totalVisibleClubs = Math.min(7, this.categoryClubs.length);
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
        // Get the category name from your categories data
        const categories = window.App.Categories;
        const currentCategory = categories.find(cat => cat.id === this.categoryId);
        const categoryName = currentCategory ? currentCategory.name : 'Clubs';
        $('.sun-title').text(categoryName);

         $('.sun-container, .sun, .sun-glow, .sun-title').show();

        // Initially hide the clubs wheel
        $('.clubs-wheel').hide();

        this.updateWheel();

        // Fade in the clubs (planets) after a short delay
        setTimeout(() => {
            $('.clubs-wheel').fadeIn(400);
        }, 300);
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
        const angleIncrement = fullRotationAngle / this.totalVisibleClubs;

        // Calculate radius based on viewport dimensions (use smaller dimension for better fit)
        const radiusFromWheel = Math.max(window.innerWidth) * 0.40;

        for (var element = 0; element < this.totalVisibleClubs; element++) {

            const clubHtml = $('#club-bubble-template').html();
            const newClub = $(clubHtml);

            const clubData = visibleClubs[visibleClubIndex++];
            newClub.attr('id', clubData.id)
            newClub.find('.club-name').text(clubData.name);
            newClub.find('.club-description').text(clubData.description);

                
            this.applyPlanetStyle(newClub, clubData);

            const angle = element * angleIncrement * (Math.PI / 180); // Convert to radians
            const xPos = radiusFromWheel * Math.cos(angle);
            const yPos = radiusFromWheel * Math.sin(angle);

            const isCenterElement = element == Math.floor(this.totalVisibleClubs / 2);
            if (isCenterElement) {
                newClub.addClass('center-club');
            }

            newClub.css({
                position: 'absolute',
                left: `calc(50% + ${xPos}px)`,
                top: `calc(50% + ${yPos}px)`,
                transform: 'translate(-50%, -50%)',
                opacity: 1 // Always visible during navigation
            });

            newClub.on('click', function () {
                const clubId = $(this).attr('id');
                window.App.State.changeNextTemplate(window.App.Templates.CLUB_PAGES[clubId]);
            })

            wheel.append(newClub);
        }

        // Only fade in clubs on initial page load, not during navigation
        if (!this.wheelInitialized) {
            // Fade in the clubs with staggered delay (only on first load)
            $('.club').css('opacity', 0);
            setTimeout(() => {
                $('.club').each(function(index) {
                    $(this).delay(index * 80).animate({opacity: 1}, 400);
                });
            }, 100);
            
            this.wheelInitialized = true;
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

        }, this.wheelInitialized ? 100 : 600); // Faster center scaling during navigation
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

     applyPlanetStyle(clubElement, clubData) {
        const colors = clubData.colors;

        clubElement.css({
            background: `
                /* main spherical shading */
                radial-gradient(circle at 30% 30%, 
                    ${colors[0]} 0%,
                    ${colors[1]} 40%,
                    ${colors[2]} 80%,
                    rgba(0, 0, 0, 0.25) 100%
                ),

                /* subtle surface variation */
                radial-gradient(circle at 65% 45%,
                    rgba(255, 255, 255, 0.12) 0%,
                    rgba(255, 255, 255, 0.04) 35%,
                    transparent 75%
                ),

                /* light diagonal blending for a cooler tone */
                linear-gradient(
                    150deg,
                    rgba(255,255,255,0.03) 0%,
                    rgba(0,0,0,0.10) 45%,
                    rgba(255,255,255,0.02) 90%
                )
            `,

            backgroundBlendMode: 'overlay, soft-light, normal',

            boxShadow: `
                /* gentle outer glow (non-distracting) */
                0 0 25px ${colors[1]}33,

                /* depth + curvature */
                inset -15px -15px 35px rgba(0, 0, 0, 0.35),
                inset 10px 10px 28px rgba(255, 255, 255, 0.18),

                /* crisp but soft edge */
                inset 0 0 6px rgba(255, 255, 255, 0.20),
                inset 0 0 10px rgba(0, 0, 0, 0.25)
            `,

            filter: 'brightness(1.08) contrast(1.13) saturate(1.06)',
            transform: 'translateZ(6px)'
        });
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

        
        if (club.colors && club.colors.length >= 3) {
            $('.club-page-background').css({
                background: `radial-gradient(circle at center,
                    ${club.colors[0]} 0%,
                    ${club.colors[1]} 30%,
                    ${club.colors[2]} 60%,
                    #0a0a1a 90%
                )`
            });
        }


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


