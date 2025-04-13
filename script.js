const newsData = {
    breaking: [
        { title: "PM to address nation at 8 PM on new economic reforms", url: "news/pm-address.html" },
        { title: "5.6 magnitude earthquake hits Doti district, no casualties reported", url: "news/doti-earthquake.html" },
        { title: "Nepal defeats UAE by 5 wickets in T20 World Cup qualifier", url: "news/nepal-cricket.html" }
        
    ],

    homepage: {
        featured: [
            {
                id: 1,
                title: "Cabinet approves Rs 1.79 trillion budget for fiscal year 2081/82",
                excerpt: "Finance Minister announces 15% increase in infrastructure spending with focus on road projects",
                category: "politics",
                image: "https://techlekh.com/wp-content/uploads/2024/05/nepal-ict-budget.jpg",
                url: "news/budget-2081.html",
                author: "Rajesh Sharma",
                time: "2 hours ago",
                comments: 87,
                large: true
            },
            {
                id: 2,
                title: "NEPSE index crosses 2,100 mark for first time in history",
                excerpt: "Banking sector leads rally as investors show confidence in economic recovery",
                category: "business",
                image: "https://content.sharesansar.com/photos/FEB12/Sept%205%202022/Year_1.png",
                url: "news/nepse-record.html",
                author: "Anita Gurung",
                time: "4 hours ago",
                comments: 42
            }
        ],
        latest: [
            {
                id: 101,
                title: "Kathmandu announces 'No Vehicle Day' every Saturday in core city areas",
                category: "society",
                image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/NewRoadGate_20200808133526.jpg",
                url: "news/kathmandu-vehicle-ban.html",
                time: "1 hour ago"
            },
            {
                id: 102,
                title: "Xiaomi launches Redmi Note 12 Pro in Nepal with 200MP camera",
                category: "technology",
                image: "https://cdn.gadgetbytenepal.com/wp-content/uploads/2022/10/Redmi-Note-12-Pro-Color-Options-India-1.jpg",
                url: "news/redmi-note12-launch.html",
                time: "3 hours ago"
            },
            {
                id: 103,
                title: "Nepal to host SAARC summit in November after 5-year hiatus",
                category: "world",
                image: "https://assets-cdn.kathmandupost.com/uploads/source/news/2022/opinion/17218798065b4283edf70k-1667318803.jpg",
                url: "news/saarc-summit-2023.html",
                time: "5 hours ago"
            }
        ]
    },

    categories: {
        politics: {
            featured: [
                {
                    id: 201,
                    title: "Opposition alliance announces nationwide protest from next week",
                    excerpt: "Seven-party coalition demands resignation of Home Minister over security lapses",
                    image: "https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/thumb58-1729907422.jpg",
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
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGEX2YkJzsbjDV0asHW8Ffm18CI7kuMXh_g&s",
                    url: "news/president-india-visit.html",
                    time: "5 hours ago"
                },
                {
                    id: 203,
                    title: "Parliament passes Education Reform Bill with 85% majority",
                    image: "https://radionepalonline.com/en/wp-content/uploads/sites/2/2024/09/National-assembly-rastriya-sava-1230-1000x500-1.jpg",
                    url: "news/education-bill-passed.html",
                    time: "7 hours ago"
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
                }
            ]
        },

        business: {
            featured: [
                {
                    id: 401,
                    title: "Nepal's GDP growth projected at 5.8% for current fiscal year",
                    excerpt: "World Bank report shows positive economic indicators despite global challenges",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNLnAfxwZ5dkv3uO-JstG-OfE-_CoxkWaBmg&s",
                    url: "news/gdp-growth.html",
                    author: "Ramesh Pandey",
                    time: "4 hours ago",
                    comments: 15
                }
            ],
            latest: [
                {
                    id: 402,
                    title: "NRB introduces new monetary policy for Q3",
                    image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/NRB_20210831161843.jpg",
                    url: "news/monetary-policy.html",
                    time: "6 hours ago"
                },
                {
                    id: 403,
                    title: "Nepal Stock Exchange reaches all-time high",
                    image: "https://english.makalukhabar.com/wp-content/uploads/2021/09/makalu-share-MK.jpg",
                    url: "news/stock-market-high.html",
                    time: "8 hours ago"
                }
            ],
            analysis: [ 
                {
                    id: 404,
                    title: "Impact of global recession on Nepalese economy",
                    excerpt: "How Nepal can navigate the challenging economic landscape",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHclMx7O7YYDV-J4xlfrjJKBmP70UURRr9A&s",
                    url: "analysis/recession-impact.html",
                    author: "Prof. Anita Gurung",
                    time: "2 days ago"
                },
                {
                    id: 405,
                    title: "Nepal's tourism sector shows strong recovery signs",
                    excerpt: "Analysis of post-pandemic travel trends and opportunities",
                    image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/1633335488_TouristsinABC2-1200x560_20230205113121.jpg",
                    url: "analysis/tourism-recovery.html",
                    author: "Dr. Binod Ghimire",
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
                    image: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/nepalicricketteamT20_20240501202346.jpg",
                    url: "news/world-cup-squad.html",
                    time: "4 hours ago"
                },
                {
                    id: 503,
                    title: "Nepal defeats India in SAFF U-19 Championship semifinal",
                    image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/3837744106209308468660713865983312937148957n-1695879670.jpg&w=900&height=601",
                    url: "news/saff-u19-nepal-india.html",
                    time: "6 hours ago"
                }
            ],
            matches: [
                {
                    id: 504,
                    title: "Upcoming: Nepal vs Oman at Tribhuvan Stadium (2 PM)",
                    excerpt: "Preview of the crucial World Cup qualifier match - team news and predictions",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLwr8P7M6fRQK9ItRyz7d5blNTCIq2R3PX8w&s",
                    url: "matches/nepal-oman.html",
                    time: "Tomorrow at 2 PM"
                }
            ]
        },

        technology: {
            featured: [
                {
                    id: 601,
                    title: "Nepal's first AI startup 'Naaya' raises $2 million in seed funding",
                    excerpt: "Company developing Nepali language NLP solutions for government and businesses",
                    image: "images/news/tech/naaya-ai.jpg",
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
                    image: "images/news/tech/cyber-threat.jpg",
                    url: "news/banking-malware.html",
                    time: "8 hours ago"
                },
                {
                    id: 603,
                    title: "Government launches digital citizen app with 57 services",
                    image: "images/news/tech/digital-app.jpg",
                    url: "news/citizen-app.html",
                    time: "10 hours ago"
                }
            ],
            reviews: [
                {
                    id: 604,
                    title: "Review: Samsung Galaxy A54 - Best mid-range phone in Nepal?",
                    excerpt: "We test the new Samsung offering against competitors in Rs. 60,000 range",
                    image: "images/news/tech/samsung-review.jpg",
                    url: "reviews/samsung-a54.html",
                    author: "Tech Nepal",
                    time: "3 days ago"
                }
            ]
        },

        society: {
            featured: [
                {
                    id: 701,
                    title: "Kathmandu's air quality reaches hazardous levels again",
                    excerpt: "Doctors report 40% increase in respiratory cases, schools consider closures",
                    image: "images/news/society/air-quality.jpg",
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
                    image: "images/news/society/elderly-allowance.jpg",
                    url: "news/elderly-allowance-hike.html",
                    time: "5 hours ago"
                },
                {
                    id: 703,
                    title: "Traditional Newari festival 'Yomari Punhi' begins today",
                    image: "images/news/society/yomari.jpg",
                    url: "news/yomari-festival.html",
                    time: "7 hours ago"
                }
            ],
            culture: [
                {
                    id: 704,
                    title: "Preserving Nepal's disappearing folk musical instruments",
                    excerpt: "How grassroots initiatives are saving rare cultural heritage",
                    image: "images/news/society/folk-music.jpg",
                    url: "culture/folk-instruments.html",
                    author: "Bina Magar",
                    time: "2 days ago"
                }
            ]
        },

        world: {
            featured: [
                {
                    id: 801,
                    title: "Global recession fears grow as major economies contract",
                    excerpt: "IMF warns of 'tough year ahead' as US, EU face economic slowdown",
                    image: "images/news/world/recession.jpg",
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
                    image: "images/news/world/moon-mission.jpg",
                    url: "news/india-moon.html",
                    time: "6 hours ago"
                },
                {
                    id: 803,
                    title: "Ukraine war: Russia withdraws from key eastern city",
                    image: "images/news/world/ukraine-war.jpg",
                    url: "news/ukraine-update.html",
                    time: "8 hours ago"
                }
            ],
            analysis: [
                {
                    id: 804,
                    title: "The new Cold War: US-China tensions and implications for Nepal",
                    excerpt: "How Nepal can navigate great power competition in the region",
                    image: "images/news/world/us-china.jpg",
                    url: "analysis/us-china-nepal.html",
                    author: "Dr. Sanjay Upadhya",
                    time: "3 days ago"
                }
            ]
        },

        health: {
            featured: [
                {
                    id: 901,
                    title: "New COVID variant detected in Nepal, hospitals on alert",
                    excerpt: "Health Ministry confirms 12 cases of XBB.1.16 variant in Kathmandu",
                    image: "images/news/health/covid-variant.jpg",
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
                    image: "images/news/health/hpv-vaccine.jpg",
                    url: "news/hpv-vaccination.html",
                    time: "5 hours ago"
                },
                {
                    id: 903,
                    title: "Study: Air pollution reduces life expectancy in Kathmandu by 4.5 years",
                    image: "images/news/health/pollution-study.jpg",
                    url: "news/pollution-study.html",
                    time: "7 hours ago"
                }
            ],
            wellness: [
                {
                    id: 904,
                    title: "Ayurvedic remedies for monsoon season illnesses",
                    excerpt: "Traditional doctors recommend these 5 natural treatments",
                    image: "images/news/health/ayurveda.jpg",
                    url: "wellness/monsoon-ayurveda.html",
                    author: "Dr. Rajiv Shrestha",
                    time: "2 days ago"
                }
            ]
        },

        entertainment: {
            featured: [
                {
                    id: 1001,
                    title: "Nepali film 'Prem Geet 3' breaks opening day records",
                    excerpt: "Romantic drama earns Rs 12.5 million on first day of release",
                    image: "images/news/entertainment/prem-geet.jpg",
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
                    image: "images/news/entertainment/nepal-idol.jpg",
                    url: "news/nepal-idol-auditions.html",
                    time: "5 hours ago"
                },
                {
                    id: 1003,
                    title: "International film festival to showcase 12 Nepali movies",
                    image: "images/news/entertainment/film-festival.jpg",
                    url: "news/film-festival.html",
                    time: "7 hours ago"
                }
            ],
            celebrity: [
                {
                    id: 1004,
                    title: "Exclusive interview: Anmol KC on his new film and marriage plans",
                    excerpt: "Nepal's highest-paid actor opens up about career and personal life",
                    image: "images/news/entertainment/anmol-kc.jpg",
                    url: "celebrity/anmol-interview.html",
                    author: "Priya Adhikari",
                    time: "2 days ago"
                }
            ]
        },

        opinion: {
            featured: [
                {
                    id: 1101,
                    title: "Opinion: Why Nepal's youth are leaving in record numbers",
                    excerpt: "The push and pull factors behind the growing diaspora",
                    image: "images/news/opinion/youth-migration.jpg",
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
                    image: "images/news/opinion/energy-crisis.jpg",
                    url: "opinion/energy-editorial.html",
                    time: "6 hours ago"
                },
                {
                    id: 1103,
                    title: "Letter: Public transport reforms long overdue",
                    image: "images/news/opinion/public-transport.jpg",
                    url: "opinion/transport-letter.html",
                    time: "8 hours ago"
                }
            ],
            columnists: [
                {
                    id: 1104,
                    title: "The Coffee Break: Nepal's tourism potential beyond Everest",
                    excerpt: "How to develop sustainable tourism in underserved regions",
                    image: "images/news/opinion/tourism-column.jpg",
                    url: "columnists/tourism-potential.html",
                    author: "Samantha Thapa",
                    time: "3 days ago"
                }
            ]
        }
    },

    popular: [
        {
            id: 1201,
            title: "Kathmandu's air quality reaches hazardous levels again",
            url: "news/kathmandu-pollution.html",
            views: "25.7k"
        },
        {
            id: 1202,
            title: "Nepal qualifies for Asia Cup after thrilling last-ball victory",
            url: "news/asia-cup-qualification.html",
            views: "22.3k"
        },
        {
            id: 1203,
            title: "New COVID variant detected in Nepal, hospitals on alert",
            url: "news/new-covid-variant.html",
            views: "19.8k"
        }
    ]
};




