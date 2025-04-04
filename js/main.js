// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle Navigation
burger.addEventListener('click', () => {
    // Toggle Navigation
    nav.classList.toggle('active');
    // Toggle Burger Animation
    burger.classList.toggle('active');
    // Toggle Body Scroll
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Close menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sample Data (Replace with actual API calls)
const sampleData = {
    fixtures: [
        { home: 'Team A', away: 'Team B', date: '2024-03-20', time: '20:00' },
        { home: 'Team C', away: 'Team D', date: '2024-03-21', time: '19:30' },
    ],
    results: [
        { home: 'Team E', away: 'Team F', score: '2-1', date: '2024-03-19' },
        { home: 'Team G', away: 'Team H', score: '0-0', date: '2024-03-18' },
    ],
    table: [
        { team: 'Team A', played: 28, won: 20, drawn: 5, lost: 3, points: 65 },
        { team: 'Team B', played: 28, won: 18, drawn: 7, lost: 3, points: 61 },
    ],
    teams: [
        { name: 'Team A', logo: 'team-a.png', manager: 'John Doe' },
        { name: 'Team B', logo: 'team-b.png', manager: 'Jane Smith' },
    ],
    news: [
        { title: 'Latest Transfer News', date: '2024-03-19', excerpt: 'Breaking transfer news...' },
        { title: 'Match Preview', date: '2024-03-18', excerpt: 'Upcoming match analysis...' },
    ],
    awards: [
        { title: 'Player of the Month', winner: 'Player Name', team: 'Team A' },
        { title: 'Manager of the Month', winner: 'Manager Name', team: 'Team B' },
    ]
};

// Function to load fixtures
function loadFixtures() {
    const container = document.querySelector('.fixtures-container');
    container.innerHTML = sampleData.fixtures.map(fixture => `
        <div class="fixture-card">
            <div class="teams">
                <span>${fixture.home}</span>
                <span>vs</span>
                <span>${fixture.away}</span>
            </div>
            <div class="fixture-details">
                <span>${fixture.date}</span>
                <span>${fixture.time}</span>
            </div>
        </div>
    `).join('');
}

// Function to load results
function loadResults() {
    const container = document.querySelector('.results-container');
    container.innerHTML = sampleData.results.map(result => `
        <div class="result-card">
            <div class="teams">
                <span>${result.home}</span>
                <span>${result.score}</span>
                <span>${result.away}</span>
            </div>
            <div class="result-date">${result.date}</div>
        </div>
    `).join('');
}

// Function to load league table
function loadTable() {
    const container = document.querySelector('.table-container');
    container.innerHTML = `
        <table class="league-table">
            <thead>
                <tr>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Played</th>
                    <th>Won</th>
                    <th>Drawn</th>
                    <th>Lost</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                ${sampleData.table.map((team, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${team.team}</td>
                        <td>${team.played}</td>
                        <td>${team.won}</td>
                        <td>${team.drawn}</td>
                        <td>${team.lost}</td>
                        <td>${team.points}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Function to load teams
function loadTeams() {
    const container = document.querySelector('.teams-container');
    container.innerHTML = sampleData.teams.map(team => `
        <div class="team-card">
            <img src="images/${team.logo}" alt="${team.name} logo">
            <h3>${team.name}</h3>
            <p>Manager: ${team.manager}</p>
        </div>
    `).join('');
}

// Function to load news
function loadNews() {
    const container = document.querySelector('.news-container');
    container.innerHTML = sampleData.news.map(item => `
        <div class="news-card">
            <h3>${item.title}</h3>
            <p class="news-date">${item.date}</p>
            <p>${item.excerpt}</p>
        </div>
    `).join('');
}

// Function to load awards
function loadAwards() {
    const container = document.querySelector('.awards-container');
    container.innerHTML = sampleData.awards.map(award => `
        <div class="award-card">
            <h3>${award.title}</h3>
            <p>Winner: ${award.winner}</p>
            <p>Team: ${award.team}</p>
        </div>
    `).join('');
}

// Load all content when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadFixtures();
    loadResults();
    loadTable();
    loadTeams();
    loadNews();
    loadAwards();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
}); 