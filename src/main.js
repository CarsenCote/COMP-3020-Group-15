
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

    console.log(data);
});


const CATEGORIES = [
    {
        "categoryid": "academic",
        "name": "Academic & Professional",
        "description": "Clubs focused on academic growth, networking, and professional development across disciplines."
    },
    {
        "categoryid": "arts",
        "name": "Arts & Culture",
        "description": "Clubs celebrating creativity, performance, and cultural expression through art, music, and literature."
    },
    {
        "categoryid": "sports",
        "name": "Sports & Recreation",
        "description": "Clubs dedicated to fitness, competition, and recreational sports for students of all skill levels."
    },
    {
        "categoryid": "technology",
        "name": "Technology & Innovation",
        "description": "Groups exploring programming, robotics, AI, and cutting-edge technologies."
    },
    {
        "categoryid": "community",
        "name": "Community & Volunteering",
        "description": "Clubs committed to service, outreach, and making a positive impact locally and globally."
    },
    {
        "categoryid": "gaming",
        "name": "Gaming & Esports",
        "description": "Communities for competitive gaming, casual play, and exploring game design."
    },
    {
        "categoryid": "environment",
        "name": "Environment & Sustainability",
        "description": "Clubs promoting environmental awareness, sustainability projects, and outdoor activities."
    },
    {
        "categoryid": "social",
        "name": "Social & Special Interest",
        "description": "A mix of hobby, discussion, and lifestyle clubs for students to connect over shared passions."
    }
];

