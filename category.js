const categoryData = {
    politics: {
        featured: [
            {
                id: 201,
                title: "Opposition alliance announces nationwide protest from next week",
                excerpt: "Seven-party coalition demands resignation of Home Minister over security lapses",
                image: "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20240526153435.jpg",
                url: "news/opposition-protest.html",
                author: "Anil Sharma",
                time: "3 hours ago",
                comments: 56
            }
        ],
        latest: [
            {
                id: 202,
                title: "President Paudel to visit India on 3-day state visit next month",
                image: "images/news/politics/president-india.jpg",
                url: "news/president-india-visit.html",
                time: "5 hours ago"
            },
            {
                id: 203,
                title: "Parliament passes Education Reform Bill with 85% majority",
                image: "https://risingnepaldaily.com/storage/media/73724/conversions/RatnaSherestha-KTM-22RATL9730copy-original-thumb.jpg",
                url: "news/education-bill-passed.html",
                time: "7 hours ago"
            },
            {
                id: 204,
                title: "Local elections: EC announces schedule for 47 municipalities",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaq444OVIS93oVyrhLoRDIwZyKs2vQkwlUVQ&s",
                url: "news/local-elections.html",
                time: "9 hours ago"
            }
        ],
        opinion: [
            {
                id: 301,
                title: "Federalism at crossroads: Time for course correction",
                excerpt: "Five years into federal structure, provincial governments struggle with resource allocation",
                image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2025/third-party/federalism-1744337145.jpg&w=900&height=601",
                url: "opinion/federalism-nepal.html",
                author: "Dr. Shyam Sharma",
                time: "1 day ago"
            },
            {
                id: 302,
                title: "Why Nepal's foreign policy needs recalibration",
                excerpt: "Balancing relations between neighbors while maintaining sovereignty",
                image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Foreign-policy-Dec.jpg",
                url: "opinion/foreign-policy.html",
                author: "Amb. Rajan Bhattarai",
                time: "2 days ago"
            }
        ]
    },

    business: {
        featured: [
            {
                id: 401,
                title: "Nepal's GDP growth projected at 5.8% for current fiscal year",
                excerpt: "World Bank report cites strong remittance inflow and tourism recovery as key drivers",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLnAfxwZ5dkv3uO-JstG-OfE-_CoxkWaBmg&s",
                url: "news/gdp-projection.html",
                author: "Ramesh Pandey",
                time: "4 hours ago",
                comments: 34
            }
        ],
        latest: [
            {
                id: 402,
                title: "https://farsightnepal.com/media/photos/TheFarsight_Website_PmWAJSp.jpg",
                image: "images/news/business/nrb-policy.jpg",
                url: "news/monetary-policy.html",
                time: "6 hours ago"
            },
            {
                id: 403,
                title: "Ncell announces 5G trial service starting next month",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZnhKoC_Sce8v4H2i4pdu7jcSBbhIY0ygjA&s",
                url: "news/ncell-5g.html",
                time: "8 hours ago"
            },
            {
                id: 404,
                title: "Himalayan Bank reports 25% increase in Q2 profits",
                image: "https://www.nepsetrading.com/_next/image?url=https%3A%2F%2Fstatic.nepsetrading.com%2Fnepsetrading-assets%2Fnews%2F1737327728359-image.png&w=3840&q=75",
                url: "news/himalayan-bank-profit.html",
                time: "10 hours ago"
            }
        ],
        analysis: [
            {
                id: 405,
                title: "Nepalese economy in 2023: Challenges and opportunities",
                excerpt: "How Nepal can leverage remittance inflows for productive investments",
                image: "https://www.collegenp.com/uploads/2023/02/Economy-of-Nepal.jpg",
                url: "analysis/nepal-economy-2023.html",
                author: "Prof. Anita Gurung",
                time: "2 days ago"
            },
            {
                id: 406,
                title: "The rise of Nepali startups: Success stories and hurdles",
                excerpt: "Examining the ecosystem supporting Nepal's growing startup culture",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY7yye0GoQZTwcHmM8DBBkMsK2HS2TRyIGA&s",
                url: "analysis/nepal-startups.html",
                author: "Bikash Gurung",
                time: "3 days ago"
            }
        ]
    },

    sports: {
        featured: [
            {
                id: 501,
                title: "Nepal qualifies for Asia Cup after thrilling last-ball victory",
                excerpt: "Sandeep Lamichhane's hat-trick seals dramatic win against UAE in qualifiers",
                image: "https://english.onlinekhabar.com/wp-content/uploads/2023/05/Nepali-cricket-team-1024x683-1.jpg",
                url: "news/asia-cup-qualification.html",
                author: "Suresh Thapa",
                time: "2 hours ago",
                comments: 112
            }
        ],
        latest: [
            {
                id: 502,
                title: "Cricket Association announces 15-member squad for T20 World Cup",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUrm5ERgEPgYv7JUqNt-x8zpmheQTu4xw1A&s",
                url: "news/world-cup-squad.html",
                time: "4 hours ago"
            },
            {
                id: 503,
                title: "Nepal defeats India in SAFF U-19 Championship semifinal",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMgcvkqeVHkFrs-w6rJC2bUzX8-KTJYlYDw&s",
                url: "news/saff-u19-nepal-india.html",
                time: "6 hours ago"
            },
            {
                id: 504,
                title: "National volleyball team leaves for Asian Championships",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaChoXs4fN5CKYI_VkyxiylgBnBqGn7Rbk9g&s",
                url: "news/volleyball-team.html",
                time: "8 hours ago"
            }
        ],
        matches: [
            {
                id: 505,
                title: "Upcoming: Nepal vs Oman at Tribhuvan Stadium (2 PM)",
                excerpt: "Preview of the crucial World Cup qualifier match - team news and predictions",
                image: "https://nepalnews.com/wp-content/uploads/2024/10/Nepal_cricket16486277321651659984.jpg",
                url: "matches/nepal-oman.html",
                time: "Tomorrow at 2 PM"
            },
            {
                id: 506,
                title: "Live: Nepal vs Malaysia (Women's Cricket)",
                excerpt: "Follow our live commentary of the ACC Women's T20 match",
                image: "https://i.ytimg.com/vi/2X-mdvSW2yI/maxresdefault.jpg",
                url: "matches/nepal-malaysia-women.html",
                time: "Live Now"
            }
        ]
    },

    technology: {
        featured: [
            {
                id: 601,
                title: "Nepal's first AI startup 'Naaya' raises $2 million in seed funding",
                excerpt: "Company developing Nepali language NLP solutions for government and businesses",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBh3jkQrhCh6sD7zQktTzsExRd2ZslPlZWow&s",
                url: "news/naaya-funding.html",
                author: "Prakash Joshi",
                time: "5 hours ago",
                comments: 48
            }
        ],
        latest: [
            {
                id: 602,
                title: "Cybersecurity alert: New malware targets Nepali banking apps",
                image: "https://itconcerns.com.np/images/main/IT-Concerns-176991594.webp",
                url: "news/banking-malware.html",
                time: "8 hours ago"
            },
            {
                id: 603,
                title: "Government launches digital citizen app with 57 services",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Gw-B5EQ0Q9ZudtgoQRrGvDqVVYN-nKYQjw&s",
                url: "news/citizen-app.html",
                time: "10 hours ago"
            },
            {
                id: 604,
                title: "Nepal Telecom expands fiber service to 15 new districts",
                image: "https://nepalnews.com/wp-content/uploads/2024/10/ntc_Nepal_Telecom_201912090945221693988988.jpg",
                url: "news/nt-fiber-expansion.html",
                time: "12 hours ago"
            }
        ],
        reviews: [
            {
                id: 605,
                title: "Review: Samsung Galaxy A54 - Best mid-range phone in Nepal?",
                excerpt: "We test the new Samsung offering against competitors in Rs. 60,000 range",
                image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2023/04/Samsung-Galaxy-A54-Review.jpg",
                url: "reviews/samsung-a54.html",
                author: "Tech Nepal",
                time: "3 days ago"
            },
            {
                id: 606,
                title: "MacBook Air M2 review: Is it worth the premium price in Nepal?",
                excerpt: "Testing Apple's latest ultraportable for Nepali professionals",
                image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2020/11/Apple-MacBook-Air-M1-Gold.png",
                url: "reviews/macbook-m2.html",
                author: "Rohan Shrestha",
                time: "5 days ago"
            }
        ]
    },

    society: {
        featured: [
            {
                id: 701,
                title: "Kathmandu's air quality reaches hazardous levels again",
                excerpt: "Doctors report 40% increase in respiratory cases, schools consider closures",
                image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/news/polutionphoto-1699320782.jpg&w=900&height=601",
                url: "news/kathmandu-pollution.html",
                author: "Sunita Rai",
                time: "3 hours ago",
                comments: 92
            }
        ],
        latest: [
            {
                id: 702,
                title: "Government announces 20% hike in elderly citizen allowances",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4M_lAJ7gxy9peQSUJ8j2mddsICtL73IfATQ&s",
                url: "news/elderly-allowance-hike.html",
                time: "5 hours ago"
            },
            {
                id: 703,
                title: "Traditional Newari festival 'Yomari Punhi' begins today",
                image: "https://risingnepaldaily.com/storage/media/65984/Untitled-1.jpg",
                url: "news/yomari-festival.html",
                time: "7 hours ago"
            },
            {
                id: 704,
                title: "Police rescue 12 children from illegal orphanage in Kathmandu",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2H11BGnogF1wGQwOASr-Qm4BMEIsaytsB5Q&s",
                url: "news/orphanage-rescue.html",
                time: "9 hours ago"
            }
        ],
        culture: [
            {
                id: 705,
                title: "Preserving Nepal's disappearing folk musical instruments",
                excerpt: "How grassroots initiatives are saving rare cultural heritage",
                image: "https://risingnepaldaily.com/storage/media/57122/Untitled-1.jpg",
                url: "culture/folk-instruments.html",
                author: "Bina Magar",
                time: "2 days ago"
            },
            {
                id: 706,
                title: "The art of Thangka painting: A dying tradition?",
                excerpt: "Meet the last practitioners of this ancient Buddhist art form",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUPmJxCsepB25bod1IkmCscJ3PG3ygw29Lg&s",
                url: "culture/thangka-painting.html",
                author: "Karma Sherpa",
                time: "4 days ago"
            }
        ]
    },

    world: {
        featured: [
            {
                id: 801,
                title: "Global recession fears grow as major economies contract",
                excerpt: "IMF warns of 'tough year ahead' as US, EU face economic slowdown",
                image: "https://i.cdn.newsbytesapp.com/images/l26620241225165440.jpeg",
                url: "news/global-recession.html",
                author: "John Carter",
                time: "4 hours ago",
                comments: 76
            }
        ],
        latest: [
            {
                id: 802,
                title: "India launches lunar mission to explore moon's south pole",
                image: "https://i0.wp.com/spacenews.com/wp-content/uploads/2023/08/Chandrayaan-3_no-logos-scaled.jpg?fit=2560%2C1781&quality=89&ssl=1",
                url: "news/india-moon.html",
                time: "6 hours ago"
            },
            {
                id: 803,
                title: "Ukraine war: Russia withdraws from key eastern city",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScXFFQbQ1lO2JH1QAUYalfRB1sXf9d3MqwUg&s",
                url: "news/ukraine-update.html",
                time: "8 hours ago"
            },
            {
                id: 804,
                title: "Canada announces new immigration pathways for skilled workers",
                image: "https://media.terratern.com/news/canada_opens_new_doors_immigration_pathways_for_skilled_workers_thumbnail_1738746903.webp",
                url: "news/canada-immigration.html",
                time: "10 hours ago"
            }
        ],
        analysis: [
            {
                id: 805,
                title: "The new Cold War: US-China tensions and implications for Nepal",
                excerpt: "How Nepal can navigate great power competition in the region",
                image: "https://niice.org.np/wp-content/uploads/2020/05/final-china-1.jpg",
                url: "analysis/us-china-nepal.html",
                author: "Dr. Sanjay Upadhya",
                time: "3 days ago"
            },
            {
                id: 806,
                title: "Climate change and the future of Himalayan water resources",
                excerpt: "What melting glaciers mean for Nepal and downstream countries",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsDUM0vG2LxbMNTcTou9XUBX0QhrrnThvFg&s",
                url: "analysis/himalayan-water.html",
                author: "Dr. Anu Maharjan",
                time: "5 days ago"
            }
        ]
    },

    health: {
        featured: [
            {
                id: 901,
                title: "New COVID variant detected in Nepal, hospitals on alert",
                excerpt: "Health Ministry confirms 12 cases of XBB.1.16 variant in Kathmandu",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYLa9UsvSatt3A-JpkM3RciGRABdik_sB1Q&s",
                url: "news/new-covid-variant.html",
                author: "Dr. Anjali Koirala",
                time: "3 hours ago",
                comments: 124
            }
        ],
        latest: [
            {
                id: 902,
                title: "Government launches free HPV vaccination for girls aged 9-14",
                image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/HPVvaccine_20230913125221.jpg",
                url: "news/hpv-vaccination.html",
                time: "5 hours ago"
            },
            {
                id: 903,
                title: "Study: Air pollution reduces life expectancy in Kathmandu by 4.5 years",
                image: "https://superdesk-pro-c.s3.amazonaws.com/sd-nepalitimes/20221110111120/636cd11c9c7e80680e08f896jpeg.jpg",
                url: "news/pollution-study.html",
                time: "7 hours ago"
            },
            {
                id: 904,
                title: "Mental health awareness campaign launched in schools",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxSUCKkqehpjmsjYdtljZqRTTwPiOd1eyfw&s",
                url: "news/mental-health-campaign.html",
                time: "9 hours ago"
            }
        ],
        wellness: [
            {
                id: 905,
                title: "Ayurvedic remedies for monsoon season illnesses",
                excerpt: "Traditional doctors recommend these 5 natural treatments",
                image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/Common_Diseases_in_Rainy_Season_25cc4fd2e5.webp",
                url: "wellness/monsoon-ayurveda.html",
                author: "Dr. Rajiv Shrestha",
                time: "2 days ago"
            },
            {
                id: 906,
                title: "Yoga for desk workers: 5 simple stretches to relieve back pain",
                excerpt: "Easy exercises you can do at your workplace",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVQHAJlWuKaE_3_6AFVcLWjxwmhMdRv6HcQ&s",
                url: "wellness/office-yoga.html",
                author: "Yoga Guru Shanti",
                time: "4 days ago"
            }
        ]
    },

    entertainment: {
        featured: [
            {
                id: 1001,
                title: "Nepali film 'Prem Geet 3' breaks opening day records",
                excerpt: "Romantic drama earns Rs 12.5 million on first day of release",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpKlD4NLlluA2HAWz1i-YIZ7n9GyLfQ46KQ&s",
                url: "news/prem-geet3.html",
                author: "Riya Basnet",
                time: "3 hours ago",
                comments: 68
            }
        ],
        latest: [
            {
                id: 1002,
                title: "Nepal Idol season 5 announces auditions starting next month",
                image: "https://i0.wp.com/neostuffs.com/wp-content/uploads/2023/12/nepal-idol-season-5.jpg?fit=2147%2C1207&ssl=1",
                url: "news/nepal-idol-auditions.html",
                time: "5 hours ago"
            },
            {
                id: 1003,
                title: "International film festival to showcase 12 Nepali movies",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPR9HPgfxKp-T6rzMGavFfpEGVenousb9k9w&s",
                url: "news/film-festival.html",
                time: "7 hours ago"
            },
            {
                id: 1004,
                title: "Popular singer Samikshya Adhikari announces pregnancy",
                image: "https://english.makalukhabar.com/wp-content/uploads/2024/09/SA-0-MK.jpg",
                url: "news/samikshya-pregnant.html",
                time: "9 hours ago"
            }
        ],
        celebrity: [
            {
                id: 1005,
                title: "Exclusive interview: Anmol KC on his new film and marriage plans",
                excerpt: "Nepal's highest-paid actor opens up about career and personal life",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZGgzWXs0c2ggLM975NiJZ3eLcdakQRNSxcg&s",
                url: "celebrity/anmol-interview.html",
                author: "Priya Adhikari",
                time: "2 days ago"
            },
            {
                id: 1006,
                title: "Behind the scenes with Miss Nepal 2023 contestants",
                excerpt: "A day in the life of Nepal's most beautiful women",
                image: "https://i0.wp.com/neostuffs.com/wp-content/uploads/2023/05/MN-scaled.jpg?fit=2560%2C1440&ssl=1",
                url: "celebrity/miss-nepal-behind-scenes.html",
                author: "Sneha Thapa",
                time: "4 days ago"
            }
        ]
    },

    opinion: {
        featured: [
            {
                id: 1101,
                title: "Opinion: Why Nepal's youth are leaving in record numbers",
                excerpt: "The push and pull factors behind the growing diaspora",
                image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2019/default/thumb2-1640309654.jpg&w=900&height=601",
                url: "opinion/youth-migration.html",
                author: "Bikram Rai",
                time: "4 hours ago",
                comments: 143
            }
        ],
        latest: [
            {
                id: 1102,
                title: "Editorial: Time for tough decisions on energy crisis",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuROFeTIcEVeCMU43JDxOybu2NP60-gRlmQ&s",
                url: "opinion/energy-editorial.html",
                time: "6 hours ago"
            },
            {
                id: 1103,
                title: "Letter: Public transport reforms long overdue",
                image: "https://assets-cdn.kathmandupost.com/uploads/source/news/2020/news/bus-1594388795.jpg",
                url: "opinion/transport-letter.html",
                time: "8 hours ago"
            },
            {
                id: 1104,
                title: "Op-Ed: Federalism needs urgent review",
                image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/Federalism_20220425164931.jpg",
                url: "opinion/federalism-review.html",
                time: "10 hours ago"
            }
        ],
        columnists: [
            {
                id: 1105,
                title: "The Coffee Break: Nepal's tourism potential beyond Everest",
                excerpt: "How to develop sustainable tourism in underserved regions",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjW7M4ttvKrZuQIGpY9YOpHjzxmTvR04kSQ&s",
                url: "columnists/tourism-potential.html",
                author: "Samantha Thapa",
                time: "3 days ago"
            },
            {
                id: 1106,
                title: "Tech Talk: Why Nepal needs its own social media platform",
                excerpt: "The case for developing indigenous alternatives to Facebook",
                image: "https://www.drive.nepaldatabase.com//uploads/images/202304/image_750x_64294bf9b339f.jpg",
                url: "columnists/nepal-social-media.html",
                author: "Rajan Shrestha",
                time: "5 days ago"
            }
        ]
    }
};


