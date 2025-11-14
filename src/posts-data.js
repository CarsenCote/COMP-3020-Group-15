const POSTS_DATA = [
    // Engineering Society Posts (Club ID: 0)
    {
        "id": 0,
        "clubId": 0,
        "title": "Welcome to Engineering Week 2025!",
        "content": "Join us for an exciting week of workshops, competitions, and networking events. We have sessions on robotics, software engineering, and sustainable design. Registration is now open for all members.",
        "date": "15-01-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 1,
        "clubId": 0,
        "title": "CAD Workshop Results",
        "content": "Thank you to everyone who attended our SolidWorks CAD workshop last weekend. We had over 50 participants learn advanced modeling techniques. The next workshop will focus on ANSYS simulation software.",
        "date": "28-02-2025",
        "event": false
    },
    {
        "id": 2,
        "clubId": 0,
        "title": "Industry Guest Speaker: Tesla Engineer",
        "content": "We're excited to host Sarah Chen, a senior mechanical engineer from Tesla, this Thursday at 7 PM. She'll discuss her work on electric vehicle battery systems and career opportunities in green technology.",
        "date": "10-03-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "20:30"
    },
    {
        "id": 3,
        "clubId": 0,
        "title": "Design Competition Winners",
        "content": "Congratulations to Team Alpha for winning our annual design competition with their innovative water purification system! Runner-up Team Beta impressed judges with their solar-powered charging station.",
        "date": "22-04-2025",
        "event": false
    },
    {
        "id": 4,
        "clubId": 0,
        "title": "Summer Internship Fair Prep",
        "content": "Join us next Tuesday for resume reviews and interview prep for the upcoming Engineering Internship Fair. We'll cover technical questions and have mock interviews with industry professionals.",
        "date": "08-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 5,
        "clubId": 0,
        "title": "New Lab Equipment Arrived!",
        "content": "Our new 3D printers and circuit prototyping boards have arrived in the lab. Members can now book time slots for hands-on projects. Safety training is required before equipment access.",
        "date": "18-06-2025",
        "event": false
    },

    // Economics Club Posts (Club ID: 1)
    {
        "id": 6,
        "clubId": 1,
        "title": "Market Analysis Workshop",
        "content": "Learn the fundamentals of financial market analysis this Friday. We'll cover technical indicators, reading charts, and basic portfolio theory. Bring your laptops for hands-on practice.",
        "date": "12-01-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:30"
    },
    {
        "id": 7,
        "clubId": 1,
        "title": "Cryptocurrency Debate Results",
        "content": "Great turnout for last week's debate on cryptocurrency regulation! Team Pro-Regulation made compelling arguments about consumer protection, while Team Free-Market emphasized innovation benefits.",
        "date": "25-02-2025",
        "event": false
    },
    {
        "id": 8,
        "clubId": 1,
        "title": "Guest Lecture: Federal Reserve Policy",
        "content": "Dr. Martinez from the Federal Reserve Bank will speak about monetary policy and interest rate decisions this Wednesday. This is a rare opportunity to learn from a policy insider.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "15:30"
    },
    {
        "id": 9,
        "clubId": 1,
        "title": "Stock Market Simulation Results",
        "content": "Congratulations to Jessica for winning our semester-long portfolio competition with a 12.3% return! The simulation taught us valuable lessons about risk management and diversification.",
        "date": "30-04-2025",
        "event": false
    },
    {
        "id": 10,
        "clubId": 1,
        "title": "Career Panel: Economics Graduates",
        "content": "Five economics alumni will share their career paths in banking, consulting, government, and research. Q&A session follows with networking reception.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "18:30",
        "end_time": "20:30"
    },
    {
        "id": 11,
        "clubId": 1,
        "title": "International Trade Workshop",
        "content": "Join us for an interactive workshop on global trade dynamics and tariff impacts. We'll use real trade data to analyze the effects of recent policy changes.",
        "date": "10-06-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },

    // Pre-Med Association Posts (Club ID: 2)
    {
        "id": 12,
        "clubId": 2,
        "title": "MCAT Prep Study Groups Forming",
        "content": "Study groups for the spring MCAT are now forming! We have groups for Biology, Chemistry, Physics, and Psychology/Sociology sections. Sign up sheets are available at our next meeting.",
        "date": "18-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "20:00"
    },
    {
        "id": 13,
        "clubId": 2,
        "title": "Hospital Volunteer Opportunities",
        "content": "Local hospitals are seeking student volunteers. This is excellent experience for medical school applications. Requirements include background check and orientation training.",
        "date": "05-02-2025",
        "event": false
    },
    {
        "id": 14,
        "clubId": 2,
        "title": "Medical School Panel Success",
        "content": "Thank you to current medical students who shared application tips and experiences. Key takeaways: start clinical experience early, maintain strong GPA, and develop meaningful relationships with faculty.",
        "date": "20-03-2025",
        "event": false
    },
    {
        "id": 15,
        "clubId": 2,
        "title": "Anatomy Lab Tour Scheduled",
        "content": "Exclusive tour of the medical school's anatomy lab next Friday! Limited spots available. This is a unique opportunity to see cadaveric specimens and learn about anatomical structures.",
        "date": "12-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:00"
    },
    {
        "id": 16,
        "clubId": 2,
        "title": "Research Opportunity: Cancer Biology",
        "content": "Dr. Patel's lab is seeking undergraduate researchers for summer cancer biology projects. This paid position offers excellent research experience and potential publication opportunities.",
        "date": "28-05-2025",
        "event": false
    },
    {
        "id": 17,
        "clubId": 2,
        "title": "First Aid Certification Course",
        "content": "Free CPR and First Aid certification course this weekend! All pre-med students should have these certifications. Course includes hands-on practice with mannequins and AED training.",
        "date": "15-06-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 18,
        "clubId": 2,
        "title": "Medical Mission Trip Planning",
        "content": "Planning meeting for our annual medical mission trip to Guatemala. We'll provide healthcare in underserved communities while gaining valuable clinical experience.",
        "date": "08-07-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },

    // Math Circle Posts (Club ID: 3)
    {
        "id": 19,
        "clubId": 3,
        "title": "Putnam Competition Training Begins",
        "content": "Preparation for the Putnam Mathematical Competition starts this week! We'll meet twice weekly to practice problem-solving techniques and review advanced calculus and algebra.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "19:00"
    },
    {
        "id": 20,
        "clubId": 3,
        "title": "Pi Day Celebration Plans",
        "content": "Join us for Pi Day festivities on March 14th! We'll have pie-eating contests, digit memorization competitions, and fascinating talks about the history and applications of π.",
        "date": "01-03-2025",
        "event": false
    },
    {
        "id": 21,
        "clubId": 3,
        "title": "Topology Workshop Series",
        "content": "Four-week introduction to topology starting next Monday. Topics include continuity, compactness, and connectedness. Perfect for students interested in pure mathematics.",
        "date": "25-03-2025",
        "event": true,
        "start_time": "15:30",
        "end_time": "17:00"
    },
    {
        "id": 22,
        "clubId": 3,
        "title": "Math Modeling Competition",
        "content": "Teams wanted for the Mathematical Contest in Modeling! This 96-hour competition challenges teams to solve real-world problems using mathematical modeling techniques.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "21:00"
    },
    {
        "id": 23,
        "clubId": 3,
        "title": "Graduate School Information Session",
        "content": "Current graduate students will discuss PhD programs in mathematics, application processes, and research opportunities. Learn about different specializations and career paths.",
        "date": "10-05-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "17:30"
    },
    {
        "id": 24,
        "clubId": 3,
        "title": "Number Theory Seminar",
        "content": "Professor Johnson will present her research on prime number distribution. This advanced seminar explores the Riemann Hypothesis and its implications for cryptography.",
        "date": "28-06-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "15:30"
    },

    // Philosophy Forum Posts (Club ID: 4)
    {
        "id": 25,
        "clubId": 4,
        "title": "Ethics in AI Debate Tonight",
        "content": "Tonight's debate topic: 'Should AI systems have rights?' Join us for a thought-provoking discussion about consciousness, rights, and the future of artificial intelligence.",
        "date": "14-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },
    {
        "id": 26,
        "clubId": 4,
        "title": "Socratic Seminar: Free Will",
        "content": "Using Socratic dialogue method, we'll explore determinism, compatibilism, and libertarian free will. Come prepared to question your assumptions about human agency and moral responsibility.",
        "date": "28-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 27,
        "clubId": 4,
        "title": "Guest Speaker: Dr. Williams on Existentialism",
        "content": "Renowned philosophy professor Dr. Williams will discuss Sartre, Camus, and modern existentialist thought. Reception with book signing follows the lecture.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "19:00"
    },
    {
        "id": 28,
        "clubId": 4,
        "title": "Philosophy Café: Climate Ethics",
        "content": "Informal discussion about environmental ethics and climate change responsibility. How do we balance individual freedom with collective environmental action?",
        "date": "22-04-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:00"
    },
    {
        "id": 29,
        "clubId": 4,
        "title": "Ancient Philosophy Workshop",
        "content": "Deep dive into Plato's Republic this weekend. We'll examine justice, the ideal state, and the allegory of the cave. Primary texts provided, no background required.",
        "date": "15-05-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 30,
        "clubId": 4,
        "title": "Logic Puzzle Competition",
        "content": "Test your reasoning skills in our annual logic competition! Categories include formal logic, paradoxes, and philosophical puzzles. Prizes for top performers.",
        "date": "12-06-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "16:00"
    },

    // Latin American Student Association Posts (Club ID: 5)
    {
        "id": 31,
        "clubId": 5,
        "title": "Día de los Reyes Celebration",
        "content": "Join us for Three Kings Day festivities! Traditional food, music, and cultural presentations celebrating this important Latin American holiday. All are welcome to learn about our traditions.",
        "date": "06-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "21:00"
    },
    {
        "id": 32,
        "clubId": 5,
        "title": "Spanish Conversation Practice",
        "content": "Weekly Spanish conversation circles start this Thursday! All skill levels welcome. Practice speaking while learning about different Latin American countries and cultures.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 33,
        "clubId": 5,
        "title": "Cultural Dance Workshop",
        "content": "Learn salsa, bachata, and merengue from professional instructors! No experience necessary. This fun workshop teaches basic steps and cultural significance of these dances.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },
    {
        "id": 34,
        "clubId": 5,
        "title": "Cinco de Mayo Festival Planning",
        "content": "Planning committee forming for our annual Cinco de Mayo celebration! We need volunteers for food coordination, entertainment, and cultural education booths.",
        "date": "10-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 35,
        "clubId": 5,
        "title": "Study Abroad Panel: Latin America",
        "content": "Students who studied in Mexico, Costa Rica, Argentina, and Peru share their experiences. Learn about academic programs, cultural immersion, and travel opportunities.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "17:30"
    },
    {
        "id": 36,
        "clubId": 5,
        "title": "Community Service: ESL Tutoring",
        "content": "Volunteer opportunity tutoring local Latino families in English. This rewarding service helps community integration while strengthening cultural connections.",
        "date": "08-06-2025",
        "event": false
    },
    {
        "id": 37,
        "clubId": 5,
        "title": "Latin American Film Series",
        "content": "Monthly film screenings featuring acclaimed Latin American cinema. This month: 'Roma' by Alfonso Cuarón. Discussion and refreshments follow each showing.",
        "date": "25-06-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "22:00"
    },

    // Asian Cultural Union Posts (Club ID: 6)
    {
        "id": 38,
        "clubId": 6,
        "title": "Lunar New Year Celebration",
        "content": "Celebrate the Year of the Snake with traditional performances, authentic cuisine from across Asia, and cultural presentations. Red envelopes and dragon dance performances!",
        "date": "29-01-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "21:00"
    },
    {
        "id": 39,
        "clubId": 6,
        "title": "Holi Festival Colors and Joy",
        "content": "Join us for the Hindu Festival of Colors! Organic color powders, traditional sweets, and Bollywood music. Wear white clothes and prepare for a colorful celebration!",
        "date": "14-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "18:00"
    },
    {
        "id": 40,
        "clubId": 6,
        "title": "Asian Cooking Workshop",
        "content": "Learn to make dumplings, spring rolls, and bubble tea! Hands-on cooking class featuring recipes from China, Vietnam, and Taiwan. Ingredients and recipes provided.",
        "date": "25-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:30"
    },
    {
        "id": 41,
        "clubId": 6,
        "title": "Cultural Heritage Panel",
        "content": "Students share stories about maintaining cultural identity while adapting to American college life. Discussion topics include family expectations, language preservation, and traditions.",
        "date": "18-05-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:00"
    },
    {
        "id": 42,
        "clubId": 6,
        "title": "K-Pop Dance Competition",
        "content": "Show off your moves in our annual K-Pop dance battle! Solo and group categories. Prizes for best choreography, energy, and audience favorite.",
        "date": "22-06-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "22:00"
    },
    {
        "id": 43,
        "clubId": 6,
        "title": "Mid-Autumn Festival Moon Cakes",
        "content": "Traditional mooncake making workshop celebrating the Mid-Autumn Festival! Learn about lunar traditions while creating these special pastries.",
        "date": "08-09-2024",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:30"
    },

    // African Students Organization Posts (Club ID: 7)
    {
        "id": 44,
        "clubId": 7,
        "title": "Black History Month Events",
        "content": "Month-long celebration featuring guest speakers, cultural performances, and educational workshops highlighting African and African-American contributions to society.",
        "date": "01-02-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "18:00"
    },
    {
        "id": 45,
        "clubId": 7,
        "title": "African Fashion Show Success",
        "content": "Amazing turnout for our African fashion showcase! Models displayed traditional and contemporary styles from across the continent. Thank you to all participants and attendees.",
        "date": "18-03-2025",
        "event": false
    },
    {
        "id": 46,
        "clubId": 7,
        "title": "Mentorship Program Launch",
        "content": "New mentorship program pairs upperclassmen with incoming African students. Program focuses on academic success, cultural adjustment, and professional development.",
        "date": "10-04-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 47,
        "clubId": 7,
        "title": "Community Fundraiser: Education",
        "content": "Fundraising campaign for educational supplies in rural African schools. Goal: $5,000 for books, technology, and classroom materials. Every donation makes a difference!",
        "date": "15-05-2025",
        "event": false
    },
    {
        "id": 48,
        "clubId": 7,
        "title": "African Music and Dance Night",
        "content": "Experience the rich musical traditions of Africa! Live drumming, traditional dances, and contemporary African music. Learn dance steps and rhythm patterns.",
        "date": "28-06-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "22:00"
    },
    {
        "id": 49,
        "clubId": 7,
        "title": "Study Abroad: Ghana Program",
        "content": "Information session about summer study abroad program in Ghana. Focus on sustainable development, cultural immersion, and service learning opportunities.",
        "date": "12-07-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "17:30"
    },

    // French Club Posts (Club ID: 8)
    {
        "id": 50,
        "clubId": 8,
        "title": "French Film Night: Amélie",
        "content": "Monthly French film screening with subtitles and discussion. This month featuring the beloved romantic comedy 'Le Fabuleux Destin d'Amélie Poulain' with French pastries!",
        "date": "20-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "22:00"
    },
    {
        "id": 51,
        "clubId": 8,
        "title": "Conversation Café Wednesdays",
        "content": "Weekly French conversation practice in relaxed café setting. All levels welcome! Native speakers available to help with pronunciation and cultural context.",
        "date": "05-02-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 52,
        "clubId": 8,
        "title": "Crêpe Making Workshop",
        "content": "Learn to make authentic French crêpes! Both sweet and savory varieties. Workshop includes techniques, traditional fillings, and cultural significance of this French staple.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 53,
        "clubId": 8,
        "title": "Exchange Student Welcome",
        "content": "Welcome reception for French exchange students! Great opportunity to practice language skills and learn about French university life directly from native speakers.",
        "date": "22-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 54,
        "clubId": 8,
        "title": "French Poetry Reading",
        "content": "Evening of French poetry featuring works by Verlaine, Rimbaud, and contemporary poets. Readings in French with English translations provided.",
        "date": "18-05-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "20:30"
    },
    {
        "id": 55,
        "clubId": 8,
        "title": "Study Abroad France Info",
        "content": "Information session about study abroad programs in France. Representatives from Lyon, Paris, and Bordeaux programs share details about academics and cultural experiences.",
        "date": "10-06-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "17:30"
    },

    // German Language Circle Posts (Club ID: 9)
    {
        "id": 56,
        "clubId": 9,
        "title": "Oktoberfest Celebration Planning",
        "content": "Planning meeting for our annual Oktoberfest celebration! Need volunteers for traditional music, food coordination, and cultural education activities.",
        "date": "15-09-2024",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 57,
        "clubId": 9,
        "title": "German Grammar Workshop",
        "content": "Intensive workshop focusing on German cases and verb conjugations. Helpful for students struggling with der, die, das and complex grammar rules.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 58,
        "clubId": 9,
        "title": "Christmas Market Visit",
        "content": "Group trip to authentic German Christmas market in nearby city! Experience traditional crafts, food, and holiday atmosphere while practicing German language skills.",
        "date": "12-12-2024",
        "event": true,
        "start_time": "10:00",
        "end_time": "18:00"
    },
    {
        "id": 59,
        "clubId": 9,
        "title": "German Board Game Night",
        "content": "Fun evening playing popular German board games while practicing language skills. Games include Settlers of Catan, Ticket to Ride, and other strategy games.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "21:00"
    },
    {
        "id": 60,
        "clubId": 9,
        "title": "Guest Speaker: Berlin Exchange",
        "content": "Student who spent semester in Berlin shares experiences about German culture, university system, and travel opportunities throughout Europe.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 61,
        "clubId": 9,
        "title": "German Career Panel",
        "content": "Professionals working with German companies discuss career opportunities, business culture, and language requirements in international business.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "17:30"
    },

    // Theatre Troupe Posts (Club ID: 10)
    {
        "id": 62,
        "clubId": 10,
        "title": "Auditions: Romeo and Juliet",
        "content": "Open auditions for our spring production of Romeo and Juliet! All skill levels welcome. Audition requirements: prepared monologue and cold reading from script.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "21:00"
    },
    {
        "id": 63,
        "clubId": 10,
        "title": "Stage Combat Workshop",
        "content": "Professional stage combat choreographer teaches sword fighting and unarmed combat techniques for theatrical productions. Safety equipment provided.",
        "date": "10-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 64,
        "clubId": 10,
        "title": "Improv Comedy Show Tonight",
        "content": "Monthly improv comedy show featuring games, audience suggestions, and spontaneous scenes. Support your fellow actors in this hilarious evening of entertainment!",
        "date": "18-03-2025",
        "event": true,
        "start_time": "20:00",
        "end_time": "22:00"
    },
    {
        "id": 65,
        "clubId": 10,
        "title": "Shakespeare Workshop Series",
        "content": "Four-week intensive on performing Shakespeare. Focus on iambic pentameter, character development, and classical staging techniques. Open to all experience levels.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "18:00"
    },
    {
        "id": 66,
        "clubId": 10,
        "title": "Tech Crew Volunteers Needed",
        "content": "Looking for students interested in lighting, sound, and set design! No experience necessary - we'll train you. Great way to be involved in productions behind the scenes.",
        "date": "15-05-2025",
        "event": false
    },
    {
        "id": 67,
        "clubId": 10,
        "title": "Summer Theatre Intensive",
        "content": "Three-week summer program featuring acting classes, scene work, and final showcase performance. Professional guest directors and master class sessions included.",
        "date": "28-06-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },

    // Dance Collective Posts (Club ID: 11)
    {
        "id": 68,
        "clubId": 11,
        "title": "Hip-Hop Choreography Class",
        "content": "Learn the latest hip-hop moves from professional choreographer! Class focuses on rhythm, style, and performance quality. All skill levels welcome.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },
    {
        "id": 69,
        "clubId": 11,
        "title": "Spring Dance Showcase",
        "content": "Auditions open for our annual spring dance showcase! Multiple styles including contemporary, jazz, hip-hop, and cultural dances. Solo and group pieces accepted.",
        "date": "08-03-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:00"
    },
    {
        "id": 70,
        "clubId": 11,
        "title": "Ballroom Dancing Lessons",
        "content": "Six-week ballroom dancing course covering waltz, tango, foxtrot, and swing. Perfect for formal events and social dancing. Partners not required!",
        "date": "15-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 71,
        "clubId": 11,
        "title": "Dance Fitness Fusion",
        "content": "High-energy fitness class combining dance styles with cardio workout. Burn calories while learning choreography from multiple dance genres.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:00"
    },
    {
        "id": 72,
        "clubId": 11,
        "title": "Guest Workshop: Broadway Style",
        "content": "Professional Broadway dancer teaches musical theatre dance techniques! Learn signature moves from popular shows and performance skills.",
        "date": "18-06-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },

    // Photography Society Posts (Club ID: 12)
    {
        "id": 73,
        "clubId": 12,
        "title": "Photo Walk: Campus Architecture",
        "content": "Group photo walk focusing on campus architectural details and geometric compositions. Bring cameras and comfortable walking shoes for this 2-hour exploration.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "12:00"
    },
    {
        "id": 74,
        "clubId": 12,
        "title": "Portrait Lighting Workshop",
        "content": "Learn studio portrait lighting techniques using professional equipment. Covers key light, fill light, background lighting, and creating mood with shadows.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 75,
        "clubId": 12,
        "title": "Photo Contest: Nature Theme",
        "content": "Annual nature photography contest now accepting submissions! Categories include landscapes, wildlife, macro, and environmental portraits. $200 prize for best overall.",
        "date": "25-03-2025",
        "event": false
    },
    {
        "id": 76,
        "clubId": 12,
        "title": "Darkroom Photography Class",
        "content": "Traditional film development and printing workshop in our darkroom facility. Learn chemical processing and hands-on print making techniques.",
        "date": "10-04-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "16:00"
    },
    {
        "id": 77,
        "clubId": 12,
        "title": "Street Photography Ethics",
        "content": "Discussion and workshop on ethical street photography practices. Topics include consent, cultural sensitivity, and legal considerations when photographing people.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "15:30",
        "end_time": "17:30"
    },
    {
        "id": 78,
        "clubId": 12,
        "title": "Photo Exhibition Opening",
        "content": "Opening reception for our spring photography exhibition in the student gallery! Featured themes: campus life, portraits, and experimental techniques.",
        "date": "15-06-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "21:00"
    },

    // Film Club Posts (Club ID: 13)
    {
        "id": 79,
        "clubId": 13,
        "title": "Criterion Collection Night",
        "content": "Monthly screening of classic cinema from Criterion Collection. This month: Akira Kurosawa's 'Seven Samurai' with introduction to Japanese cinema history.",
        "date": "30-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "23:00"
    },
    {
        "id": 80,
        "clubId": 13,
        "title": "Student Film Festival Submissions",
        "content": "Call for submissions for our annual student film festival! All genres accepted: narrative, documentary, experimental, animation. Deadline: April 15th.",
        "date": "20-02-2025",
        "event": false
    },
    {
        "id": 81,
        "clubId": 13,
        "title": "Screenwriting Workshop",
        "content": "Four-week workshop covering screenplay structure, character development, and dialogue. Professional screenwriter leads sessions with script reading and feedback.",
        "date": "10-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:30"
    },
    {
        "id": 82,
        "clubId": 13,
        "title": "Horror Movie Marathon",
        "content": "All-night horror movie marathon featuring classic and modern films! Popcorn and refreshments provided. Not recommended for those easily scared!",
        "date": "25-10-2024",
        "event": true,
        "start_time": "20:00",
        "end_time": "06:00"
    },
    {
        "id": 83,
        "clubId": 13,
        "title": "Documentary Filmmaking",
        "content": "Workshop on documentary production techniques including interview skills, b-roll shooting, and ethical considerations when telling real stories.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 84,
        "clubId": 13,
        "title": "Film Industry Panel",
        "content": "Local film professionals discuss career paths in production, editing, sound design, and distribution. Q&A session and networking opportunity follows.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },

    // Music Ensemble Posts (Club ID: 14)
    {
        "id": 85,
        "clubId": 14,
        "title": "Spring Concert Preparations",
        "content": "Rehearsals intensify for our spring concert featuring works by Mozart, Brahms, and contemporary composers. Final concert date: May 15th in the main auditorium.",
        "date": "02-02-2025",
        "event": false
    },
    {
        "id": 86,
        "clubId": 14,
        "title": "Jazz Ensemble Auditions",
        "content": "Open auditions for jazz ensemble! Looking for brass, woodwinds, rhythm section, and vocalists. Prepare a jazz standard and be ready for improvisation.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 87,
        "clubId": 14,
        "title": "Chamber Music Workshop",
        "content": "Small ensemble coaching with professional musicians. Work on string quartets, woodwind quintets, and mixed chamber pieces with expert guidance.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "18:00"
    },
    {
        "id": 88,
        "clubId": 14,
        "title": "Composer Masterclass",
        "content": "Guest composer Dr. Anderson leads masterclass on contemporary composition techniques. Students can submit works for feedback and performance consideration.",
        "date": "25-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:30"
    },
    {
        "id": 89,
        "clubId": 14,
        "title": "Music Theory Study Group",
        "content": "Weekly study sessions for challenging music theory concepts. Covers advanced harmony, counterpoint, and analysis of complex musical works.",
        "date": "10-05-2025",
        "event": false
    },
    {
        "id": 90,
        "clubId": 14,
        "title": "Summer Music Camp Volunteers",
        "content": "Volunteer opportunity helping with children's summer music camp. Teach basic instruments, lead singing activities, and share the joy of music!",
        "date": "20-06-2025",
        "event": false
    },

    // Coding Club Posts (Club ID: 15)
    {
        "id": 91,
        "clubId": 15,
        "title": "Python Bootcamp for Beginners",
        "content": "Intensive weekend Python programming bootcamp! Covers variables, functions, loops, and basic data structures. Laptops provided if needed.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 92,
        "clubId": 15,
        "title": "Hackathon Team Formation",
        "content": "Teams forming for regional collegiate hackathon! Looking for programmers, designers, and project managers. 48-hour coding competition with great prizes.",
        "date": "10-02-2025",
        "event": false
    },
    {
        "id": 93,
        "clubId": 15,
        "title": "Web Development Workshop",
        "content": "Full-stack web development using React and Node.js. Build a complete application from database to user interface. Previous JavaScript experience helpful.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "17:00"
    },
    {
        "id": 94,
        "clubId": 15,
        "title": "Code Review Best Practices",
        "content": "Learn professional code review techniques and collaboration tools like Git. Essential skills for internships and team programming projects.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:00"
    },
    {
        "id": 95,
        "clubId": 15,
        "title": "Algorithm Competition Prep",
        "content": "Training sessions for programming competitions. Focus on data structures, dynamic programming, and problem-solving strategies under time pressure.",
        "date": "18-05-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "18:00"
    },
    {
        "id": 96,
        "clubId": 15,
        "title": "Open Source Contribution",
        "content": "Learn how to contribute to open source projects! We'll find beginner-friendly projects and guide you through your first pull request.",
        "date": "22-06-2025",
        "event": true,
        "start_time": "13:30",
        "end_time": "16:30"
    },

    // AI Society Posts (Club ID: 16)
    {
        "id": 97,
        "clubId": 16,
        "title": "Machine Learning Workshop Series",
        "content": "Four-week introduction to machine learning using Python and scikit-learn. Covers supervised learning, unsupervised learning, and neural networks basics.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:30"
    },
    {
        "id": 98,
        "clubId": 16,
        "title": "Ethics in AI Symposium",
        "content": "Full-day symposium on AI ethics featuring researchers, industry professionals, and ethicists. Topics include bias, privacy, job displacement, and regulation.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 99,
        "clubId": 16,
        "title": "Computer Vision Project",
        "content": "Hands-on project building image recognition system using TensorFlow. Learn about convolutional neural networks and deep learning applications.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:30"
    },
    {
        "id": 100,
        "clubId": 16,
        "title": "Natural Language Processing",
        "content": "Workshop on NLP techniques including sentiment analysis, text classification, and chatbot development using modern transformer models.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "18:00"
    },
    {
        "id": 101,
        "clubId": 16,
        "title": "AI Research Presentation",
        "content": "Students present their AI research projects! Topics include reinforcement learning, computer vision, and applications in healthcare and finance.",
        "date": "18-06-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },

    // Cybersecurity Guild Posts (Club ID: 17)
    {
        "id": 102,
        "clubId": 17,
        "title": "Capture the Flag Competition",
        "content": "Weekly CTF challenges covering web security, cryptography, reverse engineering, and network analysis. Great preparation for security careers!",
        "date": "15-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "22:00"
    },
    {
        "id": 103,
        "clubId": 17,
        "title": "Ethical Hacking Workshop",
        "content": "Learn penetration testing basics in controlled lab environment. Covers vulnerability scanning, exploitation techniques, and responsible disclosure practices.",
        "date": "25-02-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "17:00"
    },
    {
        "id": 104,
        "clubId": 17,
        "title": "Cryptography Deep Dive",
        "content": "Advanced workshop on modern cryptographic techniques. Topics include symmetric/asymmetric encryption, digital signatures, and blockchain security.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "14:30",
        "end_time": "17:30"
    },
    {
        "id": 105,
        "clubId": 17,
        "title": "Security Career Panel",
        "content": "Cybersecurity professionals share career paths in consulting, government, finance, and tech companies. Learn about certifications and skill requirements.",
        "date": "25-04-2025",
        "event": true,
        "start_time": "18:30",
        "end_time": "20:30"
    },
    {
        "id": 106,
        "clubId": 17,
        "title": "Social Engineering Awareness",
        "content": "Workshop on recognizing and preventing social engineering attacks. Learn how criminals manipulate people and protect yourself and others.",
        "date": "15-05-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 107,
        "clubId": 17,
        "title": "Bug Bounty Hunting Tips",
        "content": "Experienced bug bounty hunters share strategies for finding vulnerabilities in web applications and mobile apps. Legal and ethical considerations covered.",
        "date": "22-06-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:30"
    },

    // Robotics Team Posts (Club ID: 18)
    {
        "id": 108,
        "clubId": 18,
        "title": "Robot Competition Preparation",
        "content": "Intensive preparation for regional robotics competition! Teams working on autonomous navigation, object manipulation, and strategic game play.",
        "date": "20-01-2025",
        "event": false
    },
    {
        "id": 109,
        "clubId": 18,
        "title": "Arduino Programming Workshop",
        "content": "Learn microcontroller programming with Arduino! Build simple robots with sensors, motors, and wireless communication capabilities.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 110,
        "clubId": 18,
        "title": "3D Printing for Robotics",
        "content": "Design and print custom robot parts using CAD software and 3D printers. Learn about material properties and manufacturing constraints.",
        "date": "10-03-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "16:00"
    },
    {
        "id": 111,
        "clubId": 18,
        "title": "Machine Vision Systems",
        "content": "Workshop on computer vision for robotics applications. Program robots to recognize objects, navigate spaces, and make autonomous decisions.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "18:00"
    },
    {
        "id": 112,
        "clubId": 18,
        "title": "Robot Soccer Tournament",
        "content": "Build small autonomous robots for soccer competition! Teams design strategy, programming, and mechanical systems for exciting robot matches.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 113,
        "clubId": 18,
        "title": "Industry Visit: Manufacturing",
        "content": "Field trip to local manufacturing plant using industrial robots! See automation in action and learn about robotics career opportunities.",
        "date": "15-06-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "18:00"
    },

    // Blockchain Group Posts (Club ID: 19)
    {
        "id": 114,
        "clubId": 19,
        "title": "Cryptocurrency Fundamentals",
        "content": "Introduction to Bitcoin, Ethereum, and other major cryptocurrencies. Learn about blockchain technology, mining, and digital wallets safely.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 115,
        "clubId": 19,
        "title": "Smart Contract Development",
        "content": "Learn Solidity programming for Ethereum smart contracts! Build decentralized applications and understand gas optimization techniques.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "18:00"
    },
    {
        "id": 116,
        "clubId": 19,
        "title": "DeFi Protocol Analysis",
        "content": "Deep dive into decentralized finance protocols. Analyze lending platforms, automated market makers, and yield farming strategies.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:30"
    },
    {
        "id": 117,
        "clubId": 19,
        "title": "NFT Creation Workshop",
        "content": "Create and mint your own NFTs! Learn about digital art, metadata standards, and marketplace platforms for non-fungible tokens.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "16:00"
    },
    {
        "id": 118,
        "clubId": 19,
        "title": "Blockchain Career Opportunities",
        "content": "Industry panel featuring blockchain developers, crypto analysts, and startup founders. Learn about emerging career paths in distributed technologies.",
        "date": "25-05-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },

    // Climbing Club Posts (Club ID: 20)
    {
        "id": 119,
        "clubId": 20,
        "title": "Beginner Climbing Course",
        "content": "Learn rock climbing basics including safety techniques, knots, and belaying. All equipment provided. No experience necessary for this introductory course!",
        "date": "28-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 120,
        "clubId": 20,
        "title": "Outdoor Climbing Trip",
        "content": "Weekend trip to local climbing area! Experienced climbers will guide beginners on real rock. Transportation, equipment, and meals included.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "18:00"
    },
    {
        "id": 121,
        "clubId": 20,
        "title": "Bouldering Competition",
        "content": "Indoor bouldering competition with multiple difficulty categories! Test your problem-solving skills and climbing strength. Prizes for top performers.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 122,
        "clubId": 20,
        "title": "Climbing Gear Workshop",
        "content": "Learn about climbing equipment including shoes, harnesses, protection, and ropes. Get expert advice on gear selection and maintenance.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:00"
    },
    {
        "id": 123,
        "clubId": 20,
        "title": "Multi-Pitch Climbing",
        "content": "Advanced workshop on multi-pitch climbing techniques. Covers anchor building, rope management, and communication for long climbs.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "15:00"
    },
    {
        "id": 124,
        "clubId": 20,
        "title": "Alpine Climbing Expedition",
        "content": "Summer expedition to mountain climbing area! Five-day trip focusing on alpine techniques, weather assessment, and backcountry skills.",
        "date": "25-06-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "18:00"
    },

    // Soccer League Posts (Club ID: 21)
    {
        "id": 125,
        "clubId": 21,
        "title": "Spring Season Registration",
        "content": "Registration open for spring soccer league! Multiple skill levels from recreational to competitive. Season runs March through May with weekly games.",
        "date": "15-01-2025",
        "event": false
    },
    {
        "id": 126,
        "clubId": 21,
        "title": "Skills Clinic: Shooting",
        "content": "Improve your finishing ability with professional shooting clinic! Work on accuracy, power, and technique from various field positions.",
        "date": "22-02-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:00"
    },
    {
        "id": 127,
        "clubId": 21,
        "title": "Women's Team Championship",
        "content": "Congratulations to our women's team for winning the regional championship! Undefeated season with outstanding teamwork and dedication.",
        "date": "15-05-2025",
        "event": false
    },
    {
        "id": 128,
        "clubId": 21,
        "title": "Referee Training Course",
        "content": "Become a certified soccer referee! Two-day course covers rules, positioning, and game management. Great way to earn money while staying involved in soccer.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 129,
        "clubId": 21,
        "title": "Alumni Game Weekend",
        "content": "Annual alumni vs. current players games! Reconnect with former teammates and show current skills against experienced players.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 130,
        "clubId": 21,
        "title": "World Cup Watch Party",
        "content": "Join us for World Cup match viewing! Big screen, food, and soccer fans create electric atmosphere for international tournament games.",
        "date": "28-06-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "22:00"
    },

    // Basketball Association Posts (Club ID: 22)
    {
        "id": 131,
        "clubId": 22,
        "title": "League Draft Night",
        "content": "Team selection for winter basketball league! Players drafted into balanced teams for competitive and recreational divisions.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },
    {
        "id": 132,
        "clubId": 22,
        "title": "Three-Point Shooting Contest",
        "content": "Test your long-range accuracy in our three-point shooting competition! Multiple rounds with increasing difficulty and great prizes.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 133,
        "clubId": 22,
        "title": "Basketball Skills Camp",
        "content": "Weekend intensive camp focusing on fundamentals: dribbling, shooting, passing, and defense. Expert instruction for skill improvement.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 134,
        "clubId": 22,
        "title": "March Madness Tournament",
        "content": "Single-elimination tournament featuring all league teams! Excitement builds toward championship game with bracket challenges and prizes.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "18:00"
    },
    {
        "id": 135,
        "clubId": 22,
        "title": "Youth Coaching Volunteers",
        "content": "Volunteer opportunity coaching local youth basketball teams! Share your skills while gaining leadership experience and community involvement.",
        "date": "10-04-2025",
        "event": false
    },
    {
        "id": 136,
        "clubId": 22,
        "title": "NBA Finals Watch Party",
        "content": "Big screen viewing of NBA Finals games! Food, drinks, and basketball discussion with fellow fans throughout the championship series.",
        "date": "15-06-2025",
        "event": true,
        "start_time": "19:30",
        "end_time": "23:00"
    },

    // Esports Team Posts (Club ID: 23)
    {
        "id": 137,
        "clubId": 23,
        "title": "League of Legends Tryouts",
        "content": "Tryouts for varsity League of Legends team! Looking for skilled players in all positions for competitive collegiate gaming league.",
        "date": "20-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "22:00"
    },
    {
        "id": 138,
        "clubId": 23,
        "title": "Gaming Setup Workshop",
        "content": "Learn to optimize your gaming setup for competitive play! Covers hardware, software, and ergonomic considerations for peak performance.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 139,
        "clubId": 23,
        "title": "Valorant Tournament Victory",
        "content": "Our Valorant team wins regional tournament! Incredible teamwork and strategy led to championship victory against tough competition.",
        "date": "25-03-2025",
        "event": false
    },
    {
        "id": 140,
        "clubId": 23,
        "title": "Streaming and Content Creation",
        "content": "Workshop on game streaming, video editing, and building online gaming communities. Learn monetization strategies and audience engagement.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 141,
        "clubId": 23,
        "title": "Fighting Game Tournament",
        "content": "Multi-game fighting tournament featuring Street Fighter, Tekken, and Smash Bros! Open to all skill levels with beginner and advanced brackets.",
        "date": "18-05-2025",
        "event": true,
        "start_time": "12:00",
        "end_time": "20:00"
    },
    {
        "id": 142,
        "clubId": 23,
        "title": "Game Development Interest",
        "content": "Meeting for students interested in game development! Discuss programming, art, design, and potential collaborative projects.",
        "date": "22-06-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },

    // Running Collective Posts (Club ID: 24)
    {
        "id": 143,
        "clubId": 24,
        "title": "Marathon Training Begins",
        "content": "20-week marathon training program starts Monday! All paces welcome with multiple training groups based on experience and goals.",
        "date": "15-01-2025",
        "event": false
    },
    {
        "id": 144,
        "clubId": 24,
        "title": "Weekly Group Runs",
        "content": "Join our Tuesday and Thursday group runs! Different pace groups ensure everyone finds suitable training partners for motivation and safety.",
        "date": "28-01-2025",
        "event": false
    },
    {
        "id": 145,
        "clubId": 24,
        "title": "Nutrition for Runners",
        "content": "Sports nutritionist discusses fueling strategies for training and racing. Learn about hydration, energy foods, and recovery nutrition.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 146,
        "clubId": 24,
        "title": "Trail Running Adventure",
        "content": "Saturday morning trail run in nearby state park! Beautiful scenery, varied terrain, and post-run breakfast at local café.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "11:00"
    },
    {
        "id": 147,
        "clubId": 24,
        "title": "5K Race Team Results",
        "content": "Excellent results at charity 5K race! Personal bests achieved and significant fundraising for local food bank. Great team representation!",
        "date": "20-04-2025",
        "event": false
    },
    {
        "id": 148,
        "clubId": 24,
        "title": "Injury Prevention Workshop",
        "content": "Physical therapist teaches injury prevention techniques including stretching, strength training, and proper running form analysis.",
        "date": "25-05-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },

    // Habitat for Humanity Chapter Posts (Club ID: 25)
    {
        "id": 149,
        "clubId": 25,
        "title": "Build Day This Saturday",
        "content": "Join us for building day! Help construct home for local family. No experience necessary - we'll provide training, tools, and lunch. Wear work clothes!",
        "date": "20-01-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "17:00"
    },
    {
        "id": 150,
        "clubId": 25,
        "title": "Fundraising Bake Sale",
        "content": "Homemade treats to raise funds for construction materials! Cookies, brownies, and cakes available all week in the student center.",
        "date": "10-02-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "15:00"
    },
    {
        "id": 151,
        "clubId": 25,
        "title": "Home Dedication Ceremony",
        "content": "Celebrate completion of our latest home project! Meet the family we helped and see the impact of our collective volunteer efforts.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 152,
        "clubId": 25,
        "title": "Construction Skills Training",
        "content": "Learn basic construction skills including framing, drywall, and painting. Professional volunteers teach safety and technique fundamentals.",
        "date": "25-04-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "15:00"
    },
    {
        "id": 153,
        "clubId": 25,
        "title": "ReStore Volunteer Day",
        "content": "Volunteer at Habitat ReStore helping customers, organizing donations, and learning about sustainable building materials.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "16:00"
    },
    {
        "id": 154,
        "clubId": 25,
        "title": "Global Village Trip Planning",
        "content": "Information meeting about international Habitat build trip to Guatemala this summer! Travel, build, and experience different culture.",
        "date": "18-06-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },

    // Food Bank Volunteers Posts (Club ID: 26)
    {
        "id": 155,
        "clubId": 26,
        "title": "Weekly Volunteer Shifts",
        "content": "Regular volunteer opportunities at local food bank! Sort donations, pack food boxes, and help distribute to families in need. Flexible scheduling available.",
        "date": "18-01-2025",
        "event": false
    },
    {
        "id": 156,
        "clubId": 26,
        "title": "Campus Food Drive",
        "content": "Month-long food drive collecting non-perishable items! Drop-off locations across campus. Most needed items: canned proteins, pasta, and baby food.",
        "date": "01-02-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 157,
        "clubId": 26,
        "title": "Holiday Meal Preparation",
        "content": "Volunteer for special holiday meal preparation! Help cook and serve Thanksgiving dinner for community members facing food insecurity.",
        "date": "20-11-2024",
        "event": true,
        "start_time": "08:00",
        "end_time": "15:00"
    },
    {
        "id": 158,
        "clubId": 26,
        "title": "Food Insecurity Awareness",
        "content": "Educational presentation about local food insecurity statistics and solutions. Learn about systemic causes and community response efforts.",
        "date": "25-03-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 159,
        "clubId": 26,
        "title": "Mobile Pantry Support",
        "content": "Assist with mobile food pantry visiting underserved neighborhoods! Help set up, distribute food, and connect families with additional resources.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "14:00"
    },
    {
        "id": 160,
        "clubId": 26,
        "title": "Garden Project Launch",
        "content": "Starting community garden to grow fresh produce for food bank! Volunteer for planning, planting, and maintenance of vegetable plots.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "13:00"
    },

    // Community Tutoring Posts (Club ID: 27)
    {
        "id": 161,
        "clubId": 27,
        "title": "Tutor Training Workshop",
        "content": "Comprehensive training for new tutors covering teaching techniques, learning styles, and working with diverse student populations.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "17:00"
    },
    {
        "id": 162,
        "clubId": 27,
        "title": "Elementary Math Program",
        "content": "New after-school math tutoring program for elementary students! Help children develop number sense and problem-solving confidence.",
        "date": "15-02-2025",
        "event": false
    },
    {
        "id": 163,
        "clubId": 27,
        "title": "High School Test Prep",
        "content": "SAT and ACT preparation classes for local high school students! Volunteer tutors needed for math, reading, and writing sections.",
        "date": "10-03-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "18:00"
    },
    {
        "id": 164,
        "clubId": 27,
        "title": "Adult Literacy Classes",
        "content": "Teach basic reading and writing skills to adult learners! Flexible scheduling and training provided for this rewarding volunteer opportunity.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "18:30",
        "end_time": "20:30"
    },
    {
        "id": 165,
        "clubId": 27,
        "title": "ESL Conversation Practice",
        "content": "English conversation practice for non-native speakers! Help community members improve language skills through friendly conversation.",
        "date": "15-05-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "19:00"
    },
    {
        "id": 166,
        "clubId": 27,
        "title": "Summer Reading Program",
        "content": "Volunteer readers needed for children's summer reading program! Prevent summer learning loss through engaging literacy activities.",
        "date": "25-06-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "12:00"
    },

    // Youth Mentorship Program Posts (Club ID: 28)
    {
        "id": 167,
        "clubId": 28,
        "title": "Mentor Matching Process",
        "content": "New mentors paired with local youth for academic and personal guidance! Training includes communication skills and goal-setting strategies.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 168,
        "clubId": 28,
        "title": "College Preparation Workshop",
        "content": "Help high school students navigate college applications! Volunteer mentors assist with essays, financial aid, and campus visit planning.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "19:00"
    },
    {
        "id": 169,
        "clubId": 28,
        "title": "Career Exploration Fair",
        "content": "Interactive career fair for middle and high school students! Mentors present various career paths and educational requirements.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "17:00"
    },
    {
        "id": 170,
        "clubId": 28,
        "title": "Leadership Skills Workshop",
        "content": "Teaching leadership and communication skills to youth participants! Activities include public speaking practice and team-building exercises.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "14:30",
        "end_time": "17:30"
    },
    {
        "id": 171,
        "clubId": 28,
        "title": "Graduation Celebration",
        "content": "Celebrating mentees graduating from high school! Many are first-generation college students thanks to mentor support and guidance.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "21:00"
    },
    {
        "id": 172,
        "clubId": 28,
        "title": "Summer Internship Placements",
        "content": "Helping place youth in summer internship opportunities! Partnerships with local businesses provide real work experience.",
        "date": "15-06-2025",
        "event": false
    },

    // Campus Cleanup Crew Posts (Club ID: 29)
    {
        "id": 173,
        "clubId": 29,
        "title": "Earth Day Campus Cleanup",
        "content": "Major campus-wide cleanup for Earth Day! Volunteers needed to pick up litter, plant flowers, and beautify outdoor spaces. Gloves and supplies provided.",
        "date": "22-04-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "15:00"
    },
    {
        "id": 174,
        "clubId": 29,
        "title": "Recycling Education Campaign",
        "content": "Educational campaign about proper recycling procedures on campus! Learn what can be recycled and help reduce contamination in recycling bins.",
        "date": "18-01-2025",
        "event": false
    },
    {
        "id": 175,
        "clubId": 29,
        "title": "Storm Drain Marking Project",
        "content": "Install markers on storm drains to prevent pollution! Important environmental protection helping keep local waterways clean.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "14:00"
    },
    {
        "id": 176,
        "clubId": 29,
        "title": "Beach Cleanup Trip",
        "content": "Day trip to nearby beach for environmental cleanup! Remove trash and debris while enjoying ocean scenery and teamwork.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "18:00"
    },
    {
        "id": 177,
        "clubId": 29,
        "title": "Composting Program Launch",
        "content": "Starting campus composting program for food waste! Learn about organic waste reduction and soil enrichment benefits.",
        "date": "25-04-2025",
        "event": true,
        "start_time": "11:00",
        "end_time": "14:00"
    },
    {
        "id": 178,
        "clubId": 29,
        "title": "Adopt-a-Spot Program",
        "content": "Ongoing maintenance program where groups adopt campus areas for regular cleaning and beautification. Sign up for your spot!",
        "date": "15-05-2025",
        "event": false
    },

    // Meditation Circle Posts (Club ID: 30)
    {
        "id": 179,
        "clubId": 30,
        "title": "Mindfulness Meditation Basics",
        "content": "Introduction to mindfulness meditation techniques for stress reduction and mental clarity. No experience necessary - just bring an open mind!",
        "date": "20-01-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 180,
        "clubId": 30,
        "title": "Walking Meditation Practice",
        "content": "Outdoor walking meditation in campus gardens! Learn to combine movement with mindfulness for active meditation practice.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "17:00"
    },
    {
        "id": 181,
        "clubId": 30,
        "title": "Stress Relief Before Finals",
        "content": "Special meditation sessions during finals week! Take study breaks with guided relaxation and breathing exercises to manage exam stress.",
        "date": "10-05-2025",
        "event": true,
        "start_time": "12:00",
        "end_time": "13:00"
    },
    {
        "id": 182,
        "clubId": 30,
        "title": "Guest Teacher: Zen Buddhism",
        "content": "Local Zen master teaches traditional sitting meditation and Buddhist philosophy! Learn about different meditation traditions and practices.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 183,
        "clubId": 30,
        "title": "Loving-Kindness Meditation",
        "content": "Practice compassion meditation focusing on developing kindness toward self and others! Powerful technique for emotional wellbeing.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "17:30",
        "end_time": "19:00"
    },
    {
        "id": 184,
        "clubId": 30,
        "title": "Meditation Retreat Day",
        "content": "Full-day silent meditation retreat with periods of sitting, walking, and mindful eating. Deep practice opportunity for committed practitioners.",
        "date": "25-05-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },

    // Yoga Club Posts (Club ID: 31)
    {
        "id": 185,
        "clubId": 31,
        "title": "Beginner Hatha Yoga Series",
        "content": "Six-week introduction to Hatha yoga focusing on basic poses, alignment, and breathing. Perfect for complete beginners wanting to build flexibility and strength.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 186,
        "clubId": 31,
        "title": "Sunrise Yoga on the Quad",
        "content": "Start your day with outdoor yoga practice! Weather permitting, we'll greet the sunrise with gentle flowing sequences and meditation.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "06:30",
        "end_time": "07:30"
    },
    {
        "id": 187,
        "clubId": 31,
        "title": "Stress Relief Yoga Workshop",
        "content": "Learn yoga techniques specifically for managing academic stress! Restorative poses and breathing exercises to calm mind and body.",
        "date": "08-05-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 188,
        "clubId": 31,
        "title": "Yoga Philosophy Discussion",
        "content": "Explore the philosophical foundations of yoga beyond physical practice. Discussion of ancient texts and modern applications for daily life.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 189,
        "clubId": 31,
        "title": "Partner Acro-Yoga Workshop",
        "content": "Fun partner yoga combining acrobatics and trust-building! Learn basic lifts and poses with safety instruction from certified teachers.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:30"
    },

    // Nutrition Society Posts (Club ID: 32)
    {
        "id": 190,
        "clubId": 32,
        "title": "Healthy Meal Prep Workshop",
        "content": "Learn efficient meal preparation strategies for busy college students! Budget-friendly recipes and time-saving techniques for nutritious eating.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "16:00"
    },
    {
        "id": 191,
        "clubId": 32,
        "title": "Sports Nutrition Seminar",
        "content": "Registered dietitian discusses nutrition for athletic performance. Topics include hydration, pre/post workout meals, and supplement safety.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 192,
        "clubId": 32,
        "title": "Plant-Based Cooking Class",
        "content": "Hands-on cooking class featuring delicious plant-based recipes! Learn about complete proteins and meeting nutritional needs on vegetarian diets.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "20:00"
    },
    {
        "id": 193,
        "clubId": 32,
        "title": "Reading Food Labels",
        "content": "Educational workshop on understanding nutrition labels and ingredient lists. Become a savvy consumer and make informed food choices.",
        "date": "22-04-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "17:30"
    },
    {
        "id": 194,
        "clubId": 32,
        "title": "Mindful Eating Practice",
        "content": "Learn mindful eating techniques to improve relationship with food. Practice eating meditation and hunger/fullness awareness exercises.",
        "date": "18-05-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "16:30"
    },
    {
        "id": 195,
        "clubId": 32,
        "title": "Campus Garden Tour",
        "content": "Tour campus community garden and learn about growing your own nutritious food! Tips for container gardening in dorm rooms.",
        "date": "20-06-2025",
        "event": true,
        "start_time": "11:00",
        "end_time": "12:30"
    },

    // Mental Health Alliance Posts (Club ID: 33)
    {
        "id": 196,
        "clubId": 33,
        "title": "Mental Health First Aid Training",
        "content": "Comprehensive training on recognizing mental health crises and providing initial support. Certification course for helping friends and community members.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 197,
        "clubId": 33,
        "title": "Stress Management Workshop",
        "content": "Learn practical strategies for managing academic and life stress. Techniques include time management, cognitive restructuring, and relaxation skills.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:30"
    },
    {
        "id": 198,
        "clubId": 33,
        "title": "Mental Health Awareness Week",
        "content": "Week-long campaign reducing stigma around mental health! Daily activities including speakers, resource fairs, and peer support sessions.",
        "date": "10-05-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 199,
        "clubId": 33,
        "title": "Support Group Facilitator Training",
        "content": "Training for students interested in facilitating peer support groups. Learn active listening, group dynamics, and crisis intervention basics.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "17:00"
    },
    {
        "id": 200,
        "clubId": 33,
        "title": "Self-Care Sunday Workshop",
        "content": "Interactive workshop on building sustainable self-care routines! Explore different self-care strategies and create personalized wellness plans.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:00"
    },
    {
        "id": 201,
        "clubId": 33,
        "title": "Depression Screening Event",
        "content": "Free, confidential mental health screenings with counseling professionals. Early detection and resource connections for students needing support.",
        "date": "25-10-2024",
        "event": true,
        "start_time": "10:00",
        "end_time": "15:00"
    },

    // Wellness Ambassadors Posts (Club ID: 34)
    {
        "id": 202,
        "clubId": 34,
        "title": "Wellness Fair Planning",
        "content": "Planning committee for annual campus wellness fair! Need volunteers for health screenings, fitness demos, and resource booths coordination.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "18:30"
    },
    {
        "id": 203,
        "clubId": 34,
        "title": "Sleep Hygiene Workshop",
        "content": "Learn about healthy sleep habits for academic success! Discussion of sleep cycles, environment optimization, and managing technology use.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "20:30"
    },
    {
        "id": 204,
        "clubId": 34,
        "title": "Healthy Relationships Seminar",
        "content": "Workshop on building and maintaining healthy relationships. Topics include communication skills, boundaries, and conflict resolution strategies.",
        "date": "14-02-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 205,
        "clubId": 34,
        "title": "Campus Wellness Walk",
        "content": "Guided walking tour highlighting campus wellness resources! Visit counseling center, health services, recreation facilities, and quiet study spots.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "16:30"
    },
    {
        "id": 206,
        "clubId": 34,
        "title": "Peer Wellness Coaching",
        "content": "Training program for peer wellness coaches! Learn motivational interviewing and goal-setting techniques to help fellow students.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },

    // Board Games Society Posts (Club ID: 35)
    {
        "id": 207,
        "clubId": 35,
        "title": "Weekly Game Night Thursdays",
        "content": "Join us every Thursday for board game night! Huge selection of games from strategy to party games. All skill levels welcome for fun evening!",
        "date": "18-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "22:00"
    },
    {
        "id": 208,
        "clubId": 35,
        "title": "Settlers of Catan Tournament",
        "content": "Multi-week Catan tournament with prizes for winners! Registration open now for this classic strategy game competition.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "18:00"
    },
    {
        "id": 209,
        "clubId": 35,
        "title": "New Game Demo Night",
        "content": "Try the latest board games before you buy! Publishers send demo copies of newest releases for members to test and review.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "22:00"
    },
    {
        "id": 210,
        "clubId": 35,
        "title": "D&D Campaign Starting",
        "content": "New Dungeons & Dragons campaign forming! Beginner-friendly with experienced DM. Create characters and begin epic fantasy adventure!",
        "date": "25-04-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "21:00"
    },
    {
        "id": 211,
        "clubId": 35,
        "title": "Game Design Workshop",
        "content": "Learn basics of board game design! Workshop covers mechanics, playtesting, and prototyping your own game ideas.",
        "date": "15-05-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 212,
        "clubId": 35,
        "title": "Cooperative Games Night",
        "content": "Special evening featuring cooperative board games where players work together! Try Pandemic, Forbidden Island, and other team-based games.",
        "date": "22-06-2025",
        "event": true,
        "start_time": "18:30",
        "end_time": "21:30"
    },

    // Student Networking Association Posts (Club ID: 36)
    {
        "id": 213,
        "clubId": 36,
        "title": "Professional Networking Mixer",
        "content": "Monthly networking event with local business professionals! Practice elevator pitches and make valuable industry connections.",
        "date": "20-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:30"
    },
    {
        "id": 214,
        "clubId": 36,
        "title": "LinkedIn Profile Workshop",
        "content": "Optimize your LinkedIn profile for career success! Learn about professional photos, compelling headlines, and networking strategies.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 215,
        "clubId": 36,
        "title": "Alumni Mentorship Program",
        "content": "Connect with successful alumni in your field! Mentorship program pairs students with professionals for career guidance and advice.",
        "date": "18-03-2025",
        "event": false
    },
    {
        "id": 216,
        "clubId": 36,
        "title": "Industry Panel: Technology",
        "content": "Tech professionals discuss career paths in software development, cybersecurity, data science, and product management. Q&A and networking follow.",
        "date": "22-04-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "19:30"
    },
    {
        "id": 217,
        "clubId": 36,
        "title": "Interview Skills Workshop",
        "content": "Practice interviewing skills with mock interviews and feedback! Covers behavioral questions, technical interviews, and salary negotiation.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 218,
        "clubId": 36,
        "title": "Business Card Design",
        "content": "Design professional business cards for networking events! Workshop covers design principles and printing options for memorable cards.",
        "date": "18-06-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:00"
    },

    // Coffee Chat Club Posts (Club ID: 37)
    {
        "id": 219,
        "clubId": 37,
        "title": "Weekly Coffee Meetups",
        "content": "Casual coffee conversations every Wednesday morning! Meet new people, practice languages, and enjoy specialty coffee drinks together.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "11:00"
    },
    {
        "id": 220,
        "clubId": 37,
        "title": "Latte Art Workshop",
        "content": "Learn to create beautiful latte art! Professional barista teaches milk steaming techniques and foam art patterns.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:00"
    },
    {
        "id": 221,
        "clubId": 37,
        "title": "Coffee Tasting Event",
        "content": "Explore coffee flavors from around the world! Guided tasting of single-origin beans with discussion of processing methods and flavor profiles.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:00"
    },
    {
        "id": 222,
        "clubId": 37,
        "title": "Study Group Sessions",
        "content": "Quiet coffee shop study sessions for finals prep! Background coffee shop ambiance with optional study breaks and snacks.",
        "date": "08-05-2025",
        "event": false
    },
    {
        "id": 223,
        "clubId": 37,
        "title": "Coffee Shop Crawl",
        "content": "Tour of local independent coffee shops! Discover hidden gems and support local businesses while trying different coffee cultures.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "15:00"
    },

    // Outdoor Adventures Group Posts (Club ID: 38)
    {
        "id": 224,
        "clubId": 38,
        "title": "Weekend Hiking Trip",
        "content": "Day hike to scenic mountain lookout! Moderate difficulty trail with beautiful views. Transportation, maps, and safety equipment provided.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "17:00"
    },
    {
        "id": 225,
        "clubId": 38,
        "title": "Camping Skills Workshop",
        "content": "Learn essential camping skills including tent setup, fire building, and outdoor cooking! Perfect preparation for upcoming camping trips.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 226,
        "clubId": 38,
        "title": "Whitewater Rafting Adventure",
        "content": "Thrilling whitewater rafting trip on class III rapids! All experience levels welcome with professional guides and safety instruction.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "18:00"
    },
    {
        "id": 227,
        "clubId": 38,
        "title": "Wilderness First Aid Training",
        "content": "Two-day wilderness first aid certification course! Learn emergency medical care in remote outdoor settings. Valuable skills for any adventurer.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 228,
        "clubId": 38,
        "title": "Stargazing Night",
        "content": "Astronomy night at dark sky location! Telescopes provided for viewing planets, nebulae, and star clusters. Hot chocolate and constellation guides included.",
        "date": "20-06-2025",
        "event": true,
        "start_time": "20:00",
        "end_time": "23:30"
    },
    {
        "id": 229,
        "clubId": 38,
        "title": "Kayaking Lake Trip",
        "content": "Peaceful lake kayaking for beginners! Learn paddling techniques while enjoying wildlife viewing and water-based relaxation.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },

    // Book Discussion Circle Posts (Club ID: 39)
    {
        "id": 230,
        "clubId": 39,
        "title": "January Book: 1984",
        "content": "This month we're reading George Orwell's dystopian classic '1984'. Discussion focuses on surveillance, authoritarianism, and contemporary relevance.",
        "date": "15-01-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "20:30"
    },
    {
        "id": 231,
        "clubId": 39,
        "title": "Author Visit: Local Writer",
        "content": "Local novelist visits to discuss her latest work and writing process! Book signing and Q&A session about publishing and creative writing.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 232,
        "clubId": 39,
        "title": "Poetry Month Celebration",
        "content": "April is National Poetry Month! Special sessions featuring contemporary poets, open mic readings, and poetry writing workshop.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "20:00"
    },
    {
        "id": 233,
        "clubId": 39,
        "title": "Science Fiction Book Club",
        "content": "New sci-fi focused book club starting! First selection: 'The Left Hand of Darkness' by Ursula K. Le Guin. Discussion of gender and society.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "18:30",
        "end_time": "20:00"
    },
    {
        "id": 234,
        "clubId": 39,
        "title": "Book to Film Adaptation",
        "content": "Comparing book and movie versions of popular adaptations! This month: analyzing differences between novel and film of 'The Handmaid's Tale'.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },
    {
        "id": 235,
        "clubId": 39,
        "title": "Summer Reading List",
        "content": "Collaborative creation of summer reading recommendations! Members share favorite books across genres for vacation reading inspiration.",
        "date": "25-06-2025",
        "event": true,
        "start_time": "17:30",
        "end_time": "19:00"
    },

    // Green Campus Initiative Posts (Club ID: 40)
    {
        "id": 236,
        "clubId": 40,
        "title": "Solar Panel Information Session",
        "content": "Learn about campus solar panel installation project! Discussion of renewable energy benefits and student involvement opportunities.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 237,
        "clubId": 40,
        "title": "Campus Sustainability Audit",
        "content": "Volunteer for campus-wide sustainability assessment! Help measure energy usage, waste production, and identify improvement opportunities.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "17:00"
    },
    {
        "id": 238,
        "clubId": 40,
        "title": "Green Building Tour",
        "content": "Tour of LEED-certified campus buildings! Learn about sustainable design features, energy efficiency, and environmentally friendly construction.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:00"
    },
    {
        "id": 239,
        "clubId": 40,
        "title": "Rain Garden Project",
        "content": "Installing rain gardens to manage stormwater runoff! Hands-on project improving campus water management while creating beautiful landscapes.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "15:00"
    },
    {
        "id": 240,
        "clubId": 40,
        "title": "Green Transportation Week",
        "content": "Promoting sustainable transportation options! Bike tune-ups, carpooling coordination, and public transit information available.",
        "date": "18-05-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },

    // Environmental Action Group Posts (Club ID: 41)
    {
        "id": 241,
        "clubId": 41,
        "title": "Climate Change Documentary",
        "content": "Screening of latest climate change documentary followed by discussion and action planning! Learn about global impacts and local solutions.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "21:00"
    },
    {
        "id": 242,
        "clubId": 41,
        "title": "Fossil Fuel Divestment Campaign",
        "content": "Student campaign for university divestment from fossil fuel companies! Learn about ethical investing and student activism strategies.",
        "date": "20-02-2025",
        "event": false
    },
    {
        "id": 243,
        "clubId": 41,
        "title": "Environmental Justice Workshop",
        "content": "Education about environmental racism and community impacts of pollution! Discussion of equity issues in environmental policy.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:30"
    },
    {
        "id": 244,
        "clubId": 41,
        "title": "Lobbying Trip to State Capital",
        "content": "Student delegation visits state legislators about environmental policy! Learn advocacy skills while supporting clean energy legislation.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "08:00",
        "end_time": "18:00"
    },
    {
        "id": 245,
        "clubId": 41,
        "title": "Renewable Energy Fair",
        "content": "Interactive fair featuring solar, wind, and other renewable technologies! Hands-on demonstrations and career information.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "11:00",
        "end_time": "16:00"
    },

    // Recycling Coalition Posts (Club ID: 42)
    {
        "id": 246,
        "clubId": 42,
        "title": "Campus Recycling Audit",
        "content": "Monthly audit of campus recycling contamination! Help improve recycling rates by identifying common mistakes and education needs.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 247,
        "clubId": 42,
        "title": "E-Waste Collection Event",
        "content": "Proper disposal of electronic waste! Bring old phones, computers, and electronics for responsible recycling and data destruction.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "15:00"
    },
    {
        "id": 248,
        "clubId": 42,
        "title": "Textile Recycling Drive",
        "content": "Collect old clothing and textiles for recycling! Items too worn for donation get processed into insulation and industrial materials.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "16:00"
    },
    {
        "id": 249,
        "clubId": 42,
        "title": "Zero Waste Workshop",
        "content": "Learn strategies for reducing personal waste production! Practical tips for packaging reduction, reusable alternatives, and conscious consumption.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "19:00"
    },
    {
        "id": 250,
        "clubId": 42,
        "title": "Composting Bin Installation",
        "content": "Installing composting bins across campus! Volunteer to help set up organic waste collection for food scraps and yard waste.",
        "date": "25-05-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "14:00"
    },

    // Climate Action Network Posts (Club ID: 43)
    {
        "id": 251,
        "clubId": 43,
        "title": "Carbon Footprint Calculator",
        "content": "Workshop using carbon footprint calculators to assess personal environmental impact! Learn about emissions sources and reduction strategies.",
        "date": "20-01-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "id": 252,
        "clubId": 43,
        "title": "Climate Science Presentation",
        "content": "Atmospheric science professor explains latest climate research! Understanding greenhouse gases, feedback loops, and temperature projections.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "20:30"
    },
    {
        "id": 253,
        "clubId": 43,
        "title": "Fridays for Future Rally",
        "content": "Join global climate strike movement! Student demonstration demanding urgent action on climate change from government and institutions.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "12:00",
        "end_time": "14:00"
    },
    {
        "id": 254,
        "clubId": 43,
        "title": "Renewable Energy Careers",
        "content": "Career panel featuring professionals in solar, wind, and clean technology industries! Learn about growing job opportunities in green energy.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "19:00"
    },
    {
        "id": 255,
        "clubId": 43,
        "title": "Climate Policy Analysis",
        "content": "Student research presentations on climate policy effectiveness! Analysis of carbon pricing, renewable standards, and international agreements.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },

    // Sustainable Living Club Posts (Club ID: 44)
    {
        "id": 256,
        "clubId": 44,
        "title": "DIY Natural Cleaning Products",
        "content": "Make your own eco-friendly cleaning supplies! Workshop covers natural ingredients for effective, non-toxic household cleaners.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "15:00",
        "end_time": "17:30"
    },
    {
        "id": 257,
        "clubId": 44,
        "title": "Thrift Shopping Tour",
        "content": "Group tour of local thrift stores and consignment shops! Learn about sustainable fashion and finding quality second-hand items.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "13:00",
        "end_time": "17:00"
    },
    {
        "id": 258,
        "clubId": 44,
        "title": "Urban Gardening Workshop",
        "content": "Growing food in small spaces! Learn about container gardening, herb growing, and maximizing production in apartments and dorms.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "16:30"
    },
    {
        "id": 259,
        "clubId": 44,
        "title": "Minimalism Challenge",
        "content": "30-day minimalism challenge focusing on reducing consumption and decluttering! Weekly check-ins and mindful purchasing discussions.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 260,
        "clubId": 44,
        "title": "Sustainable Fashion Show",
        "content": "Showcase sustainable and ethical fashion options! Models wear thrifted, upcycled, and ethically-made clothing with information about brands.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:30"
    },

    // Student Union Posts (Club ID: 45)
    {
        "id": 261,
        "clubId": 45,
        "title": "Student Government Elections",
        "content": "Candidate forum for upcoming student government elections! Meet candidates and learn about platforms for campus representation.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 262,
        "clubId": 45,
        "title": "Budget Allocation Meeting",
        "content": "Student organization budget allocation meeting! Student groups present funding requests for activities and programs.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "20:00"
    },
    {
        "id": 263,
        "clubId": 45,
        "title": "Campus Safety Forum",
        "content": "Open forum discussing campus safety concerns and improvements! Administration representatives present and hear student feedback.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },
    {
        "id": 264,
        "clubId": 45,
        "title": "Mental Health Resources Expansion",
        "content": "Advocacy for expanded campus mental health services! Student union pushes for additional counselors and crisis support options.",
        "date": "25-01-2025",
        "event": false
    },
    {
        "id": 265,
        "clubId": 45,
        "title": "Food Service Improvement Committee",
        "content": "Student feedback session on dining hall quality and options! Work with food services to address complaints and suggestions.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:00"
    },

    // Model United Nations Posts (Club ID: 46)
    {
        "id": 266,
        "clubId": 46,
        "title": "Regional MUN Conference",
        "content": "Delegates prepare for regional Model UN conference! Research country positions and practice diplomatic negotiation skills.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 267,
        "clubId": 46,
        "title": "Crisis Committee Simulation",
        "content": "Fast-paced crisis simulation dealing with international emergency! Develop real-time solutions to complex global scenarios.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "18:00"
    },
    {
        "id": 268,
        "clubId": 46,
        "title": "Diplomatic Protocol Workshop",
        "content": "Learn formal diplomatic procedures and UN parliamentary procedure! Essential skills for effective participation in conferences.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:30"
    },
    {
        "id": 269,
        "clubId": 46,
        "title": "Guest Speaker: Former Ambassador",
        "content": "Retired UN ambassador discusses real diplomatic work and international relations! Insights into actual negotiation and policy-making.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "21:00"
    },
    {
        "id": 270,
        "clubId": 46,
        "title": "Awards at National Conference",
        "content": "Outstanding delegation awards at national MUN conference! Recognition for excellent research, speaking, and diplomatic collaboration.",
        "date": "20-05-2025",
        "event": false
    },

    // Political Science Society Posts (Club ID: 47)
    {
        "id": 271,
        "clubId": 47,
        "title": "Election Night Watch Party",
        "content": "Follow local and national election results! Analysis and discussion of voting patterns, campaign strategies, and political implications.",
        "date": "05-11-2024",
        "event": true,
        "start_time": "19:00",
        "end_time": "23:30"
    },
    {
        "id": 272,
        "clubId": 47,
        "title": "Constitution Day Symposium",
        "content": "Annual symposium on constitutional law and interpretation! Professors and legal experts discuss current Supreme Court cases and trends.",
        "date": "17-09-2024",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 273,
        "clubId": 47,
        "title": "Campaign Volunteering Opportunities",
        "content": "Volunteer with local political campaigns! Gain hands-on experience in grassroots organizing, voter outreach, and campaign operations.",
        "date": "15-03-2025",
        "event": false
    },
    {
        "id": 274,
        "clubId": 47,
        "title": "Political Theory Book Club",
        "content": "Deep dive into classic political theory texts! This month: exploring John Rawls' 'Theory of Justice' and concepts of fairness.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "18:30",
        "end_time": "20:00"
    },
    {
        "id": 275,
        "clubId": 47,
        "title": "Supreme Court Case Analysis",
        "content": "Student presentations analyzing recent Supreme Court decisions! Examination of legal reasoning and political implications of major cases.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:30"
    },

    // Human Rights Advocates Posts (Club ID: 48)
    {
        "id": 276,
        "clubId": 48,
        "title": "Human Rights Film Festival",
        "content": "Week-long film festival highlighting human rights issues globally! Documentary screenings followed by discussions and action planning.",
        "date": "10-12-2024",
        "event": true,
        "start_time": "18:00",
        "end_time": "22:00"
    },
    {
        "id": 277,
        "clubId": 48,
        "title": "Refugee Support Volunteer Day",
        "content": "Volunteer with local refugee resettlement organization! Help with English tutoring, cultural orientation, and practical support services.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "15:00"
    },
    {
        "id": 278,
        "clubId": 48,
        "title": "Letter Writing Campaign",
        "content": "Write letters advocating for political prisoners worldwide! Partner with Amnesty International for urgent action campaigns.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "17:00",
        "end_time": "19:00"
    },
    {
        "id": 279,
        "clubId": 48,
        "title": "Indigenous Rights Workshop",
        "content": "Education about indigenous peoples' rights and ongoing struggles! Guest speakers from local tribal communities share perspectives.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "16:00",
        "end_time": "18:30"
    },
    {
        "id": 280,
        "clubId": 48,
        "title": "Human Rights Career Panel",
        "content": "Professionals in human rights work discuss career paths! Representatives from NGOs, government, and international organizations.",
        "date": "22-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Debate Council Posts (Club ID: 49)
    {
        "id": 281,
        "clubId": 49,
        "title": "Parliamentary Debate Tournament",
        "content": "Regional parliamentary debate competition! Teams argue complex topics with limited preparation time, testing quick thinking and speaking skills.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 282,
        "clubId": 49,
        "title": "Public Forum Debate Workshop",
        "content": "Introduction to public forum debate format! Learn evidence research, case construction, and cross-examination techniques.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 283,
        "clubId": 49,
        "title": "Ethics Bowl Competition",
        "content": "Compete in regional Ethics Bowl discussing moral dilemmas! Teams analyze complex ethical scenarios and defend philosophical positions.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 284,
        "clubId": 49,
        "title": "Guest Judge Training",
        "content": "Training session for community members interested in judging debates! Learn evaluation criteria and provide feedback to student debaters.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 285,
        "clubId": 49,
        "title": "Impromptu Speaking Practice",
        "content": "Develop extemporaneous speaking skills with surprise topics! Practice thinking quickly and organizing arguments under time pressure.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Entrepreneurship Hub Posts (Club ID: 50)
    {
        "id": 286,
        "clubId": 50,
        "title": "Startup Pitch Competition",
        "content": "Student entrepreneurs present business ideas to investor panel! Winner receives seed funding and mentorship for business development.",
        "date": "25-02-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 287,
        "clubId": 50,
        "title": "Business Plan Workshop",
        "content": "Learn to write compelling business plans! Workshop covers market analysis, financial projections, and investor presentation skills.",
        "date": "20-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 288,
        "clubId": 50,
        "title": "Successful Alumni Panel",
        "content": "Alumni entrepreneurs share startup experiences and advice! Stories of failure and success with practical guidance for aspiring founders.",
        "date": "18-03-2025",
        "event": false
    },
    {
        "id": 289,
        "clubId": 50,
        "title": "Venture Capital Firm Visit",
        "content": "Field trip to local VC firm to learn about startup funding! Meet investors and understand what they look for in investment opportunities.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 290,
        "clubId": 50,
        "title": "Innovation Workshop Series",
        "content": "Four-week workshop on innovation methodologies! Learn design thinking, lean startup principles, and rapid prototyping techniques.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },

    // Women in STEM Posts (Club ID: 51)
    {
        "id": 291,
        "clubId": 51,
        "title": "Industry Mentorship Program",
        "content": "Connect with women working in STEM fields! Mentorship program provides career guidance and industry insights for female students.",
        "date": "28-01-2025",
        "event": false
    },
    {
        "id": 292,
        "clubId": 51,
        "title": "Coding Workshop for Beginners",
        "content": "Women-only coding workshop creating supportive learning environment! Introduction to programming with Python in encouraging setting.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 293,
        "clubId": 51,
        "title": "Research Presentation Day",
        "content": "Female students present their STEM research projects! Celebrate achievements and provide platform for sharing scientific work.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 294,
        "clubId": 51,
        "title": "Girls in STEM Outreach",
        "content": "Volunteer opportunity inspiring young girls in science! Visit local schools to demonstrate experiments and share STEM career information.",
        "date": "20-04-2025",
        "event": false
    },
    {
        "id": 295,
        "clubId": 51,
        "title": "Breaking Barriers Symposium",
        "content": "Symposium addressing gender barriers in STEM! Discussion of workplace challenges, bias recognition, and advocacy strategies.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },

    // Outdoor Exploration Society Posts (Club ID: 52)
    {
        "id": 296,
        "clubId": 52,
        "title": "Backpacking Trip Planning",
        "content": "Planning meeting for summer backpacking expedition! Multi-day wilderness adventure requiring fitness preparation and gear selection.",
        "date": "20-01-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 297,
        "clubId": 52,
        "title": "Navigation Skills Workshop",
        "content": "Learn wilderness navigation using map and compass! Essential skills for safe backcountry travel and outdoor exploration.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 298,
        "clubId": 52,
        "title": "Winter Camping Adventure",
        "content": "Cold-weather camping experience with specialized gear! Learn winter survival skills and enjoy unique outdoor challenges.",
        "date": "15-12-2024",
        "event": false
    },
    {
        "id": 299,
        "clubId": 52,
        "title": "Leave No Trace Principles",
        "content": "Education about responsible outdoor recreation! Workshop on minimizing environmental impact while enjoying wilderness areas.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 300,
        "clubId": 52,
        "title": "Photography Expedition",
        "content": "Combine outdoor exploration with nature photography! Day trip focusing on landscape and wildlife photography techniques.",
        "date": "25-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Film Analysis Circle Posts (Club ID: 53)
    {
        "id": 301,
        "clubId": 53,
        "title": "Auteur Theory Workshop",
        "content": "Deep dive into auteur theory and directorial style analysis! Study films by Kubrick, Scorsese, and other distinctive filmmakers.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 302,
        "clubId": 53,
        "title": "Foreign Film Festival",
        "content": "Week-long festival featuring international cinema! Films from France, Japan, Iran, and Nigeria with cultural context discussions.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 303,
        "clubId": 53,
        "title": "Film Noir Analysis",
        "content": "Examination of classic film noir characteristics! Study lighting, cinematography, and narrative themes in post-war American cinema.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 304,
        "clubId": 53,
        "title": "Documentary Filmmaking Ethics",
        "content": "Discussion of ethical considerations in documentary production! Topics include consent, representation, and filmmaker responsibility.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 305,
        "clubId": 53,
        "title": "Student Film Critique Session",
        "content": "Constructive critique of student-produced films! Safe space for feedback and discussion of amateur and professional filmmaking techniques.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // LGBTQ+ Alliance Posts (Club ID: 54)
    {
        "id": 306,
        "clubId": 54,
        "title": "Pride Month Celebration Planning",
        "content": "Planning committee for campus Pride Month activities! Organize parade, educational events, and celebration of LGBTQ+ community.",
        "date": "15-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 307,
        "clubId": 54,
        "title": "Safe Space Training",
        "content": "Train faculty and staff to create LGBTQ+ inclusive environments! Workshop on inclusive language, policies, and support strategies.",
        "date": "20-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 308,
        "clubId": 54,
        "title": "Transgender Awareness Week",
        "content": "Educational events highlighting transgender experiences and rights! Panel discussions, resource fairs, and awareness campaigns.",
        "date": "15-11-2024",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 309,
        "clubId": 54,
        "title": "Coming Out Day Support",
        "content": "Support activities for National Coming Out Day! Peer counseling, resource sharing, and celebration of authentic self-expression.",
        "date": "11-10-2024",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 310,
        "clubId": 54,
        "title": "LGBTQ+ History Month",
        "content": "February events celebrating LGBTQ+ history and achievements! Educational presentations and recognition of community contributions.",
        "date": "01-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Zero Waste Project Posts (Club ID: 55)
    {
        "id": 311,
        "clubId": 55,
        "title": "Campus Waste Audit",
        "content": "Comprehensive analysis of campus waste streams! Volunteers sort and categorize waste to identify reduction and recycling opportunities.",
        "date": "28-01-2025",
        "event": false
    },
    {
        "id": 312,
        "clubId": 55,
        "title": "Reusable Container Program",
        "content": "Launch of reusable container program for campus dining! Students can borrow containers for takeout food to eliminate disposable packaging.",
        "date": "15-02-2025",
        "event": false
    },
    {
        "id": 313,
        "clubId": 55,
        "title": "DIY Reusable Products",
        "content": "Workshop creating reusable alternatives to disposable items! Make beeswax wraps, produce bags, and other zero-waste products.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 314,
        "clubId": 55,
        "title": "Plastic-Free Week Challenge",
        "content": "Week-long challenge avoiding single-use plastics! Educational campaign with tips, alternatives, and waste reduction strategies.",
        "date": "22-04-2025",
        "event": false
    },
    {
        "id": 315,
        "clubId": 55,
        "title": "Zero Waste Lifestyle Fair",
        "content": "Fair featuring zero-waste products and lifestyle tips! Local vendors, DIY workshops, and information about sustainable living practices.",
        "date": "25-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Campus Blood Drive Team Posts (Club ID: 56)
    {
        "id": 316,
        "clubId": 56,
        "title": "Monthly Blood Drive",
        "content": "Regular blood donation drive in student center! Help save lives by donating blood or volunteering to assist donors and staff.",
        "date": "15-01-2025",
        "event": false
    },
    {
        "id": 317,
        "clubId": 56,
        "title": "Bone Marrow Registry Drive",
        "content": "Join the national bone marrow registry! Simple cheek swab could help match patients needing life-saving bone marrow transplants.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 318,
        "clubId": 56,
        "title": "Emergency Blood Drive",
        "content": "Special emergency blood drive due to critically low supplies! Red Cross requests urgent donations to maintain hospital blood banks.",
        "date": "10-03-2025",
        "event": false
    },
    {
        "id": 319,
        "clubId": 56,
        "title": "Blood Donation Education",
        "content": "Educational presentation about blood donation process and eligibility! Address common concerns and myths about blood donation.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 320,
        "clubId": 56,
        "title": "Donor Recognition Ceremony",
        "content": "Celebrating students who reached donation milestones! Recognition for regular donors who have made significant contributions.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Creative Writing Guild Posts (Club ID: 57)
    {
        "id": 321,
        "clubId": 57,
        "title": "Writing Workshop: Poetry",
        "content": "Intensive poetry workshop exploring different forms and styles! Critique sessions and publication opportunities for best work.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 322,
        "clubId": 57,
        "title": "Flash Fiction Contest",
        "content": "Annual flash fiction competition for stories under 500 words! Prizes awarded for creativity, style, and compelling narratives.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 323,
        "clubId": 57,
        "title": "Author Reading Series",
        "content": "Local author reads from published works and discusses writing process! Q&A session and book signing opportunity.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 324,
        "clubId": 57,
        "title": "Literary Magazine Publication",
        "content": "Spring edition of student literary magazine now available! Features poetry, short stories, and essays by guild members.",
        "date": "15-04-2025",
        "event": false
    },
    {
        "id": 325,
        "clubId": 57,
        "title": "Writing Retreat Weekend",
        "content": "Off-campus writing retreat in peaceful mountain setting! Dedicated time for writing with workshops and peer feedback sessions.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Tech Startups Club Posts (Club ID: 58)
    {
        "id": 326,
        "clubId": 58,
        "title": "Startup Weekend Event",
        "content": "54-hour startup competition building businesses from ideas to pitches! Teams form, develop products, and present to investor judges.",
        "date": "28-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 327,
        "clubId": 58,
        "title": "Product Development Workshop",
        "content": "Learn lean product development methodologies! Covers user research, MVP creation, and iterative design processes.",
        "date": "20-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 328,
        "clubId": 58,
        "title": "Tech Incubator Tour",
        "content": "Visit local tech incubator and meet startup founders! Learn about accelerator programs and early-stage company development.",
        "date": "18-03-2025",
        "event": false
    },
    {
        "id": 329,
        "clubId": 58,
        "title": "App Development Bootcamp",
        "content": "Intensive mobile app development workshop! Build simple apps using modern frameworks with guidance from experienced developers.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 330,
        "clubId": 58,
        "title": "Funding and Investment Panel",
        "content": "Angel investors and VCs discuss startup funding landscape! Learn about investment processes, valuation, and pitch requirements.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },

    // Global Affairs Roundtable Posts (Club ID: 59)
    {
        "id": 331,
        "clubId": 59,
        "title": "Middle East Crisis Discussion",
        "content": "Current events discussion about ongoing Middle East conflicts! Multiple perspectives and analysis of international diplomatic responses.",
        "date": "22-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 332,
        "clubId": 59,
        "title": "Trade War Analysis",
        "content": "Economic analysis of international trade disputes! Examination of tariff impacts, supply chain disruptions, and policy responses.",
        "date": "18-02-2025",
        "event": false
    },
    {
        "id": 333,
        "clubId": 59,
        "title": "Climate Diplomacy Workshop",
        "content": "Study international climate negotiations and agreements! Analysis of Paris Accord implementation and future policy directions.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 334,
        "clubId": 59,
        "title": "Foreign Correspondent Visit",
        "content": "International journalist shares experiences reporting from conflict zones! Discussion of media's role in international relations.",
        "date": "15-04-2025",
        "event": false
    },
    {
        "id": 335,
        "clubId": 59,
        "title": "UN Simulation Exercise",
        "content": "Mock UN Security Council session addressing current crisis! Practice diplomatic negotiation and international law applications.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "11:30",
        "end_time": "",
    },

    // Mental Fitness Initiative Posts (Club ID: 60)
    {
        "id": 336,
        "clubId": 60,
        "title": "Brain Training Games",
        "content": "Cognitive training using scientifically-designed brain games! Improve memory, attention, and processing speed through targeted exercises.",
        "date": "25-01-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 337,
        "clubId": 60,
        "title": "Memory Palace Technique",
        "content": "Learn ancient memory improvement technique used by memory champions! Practice spatial memory methods for academic success.",
        "date": "20-02-2025",
        "event": false
    },
    {
        "id": 338,
        "clubId": 60,
        "title": "Focus and Concentration Workshop",
        "content": "Strategies for improving attention and reducing distractions! Techniques for deep work and sustained mental effort.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 339,
        "clubId": 60,
        "title": "Study Skills Optimization",
        "content": "Evidence-based study techniques for better learning! Spaced repetition, active recall, and other scientifically-proven methods.",
        "date": "15-04-2025",
        "event": false
    },
    {
        "id": 340,
        "clubId": 60,
        "title": "Mental Health and Performance",
        "content": "Connection between mental wellness and cognitive performance! Strategies for maintaining peak mental function under stress.",
        "date": "20-05-2025",
        "event": false,
    },

    // Chess and Strategy Club Posts (Club ID: 61)
    {
        "id": 341,
        "clubId": 61,
        "title": "Weekly Chess Tournament",
        "content": "Regular Swiss-system chess tournament every Friday! All skill levels welcome with separate sections for beginners and advanced players.",
        "date": "17-01-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 342,
        "clubId": 61,
        "title": "Chess Master Workshop",
        "content": "International Master teaches advanced chess strategies! Covers opening principles, middle game tactics, and endgame technique.",
        "date": "15-02-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 343,
        "clubId": 61,
        "title": "Simultaneous Exhibition",
        "content": "Chess expert plays 20 games simultaneously against club members! Unique opportunity to test skills against strong player.",
        "date": "20-03-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 344,
        "clubId": 61,
        "title": "Strategy Game Night",
        "content": "Beyond chess: explore other strategy games! Try Go, Shogi, backgammon, and modern strategy board games.",
        "date": "18-04-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 345,
        "clubId": 61,
        "title": "Collegiate Chess Championship",
        "content": "Represent university at regional collegiate chess championship! Team and individual competitions against other schools.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Eco Fashion Collective Posts (Club ID: 62)
    {
        "id": 346,
        "clubId": 62,
        "title": "Sustainable Fashion Workshop",
        "content": "Learn about ethical fashion brands and sustainable clothing options! Discussion of labor practices, environmental impact, and consumer choices.",
        "date": "28-01-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 347,
        "clubId": 62,
        "title": "Clothing Swap Event",
        "content": "Bring clothes you no longer wear and swap for new-to-you items! Sustainable way to refresh wardrobe while reducing waste.",
        "date": "18-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 348,
        "clubId": 62,
        "title": "Upcycling Design Challenge",
        "content": "Transform old clothing into new fashionable pieces! Creative challenge with prizes for most innovative and stylish upcycled designs.",
        "date": "20-03-2025",
        "event": false
    },
    {
        "id": 349,
        "clubId": 62,
        "title": "Natural Dye Workshop",
        "content": "Create beautiful colors using natural plant-based dyes! Learn traditional dyeing techniques for sustainable fabric coloring.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 350,
        "clubId": 62,
        "title": "Sustainable Fashion Show",
        "content": "Runway show featuring eco-friendly and ethical fashion! Models showcase sustainable brands, vintage finds, and upcycled creations.",
        "date": "25-05-2025",
        "event": true,
        "start_time": "19:00",
        "end_time": "22:00"
    },

    // Gamers for Charity Posts (Club ID: 63)
    {
        "id": 351,
        "clubId": 63,
        "title": "24-Hour Gaming Marathon",
        "content": "Stream gaming marathon raising money for children's hospital! Viewers can donate and request games while we play continuously.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "09:00",
        "end_time": "17:00"
    },
    {
        "id": 352,
        "clubId": 63,
        "title": "Speedrun Competition",
        "content": "Speedrunning competition with donation incentives! Fastest completion times in various games with proceeds supporting local food bank.",
        "date": "18-01-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 353,
        "clubId": 63,
        "title": "Retro Gaming Tournament",
        "content": "Classic arcade and console game tournament! Entry fees donated to literacy programs while enjoying nostalgic gaming competition.",
        "date": "15-03-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 354,
        "clubId": 63,
        "title": "Gaming Equipment Drive",
        "content": "Collect old gaming systems and games for donation! Refurbish equipment for children's hospitals and community centers.",
        "date": "20-04-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 355,
        "clubId": 63,
        "title": "Charity Stream Collaboration",
        "content": "Collaborate with other gaming groups for mega-charity stream! Multiple streamers and games for maximum fundraising impact.",
        "date": "22-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },

    // Public Speaking Network Posts (Club ID: 64)
    {
        "id": 356,
        "clubId": 64,
        "title": "Toastmasters Meeting",
        "content": "Weekly Toastmasters meeting for structured speaking practice! Prepared speeches, table topics, and constructive evaluation feedback.",
        "date": "16-01-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "19:30"
    },
    {
        "id": 357,
        "clubId": 64,
        "title": "Overcoming Speaking Anxiety",
        "content": "Workshop addressing public speaking fears and anxiety! Techniques for building confidence and managing nervousness before presentations.",
        "date": "20-02-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    },
    {
        "id": 358,
        "clubId": 64,
        "title": "Storytelling Workshop",
        "content": "Learn effective storytelling techniques for engaging presentations! Practice narrative structure, character development, and emotional connection.",
        "date": "18-03-2025",
        "event": true,
        "start_time": "14:00",
        "end_time": "17:00"
    },
    {
        "id": 359,
        "clubId": 64,
        "title": "Speech Contest",
        "content": "Annual persuasive speaking contest with judged presentations! Competitors deliver speeches on topics of personal significance.",
        "date": "15-04-2025",
        "event": true,
        "start_time": "10:00",
        "end_time": "16:00"
    },
    {
        "id": 360,
        "clubId": 64,
        "title": "TED Talk Style Presentations",
        "content": "Practice TED-style talks on interesting topics! Short, engaging presentations with time for audience Q&A and feedback.",
        "date": "20-05-2025",
        "event": true,
        "start_time": "18:00",
        "end_time": "20:00"
    }
];