function displayBreakingNews() {
    const breakingNewsTicker = document.getElementById('breaking-news-ticker');
    if (!breakingNewsTicker) return;
    
    let html = '';
    newsData.breaking.forEach(item => {
        html += `<li><a href="${item.url}">${item.title}</a></li>`;
    });
    
    breakingNewsTicker.innerHTML = html;
}


function displayFeaturedNews() {
    const container = document.getElementById('featured-news-container');
    if (!container) return;
    
    let html = '';
    newsData.homepage.featured.forEach(item => {
        html += `
            <article class="news-card ${item.large ? 'large' : 'medium'}">
                <a href="${item.url}" class="news-link">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="news-content">
                        <span class="category ${item.category}">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                        <h2>${item.title}</h2>
                        <p class="excerpt">${item.excerpt}</p>
                        <div class="meta">
                            <span class="author"><i class="fas fa-user"></i> ${item.author}</span>
                            <span class="time"><i class="far fa-clock"></i> ${item.time}</span>
                            <span class="comments"><i class="far fa-comment"></i> ${item.comments} Comments</span>
                        </div>
                    </div>
                </a>
            </article>
        `;
    });
    
    container.innerHTML = html;
}


function displayLatestNews() {
    const container = document.getElementById('latest-news-container');
    if (!container) return;
    
    let html = '';
    newsData.homepage.latest.forEach(item => {
        html += `
            <article class="news-card">
                <a href="${item.url}" class="news-link">
                    <img src="${item.image}" alt="${item.title}" loading="lazy">
                    <div class="news-content">
                        <span class="category ${item.category}">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                        <h3>${item.title}</h3>
                        <div class="meta">
                            <span class="time"><i class="far fa-clock"></i> ${item.time}</span>
                        </div>
                    </div>
                </a>
            </article>
        `;
    });
    
    container.innerHTML = html;
}