function getCurrentCategory() {
    const path = window.location.pathname;
    const page = path.split('/').pop().replace('.html', '');
    return page;
}

// Render Category Page
function renderCategoryPage() {
    const category = getCurrentCategory();
    const data = categoryData[category];
    
    if (!data) return;
    
    // Render featured news
    const featuredContainer = document.getElementById(`featured-${category}-container`);
    if (featuredContainer && data.featured) {
        featuredContainer.innerHTML = data.featured.map(news => `
            <article class="news-card ${news.large ? 'large' : 'medium'}">
                <a href="${news.url}" class="news-link">
                    <img src="${news.image}" alt="${news.title}" loading="lazy">
                    <div class="news-content">
                        <span class="category ${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        <h2>${news.title}</h2>
                        ${news.excerpt ? `<p class="excerpt">${news.excerpt}</p>` : ''}
                        <div class="meta">
                            ${news.author ? `<span class="author"><i class="fas fa-user"></i> ${news.author}</span>` : ''}
                            <span class="time"><i class="far fa-clock"></i> ${news.time}</span>
                            ${news.comments ? `<span class="comments"><i class="far fa-comment"></i> ${news.comments} Comments</span>` : ''}
                        </div>
                    </div>
                </a>
            </article>
        `).join('');
    }
    
    // Render latest news with pagination
    let currentPage = 1;
    const perPage = 6;
    const newsContainer = document.getElementById(`${category}-news-container`);
    const loadMoreBtn = document.getElementById(`load-more-${category}`);
    
    function renderLatestNews() {
        const start = (currentPage - 1) * perPage;
        const end = start + perPage;
        const toShow = data.latest.slice(0, end);
        
        if (newsContainer) {
            newsContainer.innerHTML = toShow.map(news => `
                <article class="news-card">
                    <a href="${news.url}" class="news-link">
                        <img src="${news.image}" alt="${news.title}" loading="lazy">
                        <div class="news-content">
                            <span class="category ${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                            <h3>${news.title}</h3>
                            <div class="meta">
                                <span class="time"><i class="far fa-clock"></i> ${news.time}</span>
                            </div>
                        </div>
                    </a>
                </article>
            `).join('');
        }
        
        if (loadMoreBtn && end >= data.latest.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentPage++;
            renderLatestNews();
        });
    }
    
    renderLatestNews();
    
    // Render opinion section if exists
    const opinionContainer = document.getElementById(`${category}-opinion-container`);
    if (opinionContainer && data.opinion) {
        opinionContainer.innerHTML = data.opinion.map(item => `
            <article class="opinion-card">
                <a href="${item.url}" class="opinion-link">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="opinion-content">
                        <h3>${item.title}</h3>
                        ${item.excerpt ? `<p class="excerpt">${item.excerpt}</p>` : ''}
                        <div class="meta">
                            ${item.author ? `<span class="author"><i class="fas fa-user"></i> ${item.author}</span>` : ''}
                            <span class="time"><i class="far fa-clock"></i> ${item.time}</span>
                        </div>
                    </div>
                </a>
            </article>
        `).join('');
    }
}

// Initialize category page
document.addEventListener('DOMContentLoaded', function() {
    if (document.body.classList.contains('category-page')) {
        renderCategoryPage();
        
        // Set current date
        const now = new Date();
        document.getElementById('current-date').textContent = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        document.getElementById('current-year').textContent = now.getFullYear();
        
        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mainMenu = document.getElementById('main-menu');
        
        if (mobileMenuToggle && mainMenu) {
            mobileMenuToggle.addEventListener('click', function() {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !expanded);
                mainMenu.classList.toggle('show');
            });
        }
        
        // Newsletter form
        const newsletterForm = document.getElementById('newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = e.target.email.value;
                console.log('Subscribed with email:', email);
                alert('Thank you for subscribing to our newsletter!');
                e.target.reset();
            });
        }
    }
});
