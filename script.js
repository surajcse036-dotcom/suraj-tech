// Data for Top Tourist Places
const touristPlaces = [
    {
        name: "Taj Mahal",
        description: "An iconic ivory-white marble mausoleum in Agra, a symbol of eternal love.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/017/791/706/original/4k-time-lapse-of-taj-mahal-an-ivory-white-marble-mausoleum-on-the-south-bank-of-the-yamuna-river-in-agra-uttar-pradesh-india-free-video.jpg",
        customerCare: "+91-9000000009",
        blog: {
            about: "The Taj Mahal, a UNESCO World Heritage Site, is one of the New7Wonders of the World. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it's a masterpiece of Mughal architecture.",
            rules: "No food or tobacco inside, silence is requested, respect the monument. Entry tickets required, separate queues for men and women. Large bags not allowed.",
            bestTime: "October to March, when the weather is cool and pleasant.",
            hotels: {
                budget: "Hotel Atulyaa Taj: ₹800–₹1500",
                midRange: "Clarks Shiraz: ₹2000–₹4000",
                luxury: "The Oberoi Amarvilas: ₹6000+"
            },
            travelTips: "Visit early morning for fewer crowds and a beautiful sunrise view. Hire a licensed guide for historical insights. Wear comfortable shoes."
        }
    },
    {
        name: "Goa",
        description: "Known for its beautiful beaches, vibrant nightlife, and Portuguese heritage.",
        image: "https://wallpaperbat.com/img/9764298-the-only-way-to-explore-goa-without.jpg",
        customerCare: "+91-9000000010",
        blog: {
            about: "Goa, a former Portuguese colony, offers a unique blend of Indian and European cultures. It's famous for its stunning coastline, water sports, and lively markets.",
            rules: "Respect local customs, avoid littering, no open container drinking on beaches, be mindful of noise levels at night.",
            bestTime: "November to February, for pleasant weather and festivities.",
            hotels: {
                budget: "Zostel Goa: ₹700–₹1200",
                midRange: "Lemon Tree Amarante Beach Resort, Goa: ₹2500–₹5000",
                luxury: "W Goa: ₹8000+"
            },
            travelTips: "Rent a scooter to explore the beaches and villages. Try the local seafood and Feni. Bargain at flea markets."
        }
    },
    {
        name: "Jaipur",
        description: "The 'Pink City' of India, famous for its historical palaces and forts.",
        image: "https://www.traveldailymedia.com/assets/2019/07/jaipur.jpg",
        customerCare: "+91-9000000011",
        blog: {
            about: "Jaipur is the capital and largest city of the Indian state of Rajasthan. It is a major tourist attraction in India, known for its vibrant culture and heritage.",
            rules: "Dress modestly, especially when visiting religious sites. Bargaining is common in markets. Be aware of touts.",
            bestTime: "October to March, ideal for sightseeing.",
            hotels: {
                budget: "Hotel Arya Niwas: ₹1000–₹2000",
                midRange: "ITC Rajputana, a Luxury Collection Hotel, Jaipur: ₹4000–₹7000",
                luxury: "The Raj Palace: ₹15000+"
            },
            travelTips: "Explore Amber Fort with an elephant ride. Visit Hawa Mahal and City Palace. Enjoy traditional Rajasthani thali."
        }
    },
    {
        name: "Manali",
        description: "A popular hill station in Himachal Pradesh, known for its scenic beauty and adventure sports.",
        image: "https://tse1.mm.bing.net/th/id/OIP.mK58aPOd9SExI8xMwEeWxQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
        customerCare: "+91-9000000012",
        blog: {
            about: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It's a gateway for skiing in the Solang Valley and trekking in Parvati Valley.",
            rules: "Respect nature, avoid littering. Be cautious on mountain roads. Obtain necessary permits for trekking.",
            bestTime: "May to October for pleasant weather, December to February for snow.",
            hotels: {
                budget: "The Hosteller Manali: ₹600–₹1200",
                midRange: "Hotel Piccadily Manali: ₹2000–₹4000",
                luxury: "Manuallaya The Resort & Spa: ₹6000+"
            },
            travelTips: "Try paragliding and river rafting. Visit Hadimba Devi Temple. Explore Old Manali for its bohemian vibe."
        }
    },
    {
        name: "Shimla",
        description: "The former summer capital of British India, known for its colonial architecture and stunning hills.",
        image: "https://wallpaperaccess.com/full/2051722.jpg",
        customerCare: "+91-9000000013",
        blog: {
            about: "Shimla is nestled in the Himalayas, offering breathtaking views and a rich colonial past. The Mall Road and Ridge are popular attractions.",
            rules: "Maintain cleanliness, avoid disturbing wildlife. Follow traffic rules. Be respectful in public places.",
            bestTime: "May to June and December to January for snow.",
            hotels: {
                budget: "Hotel Honeymoon Inn: ₹1500–₹3000",
                midRange: "Hotel Combermere: ₹4000–₹7000",
                luxury: "Wildflower Hall, An Oberoi Resort: ₹10000+"
            },
            travelTips: "Take a ride on the Kalka-Shimla Railway. Stroll along the Mall Road. Visit Jakhu Temple for panoramic views."
        }
    },
    {
        name: "Kerala",
        description: "'God's Own Country', famous for its backwaters, beaches, and lush greenery.",
        image: "https://tse1.mm.bing.net/th/id/OIP.37JHB4FXcWuqHXSnubnnXgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
        customerCare: "+91-9000000014",
        blog: {
            about: "Kerala is a state on the southwestern Malabar Coast of India. It is known for its palm-lined beaches and backwaters, a network of canals.",
            rules: "Respect local traditions and dress codes, especially in temples. Be mindful of environmental conservation. Avoid plastic.",
            bestTime: "September to March, for pleasant weather.",
            hotels: {
                budget: "Zostel Kochi: ₹500–₹1000",
                midRange: "The Leela Ashtamudi, A Raviz Hotel: ₹3000–₹6000",
                luxury: "Kumarakom Lake Resort: ₹8000+"
            },
            travelTips: "Experience a houseboat stay in Alleppey. Enjoy Ayurvedic treatments. Watch a Kathakali performance."
        }
    },
    {
        name: "Varanasi",
        description: "One of the oldest continuously inhabited cities in the world, a spiritual hub on the Ganges River.",
        image: "https://wallpaperaccess.com/full/2715137.jpg",
        customerCare: "+91-9000000015",
        blog: {
            about: "Varanasi, also known as Kashi, is a holy city in Uttar Pradesh, India. It's renowned for its ghats, where pilgrims perform rituals.",
            rules: "Dress conservatively. Be respectful during religious ceremonies. Photography may be restricted in some areas.",
            bestTime: "October to March, for comfortable weather.",
            hotels: {
                budget: "Hostel La Vie: ₹400–₹800",
                midRange: "Ramada Plaza by Wyndham Varanasi: ₹2000–₹4000",
                luxury: "Taj Ganges, Varanasi: ₹6000+"
            },
            travelTips: "Take a boat ride on the Ganges at sunrise. Witness the Ganga Aarti ceremony. Explore the narrow lanes and temples."
        }
    },
    {
        name: "Rishikesh",
        description: "A spiritual town in the Himalayas, known as the 'Yoga Capital of the World'.",
        image: "https://th.bing.com/th/id/R.6ef0c787c911908e8079cea4c77af2ca?rik=H3ylDfPpm4PxPw&riu=http%3a%2f%2frishikeshdaytour.com%2fblog%2fwp-content%2fuploads%2f2022%2f06%2fRam-Jhula-Photo.jpg&ehk=n8GjyQpHfMVutnQblW%2ffCYZIhlbOl6XdM47JueK7Wr0%3d&risl=&pid=ImgRaw&r=0",
        customerCare: "+91-9000000016",
        blog: {
            about: "Rishikesh, located in the foothills of the Himalayas, is a popular pilgrimage town and a center for yoga and meditation.",
            rules: "Maintain peace and tranquility. Avoid alcohol and non-vegetarian food. Respect the spiritual atmosphere.",
            bestTime: "March to June and September to October.",
            hotels: {
                budget: "Zostel Rishikesh: ₹500–₹1000",
                midRange: "Aloha on the Ganges, Rishikesh by Leisure Hotels: ₹3000–₹6000",
                luxury: "Ganga Kinare - A Riverside Boutique Hotel: ₹5000+"
            },
            travelTips: "Attend a yoga or meditation session. Try white-water rafting on the Ganges. Visit Lakshman Jhula and Ram Jhula."
        }
    },
    {
        name: "Darjeeling",
        description: "A charming hill station in West Bengal, famous for its tea plantations and Himalayan views.",
        image: "https://wallpaperaccess.com/full/1386071.jpg",
        customerCare: "+91-9000000017",
        blog: {
            about: "Darjeeling is a town in the Indian state of West Bengal, in the Himalayan foothills. It's renowned for its vast tea estates and the Darjeeling Himalayan Railway.",
            rules: "Keep the environment clean, respect local culture. Be mindful of landslides during monsoon. Obtain permits for restricted areas.",
            bestTime: "April to June and October to November.",
            hotels: {
                budget: "Zostel Darjeeling: ₹600–₹1200",
                midRange: "Mayfair Darjeeling: ₹4000–₹7000",
                luxury: "The Elgin, Darjeeling: ₹8000+"
            },
            travelTips: "Take a ride on the Darjeeling Himalayan Railway (Toy Train). Visit a tea estate. Watch the sunrise from Tiger Hill."
        }
    },
    {
        name: "Amritsar",
        description: "Home to the Golden Temple, the holiest shrine of Sikhism, and a city rich in history.",
        image: "https://wallpaperaccess.com/full/4695037.jpg",
        customerCare: "+91-9000000018",
        blog: {
            about: "Amritsar, a city in the northwestern Indian state of Punjab, is home to the Harmandir Sahib (Golden Temple), the spiritual and cultural center for the Sikh religion.",
            rules: "Cover your head when visiting the Golden Temple, remove shoes. Dress modestly. Maintain silence inside the temple complex.",
            bestTime: "November to March, for cool and pleasant weather.",
            hotels: {
                budget: "Hostel Humanity: ₹400–₹800",
                midRange: "Hyatt Regency Amritsar: ₹3000–₹6000",
                luxury: "Taj Swarna, Amritsar: ₹7000+"
            },
            travelTips: "Visit the Golden Temple at night for its illuminated beauty. Witness the Wagah Border ceremony. Taste the local Amritsari cuisine."
        }
    }
];