function displayCategoryHighlights() {
    const categories = ['politics', 'business', 'sports'];
    
    categories.forEach(category => {
        const container = document.getElementById(`${category}-container`);
        if (!container) return;
        
        const categoryData = newsData.categories[category];
        const featuredItem = categoryData.featured[0];
        const latestItems = categoryData.latest;
        
        let html = `
            <h2 class="section-title"><span>${category.charAt(0).toUpperCase() + category.slice(1)}</span></h2>
            <div class="category-content">
                <div class="category-main">
                    <article class="news-card">
                        <a href="${featuredItem.url}" class="news-link">
                            <img src="${featuredItem.image}" alt="${featuredItem.title}" loading="lazy">
                            <div class="news-content">
                                <span class="category ${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                <h3>${featuredItem.title}</h3>
                                <p class="excerpt">${featuredItem.excerpt}</p>
                                <div class="meta">
                                    <span class="author"><i class="fas fa-user"></i> ${featuredItem.author}</span>
                                    <span class="time"><i class="far fa-clock"></i> ${featuredItem.time}</span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
                <div class="category-list">
                    <ul>`;
        
        latestItems.forEach(item => {
            html += `<li><a href="${item.url}">${item.title}</a></li>`;
        });
        
        html += `
                    </ul>
                </div>
            </div>
        `;
        
        container.innerHTML = html;
    });
}


