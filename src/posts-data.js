const POSTS_DATA = [
    // Engineering Society Posts (Club ID: 0)
    {
        "id": 0,
        "clubId": 0,
        "title": "Welcome to Engineering Week 2025!",
        "content": "Join us for an exciting week of workshops, competitions, and networking events. We have sessions on robotics, software engineering, and sustainable design. Registration is now open for all members.",
        "date": "15-01-2025"
    },
    {
        "id": 1,
        "clubId": 0,
        "title": "CAD Workshop Results",
        "content": "Thank you to everyone who attended our SolidWorks CAD workshop last weekend. We had over 50 participants learn advanced modeling techniques. The next workshop will focus on ANSYS simulation software.",
        "date": "28-02-2025"
    },
    {
        "id": 2,
        "clubId": 0,
        "title": "Industry Guest Speaker: Tesla Engineer",
        "content": "We're excited to host Sarah Chen, a senior mechanical engineer from Tesla, this Thursday at 7 PM. She'll discuss her work on electric vehicle battery systems and career opportunities in green technology.",
        "date": "10-03-2025"
    },
    {
        "id": 3,
        "clubId": 0,
        "title": "Design Competition Winners",
        "content": "Congratulations to Team Alpha for winning our annual design competition with their innovative water purification system! Runner-up Team Beta impressed judges with their solar-powered charging station.",
        "date": "22-04-2025"
    },
    {
        "id": 4,
        "clubId": 0,
        "title": "Summer Internship Fair Prep",
        "content": "Join us next Tuesday for resume reviews and interview prep for the upcoming Engineering Internship Fair. We'll cover technical questions and have mock interviews with industry professionals.",
        "date": "08-05-2025"
    },
    {
        "id": 5,
        "clubId": 0,
        "title": "New Lab Equipment Arrived!",
        "content": "Our new 3D printers and circuit prototyping boards have arrived in the lab. Members can now book time slots for hands-on projects. Safety training is required before equipment access.",
        "date": "18-06-2025"
    },

    // Economics Club Posts (Club ID: 1)
    {
        "id": 6,
        "clubId": 1,
        "title": "Market Analysis Workshop",
        "content": "Learn the fundamentals of financial market analysis this Friday. We'll cover technical indicators, reading charts, and basic portfolio theory. Bring your laptops for hands-on practice.",
        "date": "12-01-2025"
    },
    {
        "id": 7,
        "clubId": 1,
        "title": "Cryptocurrency Debate Results",
        "content": "Great turnout for last week's debate on cryptocurrency regulation! Team Pro-Regulation made compelling arguments about consumer protection, while Team Free-Market emphasized innovation benefits.",
        "date": "25-02-2025"
    },
    {
        "id": 8,
        "clubId": 1,
        "title": "Guest Lecture: Federal Reserve Policy",
        "content": "Dr. Martinez from the Federal Reserve Bank will speak about monetary policy and interest rate decisions this Wednesday. This is a rare opportunity to learn from a policy insider.",
        "date": "15-03-2025"
    },
    {
        "id": 9,
        "clubId": 1,
        "title": "Stock Market Simulation Results",
        "content": "Congratulations to Jessica for winning our semester-long portfolio competition with a 12.3% return! The simulation taught us valuable lessons about risk management and diversification.",
        "date": "30-04-2025"
    },
    {
        "id": 10,
        "clubId": 1,
        "title": "Career Panel: Economics Graduates",
        "content": "Five economics alumni will share their career paths in banking, consulting, government, and research. Q&A session follows with networking reception.",
        "date": "20-05-2025"
    },
    {
        "id": 11,
        "clubId": 1,
        "title": "International Trade Workshop",
        "content": "Join us for an interactive workshop on global trade dynamics and tariff impacts. We'll use real trade data to analyze the effects of recent policy changes.",
        "date": "10-06-2025"
    },

    // Pre-Med Association Posts (Club ID: 2)
    {
        "id": 12,
        "clubId": 2,
        "title": "MCAT Prep Study Groups Forming",
        "content": "Study groups for the spring MCAT are now forming! We have groups for Biology, Chemistry, Physics, and Psychology/Sociology sections. Sign up sheets are available at our next meeting.",
        "date": "18-01-2025"
    },
    {
        "id": 13,
        "clubId": 2,
        "title": "Hospital Volunteer Opportunities",
        "content": "Local hospitals are seeking student volunteers. This is excellent experience for medical school applications. Requirements include background check and orientation training.",
        "date": "05-02-2025"
    },
    {
        "id": 14,
        "clubId": 2,
        "title": "Medical School Panel Success",
        "content": "Thank you to current medical students who shared application tips and experiences. Key takeaways: start clinical experience early, maintain strong GPA, and develop meaningful relationships with faculty.",
        "date": "20-03-2025"
    },
    {
        "id": 15,
        "clubId": 2,
        "title": "Anatomy Lab Tour Scheduled",
        "content": "Exclusive tour of the medical school's anatomy lab next Friday! Limited spots available. This is a unique opportunity to see cadaveric specimens and learn about anatomical structures.",
        "date": "12-04-2025"
    },
    {
        "id": 16,
        "clubId": 2,
        "title": "Research Opportunity: Cancer Biology",
        "content": "Dr. Patel's lab is seeking undergraduate researchers for summer cancer biology projects. This paid position offers excellent research experience and potential publication opportunities.",
        "date": "28-05-2025"
    },
    {
        "id": 17,
        "clubId": 2,
        "title": "First Aid Certification Course",
        "content": "Free CPR and First Aid certification course this weekend! All pre-med students should have these certifications. Course includes hands-on practice with mannequins and AED training.",
        "date": "15-06-2025"
    },
    {
        "id": 18,
        "clubId": 2,
        "title": "Medical Mission Trip Planning",
        "content": "Planning meeting for our annual medical mission trip to Guatemala. We'll provide healthcare in underserved communities while gaining valuable clinical experience.",
        "date": "08-07-2025"
    },

    // Math Circle Posts (Club ID: 3)
    {
        "id": 19,
        "clubId": 3,
        "title": "Putnam Competition Training Begins",
        "content": "Preparation for the Putnam Mathematical Competition starts this week! We'll meet twice weekly to practice problem-solving techniques and review advanced calculus and algebra.",
        "date": "22-01-2025"
    },
    {
        "id": 20,
        "clubId": 3,
        "title": "Pi Day Celebration Plans",
        "content": "Join us for Pi Day festivities on March 14th! We'll have pie-eating contests, digit memorization competitions, and fascinating talks about the history and applications of π.",
        "date": "01-03-2025"
    },
    {
        "id": 21,
        "clubId": 3,
        "title": "Topology Workshop Series",
        "content": "Four-week introduction to topology starting next Monday. Topics include continuity, compactness, and connectedness. Perfect for students interested in pure mathematics.",
        "date": "25-03-2025"
    },
    {
        "id": 22,
        "clubId": 3,
        "title": "Math Modeling Competition",
        "content": "Teams wanted for the Mathematical Contest in Modeling! This 96-hour competition challenges teams to solve real-world problems using mathematical modeling techniques.",
        "date": "18-04-2025"
    },
    {
        "id": 23,
        "clubId": 3,
        "title": "Graduate School Information Session",
        "content": "Current graduate students will discuss PhD programs in mathematics, application processes, and research opportunities. Learn about different specializations and career paths.",
        "date": "10-05-2025"
    },
    {
        "id": 24,
        "clubId": 3,
        "title": "Number Theory Seminar",
        "content": "Professor Johnson will present her research on prime number distribution. This advanced seminar explores the Riemann Hypothesis and its implications for cryptography.",
        "date": "28-06-2025"
    },

    // Philosophy Forum Posts (Club ID: 4)
    {
        "id": 25,
        "clubId": 4,
        "title": "Ethics in AI Debate Tonight",
        "content": "Tonight's debate topic: 'Should AI systems have rights?' Join us for a thought-provoking discussion about consciousness, rights, and the future of artificial intelligence.",
        "date": "14-01-2025"
    },
    {
        "id": 26,
        "clubId": 4,
        "title": "Socratic Seminar: Free Will",
        "content": "Using Socratic dialogue method, we'll explore determinism, compatibilism, and libertarian free will. Come prepared to question your assumptions about human agency and moral responsibility.",
        "date": "28-02-2025"
    },
    {
        "id": 27,
        "clubId": 4,
        "title": "Guest Speaker: Dr. Williams on Existentialism",
        "content": "Renowned philosophy professor Dr. Williams will discuss Sartre, Camus, and modern existentialist thought. Reception with book signing follows the lecture.",
        "date": "18-03-2025"
    },
    {
        "id": 28,
        "clubId": 4,
        "title": "Philosophy Café: Climate Ethics",
        "content": "Informal discussion about environmental ethics and climate change responsibility. How do we balance individual freedom with collective environmental action?",
        "date": "22-04-2025"
    },
    {
        "id": 29,
        "clubId": 4,
        "title": "Ancient Philosophy Workshop",
        "content": "Deep dive into Plato's Republic this weekend. We'll examine justice, the ideal state, and the allegory of the cave. Primary texts provided, no background required.",
        "date": "15-05-2025"
    },
    {
        "id": 30,
        "clubId": 4,
        "title": "Logic Puzzle Competition",
        "content": "Test your reasoning skills in our annual logic competition! Categories include formal logic, paradoxes, and philosophical puzzles. Prizes for top performers.",
        "date": "12-06-2025"
    },

    // Latin American Student Association Posts (Club ID: 5)
    {
        "id": 31,
        "clubId": 5,
        "title": "Día de los Reyes Celebration",
        "content": "Join us for Three Kings Day festivities! Traditional food, music, and cultural presentations celebrating this important Latin American holiday. All are welcome to learn about our traditions.",
        "date": "06-01-2025"
    },
    {
        "id": 32,
        "clubId": 5,
        "title": "Spanish Conversation Practice",
        "content": "Weekly Spanish conversation circles start this Thursday! All skill levels welcome. Practice speaking while learning about different Latin American countries and cultures.",
        "date": "20-02-2025"
    },
    {
        "id": 33,
        "clubId": 5,
        "title": "Cultural Dance Workshop",
        "content": "Learn salsa, bachata, and merengue from professional instructors! No experience necessary. This fun workshop teaches basic steps and cultural significance of these dances.",
        "date": "15-03-2025"
    },
    {
        "id": 34,
        "clubId": 5,
        "title": "Cinco de Mayo Festival Planning",
        "content": "Planning committee forming for our annual Cinco de Mayo celebration! We need volunteers for food coordination, entertainment, and cultural education booths.",
        "date": "10-04-2025"
    },
    {
        "id": 35,
        "clubId": 5,
        "title": "Study Abroad Panel: Latin America",
        "content": "Students who studied in Mexico, Costa Rica, Argentina, and Peru share their experiences. Learn about academic programs, cultural immersion, and travel opportunities.",
        "date": "20-05-2025"
    },
    {
        "id": 36,
        "clubId": 5,
        "title": "Community Service: ESL Tutoring",
        "content": "Volunteer opportunity tutoring local Latino families in English. This rewarding service helps community integration while strengthening cultural connections.",
        "date": "08-06-2025"
    },
    {
        "id": 37,
        "clubId": 5,
        "title": "Latin American Film Series",
        "content": "Monthly film screenings featuring acclaimed Latin American cinema. This month: 'Roma' by Alfonso Cuarón. Discussion and refreshments follow each showing.",
        "date": "25-06-2025"
    },

    // Asian Cultural Union Posts (Club ID: 6)
    {
        "id": 38,
        "clubId": 6,
        "title": "Lunar New Year Celebration",
        "content": "Celebrate the Year of the Snake with traditional performances, authentic cuisine from across Asia, and cultural presentations. Red envelopes and dragon dance performances!",
        "date": "29-01-2025"
    },
    {
        "id": 39,
        "clubId": 6,
        "title": "Holi Festival Colors and Joy",
        "content": "Join us for the Hindu Festival of Colors! Organic color powders, traditional sweets, and Bollywood music. Wear white clothes and prepare for a colorful celebration!",
        "date": "14-03-2025"
    },
    {
        "id": 40,
        "clubId": 6,
        "title": "Asian Cooking Workshop",
        "content": "Learn to make dumplings, spring rolls, and bubble tea! Hands-on cooking class featuring recipes from China, Vietnam, and Taiwan. Ingredients and recipes provided.",
        "date": "25-04-2025"
    },
    {
        "id": 41,
        "clubId": 6,
        "title": "Cultural Heritage Panel",
        "content": "Students share stories about maintaining cultural identity while adapting to American college life. Discussion topics include family expectations, language preservation, and traditions.",
        "date": "18-05-2025"
    },
    {
        "id": 42,
        "clubId": 6,
        "title": "K-Pop Dance Competition",
        "content": "Show off your moves in our annual K-Pop dance battle! Solo and group categories. Prizes for best choreography, energy, and audience favorite.",
        "date": "22-06-2025"
    },
    {
        "id": 43,
        "clubId": 6,
        "title": "Mid-Autumn Festival Moon Cakes",
        "content": "Traditional mooncake making workshop celebrating the Mid-Autumn Festival! Learn about lunar traditions while creating these special pastries.",
        "date": "08-09-2024"
    },

    // African Students Organization Posts (Club ID: 7)
    {
        "id": 44,
        "clubId": 7,
        "title": "Black History Month Events",
        "content": "Month-long celebration featuring guest speakers, cultural performances, and educational workshops highlighting African and African-American contributions to society.",
        "date": "01-02-2025"
    },
    {
        "id": 45,
        "clubId": 7,
        "title": "African Fashion Show Success",
        "content": "Amazing turnout for our African fashion showcase! Models displayed traditional and contemporary styles from across the continent. Thank you to all participants and attendees.",
        "date": "18-03-2025"
    },
    {
        "id": 46,
        "clubId": 7,
        "title": "Mentorship Program Launch",
        "content": "New mentorship program pairs upperclassmen with incoming African students. Program focuses on academic success, cultural adjustment, and professional development.",
        "date": "10-04-2025"
    },
    {
        "id": 47,
        "clubId": 7,
        "title": "Community Fundraiser: Education",
        "content": "Fundraising campaign for educational supplies in rural African schools. Goal: $5,000 for books, technology, and classroom materials. Every donation makes a difference!",
        "date": "15-05-2025"
    },
    {
        "id": 48,
        "clubId": 7,
        "title": "African Music and Dance Night",
        "content": "Experience the rich musical traditions of Africa! Live drumming, traditional dances, and contemporary African music. Learn dance steps and rhythm patterns.",
        "date": "28-06-2025"
    },
    {
        "id": 49,
        "clubId": 7,
        "title": "Study Abroad: Ghana Program",
        "content": "Information session about summer study abroad program in Ghana. Focus on sustainable development, cultural immersion, and service learning opportunities.",
        "date": "12-07-2025"
    },

    // French Club Posts (Club ID: 8)
    {
        "id": 50,
        "clubId": 8,
        "title": "French Film Night: Amélie",
        "content": "Monthly French film screening with subtitles and discussion. This month featuring the beloved romantic comedy 'Le Fabuleux Destin d'Amélie Poulain' with French pastries!",
        "date": "20-01-2025"
    },
    {
        "id": 51,
        "clubId": 8,
        "title": "Conversation Café Wednesdays",
        "content": "Weekly French conversation practice in relaxed café setting. All levels welcome! Native speakers available to help with pronunciation and cultural context.",
        "date": "05-02-2025"
    },
    {
        "id": 52,
        "clubId": 8,
        "title": "Crêpe Making Workshop",
        "content": "Learn to make authentic French crêpes! Both sweet and savory varieties. Workshop includes techniques, traditional fillings, and cultural significance of this French staple.",
        "date": "15-03-2025"
    },
    {
        "id": 53,
        "clubId": 8,
        "title": "Exchange Student Welcome",
        "content": "Welcome reception for French exchange students! Great opportunity to practice language skills and learn about French university life directly from native speakers.",
        "date": "22-04-2025"
    },
    {
        "id": 54,
        "clubId": 8,
        "title": "French Poetry Reading",
        "content": "Evening of French poetry featuring works by Verlaine, Rimbaud, and contemporary poets. Readings in French with English translations provided.",
        "date": "18-05-2025"
    },
    {
        "id": 55,
        "clubId": 8,
        "title": "Study Abroad France Info",
        "content": "Information session about study abroad programs in France. Representatives from Lyon, Paris, and Bordeaux programs share details about academics and cultural experiences.",
        "date": "10-06-2025"
    },

    // German Language Circle Posts (Club ID: 9)
    {
        "id": 56,
        "clubId": 9,
        "title": "Oktoberfest Celebration Planning",
        "content": "Planning meeting for our annual Oktoberfest celebration! Need volunteers for traditional music, food coordination, and cultural education activities.",
        "date": "15-09-2024"
    },
    {
        "id": 57,
        "clubId": 9,
        "title": "German Grammar Workshop",
        "content": "Intensive workshop focusing on German cases and verb conjugations. Helpful for students struggling with der, die, das and complex grammar rules.",
        "date": "28-01-2025"
    },
    {
        "id": 58,
        "clubId": 9,
        "title": "Christmas Market Visit",
        "content": "Group trip to authentic German Christmas market in nearby city! Experience traditional crafts, food, and holiday atmosphere while practicing German language skills.",
        "date": "12-12-2024"
    },
    {
        "id": 59,
        "clubId": 9,
        "title": "German Board Game Night",
        "content": "Fun evening playing popular German board games while practicing language skills. Games include Settlers of Catan, Ticket to Ride, and other strategy games.",
        "date": "20-03-2025"
    },
    {
        "id": 60,
        "clubId": 9,
        "title": "Guest Speaker: Berlin Exchange",
        "content": "Student who spent semester in Berlin shares experiences about German culture, university system, and travel opportunities throughout Europe.",
        "date": "15-04-2025"
    },
    {
        "id": 61,
        "clubId": 9,
        "title": "German Career Panel",
        "content": "Professionals working with German companies discuss career opportunities, business culture, and language requirements in international business.",
        "date": "22-05-2025"
    },

    // Theatre Troupe Posts (Club ID: 10)
    {
        "id": 62,
        "clubId": 10,
        "title": "Auditions: Romeo and Juliet",
        "content": "Open auditions for our spring production of Romeo and Juliet! All skill levels welcome. Audition requirements: prepared monologue and cold reading from script.",
        "date": "25-01-2025"
    },
    {
        "id": 63,
        "clubId": 10,
        "title": "Stage Combat Workshop",
        "content": "Professional stage combat choreographer teaches sword fighting and unarmed combat techniques for theatrical productions. Safety equipment provided.",
        "date": "10-02-2025"
    },
    {
        "id": 64,
        "clubId": 10,
        "title": "Improv Comedy Show Tonight",
        "content": "Monthly improv comedy show featuring games, audience suggestions, and spontaneous scenes. Support your fellow actors in this hilarious evening of entertainment!",
        "date": "18-03-2025"
    },
    {
        "id": 65,
        "clubId": 10,
        "title": "Shakespeare Workshop Series",
        "content": "Four-week intensive on performing Shakespeare. Focus on iambic pentameter, character development, and classical staging techniques. Open to all experience levels.",
        "date": "20-04-2025"
    },
    {
        "id": 66,
        "clubId": 10,
        "title": "Tech Crew Volunteers Needed",
        "content": "Looking for students interested in lighting, sound, and set design! No experience necessary - we'll train you. Great way to be involved in productions behind the scenes.",
        "date": "15-05-2025"
    },
    {
        "id": 67,
        "clubId": 10,
        "title": "Summer Theatre Intensive",
        "content": "Three-week summer program featuring acting classes, scene work, and final showcase performance. Professional guest directors and master class sessions included.",
        "date": "28-06-2025"
    },

    // Dance Collective Posts (Club ID: 11)
    {
        "id": 68,
        "clubId": 11,
        "title": "Hip-Hop Choreography Class",
        "content": "Learn the latest hip-hop moves from professional choreographer! Class focuses on rhythm, style, and performance quality. All skill levels welcome.",
        "date": "22-01-2025"
    },
    {
        "id": 69,
        "clubId": 11,
        "title": "Spring Dance Showcase",
        "content": "Auditions open for our annual spring dance showcase! Multiple styles including contemporary, jazz, hip-hop, and cultural dances. Solo and group pieces accepted.",
        "date": "08-03-2025"
    },
    {
        "id": 70,
        "clubId": 11,
        "title": "Ballroom Dancing Lessons",
        "content": "Six-week ballroom dancing course covering waltz, tango, foxtrot, and swing. Perfect for formal events and social dancing. Partners not required!",
        "date": "15-04-2025"
    },
    {
        "id": 71,
        "clubId": 11,
        "title": "Dance Fitness Fusion",
        "content": "High-energy fitness class combining dance styles with cardio workout. Burn calories while learning choreography from multiple dance genres.",
        "date": "20-05-2025"
    },
    {
        "id": 72,
        "clubId": 11,
        "title": "Guest Workshop: Broadway Style",
        "content": "Professional Broadway dancer teaches musical theatre dance techniques! Learn signature moves from popular shows and performance skills.",
        "date": "18-06-2025"
    },

    // Photography Society Posts (Club ID: 12)
    {
        "id": 73,
        "clubId": 12,
        "title": "Photo Walk: Campus Architecture",
        "content": "Group photo walk focusing on campus architectural details and geometric compositions. Bring cameras and comfortable walking shoes for this 2-hour exploration.",
        "date": "28-01-2025"
    },
    {
        "id": 74,
        "clubId": 12,
        "title": "Portrait Lighting Workshop",
        "content": "Learn studio portrait lighting techniques using professional equipment. Covers key light, fill light, background lighting, and creating mood with shadows.",
        "date": "15-02-2025"
    },
    {
        "id": 75,
        "clubId": 12,
        "title": "Photo Contest: Nature Theme",
        "content": "Annual nature photography contest now accepting submissions! Categories include landscapes, wildlife, macro, and environmental portraits. $200 prize for best overall.",
        "date": "25-03-2025"
    },
    {
        "id": 76,
        "clubId": 12,
        "title": "Darkroom Photography Class",
        "content": "Traditional film development and printing workshop in our darkroom facility. Learn chemical processing and hands-on print making techniques.",
        "date": "10-04-2025"
    },
    {
        "id": 77,
        "clubId": 12,
        "title": "Street Photography Ethics",
        "content": "Discussion and workshop on ethical street photography practices. Topics include consent, cultural sensitivity, and legal considerations when photographing people.",
        "date": "20-05-2025"
    },
    {
        "id": 78,
        "clubId": 12,
        "title": "Photo Exhibition Opening",
        "content": "Opening reception for our spring photography exhibition in the student gallery! Featured themes: campus life, portraits, and experimental techniques.",
        "date": "15-06-2025"
    },

    // Film Club Posts (Club ID: 13)
    {
        "id": 79,
        "clubId": 13,
        "title": "Criterion Collection Night",
        "content": "Monthly screening of classic cinema from Criterion Collection. This month: Akira Kurosawa's 'Seven Samurai' with introduction to Japanese cinema history.",
        "date": "30-01-2025"
    },
    {
        "id": 80,
        "clubId": 13,
        "title": "Student Film Festival Submissions",
        "content": "Call for submissions for our annual student film festival! All genres accepted: narrative, documentary, experimental, animation. Deadline: April 15th.",
        "date": "20-02-2025"
    },
    {
        "id": 81,
        "clubId": 13,
        "title": "Screenwriting Workshop",
        "content": "Four-week workshop covering screenplay structure, character development, and dialogue. Professional screenwriter leads sessions with script reading and feedback.",
        "date": "10-03-2025"
    },
    {
        "id": 82,
        "clubId": 13,
        "title": "Horror Movie Marathon",
        "content": "All-night horror movie marathon featuring classic and modern films! Popcorn and refreshments provided. Not recommended for those easily scared!",
        "date": "25-10-2024"
    },
    {
        "id": 83,
        "clubId": 13,
        "title": "Documentary Filmmaking",
        "content": "Workshop on documentary production techniques including interview skills, b-roll shooting, and ethical considerations when telling real stories.",
        "date": "15-04-2025"
    },
    {
        "id": 84,
        "clubId": 13,
        "title": "Film Industry Panel",
        "content": "Local film professionals discuss career paths in production, editing, sound design, and distribution. Q&A session and networking opportunity follows.",
        "date": "22-05-2025"
    },

    // Music Ensemble Posts (Club ID: 14)
    {
        "id": 85,
        "clubId": 14,
        "title": "Spring Concert Preparations",
        "content": "Rehearsals intensify for our spring concert featuring works by Mozart, Brahms, and contemporary composers. Final concert date: May 15th in the main auditorium.",
        "date": "02-02-2025"
    },
    {
        "id": 86,
        "clubId": 14,
        "title": "Jazz Ensemble Auditions",
        "content": "Open auditions for jazz ensemble! Looking for brass, woodwinds, rhythm section, and vocalists. Prepare a jazz standard and be ready for improvisation.",
        "date": "18-02-2025"
    },
    {
        "id": 87,
        "clubId": 14,
        "title": "Chamber Music Workshop",
        "content": "Small ensemble coaching with professional musicians. Work on string quartets, woodwind quintets, and mixed chamber pieces with expert guidance.",
        "date": "20-03-2025"
    },
    {
        "id": 88,
        "clubId": 14,
        "title": "Composer Masterclass",
        "content": "Guest composer Dr. Anderson leads masterclass on contemporary composition techniques. Students can submit works for feedback and performance consideration.",
        "date": "25-04-2025"
    },
    {
        "id": 89,
        "clubId": 14,
        "title": "Music Theory Study Group",
        "content": "Weekly study sessions for challenging music theory concepts. Covers advanced harmony, counterpoint, and analysis of complex musical works.",
        "date": "10-05-2025"
    },
    {
        "id": 90,
        "clubId": 14,
        "title": "Summer Music Camp Volunteers",
        "content": "Volunteer opportunity helping with children's summer music camp. Teach basic instruments, lead singing activities, and share the joy of music!",
        "date": "20-06-2025"
    },

    // Coding Club Posts (Club ID: 15)
    {
        "id": 91,
        "clubId": 15,
        "title": "Python Bootcamp for Beginners",
        "content": "Intensive weekend Python programming bootcamp! Covers variables, functions, loops, and basic data structures. Laptops provided if needed.",
        "date": "25-01-2025"
    },
    {
        "id": 92,
        "clubId": 15,
        "title": "Hackathon Team Formation",
        "content": "Teams forming for regional collegiate hackathon! Looking for programmers, designers, and project managers. 48-hour coding competition with great prizes.",
        "date": "10-02-2025"
    },
    {
        "id": 93,
        "clubId": 15,
        "title": "Web Development Workshop",
        "content": "Full-stack web development using React and Node.js. Build a complete application from database to user interface. Previous JavaScript experience helpful.",
        "date": "15-03-2025"
    },
    {
        "id": 94,
        "clubId": 15,
        "title": "Code Review Best Practices",
        "content": "Learn professional code review techniques and collaboration tools like Git. Essential skills for internships and team programming projects.",
        "date": "20-04-2025"
    },
    {
        "id": 95,
        "clubId": 15,
        "title": "Algorithm Competition Prep",
        "content": "Training sessions for programming competitions. Focus on data structures, dynamic programming, and problem-solving strategies under time pressure.",
        "date": "18-05-2025"
    },
    {
        "id": 96,
        "clubId": 15,
        "title": "Open Source Contribution",
        "content": "Learn how to contribute to open source projects! We'll find beginner-friendly projects and guide you through your first pull request.",
        "date": "22-06-2025"
    },

    // AI Society Posts (Club ID: 16)
    {
        "id": 97,
        "clubId": 16,
        "title": "Machine Learning Workshop Series",
        "content": "Four-week introduction to machine learning using Python and scikit-learn. Covers supervised learning, unsupervised learning, and neural networks basics.",
        "date": "28-01-2025"
    },
    {
        "id": 98,
        "clubId": 16,
        "title": "Ethics in AI Symposium",
        "content": "Full-day symposium on AI ethics featuring researchers, industry professionals, and ethicists. Topics include bias, privacy, job displacement, and regulation.",
        "date": "18-03-2025"
    },
    {
        "id": 99,
        "clubId": 16,
        "title": "Computer Vision Project",
        "content": "Hands-on project building image recognition system using TensorFlow. Learn about convolutional neural networks and deep learning applications.",
        "date": "15-04-2025"
    },
    {
        "id": 100,
        "clubId": 16,
        "title": "Natural Language Processing",
        "content": "Workshop on NLP techniques including sentiment analysis, text classification, and chatbot development using modern transformer models.",
        "date": "20-05-2025"
    },
    {
        "id": 101,
        "clubId": 16,
        "title": "AI Research Presentation",
        "content": "Students present their AI research projects! Topics include reinforcement learning, computer vision, and applications in healthcare and finance.",
        "date": "18-06-2025"
    },

    // Cybersecurity Guild Posts (Club ID: 17)
    {
        "id": 102,
        "clubId": 17,
        "title": "Capture the Flag Competition",
        "content": "Weekly CTF challenges covering web security, cryptography, reverse engineering, and network analysis. Great preparation for security careers!",
        "date": "15-01-2025"
    },
    {
        "id": 103,
        "clubId": 17,
        "title": "Ethical Hacking Workshop",
        "content": "Learn penetration testing basics in controlled lab environment. Covers vulnerability scanning, exploitation techniques, and responsible disclosure practices.",
        "date": "25-02-2025"
    },
    {
        "id": 104,
        "clubId": 17,
        "title": "Cryptography Deep Dive",
        "content": "Advanced workshop on modern cryptographic techniques. Topics include symmetric/asymmetric encryption, digital signatures, and blockchain security.",
        "date": "20-03-2025"
    },
    {
        "id": 105,
        "clubId": 17,
        "title": "Security Career Panel",
        "content": "Cybersecurity professionals share career paths in consulting, government, finance, and tech companies. Learn about certifications and skill requirements.",
        "date": "25-04-2025"
    },
    {
        "id": 106,
        "clubId": 17,
        "title": "Social Engineering Awareness",
        "content": "Workshop on recognizing and preventing social engineering attacks. Learn how criminals manipulate people and protect yourself and others.",
        "date": "15-05-2025"
    },
    {
        "id": 107,
        "clubId": 17,
        "title": "Bug Bounty Hunting Tips",
        "content": "Experienced bug bounty hunters share strategies for finding vulnerabilities in web applications and mobile apps. Legal and ethical considerations covered.",
        "date": "22-06-2025"
    },

    // Robotics Team Posts (Club ID: 18)
    {
        "id": 108,
        "clubId": 18,
        "title": "Robot Competition Preparation",
        "content": "Intensive preparation for regional robotics competition! Teams working on autonomous navigation, object manipulation, and strategic game play.",
        "date": "20-01-2025"
    },
    {
        "id": 109,
        "clubId": 18,
        "title": "Arduino Programming Workshop",
        "content": "Learn microcontroller programming with Arduino! Build simple robots with sensors, motors, and wireless communication capabilities.",
        "date": "15-02-2025"
    },
    {
        "id": 110,
        "clubId": 18,
        "title": "3D Printing for Robotics",
        "content": "Design and print custom robot parts using CAD software and 3D printers. Learn about material properties and manufacturing constraints.",
        "date": "10-03-2025"
    },
    {
        "id": 111,
        "clubId": 18,
        "title": "Machine Vision Systems",
        "content": "Workshop on computer vision for robotics applications. Program robots to recognize objects, navigate spaces, and make autonomous decisions.",
        "date": "18-04-2025"
    },
    {
        "id": 112,
        "clubId": 18,
        "title": "Robot Soccer Tournament",
        "content": "Build small autonomous robots for soccer competition! Teams design strategy, programming, and mechanical systems for exciting robot matches.",
        "date": "20-05-2025"
    },
    {
        "id": 113,
        "clubId": 18,
        "title": "Industry Visit: Manufacturing",
        "content": "Field trip to local manufacturing plant using industrial robots! See automation in action and learn about robotics career opportunities.",
        "date": "15-06-2025"
    },

    // Blockchain Group Posts (Club ID: 19)
    {
        "id": 114,
        "clubId": 19,
        "title": "Cryptocurrency Fundamentals",
        "content": "Introduction to Bitcoin, Ethereum, and other major cryptocurrencies. Learn about blockchain technology, mining, and digital wallets safely.",
        "date": "22-01-2025"
    },
    {
        "id": 115,
        "clubId": 19,
        "title": "Smart Contract Development",
        "content": "Learn Solidity programming for Ethereum smart contracts! Build decentralized applications and understand gas optimization techniques.",
        "date": "18-02-2025"
    },
    {
        "id": 116,
        "clubId": 19,
        "title": "DeFi Protocol Analysis",
        "content": "Deep dive into decentralized finance protocols. Analyze lending platforms, automated market makers, and yield farming strategies.",
        "date": "15-03-2025"
    },
    {
        "id": 117,
        "clubId": 19,
        "title": "NFT Creation Workshop",
        "content": "Create and mint your own NFTs! Learn about digital art, metadata standards, and marketplace platforms for non-fungible tokens.",
        "date": "20-04-2025"
    },
    {
        "id": 118,
        "clubId": 19,
        "title": "Blockchain Career Opportunities",
        "content": "Industry panel featuring blockchain developers, crypto analysts, and startup founders. Learn about emerging career paths in distributed technologies.",
        "date": "25-05-2025"
    },

    // Climbing Club Posts (Club ID: 20)
    {
        "id": 119,
        "clubId": 20,
        "title": "Beginner Climbing Course",
        "content": "Learn rock climbing basics including safety techniques, knots, and belaying. All equipment provided. No experience necessary for this introductory course!",
        "date": "28-01-2025"
    },
    {
        "id": 120,
        "clubId": 20,
        "title": "Outdoor Climbing Trip",
        "content": "Weekend trip to local climbing area! Experienced climbers will guide beginners on real rock. Transportation, equipment, and meals included.",
        "date": "20-02-2025"
    },
    {
        "id": 121,
        "clubId": 20,
        "title": "Bouldering Competition",
        "content": "Indoor bouldering competition with multiple difficulty categories! Test your problem-solving skills and climbing strength. Prizes for top performers.",
        "date": "18-03-2025"
    },
    {
        "id": 122,
        "clubId": 20,
        "title": "Climbing Gear Workshop",
        "content": "Learn about climbing equipment including shoes, harnesses, protection, and ropes. Get expert advice on gear selection and maintenance.",
        "date": "15-04-2025"
    },
    {
        "id": 123,
        "clubId": 20,
        "title": "Multi-Pitch Climbing",
        "content": "Advanced workshop on multi-pitch climbing techniques. Covers anchor building, rope management, and communication for long climbs.",
        "date": "20-05-2025"
    },
    {
        "id": 124,
        "clubId": 20,
        "title": "Alpine Climbing Expedition",
        "content": "Summer expedition to mountain climbing area! Five-day trip focusing on alpine techniques, weather assessment, and backcountry skills.",
        "date": "25-06-2025"
    },

    // Soccer League Posts (Club ID: 21)
    {
        "id": 125,
        "clubId": 21,
        "title": "Spring Season Registration",
        "content": "Registration open for spring soccer league! Multiple skill levels from recreational to competitive. Season runs March through May with weekly games.",
        "date": "15-01-2025"
    },
    {
        "id": 126,
        "clubId": 21,
        "title": "Skills Clinic: Shooting",
        "content": "Improve your finishing ability with professional shooting clinic! Work on accuracy, power, and technique from various field positions.",
        "date": "22-02-2025"
    },
    {
        "id": 127,
        "clubId": 21,
        "title": "Women's Team Championship",
        "content": "Congratulations to our women's team for winning the regional championship! Undefeated season with outstanding teamwork and dedication.",
        "date": "15-05-2025"
    },
    {
        "id": 128,
        "clubId": 21,
        "title": "Referee Training Course",
        "content": "Become a certified soccer referee! Two-day course covers rules, positioning, and game management. Great way to earn money while staying involved in soccer.",
        "date": "20-03-2025"
    },
    {
        "id": 129,
        "clubId": 21,
        "title": "Alumni Game Weekend",
        "content": "Annual alumni vs. current players games! Reconnect with former teammates and show current skills against experienced players.",
        "date": "18-04-2025"
    },
    {
        "id": 130,
        "clubId": 21,
        "title": "World Cup Watch Party",
        "content": "Join us for World Cup match viewing! Big screen, food, and soccer fans create electric atmosphere for international tournament games.",
        "date": "28-06-2025"
    },

    // Basketball Association Posts (Club ID: 22)
    {
        "id": 131,
        "clubId": 22,
        "title": "League Draft Night",
        "content": "Team selection for winter basketball league! Players drafted into balanced teams for competitive and recreational divisions.",
        "date": "25-01-2025"
    },
    {
        "id": 132,
        "clubId": 22,
        "title": "Three-Point Shooting Contest",
        "content": "Test your long-range accuracy in our three-point shooting competition! Multiple rounds with increasing difficulty and great prizes.",
        "date": "20-02-2025"
    },
    {
        "id": 133,
        "clubId": 22,
        "title": "Basketball Skills Camp",
        "content": "Weekend intensive camp focusing on fundamentals: dribbling, shooting, passing, and defense. Expert instruction for skill improvement.",
        "date": "15-03-2025"
    },
    {
        "id": 134,
        "clubId": 22,
        "title": "March Madness Tournament",
        "content": "Single-elimination tournament featuring all league teams! Excitement builds toward championship game with bracket challenges and prizes.",
        "date": "18-03-2025"
    },
    {
        "id": 135,
        "clubId": 22,
        "title": "Youth Coaching Volunteers",
        "content": "Volunteer opportunity coaching local youth basketball teams! Share your skills while gaining leadership experience and community involvement.",
        "date": "10-04-2025"
    },
    {
        "id": 136,
        "clubId": 22,
        "title": "NBA Finals Watch Party",
        "content": "Big screen viewing of NBA Finals games! Food, drinks, and basketball discussion with fellow fans throughout the championship series.",
        "date": "15-06-2025"
    },

    // Esports Team Posts (Club ID: 23)
    {
        "id": 137,
        "clubId": 23,
        "title": "League of Legends Tryouts",
        "content": "Tryouts for varsity League of Legends team! Looking for skilled players in all positions for competitive collegiate gaming league.",
        "date": "20-01-2025"
    },
    {
        "id": 138,
        "clubId": 23,
        "title": "Gaming Setup Workshop",
        "content": "Learn to optimize your gaming setup for competitive play! Covers hardware, software, and ergonomic considerations for peak performance.",
        "date": "15-02-2025"
    },
    {
        "id": 139,
        "clubId": 23,
        "title": "Valorant Tournament Victory",
        "content": "Our Valorant team wins regional tournament! Incredible teamwork and strategy led to championship victory against tough competition.",
        "date": "25-03-2025"
    },
    {
        "id": 140,
        "clubId": 23,
        "title": "Streaming and Content Creation",
        "content": "Workshop on game streaming, video editing, and building online gaming communities. Learn monetization strategies and audience engagement.",
        "date": "20-04-2025"
    },
    {
        "id": 141,
        "clubId": 23,
        "title": "Fighting Game Tournament",
        "content": "Multi-game fighting tournament featuring Street Fighter, Tekken, and Smash Bros! Open to all skill levels with beginner and advanced brackets.",
        "date": "18-05-2025"
    },
    {
        "id": 142,
        "clubId": 23,
        "title": "Game Development Interest",
        "content": "Meeting for students interested in game development! Discuss programming, art, design, and potential collaborative projects.",
        "date": "22-06-2025"
    },

    // Running Collective Posts (Club ID: 24)
    {
        "id": 143,
        "clubId": 24,
        "title": "Marathon Training Begins",
        "content": "20-week marathon training program starts Monday! All paces welcome with multiple training groups based on experience and goals.",
        "date": "15-01-2025"
    },
    {
        "id": 144,
        "clubId": 24,
        "title": "Weekly Group Runs",
        "content": "Join our Tuesday and Thursday group runs! Different pace groups ensure everyone finds suitable training partners for motivation and safety.",
        "date": "28-01-2025"
    },
    {
        "id": 145,
        "clubId": 24,
        "title": "Nutrition for Runners",
        "content": "Sports nutritionist discusses fueling strategies for training and racing. Learn about hydration, energy foods, and recovery nutrition.",
        "date": "18-02-2025"
    },
    {
        "id": 146,
        "clubId": 24,
        "title": "Trail Running Adventure",
        "content": "Saturday morning trail run in nearby state park! Beautiful scenery, varied terrain, and post-run breakfast at local café.",
        "date": "15-03-2025"
    },
    {
        "id": 147,
        "clubId": 24,
        "title": "5K Race Team Results",
        "content": "Excellent results at charity 5K race! Personal bests achieved and significant fundraising for local food bank. Great team representation!",
        "date": "20-04-2025"
    },
    {
        "id": 148,
        "clubId": 24,
        "title": "Injury Prevention Workshop",
        "content": "Physical therapist teaches injury prevention techniques including stretching, strength training, and proper running form analysis.",
        "date": "25-05-2025"
    },

    // Habitat for Humanity Chapter Posts (Club ID: 25)
    {
        "id": 149,
        "clubId": 25,
        "title": "Build Day This Saturday",
        "content": "Join us for building day! Help construct home for local family. No experience necessary - we'll provide training, tools, and lunch. Wear work clothes!",
        "date": "20-01-2025"
    },
    {
        "id": 150,
        "clubId": 25,
        "title": "Fundraising Bake Sale",
        "content": "Homemade treats to raise funds for construction materials! Cookies, brownies, and cakes available all week in the student center.",
        "date": "10-02-2025"
    },
    {
        "id": 151,
        "clubId": 25,
        "title": "Home Dedication Ceremony",
        "content": "Celebrate completion of our latest home project! Meet the family we helped and see the impact of our collective volunteer efforts.",
        "date": "15-03-2025"
    },
    {
        "id": 152,
        "clubId": 25,
        "title": "Construction Skills Training",
        "content": "Learn basic construction skills including framing, drywall, and painting. Professional volunteers teach safety and technique fundamentals.",
        "date": "25-04-2025"
    },
    {
        "id": 153,
        "clubId": 25,
        "title": "ReStore Volunteer Day",
        "content": "Volunteer at Habitat ReStore helping customers, organizing donations, and learning about sustainable building materials.",
        "date": "20-05-2025"
    },
    {
        "id": 154,
        "clubId": 25,
        "title": "Global Village Trip Planning",
        "content": "Information meeting about international Habitat build trip to Guatemala this summer! Travel, build, and experience different culture.",
        "date": "18-06-2025"
    },

    // Food Bank Volunteers Posts (Club ID: 26)
    {
        "id": 155,
        "clubId": 26,
        "title": "Weekly Volunteer Shifts",
        "content": "Regular volunteer opportunities at local food bank! Sort donations, pack food boxes, and help distribute to families in need. Flexible scheduling available.",
        "date": "18-01-2025"
    },
    {
        "id": 156,
        "clubId": 26,
        "title": "Campus Food Drive",
        "content": "Month-long food drive collecting non-perishable items! Drop-off locations across campus. Most needed items: canned proteins, pasta, and baby food.",
        "date": "01-02-2025"
    },
    {
        "id": 157,
        "clubId": 26,
        "title": "Holiday Meal Preparation",
        "content": "Volunteer for special holiday meal preparation! Help cook and serve Thanksgiving dinner for community members facing food insecurity.",
        "date": "20-11-2024"
    },
    {
        "id": 158,
        "clubId": 26,
        "title": "Food Insecurity Awareness",
        "content": "Educational presentation about local food insecurity statistics and solutions. Learn about systemic causes and community response efforts.",
        "date": "25-03-2025"
    },
    {
        "id": 159,
        "clubId": 26,
        "title": "Mobile Pantry Support",
        "content": "Assist with mobile food pantry visiting underserved neighborhoods! Help set up, distribute food, and connect families with additional resources.",
        "date": "15-04-2025"
    },
    {
        "id": 160,
        "clubId": 26,
        "title": "Garden Project Launch",
        "content": "Starting community garden to grow fresh produce for food bank! Volunteer for planning, planting, and maintenance of vegetable plots.",
        "date": "20-05-2025"
    },

    // Community Tutoring Posts (Club ID: 27)
    {
        "id": 161,
        "clubId": 27,
        "title": "Tutor Training Workshop",
        "content": "Comprehensive training for new tutors covering teaching techniques, learning styles, and working with diverse student populations.",
        "date": "22-01-2025"
    },
    {
        "id": 162,
        "clubId": 27,
        "title": "Elementary Math Program",
        "content": "New after-school math tutoring program for elementary students! Help children develop number sense and problem-solving confidence.",
        "date": "15-02-2025"
    },
    {
        "id": 163,
        "clubId": 27,
        "title": "High School Test Prep",
        "content": "SAT and ACT preparation classes for local high school students! Volunteer tutors needed for math, reading, and writing sections.",
        "date": "10-03-2025"
    },
    {
        "id": 164,
        "clubId": 27,
        "title": "Adult Literacy Classes",
        "content": "Teach basic reading and writing skills to adult learners! Flexible scheduling and training provided for this rewarding volunteer opportunity.",
        "date": "20-04-2025"
    },
    {
        "id": 165,
        "clubId": 27,
        "title": "ESL Conversation Practice",
        "content": "English conversation practice for non-native speakers! Help community members improve language skills through friendly conversation.",
        "date": "15-05-2025"
    },
    {
        "id": 166,
        "clubId": 27,
        "title": "Summer Reading Program",
        "content": "Volunteer readers needed for children's summer reading program! Prevent summer learning loss through engaging literacy activities.",
        "date": "25-06-2025"
    },

    // Youth Mentorship Program Posts (Club ID: 28)
    {
        "id": 167,
        "clubId": 28,
        "title": "Mentor Matching Process",
        "content": "New mentors paired with local youth for academic and personal guidance! Training includes communication skills and goal-setting strategies.",
        "date": "25-01-2025"
    },
    {
        "id": 168,
        "clubId": 28,
        "title": "College Preparation Workshop",
        "content": "Help high school students navigate college applications! Volunteer mentors assist with essays, financial aid, and campus visit planning.",
        "date": "20-02-2025"
    },
    {
        "id": 169,
        "clubId": 28,
        "title": "Career Exploration Fair",
        "content": "Interactive career fair for middle and high school students! Mentors present various career paths and educational requirements.",
        "date": "15-03-2025"
    },
    {
        "id": 170,
        "clubId": 28,
        "title": "Leadership Skills Workshop",
        "content": "Teaching leadership and communication skills to youth participants! Activities include public speaking practice and team-building exercises.",
        "date": "18-04-2025"
    },
    {
        "id": 171,
        "clubId": 28,
        "title": "Graduation Celebration",
        "content": "Celebrating mentees graduating from high school! Many are first-generation college students thanks to mentor support and guidance.",
        "date": "20-05-2025"
    },
    {
        "id": 172,
        "clubId": 28,
        "title": "Summer Internship Placements",
        "content": "Helping place youth in summer internship opportunities! Partnerships with local businesses provide real work experience.",
        "date": "15-06-2025"
    },

    // Campus Cleanup Crew Posts (Club ID: 29)
    {
        "id": 173,
        "clubId": 29,
        "title": "Earth Day Campus Cleanup",
        "content": "Major campus-wide cleanup for Earth Day! Volunteers needed to pick up litter, plant flowers, and beautify outdoor spaces. Gloves and supplies provided.",
        "date": "22-04-2025"
    },
    {
        "id": 174,
        "clubId": 29,
        "title": "Recycling Education Campaign",
        "content": "Educational campaign about proper recycling procedures on campus! Learn what can be recycled and help reduce contamination in recycling bins.",
        "date": "18-01-2025"
    },
    {
        "id": 175,
        "clubId": 29,
        "title": "Storm Drain Marking Project",
        "content": "Install markers on storm drains to prevent pollution! Important environmental protection helping keep local waterways clean.",
        "date": "15-02-2025"
    },
    {
        "id": 176,
        "clubId": 29,
        "title": "Beach Cleanup Trip",
        "content": "Day trip to nearby beach for environmental cleanup! Remove trash and debris while enjoying ocean scenery and teamwork.",
        "date": "20-03-2025"
    },
    {
        "id": 177,
        "clubId": 29,
        "title": "Composting Program Launch",
        "content": "Starting campus composting program for food waste! Learn about organic waste reduction and soil enrichment benefits.",
        "date": "25-04-2025"
    },
    {
        "id": 178,
        "clubId": 29,
        "title": "Adopt-a-Spot Program",
        "content": "Ongoing maintenance program where groups adopt campus areas for regular cleaning and beautification. Sign up for your spot!",
        "date": "15-05-2025"
    },

    // Meditation Circle Posts (Club ID: 30)
    {
        "id": 179,
        "clubId": 30,
        "title": "Mindfulness Meditation Basics",
        "content": "Introduction to mindfulness meditation techniques for stress reduction and mental clarity. No experience necessary - just bring an open mind!",
        "date": "20-01-2025"
    },
    {
        "id": 180,
        "clubId": 30,
        "title": "Walking Meditation Practice",
        "content": "Outdoor walking meditation in campus gardens! Learn to combine movement with mindfulness for active meditation practice.",
        "date": "15-02-2025"
    },
    {
        "id": 181,
        "clubId": 30,
        "title": "Stress Relief Before Finals",
        "content": "Special meditation sessions during finals week! Take study breaks with guided relaxation and breathing exercises to manage exam stress.",
        "date": "10-05-2025"
    },
    {
        "id": 182,
        "clubId": 30,
        "title": "Guest Teacher: Zen Buddhism",
        "content": "Local Zen master teaches traditional sitting meditation and Buddhist philosophy! Learn about different meditation traditions and practices.",
        "date": "20-03-2025"
    },
    {
        "id": 183,
        "clubId": 30,
        "title": "Loving-Kindness Meditation",
        "content": "Practice compassion meditation focusing on developing kindness toward self and others! Powerful technique for emotional wellbeing.",
        "date": "18-04-2025"
    },
    {
        "id": 184,
        "clubId": 30,
        "title": "Meditation Retreat Day",
        "content": "Full-day silent meditation retreat with periods of sitting, walking, and mindful eating. Deep practice opportunity for committed practitioners.",
        "date": "25-05-2025"
    }
];