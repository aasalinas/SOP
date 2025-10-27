// Script to create student accounts for all 84 students
// Run this in the browser console on the student portal page

function createAllStudentAccounts() {
    // Year 1 Students (49 students)
    const year1Students = [
        { name: "Alexa (Lexie) Taylor", email: "alexact9@yahoo.com", phone: "904-607-7768" },
        { name: "Amanda Mendez", email: "a.mendez0509@gmail.com", phone: "602-618-7724" },
        { name: "Amber Diaz", email: "Ad7298@hotmail.com", phone: "623-628-5461" },
        { name: "Amy Gaertner", email: "amgaertner1@gmail.com", phone: "" },
        { name: "Angelica Miller", email: "Angelicamariemiller@gmail.com", phone: "623-715-6588" },
        { name: "Angelo Garay", email: "AGaray4@gmail.com", phone: "602-620-8899" },
        { name: "Annette Martinez", email: "agmartinez1102@gmail.com", phone: "602-692-4670" },
        { name: "Ashleyann Perez", email: "aanvperez@gmail.com", phone: "214-241-3219" },
        { name: "Carissa Josefowicz", email: "takarachazz@yahoo.com", phone: "480-526-0650" },
        { name: "Cassi (Cassandra) Igo", email: "cass.igo4@gmail.com", phone: "307-359-3172" },
        { name: "Chelsey Sands", email: "chelsey_sands@yahoo.com", phone: "520-954-0304" },
        { name: "Christina Mendibles", email: "tina.mendibles91@gmail.com", phone: "623-260-8545" },
        { name: "Chyna Coleman", email: "chynacoleman08@gmail.com", phone: "602-862-8867" },
        { name: "Crystal Manley", email: "manleycrystal9@gmail.com", phone: "602-803-8132" },
        { name: "Daniella Vega", email: "daniellavega777@gmail.com", phone: "714-309-0786" },
        { name: "Danitza Angulo", email: "danitzasiqueiros7@gmail.com", phone: "520-244-5449" },
        { name: "Danyelle White", email: "danyellemorgan37@gmail.com", phone: "602-819-6608" },
        { name: "Davion Green", email: "daviongreen0502@gmail.com", phone: "" },
        { name: "Deborah Dee", email: "dee_deborah@hotmail.com", phone: "602-517-1578" },
        { name: "Easton Reigle", email: "eastonkimball.cutco@gmail.com", phone: "602-882-5139" },
        { name: "Elijah Aguiling-Hinton", email: "elijah99.0212@gmail.com", phone: "480-721-6824" },
        { name: "Ethan Wapniarski", email: "ewapniarski@yahoo.com", phone: "971-272-5575" },
        { name: "Jaime Valdez", email: "raider8418@yahoo.com", phone: "480-310-7103" },
        { name: "Jassel Sanchez", email: "jasselpn@gmail.com", phone: "520-244-7416" },
        { name: "Jeanne Williams", email: "wjeanne72@yahoo.com", phone: "509-828-9930" },
        { name: "Jen Grotte", email: "jengrotte@outlook.com", phone: "701-770-4202" },
        { name: "Jenna Foglesong", email: "Juanvaldanyer28@gmail.com", phone: "602-740-1772" },
        { name: "Joanna Aguilar", email: "joannaa10028@gmail.com", phone: "480-469-6693" },
        { name: "Joshua Smolenski", email: "alaskanthunder@gmail.com", phone: "970-507-0901" },
        { name: "Kristine Monaghan", email: "kristinejmo@gmail.com", phone: "" },
        { name: "Leslie Favor", email: "leslieafavor@outlook.com", phone: "480-770-9402" },
        { name: "Lolita Owen", email: "oummiss1@gmail.com", phone: "520-612-6993" },
        { name: "Maria Giles", email: "giles2026@gmail.com", phone: "480-886-7638" },
        { name: "Maria Ruiz", email: "mariasbills2017@gmail.com", phone: "623-986-6285" },
        { name: "Marie Hinton", email: "Maiah31@yahoo.com", phone: "480-869-2616" },
        { name: "Martha Gonzalez", email: "marthaveryblessedone@gmail.com", phone: "" },
        { name: "Melissa Hernandez", email: "Honeeb26@gmail.com", phone: "602-446-3373" },
        { name: "Monique Quiñonez", email: "monique.quinon@yahoo.com", phone: "520-548-0717" },
        { name: "Natasha Sims", email: "natasha.r.sims@gmail.com", phone: "762-257-0555" },
        { name: "Nora Colindres", email: "Colindres.nora@gmail.com", phone: "520-301-5441" },
        { name: "Omolade Ogunniyi", email: "Omoladeprm@outlook.com", phone: "928-232-9075" },
        { name: "Robin Lemieux", email: "robin.lemieux21@gmail.com", phone: "602-785-2653" },
        { name: "Ryleigh Wolfington", email: "rwolfington95@gmail.com", phone: "425-263-0708" },
        { name: "Sarahjean Perez", email: "Cviisj@gmail.com", phone: "469-862-7816" },
        { name: "Sherinda Little", email: "sherindal@gmail.com", phone: "480-720-1144" },
        { name: "Tacia Scott", email: "tacia.scott@gmail.com", phone: "602-550-5048" },
        { name: "Takara Wade", email: "tw.day2day@gmail.com", phone: "480-652-7211" },
        { name: "Tracy Porterfield", email: "Tporterfield07@gmail.com", phone: "312-998-8259" },
        { name: "Victoria Hall", email: "victoriahall34@gmail.com", phone: "773-964-4251" }
    ];

    // Year 2 Students (35 students)
    const year2Students = [
        { name: "Paris Ulvog", email: "ulvog.paris@gmail.com", phone: "623-387-5511" },
        { name: "Caprisha Williams", email: "caprisha81@gmail.com", phone: "602-550-7701" },
        { name: "Neftali Rivera", email: "jeyandtal@yahoo.com", phone: "203-824-7669" },
        { name: "Jessica Rivera", email: "jeyjey2282@yahoo.com", phone: "203-506-1167" },
        { name: "Carmen Coleman", email: "carmenlcoleman2016@gmail.com", phone: "480-840-4860" },
        { name: "Isis Bennifield", email: "isis.bennifield@gmail.com", phone: "602-502-1881" },
        { name: "Jaydan Herrera", email: "jaydanpopo@gmail.com", phone: "602-558-2730" },
        { name: "Erika Lambert", email: "erikatownsend.dpt@gmail.com", phone: "" },
        { name: "Ty'Ran Lambert", email: "tyranlambert@gmail.com", phone: "317-324-6595" },
        { name: "Ana Maria Lara", email: "Analara4949@gmail.com", phone: "602-793-4949" },
        { name: "Marissa Castillo", email: "m.ambearxo@gmail.com", phone: "480-259-8479" },
        { name: "Onjalai Brown", email: "onjalaiis@gmail.com", phone: "503-935-3812" },
        { name: "Shauna Ash", email: "shaunaash01@gmail.com", phone: "602-550-9865" },
        { name: "IKA Sagayo", email: "csagayo@gmail.com", phone: "602-810-3182" },
        { name: "Daniel Ash", email: "Dan911iel@gmail.com", phone: "602-550-9927" },
        { name: "Cassandra Davis", email: "cassandraortiz07@gmail.com", phone: "815-409-1948" },
        { name: "Andre Beverly", email: "andre.d.beverly@gmail.com", phone: "463-222-1333" },
        { name: "Cne' Townsel", email: "cnetownsel@gmail.com", phone: "614-702-1166" },
        { name: "Katalina Patino", email: "katalinapatino@yahoo.com", phone: "209-409-2858" },
        { name: "Karizma Malone", email: "malonekarizma1@gmail.com", phone: "480-430-1693" },
        { name: "Elizabeth Diaz", email: "d_elizabeth35@yahoo.com", phone: "480-635-6157" },
        { name: "Kenyan Keegan", email: "keeganlive@live.com", phone: "602-639-3968" },
        { name: "Martha Gonzalez", email: "marthaveryblessedone@gmail.com", phone: "" },
        { name: "Mambi Ashu", email: "Laurettaashu@gmail.com", phone: "678-895-4009" },
        { name: "Erica Cardenas", email: "erica@cardenasmarketing.com", phone: "602-451-8719" },
        { name: "Azsaunna Bryant", email: "azsaunna@gmail.com", phone: "229-603-9669" },
        { name: "Cynthia Muse", email: "cynthiamuse89@gmail.com", phone: "602-527-0990" },
        { name: "Bernadette Ramos", email: "bernadetteramos@outlook.com", phone: "602-677-9136" },
        { name: "Jennifer Atudoroae", email: "jenniferatud@gmail.com", phone: "602-459-0881" },
        { name: "Gihan Viani", email: "Vianigihan@gmail.com", phone: "404-632-2097" },
        { name: "Sagayo Michelle", email: "mmsagayo@gmail.com", phone: "480-277-6302" },
        { name: "Jen Grotte", email: "jengrotte@outlook.com", phone: "701-770-4202" },
        { name: "Adali Payan", email: "Adaligabriela1024@gmail.com", phone: "602-391-8838" },
        { name: "Demian van der Nat", email: "Demian_vdnat@hotmail.com", phone: "623-275-1141" },
        { name: "Garner Denise", email: "Drgarner84@yahoo.com", phone: "760-519-1588" }
    ];

    // Function to create username from name
    function createUsername(name) {
        // Remove parentheses and content inside them
        let cleanName = name.replace(/\([^)]*\)/g, '').trim();
        // Split by space and take first and last name
        const parts = cleanName.split(' ').filter(p => p.length > 0);
        if (parts.length >= 2) {
            const firstName = parts[0].toLowerCase();
            const lastName = parts[parts.length - 1].toLowerCase();
            return `${firstName}.${lastName}`;
        }
        return cleanName.toLowerCase().replace(/\s+/g, '.');
    }

    // Create accounts
    const allAccounts = [];
    
    // Year 1
    year1Students.forEach(student => {
        const nameParts = student.name.replace(/\([^)]*\)/g, '').trim().split(' ');
        allAccounts.push({
            name: student.name,
            firstName: nameParts[0],
            lastName: nameParts[nameParts.length - 1],
            username: createUsername(student.name),
            password: 'student123',
            email: student.email,
            phone: student.phone,
            year: 'Year 1',
            createdAt: new Date().toISOString()
        });
    });

    // Year 2
    year2Students.forEach(student => {
        const nameParts = student.name.replace(/\([^)]*\)/g, '').trim().split(' ');
        allAccounts.push({
            name: student.name,
            firstName: nameParts[0],
            lastName: nameParts[nameParts.length - 1],
            username: createUsername(student.name),
            password: 'student123',
            email: student.email,
            phone: student.phone,
            year: 'Year 2',
            createdAt: new Date().toISOString()
        });
    });

    // Save to localStorage
    localStorage.setItem('studentAccounts', JSON.stringify(allAccounts));
    
    console.log(`✅ Created ${allAccounts.length} student accounts!`);
    console.log('\nSample logins:');
    console.log('Username: alexa.taylor | Password: student123');
    console.log('Username: amanda.mendez | Password: student123');
    console.log('Username: paris.ulvog | Password: student123');
    
    return allAccounts;
}

// Run the function
const accounts = createAllStudentAccounts();

// Export list for reference
console.log('\n📋 Complete Student Login List:');
console.log('================================');
accounts.forEach(account => {
    console.log(`${account.name} (${account.year})`);
    console.log(`  Username: ${account.username}`);
    console.log(`  Password: student123`);
    console.log(`  Email: ${account.email}`);
    console.log('---');
});