function displayPopularNews() {
    const container = document.getElementById('popular-news-container');
    if (!container) return;
    
    let html = '';
    newsData.popular.forEach((item, index) => {
        html += `
            <div class="popular-item">
                <span class="popular-number">${index + 1}</span>
                <div class="popular-content">
                    <h4><a href="${item.url}">${item.title}</a></h4>
                    <div class="meta">
                        <span class="views"><i class="far fa-eye"></i> ${item.views}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}


function setDateTime() {
    const now = new Date();
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const currentDate = document.getElementById('current-date');
    const currentYear = document.getElementById('current-year');
    
    if (currentDate) {
        currentDate.textContent = now.toLocaleDateString('en-US', dateOptions);
    }
    
    if (currentYear) {
        currentYear.textContent = now.getFullYear();
    }
}


function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.getElementById('main-menu');
    
    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            mainMenu.classList.toggle('show');
        });
    }
}


function setupLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (!loadMoreBtn) return;
    
   
    const targetContainer = loadMoreBtn.getAttribute('data-target') || 'latest-news-container';
    const container = document.getElementById(targetContainer);
    if (!container) return;
    
    
    let currentPage = 1;
    const itemsPerPage = 3;
    let hasMoreItems = true;
    
    loadMoreBtn.addEventListener('click', function() {
       
        loadMoreBtn.textContent = 'Loading...';
        loadMoreBtn.disabled = true;
        
       
        setTimeout(() => {
            currentPage++;
            
           
            let moreItems = [];
            
            if (targetContainer === 'latest-news-container') {
              

                const categories = Object.keys(newsData.categories);
                categories.forEach(category => {
                    if (newsData.categories[category].latest) {
                        moreItems = moreItems.concat(newsData.categories[category].latest.slice(0, 1));
                    }
                });
                
   
                const startIndex = (currentPage - 2) * itemsPerPage;
                moreItems = moreItems.slice(startIndex, startIndex + itemsPerPage);
                
              
                hasMoreItems = moreItems.length === itemsPerPage;
                
             
                let html = '';
                moreItems.forEach(item => {
                    html += `
                        <article class="news-card">
                            <a href="${item.url}" class="news-link">
                                <img src="${item.image}" alt="${item.title}" loading="lazy">
                                <div class="news-content">
                                    <span class="category ${item.category || 'general'}">${(item.category || 'General').charAt(0).toUpperCase() + (item.category || 'general').slice(1)}</span>
                                    <h3>${item.title}</h3>
                                    <div class="meta">
                                        <span class="time"><i class="far fa-clock"></i> ${item.time}</span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    `;
                });
                
                container.innerHTML += html;
            } 
            else if (targetContainer.includes('-container')) {
                
                const category = targetContainer.replace('-container', '');
                if (newsData.categories[category]) {
                   
                    const sections = Object.keys(newsData.categories[category])
                        .filter(section => section !== 'featured' && section !== 'latest');
                    
                    sections.forEach(section => {
                        if (newsData.categories[category][section]) {
                            moreItems = moreItems.concat(newsData.categories[category][section]);
                        }
                    });
                    
               
                    const startIndex = (currentPage - 2) * itemsPerPage;
                    moreItems = moreItems.slice(startIndex, startIndex + itemsPerPage);
                    
                   
                    hasMoreItems = moreItems.length === itemsPerPage;
                    
                 
                    let html = '';
                    moreItems.forEach(item => {
                        html += `
                            <div class="category-list-item">
                                <a href="${item.url}" class="news-link">
                                    <div class="list-item-content">
                                        <h4>${item.title}</h4>
                                        <div class="meta">
                                            <span class="time"><i class="far fa-clock"></i> ${item.time}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `;
                    });
                    
                 
                    const categoryList = container.querySelector('.category-list ul');
                    if (categoryList) {
                        moreItems.forEach(item => {
                            const li = document.createElement('li');
                            li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
                            categoryList.appendChild(li);
                        });
                    } else {
                      
                        container.innerHTML += html;
                    }
                }
            }
            
          
            loadMoreBtn.disabled = false;
            loadMoreBtn.textContent = 'Load More';
            
          
            if (!hasMoreItems) {
                loadMoreBtn.style.display = 'none';
                
               
                const noMoreMsg = document.createElement('p');
                noMoreMsg.className = 'no-more-news';
                noMoreMsg.textContent = 'No more news to load';
                container.parentNode.insertBefore(noMoreMsg, loadMoreBtn);
            }
        }, 800); 
    });
}


function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}


document.addEventListener('DOMContentLoaded', function() {

    setDateTime();
    

    setupMobileMenu();
    
  
    setupNewsletterForm();
    
   
    setupLoadMoreButton();
    
   
    displayBreakingNews();
    
   
    if (document.body.classList.contains('home-page')) {
        displayFeaturedNews();
        displayLatestNews();
        displayCategoryHighlights();
        displayPopularNews();
    }
});