const CLUBS = [
    {
        "categoryid": "academic",
        "clubid": "engineeringsociety",
        "name": "Engineering Society",
        "description": "The Engineering Society connects students passionate about academic, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "academic",
        "clubid": "businessclub",
        "name": "Business Club",
        "description": "Business Club brings together curious minds who love all things academic \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "academic",
        "clubid": "psychologysociety",
        "name": "Psychology Society",
        "description": "Get involved with the Psychology Society! We host regular discussions, activities, and fun gatherings focused on academic."
    },
    {
        "categoryid": "academic",
        "clubid": "mathclub",
        "name": "Math Club",
        "description": "Math Club brings together curious minds who love all things academic \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "academic",
        "clubid": "philosophyassociation",
        "name": "Philosophy Association",
        "description": "The Philosophy Association is a welcoming community where students share their enthusiasm for academic and build lasting friendships."
    },
    {
        "categoryid": "academic",
        "clubid": "biologysociety",
        "name": "Biology Society",
        "description": "Join the Biology Society to explore, learn, and collaborate on everything related to academic."
    },
    {
        "categoryid": "academic",
        "clubid": "pre-lawclub",
        "name": "Pre-Law Club",
        "description": "Pre-Law Club brings together curious minds who love all things academic \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "academic",
        "clubid": "economicsclub",
        "name": "Economics Club",
        "description": "Join the Economics Club to explore, learn, and collaborate on everything related to academic."
    },
    {
        "categoryid": "academic",
        "clubid": "datascienceclub",
        "name": "Data Science Club",
        "description": "The Data Science Club is a welcoming community where students share their enthusiasm for academic and build lasting friendships."
    },
    {
        "categoryid": "academic",
        "clubid": "astronomyclub",
        "name": "Astronomy Club",
        "description": "Astronomy Club brings together curious minds who love all things academic \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "arts",
        "clubid": "dramasociety",
        "name": "Drama Society",
        "description": "Drama Society brings together curious minds who love all things arts \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "arts",
        "clubid": "photographyclub",
        "name": "Photography Club",
        "description": "Photography Club brings together curious minds who love all things arts \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "arts",
        "clubid": "filmsociety",
        "name": "Film Society",
        "description": "Get involved with the Film Society! We host regular discussions, activities, and fun gatherings focused on arts."
    },
    {
        "categoryid": "arts",
        "clubid": "musicsociety",
        "name": "Music Society",
        "description": "Join the Music Society to explore, learn, and collaborate on everything related to arts."
    },
    {
        "categoryid": "arts",
        "clubid": "fineartsclub",
        "name": "Fine Arts Club",
        "description": "Join the Fine Arts Club to explore, learn, and collaborate on everything related to arts."
    },
    {
        "categoryid": "arts",
        "clubid": "dancecollective",
        "name": "Dance Collective",
        "description": "Join the Dance Collective to explore, learn, and collaborate on everything related to arts."
    },
    {
        "categoryid": "arts",
        "clubid": "poetrysociety",
        "name": "Poetry Society",
        "description": "The Poetry Society connects students passionate about arts, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "arts",
        "clubid": "culturalexchangesociety",
        "name": "Cultural Exchange Society",
        "description": "Get involved with the Cultural Exchange Society! We host regular discussions, activities, and fun gatherings focused on arts."
    },
    {
        "categoryid": "arts",
        "clubid": "graphicdesignclub",
        "name": "Graphic Design Club",
        "description": "The Graphic Design Club connects students passionate about arts, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "arts",
        "clubid": "fashioncollective",
        "name": "Fashion Collective",
        "description": "The Fashion Collective is a welcoming community where students share their enthusiasm for arts and build lasting friendships."
    },
    {
        "categoryid": "sports",
        "clubid": "soccerclub",
        "name": "Soccer Club",
        "description": "Join the Soccer Club to explore, learn, and collaborate on everything related to sports."
    },
    {
        "categoryid": "sports",
        "clubid": "basketballclub",
        "name": "Basketball Club",
        "description": "The Basketball Club is a welcoming community where students share their enthusiasm for sports and build lasting friendships."
    },
    {
        "categoryid": "sports",
        "clubid": "volleyballclub",
        "name": "Volleyball Club",
        "description": "Get involved with the Volleyball Club! We host regular discussions, activities, and fun gatherings focused on sports."
    },
    {
        "categoryid": "sports",
        "clubid": "tennisclub",
        "name": "Tennis Club",
        "description": "Get involved with the Tennis Club! We host regular discussions, activities, and fun gatherings focused on sports."
    },
    {
        "categoryid": "sports",
        "clubid": "runningclub",
        "name": "Running Club",
        "description": "The Running Club is a welcoming community where students share their enthusiasm for sports and build lasting friendships."
    },
    {
        "categoryid": "sports",
        "clubid": "rockclimbingclub",
        "name": "Rock Climbing Club",
        "description": "Get involved with the Rock Climbing Club! We host regular discussions, activities, and fun gatherings focused on sports."
    },
    {
        "categoryid": "sports",
        "clubid": "swimteam",
        "name": "Swim Team",
        "description": "The Swim Team connects students passionate about sports, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "sports",
        "clubid": "cyclingclub",
        "name": "Cycling Club",
        "description": "Cycling Club brings together curious minds who love all things sports \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "sports",
        "clubid": "martialartsclub",
        "name": "Martial Arts Club",
        "description": "Martial Arts Club brings together curious minds who love all things sports \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "sports",
        "clubid": "yogaclub",
        "name": "Yoga Club",
        "description": "Yoga Club brings together curious minds who love all things sports \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "technology",
        "clubid": "computersciencesociety",
        "name": "Computer Science Society",
        "description": "The Computer Science Society connects students passionate about technology, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "technology",
        "clubid": "airesearchclub",
        "name": "AI Research Club",
        "description": "The AI Research Club connects students passionate about technology, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "technology",
        "clubid": "roboticsteam",
        "name": "Robotics Team",
        "description": "The Robotics Team connects students passionate about technology, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "technology",
        "clubid": "cybersecurityclub",
        "name": "Cybersecurity Club",
        "description": "The Cybersecurity Club is a welcoming community where students share their enthusiasm for technology and build lasting friendships."
    },
    {
        "categoryid": "technology",
        "clubid": "gamedevelopmentsociety",
        "name": "Game Development Society",
        "description": "Game Development Society brings together curious minds who love all things technology \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "technology",
        "clubid": "webdevcollective",
        "name": "Web Dev Collective",
        "description": "The Web Dev Collective connects students passionate about technology, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "technology",
        "clubid": "appdevelopmentclub",
        "name": "App Development Club",
        "description": "The App Development Club connects students passionate about technology, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "technology",
        "clubid": "hackathonteam",
        "name": "Hackathon Team",
        "description": "Hackathon Team brings together curious minds who love all things technology \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "technology",
        "clubid": "iotnetwork",
        "name": "IoT Network",
        "description": "The IoT Network connects students passionate about technology, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "technology",
        "clubid": "machinelearningsociety",
        "name": "Machine Learning Society",
        "description": "The Machine Learning Society connects students passionate about technology, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "community",
        "clubid": "volunteerassociation",
        "name": "Volunteer Association",
        "description": "The Volunteer Association connects students passionate about community, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "community",
        "clubid": "foodbankhelpers",
        "name": "Food Bank Helpers",
        "description": "Join the Food Bank Helpers to explore, learn, and collaborate on everything related to community."
    },
    {
        "categoryid": "community",
        "clubid": "peermentorshipprogram",
        "name": "Peer Mentorship Program",
        "description": "Join the Peer Mentorship Program to explore, learn, and collaborate on everything related to community."
    },
    {
        "categoryid": "community",
        "clubid": "campusambassadors",
        "name": "Campus Ambassadors",
        "description": "Campus Ambassadors brings together curious minds who love all things community \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "community",
        "clubid": "blooddrivecommittee",
        "name": "Blood Drive Committee",
        "description": "Get involved with the Blood Drive Committee! We host regular discussions, activities, and fun gatherings focused on community."
    },
    {
        "categoryid": "community",
        "clubid": "neighborhoodoutreach",
        "name": "Neighborhood Outreach",
        "description": "Join the Neighborhood Outreach to explore, learn, and collaborate on everything related to community."
    },
    {
        "categoryid": "community",
        "clubid": "seniorsupportgroup",
        "name": "Senior Support Group",
        "description": "Join the Senior Support Group to explore, learn, and collaborate on everything related to community."
    },
    {
        "categoryid": "community",
        "clubid": "refugeesupportclub",
        "name": "Refugee Support Club",
        "description": "The Refugee Support Club connects students passionate about community, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "community",
        "clubid": "animalsheltervolunteers",
        "name": "Animal Shelter Volunteers",
        "description": "Get involved with the Animal Shelter Volunteers! We host regular discussions, activities, and fun gatherings focused on community."
    },
    {
        "categoryid": "community",
        "clubid": "youthmentorship",
        "name": "Youth Mentorship",
        "description": "Get involved with the Youth Mentorship! We host regular discussions, activities, and fun gatherings focused on community."
    },
    {
        "categoryid": "gaming",
        "clubid": "esportsclub",
        "name": "Esports Club",
        "description": "Get involved with the Esports Club! We host regular discussions, activities, and fun gatherings focused on gaming."
    },
    {
        "categoryid": "gaming",
        "clubid": "boardgamessociety",
        "name": "Board Games Society",
        "description": "Board Games Society brings together curious minds who love all things gaming \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "gaming",
        "clubid": "chessclub",
        "name": "Chess Club",
        "description": "The Chess Club is a welcoming community where students share their enthusiasm for gaming and build lasting friendships."
    },
    {
        "categoryid": "gaming",
        "clubid": "tabletoprpgguild",
        "name": "Tabletop RPG Guild",
        "description": "Join the Tabletop RPG Guild to explore, learn, and collaborate on everything related to gaming."
    },
    {
        "categoryid": "gaming",
        "clubid": "smashbrosclub",
        "name": "Smash Bros Club",
        "description": "Get involved with the Smash Bros Club! We host regular discussions, activities, and fun gatherings focused on gaming."
    },
    {
        "categoryid": "gaming",
        "clubid": "lanpartycrew",
        "name": "LAN Party Crew",
        "description": "The LAN Party Crew is a welcoming community where students share their enthusiasm for gaming and build lasting friendships."
    },
    {
        "categoryid": "gaming",
        "clubid": "gamemoddingclub",
        "name": "Game Modding Club",
        "description": "The Game Modding Club is a welcoming community where students share their enthusiasm for gaming and build lasting friendships."
    },
    {
        "categoryid": "gaming",
        "clubid": "strategygamingsociety",
        "name": "Strategy Gaming Society",
        "description": "The Strategy Gaming Society connects students passionate about gaming, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "gaming",
        "clubid": "cardgamesclub",
        "name": "Card Games Club",
        "description": "The Card Games Club is a welcoming community where students share their enthusiasm for gaming and build lasting friendships."
    },
    {
        "categoryid": "gaming",
        "clubid": "retrogamingclub",
        "name": "Retro Gaming Club",
        "description": "The Retro Gaming Club is a welcoming community where students share their enthusiasm for gaming and build lasting friendships."
    },
    {
        "categoryid": "environment",
        "clubid": "sustainabilitysociety",
        "name": "Sustainability Society",
        "description": "Get involved with the Sustainability Society! We host regular discussions, activities, and fun gatherings focused on environment."
    },
    {
        "categoryid": "environment",
        "clubid": "recyclingadvocates",
        "name": "Recycling Advocates",
        "description": "The Recycling Advocates is a welcoming community where students share their enthusiasm for environment and build lasting friendships."
    },
    {
        "categoryid": "environment",
        "clubid": "wildlifeconservationclub",
        "name": "Wildlife Conservation Club",
        "description": "Wildlife Conservation Club brings together curious minds who love all things environment \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "environment",
        "clubid": "cleanenergyclub",
        "name": "Clean Energy Club",
        "description": "The Clean Energy Club is a welcoming community where students share their enthusiasm for environment and build lasting friendships."
    },
    {
        "categoryid": "environment",
        "clubid": "gardenersguild",
        "name": "Gardeners Guild",
        "description": "The Gardeners Guild is a welcoming community where students share their enthusiasm for environment and build lasting friendships."
    },
    {
        "categoryid": "environment",
        "clubid": "hikingclub",
        "name": "Hiking Club",
        "description": "Get involved with the Hiking Club! We host regular discussions, activities, and fun gatherings focused on environment."
    },
    {
        "categoryid": "environment",
        "clubid": "campusgreenteam",
        "name": "Campus Green Team",
        "description": "Join the Campus Green Team to explore, learn, and collaborate on everything related to environment."
    },
    {
        "categoryid": "environment",
        "clubid": "zerowastecollective",
        "name": "Zero Waste Collective",
        "description": "Zero Waste Collective brings together curious minds who love all things environment \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "environment",
        "clubid": "climateactionnetwork",
        "name": "Climate Action Network",
        "description": "The Climate Action Network is a welcoming community where students share their enthusiasm for environment and build lasting friendships."
    },
    {
        "categoryid": "environment",
        "clubid": "outdooradventures",
        "name": "Outdoor Adventures",
        "description": "Get involved with the Outdoor Adventures! We host regular discussions, activities, and fun gatherings focused on environment."
    },
    {
        "categoryid": "social",
        "clubid": "bookclub",
        "name": "Book Club",
        "description": "Get involved with the Book Club! We host regular discussions, activities, and fun gatherings focused on social."
    },
    {
        "categoryid": "social",
        "clubid": "debatesociety",
        "name": "Debate Society",
        "description": "The Debate Society connects students passionate about social, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "social",
        "clubid": "cookingclub",
        "name": "Cooking Club",
        "description": "The Cooking Club is a welcoming community where students share their enthusiasm for social and build lasting friendships."
    },
    {
        "categoryid": "social",
        "clubid": "teaappreciationcircle",
        "name": "Tea Appreciation Circle",
        "description": "The Tea Appreciation Circle connects students passionate about social, offering workshops, events, and social meetups throughout the year."
    },
    {
        "categoryid": "social",
        "clubid": "languageexchangegroup",
        "name": "Language Exchange Group",
        "description": "Language Exchange Group brings together curious minds who love all things social \u2014 whether you\u2019re new or experienced, everyone\u2019s welcome."
    },
    {
        "categoryid": "social",
        "clubid": "travelenthusiasts",
        "name": "Travel Enthusiasts",
        "description": "The Travel Enthusiasts is a welcoming community where students share their enthusiasm for social and build lasting friendships."
    },
    {
        "categoryid": "social",
        "clubid": "filmappreciationsociety",
        "name": "Film Appreciation Society",
        "description": "Get involved with the Film Appreciation Society! We host regular discussions, activities, and fun gatherings focused on social."
    },
    {
        "categoryid": "social",
        "clubid": "coffeeclub",
        "name": "Coffee Club",
        "description": "Join the Coffee Club to explore, learn, and collaborate on everything related to social."
    },
    {
        "categoryid": "social",
        "clubid": "creativewritingcircle",
        "name": "Creative Writing Circle",
        "description": "The Creative Writing Circle is a welcoming community where students share their enthusiasm for social and build lasting friendships."
    },
    {
        "categoryid": "social",
        "clubid": "comedyclub",
        "name": "Comedy Club",
        "description": "Join the Comedy Club to explore, learn, and collaborate on everything related to social."
    }
];

