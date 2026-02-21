const teamMembers = [
    {
        name: "Dr. Grace Grothaus",
        image: "./team-members/grace-grothaus.jpg",
        description: "Grothaus, postdoctoral researcher, is the principal investigator and primary driver of We Are Air Aware. She conceived the project, designed the research framework, and is responsible for its overall intellectual direction, implementation, and integration. She is a computational media artist whose internationally exhibited installations explore human-plant relationships, climate change, and the connections between built and natural systems.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/grace-grothaus-aa98b7227/?originalSubd",
            },
            {
                name: "gracegrothaus.net",
                link:"https://www.gracegrothaus.net/",
            },
            {
                name: "ResearchGate",
                link:"https://www.researchgate.net/profile/Grace-Grothaus-2",
            }
        ] 
    },
    {
        name: "Dr. Shital Desai",
        image: "./team-members/shital-desai.jpg",
        description: "Dr. Desai, collaborator, is an Associate Professor in Interaction Design at York University and the Director of the Social and Technological Systems (SaTS) Lab. She is a collaborator on the project and is supervising Dr. Grothaus's postdoctoral fellowship.",
        links: [
            {
                name: "SaTS Lab",
                link:"https://sats.lab.yorku.ca/",
            }
        ]
    },
    {
        name: "Dr. Mark Gordon",
        image: "./team-members/mark-gordon.jpg",
        description: "Gordon, collaborator, is an Associate Professor at York University who researches atmospheric pollution, emissions, and transport, including studies focussed on smokestack dispersion, traffic emissions, and black carbon particulate.",
        links: [
            {
                name: "York University",
                link:"https://lassonde.yorku.ca/users/mgordon",
            },
            {
                name: "ResearchGate",
                link:"https://www.researchgate.net/profile/Mark-Gordon-7",
            }
        ]
    },
    {
        name: "Dr. Gerd Grau",
        image: "./team-members/gerd-grau.jpg",
        description: "Grau is an Associate Professor in the Department of Electrical Engineering and Computer Science at York University and the Academic Director of the York University Microfabrication Facility (YMF). His research group in the Electronics Additive Manufacturing (E-AM) Lab focuses on additive manufacturing (AM), printed electronics, and laser-induced graphene (LIG) to fabricate electronics such as sensors with completely new geometries and properties, including on flexible substrates and in 3D systems.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/gerd-grau-8557a434/?originalSubdomain=ca",
            },
            {
                name: "E-AM Lab",
                link:"https://www.eecs.yorku.ca/~grau/",
            },
            {
                name: "York University",
                link:"https://lassonde.yorku.ca/users/grau",
            }
        ]
    },
    {
        name: "Ranee Lee",
        image: "./team-members/ranee-lee.jpg",
        description: "Lee, collaborator, is an industrial designer and Associate Professor at OCAD University whose work bridges circular design, social innovation and participatory design with the community. She is the founder of DESIGNwith, a lab in the CF Toronto Eaton Centre.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/raneelee/?originalSubdomain=ca",
            },
            {
                name: "DESIGNwith",
                link:"https://www.designwith.ca/",
            },
            {
                name: "OCADU University",
                link:"https://www.ocadu.ca/academics/explore-faculty/rlee",
            }
        ]
    },
    {
        name: "Dr. Joel Ong",
        image: "./team-members/joel-ong.jpg",
        description: "Ong, collaborator, is a computational biomedia artist and Associate Professor at York University whose internationally recognized work blends sound, science, and technology through installations, residencies, and community-based sensing projects.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/joel-ong-63b3b3ab/?originalSubdomain=ca",
            },
            {
                name: "York University",
                link:"https://ampd.yorku.ca/people/joel-ong/",
            }
        ]
    },
    {
        name: "Dr. Enamul Hoque Prince",
        image: "./team-members/enamul-hoque-prince.jpg",
        description: "Prince, collaborator, is is an Assistant Professor and Director of the School of Information Technology at York University, leading the CFI- and ORF-funded Intelligent Visualization Lab, with research on information overload through visualization, HCI, and NLP.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/enamul-hoque-prince-009b04b/?originalSubdomain=ca",
            },
            {
                name: "York University",
                link:"https://profiles.laps.yorku.ca/profiles/enamulh/",
            }
        ]
    },
    {
        name: "Bahar Amini",
        image: "./team-members/bahar-amini.jpg",
        description: "Bahar, student research assistant, is an undergraduate student in Electrical Engineering at York University, working on Black Carbon air pollution detection through a research assistant position In Dr. Gerd Grau's Microelectronic Design and Characterization (MDC) lab.",
        links: []
    },
    {
        name: "Basak Babadagi",
        image: "./team-members/basak-babadagi.jpg",
        description: "Babadagi, student research assistant, is a Earth & Space Science & Engineering undergraduate student at York University, working on atmospheric modeling of black carbon air pollution through a research position in Dr. Mark Gordon's Air Pollution Lab.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/basak-babadagi-86720b1a2/",
            }
        ]
    },
    {
        name: "Gian Cambridge",
        image: "./team-members/gian-cambridge.jpg",
        description: "Cambridge is an undergraduate graphic design student at OCAD University whose work explores the intersection of design and science communication, creating immersive experiences that make science engaging and accessible.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/abolfazl-anvari-b7721b30a/?originalSubdomain=ca",
            },
            {
                name: "gian-i.media",
                link:"https://gian-i.media/",
            }
        ]
    },
    {
        name: "Sabrina Huffman",
        image: "./team-members/sabrina-huffman.jpg",
        description: "Huffman is an undergraduate Industrial Design student at OCAD University. Her work focuses on co-design and human-centred design practices with an emphasis on understanding people's needs and creating meaningful, user-driven solutions.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/sabrina-huffman-1230ba2a1/",
            }
        ]
    },
    {
        name: "Abolfazl Anvari Kohestani",
        image: "./team-members/abolfazl-anvari-kohestani.jpg",
        description: "Abolfazl, student research assistant, is a multidisciplinary researcher specializing in materials science, with a dual academic background in Materials Engineering and Biotechnology from the University of Tehran. His current research explores the environmental potential of advanced 2D nanomaterials, particularly Laser-Induced Graphene (LIG), in developing innovative sensors for particulate matter monitoring and lithium-ion detection.",
        links: [
            {
                name: "LinkedIn",
                link:"https://www.linkedin.com/in/abolfazl-anvari-b7721b30a/",
            },
            {
                name: "ResearchGate",
                link:"https://www.researchgate.net/profile/Abolfazl-Anvari-Kohestani?ev=hdr_xprf",
            },
            {
                name: "Google Scholar",
                link:"https://scholar.google.com/citations?hl=en&user=IDwprIkAAAAJ&view_op=list_works&sortby=pubdate",
            }
        ] 
    },
    {
        name: "Amine Mahmoudi",
        image: "./team-members/amine-mahmoudi.jpg",
        description: "Amine Mahmoudi, student research assistant, is a PhD student in Electrical Engineering at York University. She holds a Master's degree in Micro and Nanoelectronic Devices from Iran University of Science and Technology. She is working on sensor development for black carbon detection using Laser-Induced Graphene (LIG).",
        links: [
            {
                name: "LinkedIn",
                link:"http://linkedin.com/in/amine-mahmoudi-411a5823a",
            }
        ]
    },
    {
        name: "Dr. Mark-David Hosale",
        image: "./team-members/mark-david-hosale.jpg",
        description: "Hosale, previous PhD supervisor, is a computational artist and composer. He is an Associate Professor of Computational Arts at York University.",
        links: []
    },
    
];

export default teamMembers;