// Function to generate customer care buttons
function generateCustomerCareButtons(numbers, targetElementId) {
    const targetElement = document.querySelector(targetElementId);
    if (!targetElement) return;

    numbers.forEach(number => {
        const anchor = document.createElement('a');
        anchor.href = `tel:${number.replace(/[^\d+]/g, '')}`;
        anchor.innerHTML = `📞 ${number}`;
        targetElement.appendChild(anchor);
    });
}

// Function to generate tourist place cards
function generateTouristPlaceCards() {
    const placeCardsContainer = document.querySelector('.place-cards');
    if (!placeCardsContainer) return;

    touristPlaces.forEach(place => {
        const card = document.createElement('div');
        card.classList.add('place-card');
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <div class="place-card-content">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
                <a href="tel:${place.customerCare.replace(/[^\d+]/g, '')}" class="call-button">Call Customer Care: ${place.customerCare}</a>
            </div>
        `;
        placeCardsContainer.appendChild(card);
    });
}

// Function to generate blog posts
function generateBlogPosts() {
    const blogPostsContainer = document.querySelector('.blog-posts');
    if (!blogPostsContainer) return;

    touristPlaces.forEach(place => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');
        blogPost.innerHTML = `
            <h3>${place.name}</h3>
            <h4>About ${place.name}</h4>
            <p>${place.blog.about}</p>
            <h4>Local Rules & Guidelines</h4>
            <p>${place.blog.rules}</p>
            <h4>Best Time to Visit</h4>
            <p>${place.blog.bestTime}</p>
            <h4>Famous Hotels with Price Range</h4>
            <ul>
                <li>Budget Hotels: ${place.blog.hotels.budget}</li>
                <li>Mid-range: ${place.blog.hotels.midRange}</li>
                <li>Luxury: ${place.blog.hotels.luxury}</li>
            </ul>
            <h4>Travel Tips</h4>
            <p>${place.blog.travelTips}</p>
        `;
        blogPostsContainer.appendChild(blogPost);
    });
}

// Call functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Customer care numbers are now static in HTML, no need to generate with JS
    generateTouristPlaceCards();
    generateBlogPosts();
});