const POSTS = [
    {
        "clubid": "engineeringsociety",
        "postid": "engineeringsociety_post1",
        "subject": "Club Update: Fundraiser",
        "body": "Hey everyone! Get ready for our upcoming Engineering Society event. It\u2019s going to be a great time! We can\u2019t wait to see you!",
        "date": "2025-03-16"
    },
    {
        "clubid": "engineeringsociety",
        "postid": "engineeringsociety_post2",
        "subject": "Social Night - Trivia Night",
        "body": "Hi members! Our next Engineering Society gathering is coming up soon. Hope to see lots of you there! It\u2019s open to all skill levels.",
        "date": "2025-06-01"
    },
    {
        "clubid": "businessclub",
        "postid": "businessclub_post1",
        "subject": "Business Club Weekly Meetup",
        "body": "Hello all! We\u2019re hosting a special Business Club meetup next week \u2014 don\u2019t miss it! We can\u2019t wait to see you!",
        "date": "2025-04-29"
    },
    {
        "clubid": "businessclub",
        "postid": "businessclub_post2",
        "subject": "Business Club Weekly Meetup",
        "body": "Hi everyone! Another exciting week ahead for the Business Club! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-01-03"
    },
    {
        "clubid": "psychologysociety",
        "postid": "psychologysociety_post1",
        "subject": "Join Us for Game Night",
        "body": "Hi everyone! Our next Psychology Society gathering is coming up soon. Hope to see lots of you there! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-04-04"
    },
    {
        "clubid": "psychologysociety",
        "postid": "psychologysociety_post2",
        "subject": "Join Us for Game Night",
        "body": "Hey everyone! We\u2019re hosting a special Psychology Society meetup next week \u2014 don\u2019t miss it! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-06"
    },
    {
        "clubid": "mathclub",
        "postid": "mathclub_post1",
        "subject": "Let\u2019s Get Together for Practice Session",
        "body": "Hey everyone! We\u2019ve got something fun planned for the Math Club \u2014 come join us! Snacks will be provided \ud83c\udf6a",
        "date": "2025-04-10"
    },
    {
        "clubid": "mathclub",
        "postid": "mathclub_post2",
        "subject": "Math Club Weekly Meetup",
        "body": "Hello all! We\u2019re hosting a special Math Club meetup next week \u2014 don\u2019t miss it! Bring a friend along!",
        "date": "2025-05-24"
    },
    {
        "clubid": "philosophyassociation",
        "postid": "philosophyassociation_post1",
        "subject": "Club Update: Panel Discussion",
        "body": "Hi members! Our next Philosophy Association gathering is coming up soon. Hope to see lots of you there! It\u2019s open to all skill levels.",
        "date": "2025-06-28"
    },
    {
        "clubid": "philosophyassociation",
        "postid": "philosophyassociation_post2",
        "subject": "Club Update: Study Session",
        "body": "Hello all! We\u2019re hosting a special Philosophy Association meetup next week \u2014 don\u2019t miss it! It\u2019s open to all skill levels.",
        "date": "2025-02-10"
    },
    {
        "clubid": "biologysociety",
        "postid": "biologysociety_post1",
        "subject": "Upcoming Event: Game Night",
        "body": "Hi members! Our next Biology Society gathering is coming up soon. Hope to see lots of you there! It\u2019s open to all skill levels.",
        "date": "2025-03-07"
    },
    {
        "clubid": "biologysociety",
        "postid": "biologysociety_post2",
        "subject": "Exciting News from Biology Society",
        "body": "Hi members! Another exciting week ahead for the Biology Society! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-03-09"
    },
    {
        "clubid": "pre-lawclub",
        "postid": "pre-lawclub_post1",
        "subject": "Let\u2019s Get Together for Game Night",
        "body": "Hi everyone! We\u2019re hosting a special Pre-Law Club meetup next week \u2014 don\u2019t miss it! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-26"
    },
    {
        "clubid": "pre-lawclub",
        "postid": "pre-lawclub_post2",
        "subject": "Club Update: Game Night",
        "body": "Hi everyone! Get ready for our upcoming Pre-Law Club event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-06-09"
    },
    {
        "clubid": "economicsclub",
        "postid": "economicsclub_post1",
        "subject": "Let\u2019s Get Together for Panel Discussion",
        "body": "Hi members! We\u2019re hosting a special Economics Club meetup next week \u2014 don\u2019t miss it! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-09"
    },
    {
        "clubid": "economicsclub",
        "postid": "economicsclub_post2",
        "subject": "Exciting News from Economics Club",
        "body": "Hey folks! Another exciting week ahead for the Economics Club! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-03-23"
    },
    {
        "clubid": "datascienceclub",
        "postid": "datascienceclub_post1",
        "subject": "Upcoming Event: Study Session",
        "body": "Hi everyone! Our next Data Science Club gathering is coming up soon. Hope to see lots of you there! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-05-18"
    },
    {
        "clubid": "datascienceclub",
        "postid": "datascienceclub_post2",
        "subject": "Reminder: Field Trip This Week",
        "body": "Hey everyone! We\u2019re hosting a special Data Science Club meetup next week \u2014 don\u2019t miss it! Bring a friend along!",
        "date": "2025-03-05"
    },
    {
        "clubid": "astronomyclub",
        "postid": "astronomyclub_post1",
        "subject": "Astronomy Club Weekly Meetup",
        "body": "Hey everyone! We\u2019re hosting a special Astronomy Club meetup next week \u2014 don\u2019t miss it! Snacks will be provided \ud83c\udf6a",
        "date": "2025-01-17"
    },
    {
        "clubid": "astronomyclub",
        "postid": "astronomyclub_post2",
        "subject": "New Workshop: Field Trip",
        "body": "Hi members! Get ready for our upcoming Astronomy Club event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-02-21"
    },
    {
        "clubid": "dramasociety",
        "postid": "dramasociety_post1",
        "subject": "Upcoming Event: Field Trip",
        "body": "Hey folks! We\u2019re hosting a special Drama Society meetup next week \u2014 don\u2019t miss it! It\u2019s open to all skill levels.",
        "date": "2025-02-20"
    },
    {
        "clubid": "dramasociety",
        "postid": "dramasociety_post2",
        "subject": "Social Night - Trivia Night",
        "body": "Hey everyone! Our next Drama Society gathering is coming up soon. Hope to see lots of you there! It\u2019s open to all skill levels.",
        "date": "2025-04-09"
    },
    {
        "clubid": "photographyclub",
        "postid": "photographyclub_post1",
        "subject": "Social Night - Guest Lecture",
        "body": "Hi members! We\u2019re hosting a special Photography Club meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-01-18"
    },
    {
        "clubid": "photographyclub",
        "postid": "photographyclub_post2",
        "subject": "Special Guest Session: Game Night",
        "body": "Hey everyone! Get ready for our upcoming Photography Club event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-28"
    },
    {
        "clubid": "filmsociety",
        "postid": "filmsociety_post1",
        "subject": "Club Update: Game Night",
        "body": "Hey everyone! Get ready for our upcoming Film Society event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-01-07"
    },
    {
        "clubid": "filmsociety",
        "postid": "filmsociety_post2",
        "subject": "Let\u2019s Get Together for Workshop",
        "body": "Hey folks! We\u2019re hosting a special Film Society meetup next week \u2014 don\u2019t miss it! We can\u2019t wait to see you!",
        "date": "2025-04-21"
    },
    {
        "clubid": "musicsociety",
        "postid": "musicsociety_post1",
        "subject": "Upcoming Event: Field Trip",
        "body": "Hi members! We\u2019re hosting a special Music Society meetup next week \u2014 don\u2019t miss it! It\u2019s open to all skill levels.",
        "date": "2025-04-28"
    },
    {
        "clubid": "musicsociety",
        "postid": "musicsociety_post2",
        "subject": "Upcoming Event: Workshop",
        "body": "Hello all! Get ready for our upcoming Music Society event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-04-12"
    },
    {
        "clubid": "fineartsclub",
        "postid": "fineartsclub_post1",
        "subject": "New Workshop: Practice Session",
        "body": "Hello all! We\u2019ve got something fun planned for the Fine Arts Club \u2014 come join us! Bring a friend along!",
        "date": "2025-06-11"
    },
    {
        "clubid": "fineartsclub",
        "postid": "fineartsclub_post2",
        "subject": "New Workshop: Workshop",
        "body": "Hi members! Get ready for our upcoming Fine Arts Club event. It\u2019s going to be a great time! It\u2019s open to all skill levels.",
        "date": "2025-04-06"
    },
    {
        "clubid": "dancecollective",
        "postid": "dancecollective_post1",
        "subject": "Exciting News from Dance Collective",
        "body": "Hey folks! We\u2019ve got something fun planned for the Dance Collective \u2014 come join us! We can\u2019t wait to see you!",
        "date": "2025-02-20"
    },
    {
        "clubid": "dancecollective",
        "postid": "dancecollective_post2",
        "subject": "Let\u2019s Get Together for Networking Night",
        "body": "Hey everyone! We\u2019ve got something fun planned for the Dance Collective \u2014 come join us! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-03-12"
    },
    {
        "clubid": "poetrysociety",
        "postid": "poetrysociety_post1",
        "subject": "Club Update: Game Night",
        "body": "Hello all! Our next Poetry Society gathering is coming up soon. Hope to see lots of you there! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-10"
    },
    {
        "clubid": "poetrysociety",
        "postid": "poetrysociety_post2",
        "subject": "Upcoming Event: Networking Night",
        "body": "Hey folks! We\u2019re hosting a special Poetry Society meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-04-25"
    },
    {
        "clubid": "culturalexchangesociety",
        "postid": "culturalexchangesociety_post1",
        "subject": "Reminder: Panel Discussion This Week",
        "body": "Hey folks! Another exciting week ahead for the Cultural Exchange Society! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-01-15"
    },
    {
        "clubid": "culturalexchangesociety",
        "postid": "culturalexchangesociety_post2",
        "subject": "Reminder: Practice Session This Week",
        "body": "Hi everyone! We\u2019ve got something fun planned for the Cultural Exchange Society \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-03-17"
    },
    {
        "clubid": "graphicdesignclub",
        "postid": "graphicdesignclub_post1",
        "subject": "Reminder: Trivia Night This Week",
        "body": "Hey everyone! Another exciting week ahead for the Graphic Design Club! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-04-26"
    },
    {
        "clubid": "graphicdesignclub",
        "postid": "graphicdesignclub_post2",
        "subject": "Upcoming Event: Workshop",
        "body": "Hello all! Get ready for our upcoming Graphic Design Club event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-03-12"
    },
    {
        "clubid": "fashioncollective",
        "postid": "fashioncollective_post1",
        "subject": "Join Us for Study Session",
        "body": "Hi everyone! Get ready for our upcoming Fashion Collective event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-01-21"
    },
    {
        "clubid": "fashioncollective",
        "postid": "fashioncollective_post2",
        "subject": "Upcoming Event: Panel Discussion",
        "body": "Hey folks! Our next Fashion Collective gathering is coming up soon. Hope to see lots of you there! Snacks will be provided \ud83c\udf6a",
        "date": "2025-06-15"
    },
    {
        "clubid": "soccerclub",
        "postid": "soccerclub_post1",
        "subject": "Reminder: Study Session This Week",
        "body": "Hey folks! Get ready for our upcoming Soccer Club event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-06-23"
    },
    {
        "clubid": "soccerclub",
        "postid": "soccerclub_post2",
        "subject": "Join Us for Practice Session",
        "body": "Hello all! Get ready for our upcoming Soccer Club event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-17"
    },
    {
        "clubid": "basketballclub",
        "postid": "basketballclub_post1",
        "subject": "Basketball Club Weekly Meetup",
        "body": "Hi everyone! Our next Basketball Club gathering is coming up soon. Hope to see lots of you there! Bring a friend along!",
        "date": "2025-02-23"
    },
    {
        "clubid": "basketballclub",
        "postid": "basketballclub_post2",
        "subject": "Upcoming Event: Guest Lecture",
        "body": "Hi members! Get ready for our upcoming Basketball Club event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-02-01"
    },
    {
        "clubid": "volleyballclub",
        "postid": "volleyballclub_post1",
        "subject": "Join Us for Workshop",
        "body": "Hi members! Get ready for our upcoming Volleyball Club event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-06-03"
    },
    {
        "clubid": "volleyballclub",
        "postid": "volleyballclub_post2",
        "subject": "Join Us for Game Night",
        "body": "Hey everyone! Another exciting week ahead for the Volleyball Club! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-03-23"
    },
    {
        "clubid": "tennisclub",
        "postid": "tennisclub_post1",
        "subject": "New Workshop: Guest Lecture",
        "body": "Hey everyone! We\u2019re hosting a special Tennis Club meetup next week \u2014 don\u2019t miss it! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-07"
    },
    {
        "clubid": "tennisclub",
        "postid": "tennisclub_post2",
        "subject": "Special Guest Session: Guest Lecture",
        "body": "Hey folks! We\u2019ve got something fun planned for the Tennis Club \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-03-02"
    },
    {
        "clubid": "runningclub",
        "postid": "runningclub_post1",
        "subject": "Club Update: Game Night",
        "body": "Hi members! Another exciting week ahead for the Running Club! Check out what\u2019s happening below. We can\u2019t wait to see you!",
        "date": "2025-01-21"
    },
    {
        "clubid": "runningclub",
        "postid": "runningclub_post2",
        "subject": "Exciting News from Running Club",
        "body": "Hello all! Get ready for our upcoming Running Club event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-04-24"
    },
    {
        "clubid": "rockclimbingclub",
        "postid": "rockclimbingclub_post1",
        "subject": "Reminder: Panel Discussion This Week",
        "body": "Hello all! We\u2019ve got something fun planned for the Rock Climbing Club \u2014 come join us! Bring a friend along!",
        "date": "2025-06-04"
    },
    {
        "clubid": "rockclimbingclub",
        "postid": "rockclimbingclub_post2",
        "subject": "Rock Climbing Club Weekly Meetup",
        "body": "Hey everyone! We\u2019re hosting a special Rock Climbing Club meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-21"
    },
    {
        "clubid": "swimteam",
        "postid": "swimteam_post1",
        "subject": "Social Night - Trivia Night",
        "body": "Hey folks! We\u2019re hosting a special Swim Team meetup next week \u2014 don\u2019t miss it! Bring a friend along!",
        "date": "2025-03-22"
    },
    {
        "clubid": "swimteam",
        "postid": "swimteam_post2",
        "subject": "Reminder: Study Session This Week",
        "body": "Hey folks! Get ready for our upcoming Swim Team event. It\u2019s going to be a great time! We can\u2019t wait to see you!",
        "date": "2025-03-23"
    },
    {
        "clubid": "cyclingclub",
        "postid": "cyclingclub_post1",
        "subject": "Social Night - Fundraiser",
        "body": "Hey folks! Another exciting week ahead for the Cycling Club! Check out what\u2019s happening below. We can\u2019t wait to see you!",
        "date": "2025-05-23"
    },
    {
        "clubid": "cyclingclub",
        "postid": "cyclingclub_post2",
        "subject": "Upcoming Event: Game Night",
        "body": "Hey everyone! Another exciting week ahead for the Cycling Club! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-03-08"
    },
    {
        "clubid": "martialartsclub",
        "postid": "martialartsclub_post1",
        "subject": "Upcoming Event: Guest Lecture",
        "body": "Hi members! Get ready for our upcoming Martial Arts Club event. It\u2019s going to be a great time! We can\u2019t wait to see you!",
        "date": "2025-05-06"
    },
    {
        "clubid": "martialartsclub",
        "postid": "martialartsclub_post2",
        "subject": "Join Us for Guest Lecture",
        "body": "Hey folks! Another exciting week ahead for the Martial Arts Club! Check out what\u2019s happening below. Bring a friend along!",
        "date": "2025-01-20"
    },
    {
        "clubid": "yogaclub",
        "postid": "yogaclub_post1",
        "subject": "Upcoming Event: Panel Discussion",
        "body": "Hey folks! Get ready for our upcoming Yoga Club event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-06-11"
    },
    {
        "clubid": "yogaclub",
        "postid": "yogaclub_post2",
        "subject": "Let\u2019s Get Together for Workshop",
        "body": "Hi members! Another exciting week ahead for the Yoga Club! Check out what\u2019s happening below. Bring a friend along!",
        "date": "2025-06-24"
    },
    {
        "clubid": "computersciencesociety",
        "postid": "computersciencesociety_post1",
        "subject": "Special Guest Session: Study Session",
        "body": "Hello all! We\u2019re hosting a special Computer Science Society meetup next week \u2014 don\u2019t miss it! It\u2019s open to all skill levels.",
        "date": "2025-05-27"
    },
    {
        "clubid": "computersciencesociety",
        "postid": "computersciencesociety_post2",
        "subject": "New Workshop: Study Session",
        "body": "Hi everyone! Our next Computer Science Society gathering is coming up soon. Hope to see lots of you there! We can\u2019t wait to see you!",
        "date": "2025-05-15"
    },
    {
        "clubid": "airesearchclub",
        "postid": "airesearchclub_post1",
        "subject": "Reminder: Fundraiser This Week",
        "body": "Hi members! We\u2019ve got something fun planned for the AI Research Club \u2014 come join us! Bring a friend along!",
        "date": "2025-02-10"
    },
    {
        "clubid": "airesearchclub",
        "postid": "airesearchclub_post2",
        "subject": "Special Guest Session: Panel Discussion",
        "body": "Hello all! We\u2019re hosting a special AI Research Club meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-22"
    },
    {
        "clubid": "roboticsteam",
        "postid": "roboticsteam_post1",
        "subject": "Reminder: Field Trip This Week",
        "body": "Hey everyone! We\u2019ve got something fun planned for the Robotics Team \u2014 come join us! Snacks will be provided \ud83c\udf6a",
        "date": "2025-05-31"
    },
    {
        "clubid": "roboticsteam",
        "postid": "roboticsteam_post2",
        "subject": "Robotics Team Weekly Meetup",
        "body": "Hi everyone! Our next Robotics Team gathering is coming up soon. Hope to see lots of you there! Bring a friend along!",
        "date": "2025-05-05"
    },
    {
        "clubid": "cybersecurityclub",
        "postid": "cybersecurityclub_post1",
        "subject": "Reminder: Game Night This Week",
        "body": "Hi members! Another exciting week ahead for the Cybersecurity Club! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-01-02"
    },
    {
        "clubid": "cybersecurityclub",
        "postid": "cybersecurityclub_post2",
        "subject": "Reminder: Practice Session This Week",
        "body": "Hey everyone! Another exciting week ahead for the Cybersecurity Club! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-05"
    },
    {
        "clubid": "gamedevelopmentsociety",
        "postid": "gamedevelopmentsociety_post1",
        "subject": "Game Development Society Weekly Meetup",
        "body": "Hey everyone! We\u2019ve got something fun planned for the Game Development Society \u2014 come join us! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-03"
    },
    {
        "clubid": "gamedevelopmentsociety",
        "postid": "gamedevelopmentsociety_post2",
        "subject": "Join Us for Practice Session",
        "body": "Hi everyone! We\u2019re hosting a special Game Development Society meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-02-10"
    },
    {
        "clubid": "webdevcollective",
        "postid": "webdevcollective_post1",
        "subject": "New Workshop: Fundraiser",
        "body": "Hi members! We\u2019ve got something fun planned for the Web Dev Collective \u2014 come join us! Bring a friend along!",
        "date": "2025-01-16"
    },
    {
        "clubid": "webdevcollective",
        "postid": "webdevcollective_post2",
        "subject": "Let\u2019s Get Together for Field Trip",
        "body": "Hey everyone! Another exciting week ahead for the Web Dev Collective! Check out what\u2019s happening below. Bring a friend along!",
        "date": "2025-04-09"
    },
    {
        "clubid": "appdevelopmentclub",
        "postid": "appdevelopmentclub_post1",
        "subject": "Reminder: Workshop This Week",
        "body": "Hey everyone! Get ready for our upcoming App Development Club event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-22"
    },
    {
        "clubid": "appdevelopmentclub",
        "postid": "appdevelopmentclub_post2",
        "subject": "Join Us for Fundraiser",
        "body": "Hi members! Get ready for our upcoming App Development Club event. It\u2019s going to be a great time! We can\u2019t wait to see you!",
        "date": "2025-03-30"
    },
    {
        "clubid": "hackathonteam",
        "postid": "hackathonteam_post1",
        "subject": "Hackathon Team Weekly Meetup",
        "body": "Hey everyone! We\u2019re hosting a special Hackathon Team meetup next week \u2014 don\u2019t miss it! We can\u2019t wait to see you!",
        "date": "2025-06-01"
    },
    {
        "clubid": "hackathonteam",
        "postid": "hackathonteam_post2",
        "subject": "Upcoming Event: Workshop",
        "body": "Hi members! We\u2019re hosting a special Hackathon Team meetup next week \u2014 don\u2019t miss it! It\u2019s open to all skill levels.",
        "date": "2025-02-22"
    },
    {
        "clubid": "iotnetwork",
        "postid": "iotnetwork_post1",
        "subject": "Exciting News from IoT Network",
        "body": "Hello all! Another exciting week ahead for the IoT Network! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-05-29"
    },
    {
        "clubid": "iotnetwork",
        "postid": "iotnetwork_post2",
        "subject": "Exciting News from IoT Network",
        "body": "Hey folks! We\u2019ve got something fun planned for the IoT Network \u2014 come join us! Snacks will be provided \ud83c\udf6a",
        "date": "2025-01-05"
    },
    {
        "clubid": "machinelearningsociety",
        "postid": "machinelearningsociety_post1",
        "subject": "New Workshop: Field Trip",
        "body": "Hi members! We\u2019ve got something fun planned for the Machine Learning Society \u2014 come join us! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-23"
    },
    {
        "clubid": "machinelearningsociety",
        "postid": "machinelearningsociety_post2",
        "subject": "Club Update: Study Session",
        "body": "Hey everyone! Get ready for our upcoming Machine Learning Society event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-05-13"
    },
    {
        "clubid": "volunteerassociation",
        "postid": "volunteerassociation_post1",
        "subject": "Social Night - Panel Discussion",
        "body": "Hello all! We\u2019re hosting a special Volunteer Association meetup next week \u2014 don\u2019t miss it! Bring a friend along!",
        "date": "2025-01-25"
    },
    {
        "clubid": "volunteerassociation",
        "postid": "volunteerassociation_post2",
        "subject": "New Workshop: Game Night",
        "body": "Hi everyone! Get ready for our upcoming Volunteer Association event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-03-29"
    },
    {
        "clubid": "foodbankhelpers",
        "postid": "foodbankhelpers_post1",
        "subject": "Let\u2019s Get Together for Panel Discussion",
        "body": "Hey everyone! Our next Food Bank Helpers gathering is coming up soon. Hope to see lots of you there! Bring a friend along!",
        "date": "2025-02-26"
    },
    {
        "clubid": "foodbankhelpers",
        "postid": "foodbankhelpers_post2",
        "subject": "Special Guest Session: Networking Night",
        "body": "Hey everyone! We\u2019re hosting a special Food Bank Helpers meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-03-10"
    },
    {
        "clubid": "peermentorshipprogram",
        "postid": "peermentorshipprogram_post1",
        "subject": "Social Night - Practice Session",
        "body": "Hello all! Another exciting week ahead for the Peer Mentorship Program! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-16"
    },
    {
        "clubid": "peermentorshipprogram",
        "postid": "peermentorshipprogram_post2",
        "subject": "Peer Mentorship Program Weekly Meetup",
        "body": "Hey everyone! Another exciting week ahead for the Peer Mentorship Program! Check out what\u2019s happening below. Bring a friend along!",
        "date": "2025-04-08"
    },
    {
        "clubid": "campusambassadors",
        "postid": "campusambassadors_post1",
        "subject": "Club Update: Study Session",
        "body": "Hi everyone! Our next Campus Ambassadors gathering is coming up soon. Hope to see lots of you there! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-01-21"
    },
    {
        "clubid": "campusambassadors",
        "postid": "campusambassadors_post2",
        "subject": "New Workshop: Networking Night",
        "body": "Hello all! We\u2019re hosting a special Campus Ambassadors meetup next week \u2014 don\u2019t miss it! Snacks will be provided \ud83c\udf6a",
        "date": "2025-04-18"
    },
    {
        "clubid": "blooddrivecommittee",
        "postid": "blooddrivecommittee_post1",
        "subject": "Reminder: Game Night This Week",
        "body": "Hi everyone! We\u2019re hosting a special Blood Drive Committee meetup next week \u2014 don\u2019t miss it! It\u2019s open to all skill levels.",
        "date": "2025-05-27"
    },
    {
        "clubid": "blooddrivecommittee",
        "postid": "blooddrivecommittee_post2",
        "subject": "Exciting News from Blood Drive Committee",
        "body": "Hi members! We\u2019ve got something fun planned for the Blood Drive Committee \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-03-27"
    },
    {
        "clubid": "neighborhoodoutreach",
        "postid": "neighborhoodoutreach_post1",
        "subject": "New Workshop: Field Trip",
        "body": "Hi members! Another exciting week ahead for the Neighborhood Outreach! Check out what\u2019s happening below. We can\u2019t wait to see you!",
        "date": "2025-02-08"
    },
    {
        "clubid": "neighborhoodoutreach",
        "postid": "neighborhoodoutreach_post2",
        "subject": "Neighborhood Outreach Weekly Meetup",
        "body": "Hello all! Another exciting week ahead for the Neighborhood Outreach! Check out what\u2019s happening below. It\u2019s open to all skill levels.",
        "date": "2025-01-06"
    },
    {
        "clubid": "seniorsupportgroup",
        "postid": "seniorsupportgroup_post1",
        "subject": "Club Update: Trivia Night",
        "body": "Hey folks! Get ready for our upcoming Senior Support Group event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-02-27"
    },
    {
        "clubid": "seniorsupportgroup",
        "postid": "seniorsupportgroup_post2",
        "subject": "Club Update: Fundraiser",
        "body": "Hey everyone! Our next Senior Support Group gathering is coming up soon. Hope to see lots of you there! It\u2019s open to all skill levels.",
        "date": "2025-05-10"
    },
    {
        "clubid": "refugeesupportclub",
        "postid": "refugeesupportclub_post1",
        "subject": "Social Night - Workshop",
        "body": "Hello all! We\u2019ve got something fun planned for the Refugee Support Club \u2014 come join us! Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-21"
    },
    {
        "clubid": "refugeesupportclub",
        "postid": "refugeesupportclub_post2",
        "subject": "Refugee Support Club Weekly Meetup",
        "body": "Hi members! Another exciting week ahead for the Refugee Support Club! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-02-14"
    },
    {
        "clubid": "animalsheltervolunteers",
        "postid": "animalsheltervolunteers_post1",
        "subject": "Let\u2019s Get Together for Guest Lecture",
        "body": "Hi everyone! Another exciting week ahead for the Animal Shelter Volunteers! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-05-16"
    },
    {
        "clubid": "animalsheltervolunteers",
        "postid": "animalsheltervolunteers_post2",
        "subject": "Let\u2019s Get Together for Field Trip",
        "body": "Hi members! Get ready for our upcoming Animal Shelter Volunteers event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-01-18"
    },
    {
        "clubid": "youthmentorship",
        "postid": "youthmentorship_post1",
        "subject": "Join Us for Practice Session",
        "body": "Hey everyone! Another exciting week ahead for the Youth Mentorship! Check out what\u2019s happening below. It\u2019s open to all skill levels.",
        "date": "2025-05-31"
    },
    {
        "clubid": "youthmentorship",
        "postid": "youthmentorship_post2",
        "subject": "Join Us for Practice Session",
        "body": "Hey folks! Another exciting week ahead for the Youth Mentorship! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-05-14"
    },
    {
        "clubid": "esportsclub",
        "postid": "esportsclub_post1",
        "subject": "Special Guest Session: Guest Lecture",
        "body": "Hi members! Get ready for our upcoming Esports Club event. It\u2019s going to be a great time! It\u2019s open to all skill levels.",
        "date": "2025-06-08"
    },
    {
        "clubid": "esportsclub",
        "postid": "esportsclub_post2",
        "subject": "Exciting News from Esports Club",
        "body": "Hey everyone! Our next Esports Club gathering is coming up soon. Hope to see lots of you there! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-02-09"
    },
    {
        "clubid": "boardgamessociety",
        "postid": "boardgamessociety_post1",
        "subject": "Join Us for Game Night",
        "body": "Hi members! Our next Board Games Society gathering is coming up soon. Hope to see lots of you there! It\u2019s open to all skill levels.",
        "date": "2025-06-14"
    },
    {
        "clubid": "boardgamessociety",
        "postid": "boardgamessociety_post2",
        "subject": "Upcoming Event: Field Trip",
        "body": "Hey everyone! We\u2019re hosting a special Board Games Society meetup next week \u2014 don\u2019t miss it! We can\u2019t wait to see you!",
        "date": "2025-03-13"
    },
    {
        "clubid": "chessclub",
        "postid": "chessclub_post1",
        "subject": "New Workshop: Workshop",
        "body": "Hi members! Get ready for our upcoming Chess Club event. It\u2019s going to be a great time! It\u2019s open to all skill levels.",
        "date": "2025-05-01"
    },
    {
        "clubid": "chessclub",
        "postid": "chessclub_post2",
        "subject": "Club Update: Study Session",
        "body": "Hi members! Our next Chess Club gathering is coming up soon. Hope to see lots of you there! We can\u2019t wait to see you!",
        "date": "2025-01-24"
    },
    {
        "clubid": "tabletoprpgguild",
        "postid": "tabletoprpgguild_post1",
        "subject": "Exciting News from Tabletop RPG Guild",
        "body": "Hey everyone! We\u2019ve got something fun planned for the Tabletop RPG Guild \u2014 come join us! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-05-27"
    },
    {
        "clubid": "tabletoprpgguild",
        "postid": "tabletoprpgguild_post2",
        "subject": "Tabletop RPG Guild Weekly Meetup",
        "body": "Hey everyone! Another exciting week ahead for the Tabletop RPG Guild! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-20"
    },
    {
        "clubid": "smashbrosclub",
        "postid": "smashbrosclub_post1",
        "subject": "Special Guest Session: Guest Lecture",
        "body": "Hey folks! Another exciting week ahead for the Smash Bros Club! Check out what\u2019s happening below. We can\u2019t wait to see you!",
        "date": "2025-02-28"
    },
    {
        "clubid": "smashbrosclub",
        "postid": "smashbrosclub_post2",
        "subject": "Special Guest Session: Workshop",
        "body": "Hi members! Get ready for our upcoming Smash Bros Club event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-06-25"
    },
    {
        "clubid": "lanpartycrew",
        "postid": "lanpartycrew_post1",
        "subject": "Reminder: Networking Night This Week",
        "body": "Hi everyone! Our next LAN Party Crew gathering is coming up soon. Hope to see lots of you there! We can\u2019t wait to see you!",
        "date": "2025-03-04"
    },
    {
        "clubid": "lanpartycrew",
        "postid": "lanpartycrew_post2",
        "subject": "Special Guest Session: Fundraiser",
        "body": "Hey everyone! Get ready for our upcoming LAN Party Crew event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-06-11"
    },
    {
        "clubid": "gamemoddingclub",
        "postid": "gamemoddingclub_post1",
        "subject": "Upcoming Event: Guest Lecture",
        "body": "Hey everyone! Our next Game Modding Club gathering is coming up soon. Hope to see lots of you there! Snacks will be provided \ud83c\udf6a",
        "date": "2025-05-14"
    },
    {
        "clubid": "gamemoddingclub",
        "postid": "gamemoddingclub_post2",
        "subject": "New Workshop: Networking Night",
        "body": "Hey everyone! Our next Game Modding Club gathering is coming up soon. Hope to see lots of you there! We can\u2019t wait to see you!",
        "date": "2025-05-26"
    },
    {
        "clubid": "strategygamingsociety",
        "postid": "strategygamingsociety_post1",
        "subject": "Upcoming Event: Trivia Night",
        "body": "Hey everyone! Get ready for our upcoming Strategy Gaming Society event. It\u2019s going to be a great time! We can\u2019t wait to see you!",
        "date": "2025-01-03"
    },
    {
        "clubid": "strategygamingsociety",
        "postid": "strategygamingsociety_post2",
        "subject": "Upcoming Event: Game Night",
        "body": "Hi everyone! We\u2019ve got something fun planned for the Strategy Gaming Society \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-02-12"
    },
    {
        "clubid": "cardgamesclub",
        "postid": "cardgamesclub_post1",
        "subject": "Card Games Club Weekly Meetup",
        "body": "Hi everyone! Our next Card Games Club gathering is coming up soon. Hope to see lots of you there! We can\u2019t wait to see you!",
        "date": "2025-02-15"
    },
    {
        "clubid": "cardgamesclub",
        "postid": "cardgamesclub_post2",
        "subject": "New Workshop: Fundraiser",
        "body": "Hi everyone! Our next Card Games Club gathering is coming up soon. Hope to see lots of you there! Snacks will be provided \ud83c\udf6a",
        "date": "2025-01-03"
    },
    {
        "clubid": "retrogamingclub",
        "postid": "retrogamingclub_post1",
        "subject": "Let\u2019s Get Together for Study Session",
        "body": "Hey everyone! We\u2019re hosting a special Retro Gaming Club meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-26"
    },
    {
        "clubid": "retrogamingclub",
        "postid": "retrogamingclub_post2",
        "subject": "Join Us for Panel Discussion",
        "body": "Hey everyone! We\u2019ve got something fun planned for the Retro Gaming Club \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-02-11"
    },
    {
        "clubid": "sustainabilitysociety",
        "postid": "sustainabilitysociety_post1",
        "subject": "Sustainability Society Weekly Meetup",
        "body": "Hey folks! We\u2019ve got something fun planned for the Sustainability Society \u2014 come join us! Bring a friend along!",
        "date": "2025-01-04"
    },
    {
        "clubid": "sustainabilitysociety",
        "postid": "sustainabilitysociety_post2",
        "subject": "Let\u2019s Get Together for Study Session",
        "body": "Hi everyone! We\u2019ve got something fun planned for the Sustainability Society \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-02-01"
    },
    {
        "clubid": "recyclingadvocates",
        "postid": "recyclingadvocates_post1",
        "subject": "New Workshop: Panel Discussion",
        "body": "Hi everyone! Another exciting week ahead for the Recycling Advocates! Check out what\u2019s happening below. Bring a friend along!",
        "date": "2025-04-04"
    },
    {
        "clubid": "recyclingadvocates",
        "postid": "recyclingadvocates_post2",
        "subject": "Special Guest Session: Field Trip",
        "body": "Hi members! We\u2019ve got something fun planned for the Recycling Advocates \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-03-09"
    },
    {
        "clubid": "wildlifeconservationclub",
        "postid": "wildlifeconservationclub_post1",
        "subject": "Join Us for Fundraiser",
        "body": "Hey folks! Another exciting week ahead for the Wildlife Conservation Club! Check out what\u2019s happening below. We can\u2019t wait to see you!",
        "date": "2025-05-24"
    },
    {
        "clubid": "wildlifeconservationclub",
        "postid": "wildlifeconservationclub_post2",
        "subject": "Social Night - Field Trip",
        "body": "Hey folks! We\u2019ve got something fun planned for the Wildlife Conservation Club \u2014 come join us! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-04-09"
    },
    {
        "clubid": "cleanenergyclub",
        "postid": "cleanenergyclub_post1",
        "subject": "Clean Energy Club Weekly Meetup",
        "body": "Hi everyone! We\u2019ve got something fun planned for the Clean Energy Club \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-03-28"
    },
    {
        "clubid": "cleanenergyclub",
        "postid": "cleanenergyclub_post2",
        "subject": "Social Night - Fundraiser",
        "body": "Hello all! Another exciting week ahead for the Clean Energy Club! Check out what\u2019s happening below. We can\u2019t wait to see you!",
        "date": "2025-03-30"
    },
    {
        "clubid": "gardenersguild",
        "postid": "gardenersguild_post1",
        "subject": "Upcoming Event: Practice Session",
        "body": "Hey everyone! Another exciting week ahead for the Gardeners Guild! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-05-29"
    },
    {
        "clubid": "gardenersguild",
        "postid": "gardenersguild_post2",
        "subject": "Club Update: Game Night",
        "body": "Hi everyone! We\u2019re hosting a special Gardeners Guild meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-03-23"
    },
    {
        "clubid": "hikingclub",
        "postid": "hikingclub_post1",
        "subject": "Exciting News from Hiking Club",
        "body": "Hello all! Our next Hiking Club gathering is coming up soon. Hope to see lots of you there! Snacks will be provided \ud83c\udf6a",
        "date": "2025-06-01"
    },
    {
        "clubid": "hikingclub",
        "postid": "hikingclub_post2",
        "subject": "Club Update: Workshop",
        "body": "Hello all! Another exciting week ahead for the Hiking Club! Check out what\u2019s happening below. Bring a friend along!",
        "date": "2025-04-26"
    },
    {
        "clubid": "campusgreenteam",
        "postid": "campusgreenteam_post1",
        "subject": "Upcoming Event: Field Trip",
        "body": "Hello all! Our next Campus Green Team gathering is coming up soon. Hope to see lots of you there! Bring a friend along!",
        "date": "2025-03-12"
    },
    {
        "clubid": "campusgreenteam",
        "postid": "campusgreenteam_post2",
        "subject": "Let\u2019s Get Together for Panel Discussion",
        "body": "Hey folks! Our next Campus Green Team gathering is coming up soon. Hope to see lots of you there! It\u2019s open to all skill levels.",
        "date": "2025-01-24"
    },
    {
        "clubid": "zerowastecollective",
        "postid": "zerowastecollective_post1",
        "subject": "Upcoming Event: Fundraiser",
        "body": "Hi everyone! Get ready for our upcoming Zero Waste Collective event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-03-09"
    },
    {
        "clubid": "zerowastecollective",
        "postid": "zerowastecollective_post2",
        "subject": "New Workshop: Practice Session",
        "body": "Hi members! Get ready for our upcoming Zero Waste Collective event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-01-05"
    },
    {
        "clubid": "climateactionnetwork",
        "postid": "climateactionnetwork_post1",
        "subject": "Club Update: Practice Session",
        "body": "Hi members! We\u2019ve got something fun planned for the Climate Action Network \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-05-31"
    },
    {
        "clubid": "climateactionnetwork",
        "postid": "climateactionnetwork_post2",
        "subject": "Join Us for Trivia Night",
        "body": "Hey everyone! Another exciting week ahead for the Climate Action Network! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-03-30"
    },
    {
        "clubid": "outdooradventures",
        "postid": "outdooradventures_post1",
        "subject": "Exciting News from Outdoor Adventures",
        "body": "Hi members! We\u2019re hosting a special Outdoor Adventures meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-03-16"
    },
    {
        "clubid": "outdooradventures",
        "postid": "outdooradventures_post2",
        "subject": "Exciting News from Outdoor Adventures",
        "body": "Hey folks! Another exciting week ahead for the Outdoor Adventures! Check out what\u2019s happening below. Bring a friend along!",
        "date": "2025-01-31"
    },
    {
        "clubid": "bookclub",
        "postid": "bookclub_post1",
        "subject": "Social Night - Practice Session",
        "body": "Hey everyone! Another exciting week ahead for the Book Club! Check out what\u2019s happening below. We can\u2019t wait to see you!",
        "date": "2025-05-07"
    },
    {
        "clubid": "bookclub",
        "postid": "bookclub_post2",
        "subject": "Book Club Weekly Meetup",
        "body": "Hi members! Our next Book Club gathering is coming up soon. Hope to see lots of you there! We can\u2019t wait to see you!",
        "date": "2025-04-07"
    },
    {
        "clubid": "debatesociety",
        "postid": "debatesociety_post1",
        "subject": "Special Guest Session: Practice Session",
        "body": "Hi everyone! Get ready for our upcoming Debate Society event. It\u2019s going to be a great time! We can\u2019t wait to see you!",
        "date": "2025-03-14"
    },
    {
        "clubid": "debatesociety",
        "postid": "debatesociety_post2",
        "subject": "New Workshop: Practice Session",
        "body": "Hey everyone! Another exciting week ahead for the Debate Society! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-02-22"
    },
    {
        "clubid": "cookingclub",
        "postid": "cookingclub_post1",
        "subject": "Exciting News from Cooking Club",
        "body": "Hey folks! We\u2019ve got something fun planned for the Cooking Club \u2014 come join us! We can\u2019t wait to see you!",
        "date": "2025-03-16"
    },
    {
        "clubid": "cookingclub",
        "postid": "cookingclub_post2",
        "subject": "Club Update: Field Trip",
        "body": "Hi everyone! We\u2019ve got something fun planned for the Cooking Club \u2014 come join us! Bring a friend along!",
        "date": "2025-01-28"
    },
    {
        "clubid": "teaappreciationcircle",
        "postid": "teaappreciationcircle_post1",
        "subject": "Special Guest Session: Workshop",
        "body": "Hi members! Another exciting week ahead for the Tea Appreciation Circle! Check out what\u2019s happening below. Snacks will be provided \ud83c\udf6a",
        "date": "2025-06-15"
    },
    {
        "clubid": "teaappreciationcircle",
        "postid": "teaappreciationcircle_post2",
        "subject": "Tea Appreciation Circle Weekly Meetup",
        "body": "Hey folks! We\u2019ve got something fun planned for the Tea Appreciation Circle \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-06-24"
    },
    {
        "clubid": "languageexchangegroup",
        "postid": "languageexchangegroup_post1",
        "subject": "New Workshop: Trivia Night",
        "body": "Hey everyone! We\u2019re hosting a special Language Exchange Group meetup next week \u2014 don\u2019t miss it! Bring a friend along!",
        "date": "2025-04-04"
    },
    {
        "clubid": "languageexchangegroup",
        "postid": "languageexchangegroup_post2",
        "subject": "Upcoming Event: Field Trip",
        "body": "Hey everyone! Get ready for our upcoming Language Exchange Group event. It\u2019s going to be a great time! It\u2019s open to all skill levels.",
        "date": "2025-05-23"
    },
    {
        "clubid": "travelenthusiasts",
        "postid": "travelenthusiasts_post1",
        "subject": "Let\u2019s Get Together for Guest Lecture",
        "body": "Hi everyone! Get ready for our upcoming Travel Enthusiasts event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-03-12"
    },
    {
        "clubid": "travelenthusiasts",
        "postid": "travelenthusiasts_post2",
        "subject": "Club Update: Study Session",
        "body": "Hey everyone! Get ready for our upcoming Travel Enthusiasts event. It\u2019s going to be a great time! Snacks will be provided \ud83c\udf6a",
        "date": "2025-04-28"
    },
    {
        "clubid": "filmappreciationsociety",
        "postid": "filmappreciationsociety_post1",
        "subject": "Reminder: Trivia Night This Week",
        "body": "Hi everyone! Get ready for our upcoming Film Appreciation Society event. It\u2019s going to be a great time! Bring a friend along!",
        "date": "2025-06-24"
    },
    {
        "clubid": "filmappreciationsociety",
        "postid": "filmappreciationsociety_post2",
        "subject": "Let\u2019s Get Together for Practice Session",
        "body": "Hi members! Our next Film Appreciation Society gathering is coming up soon. Hope to see lots of you there! Snacks will be provided \ud83c\udf6a",
        "date": "2025-04-16"
    },
    {
        "clubid": "coffeeclub",
        "postid": "coffeeclub_post1",
        "subject": "Exciting News from Coffee Club",
        "body": "Hello all! Another exciting week ahead for the Coffee Club! Check out what\u2019s happening below. Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-22"
    },
    {
        "clubid": "coffeeclub",
        "postid": "coffeeclub_post2",
        "subject": "Reminder: Networking Night This Week",
        "body": "Hey folks! We\u2019re hosting a special Coffee Club meetup next week \u2014 don\u2019t miss it! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-06-01"
    },
    {
        "clubid": "creativewritingcircle",
        "postid": "creativewritingcircle_post1",
        "subject": "Upcoming Event: Workshop",
        "body": "Hey folks! Get ready for our upcoming Creative Writing Circle event. It\u2019s going to be a great time! It\u2019s open to all skill levels.",
        "date": "2025-01-06"
    },
    {
        "clubid": "creativewritingcircle",
        "postid": "creativewritingcircle_post2",
        "subject": "Upcoming Event: Guest Lecture",
        "body": "Hi members! We\u2019ve got something fun planned for the Creative Writing Circle \u2014 come join us! We can\u2019t wait to see you!",
        "date": "2025-03-18"
    },
    {
        "clubid": "comedyclub",
        "postid": "comedyclub_post1",
        "subject": "Comedy Club Weekly Meetup",
        "body": "Hi members! We\u2019ve got something fun planned for the Comedy Club \u2014 come join us! It\u2019s open to all skill levels.",
        "date": "2025-04-11"
    },
    {
        "clubid": "comedyclub",
        "postid": "comedyclub_post2",
        "subject": "Club Update: Field Trip",
        "body": "Hey folks! Get ready for our upcoming Comedy Club event. It\u2019s going to be a great time! Don\u2019t forget to RSVP on our Discord.",
        "date": "2025-02-25"
    }
];

window.App = {
    State: AppState,
    Templates: {
        BLACKHOLE: BLACKHOLE_TEMPLATE,
        SIGNIN: SIGNIN_TEMPLATE,
        CATEGORIES: CATEGORIES_TEMPLATE,
    },
    Categories: CATEGORIES
}







