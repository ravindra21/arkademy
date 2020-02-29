const Biodata = (name, age) => {
    return {
        name: name,
        age: age,
        address: 'perumahan pura L7/6, tajurhalang, bogor, jawabarat ',
        hobbies: [
            'Watching Anime',
            'Playing Guitar',
            'Coding'
        ],
        is_married: false,
        list_school: [{
                name: 'SDN 14 Cengkareng Timur',
                year_in: 2004,
                year_out: 2010,
                major: null
            },
            {
                name: 'SMPN 4 Wates',
                year_in: 2010,
                year_out: 2013,
                major: null
            },
            {
                name: 'SMKN 2 Pengasih',
                year_in: 2013,
                year_out: 2016,
                major: 'Teknik Komputer Jaringan'
            }
        ],
        skills: [{
                skill_name: 'Full Stack Web Developer',
                level: 'advanced'
            },
            {
                skill_name: 'Computer Network',
                level: 'advanced'
            }
        ],
        interest_in_coding: true
    }
}

console.log(Biodata('Ravindra Setya Alkahfi', 22));
