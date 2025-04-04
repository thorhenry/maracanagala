// DOM Elements
const fixturesPreview = document.querySelector('.fixture-preview');
const resultsPreview = document.querySelector('.result-preview');
const tablePreview = document.querySelector('.table-preview');
const knockoutPreview = document.querySelector('.knockout-preview');

// Get team logo path
function getTeamLogo(teamName) {
    const team = window.teamsData.find(t => t.name === teamName);
    return team ? `images/club-logos/${team.logo}` : '';
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
        return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
}

// Render fixtures
function renderFixtures() {
    // Get upcoming matches from fixturesData
    const upcomingMatches = [];
    window.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'upcoming') {
                upcomingMatches.push({
                    ...match,
                    time: timeSlot.time
                });
            }
        });
    });

    if (!upcomingMatches.length) {
        fixturesPreview.innerHTML = '<p class="no-data">No upcoming fixtures</p>';
        return;
    }

    // Take first 3 upcoming matches
    const nextMatches = upcomingMatches.slice(0, 3);
    
    fixturesPreview.innerHTML = nextMatches.map(match => `
        <div class="match-card">
            <div class="team">
                <img src="${getTeamLogo(match.homeTeam)}" alt="${match.homeTeam}" class="team-logo">
                <div class="team-name">${match.homeTeam}</div>
            </div>
            <div class="match-info">
                <div class="match-time">${match.time}</div>
                <div class="match-venue">${match.venue}</div>
            </div>
            <div class="team">
                <img src="${getTeamLogo(match.awayTeam)}" alt="${match.awayTeam}" class="team-logo">
                <div class="team-name">${match.awayTeam}</div>
            </div>
        </div>
    `).join('');
}

// Render results
function renderResults() {
    // Get completed matches from fixturesData
    const completedMatches = [];
    window.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed') {
                completedMatches.push({
                    ...match,
                    time: timeSlot.time
                });
            }
        });
    });

    if (!completedMatches.length) {
        resultsPreview.innerHTML = '<p class="no-data">No recent results</p>';
        return;
    }

    // Take last 3 completed matches
    const recentResults = completedMatches.slice(-3);
    
    resultsPreview.innerHTML = recentResults.map(match => `
        <div class="match-card">
            <div class="team">
                <img src="${getTeamLogo(match.homeTeam)}" alt="${match.homeTeam}" class="team-logo">
                <div class="team-name">${match.homeTeam}</div>
            </div>
            <div class="match-info">
                <div class="score">${match.homeScore} - ${match.awayScore}</div>
                <div class="match-time">${match.time}</div>
            </div>
            <div class="team">
                <img src="${getTeamLogo(match.awayTeam)}" alt="${match.awayTeam}" class="team-logo">
                <div class="team-name">${match.awayTeam}</div>
            </div>
        </div>
    `).join('');
}

// Initialize the page
function initHomePage() {
    try {
        // Show loading state
        fixturesPreview.innerHTML = '<div class="loading">Loading...</div>';
        resultsPreview.innerHTML = '<div class="loading">Loading...</div>';
        
        // Render fixtures and results
        renderFixtures();
        renderResults();
        
    } catch (error) {
        console.error('Error initializing home page:', error);
    }
}

// Add CSS for loading state
const style = document.createElement('style');
style.textContent = `
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100px;
        color: #666;
    }
    
    .no-data {
        text-align: center;
        padding: 1rem;
        color: #666;
        font-style: italic;
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded and after fixtures.js is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndInitialize);
} else {
    checkAndInitialize();
}

function checkAndInitialize() {
    if (window.fixturesData && window.teamsData) {
        initHomePage();
    } else {
        console.error('Required data not found. Make sure fixtures.js is loaded.');
        fixturesPreview.innerHTML = '<p class="no-data">Unable to load fixtures</p>';
        resultsPreview.innerHTML = '<p class="no-data">Unable to load results</p>';
    }
} 