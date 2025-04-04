// Create a match card specifically for the results page
function createResultCard(match) {
    const homeTeam = window.teamsData.find(team => team.name === match.homeTeam);
    const awayTeam = window.teamsData.find(team => team.name === match.awayTeam);
    
    // Different display based on match status
    let scoreDisplay = '';
    let statusClass = match.status;
    
    if (match.status === 'completed') {
        scoreDisplay = `
            <div class="match-score">
                <span class="score">${match.homeScore}</span>
                <span class="score-divider">-</span>
                <span class="score">${match.awayScore}</span>
            </div>`;
    } else if (match.status === 'live') {
        scoreDisplay = `
            <div class="match-score live">
                <span class="score">${match.homeScore}</span>
                <span class="score-divider">-</span>
                <span class="score">${match.awayScore}</span>
            </div>`;
    } else {
        scoreDisplay = `<div class="match-time">vs</div>`;
    }
    
    return `
        <div class="match-card ${statusClass}">
            <div class="match-teams">
                <div class="team home">
                    <img src="images/club-logos/${homeTeam.logo}" alt="${homeTeam.name}" class="team-logo">
                    <div class="team-name">${homeTeam.name}</div>
                </div>
                <div class="match-info">
                    ${scoreDisplay}
                    <div class="status-badge ${match.status}">${match.status}</div>
                    <div class="match-time">${match.time}</div>
                </div>
                <div class="team away">
                    <img src="images/club-logos/${awayTeam.logo}" alt="${awayTeam.name}" class="team-logo">
                    <div class="team-name">${awayTeam.name}</div>
                </div>
            </div>
        </div>`;
}

// Display results with filtering
function displayResults(team = 'all', status = 'all', time = 'all') {
    const fixturesContainer = document.getElementById('fixtures-container');
    const loadingSpinner = document.querySelector('.loading');
    
    // Show loading spinner
    if (loadingSpinner) {
        loadingSpinner.style.display = 'flex';
    }
    
    // Get all matches from fixtures data
    let allMatches = [];
    
    // Ensure fixturesData exists and is an array
    if (window.fixturesData && Array.isArray(window.fixturesData)) {
        allMatches = window.fixturesData.flatMap(slot => 
            slot.matches.map(match => ({
                ...match,
                time: slot.time
            }))
        );
    }

    // Filter by team if selected
    if (team !== 'all') {
        allMatches = allMatches.filter(match => 
            match.homeTeam === team || match.awayTeam === team
        );
    }

    // Filter by status if selected
    if (status !== 'all') {
        allMatches = allMatches.filter(match => match.status === status);
    }

    // Filter by time if selected
    if (time !== 'all') {
        allMatches = allMatches.filter(match => match.time === time);
    }

    // Sort matches: Completed first, then Live, then Upcoming
    allMatches.sort((a, b) => {
        const statusOrder = { completed: 1, live: 2, upcoming: 3 };
        if (statusOrder[a.status] !== statusOrder[b.status]) {
            return statusOrder[a.status] - statusOrder[b.status];
        }
        // If same status, sort by time
        return a.time.localeCompare(b.time);
    });

    // Group matches by status
    const groupedMatches = allMatches.reduce((groups, match) => {
        if (!groups[match.status]) {
            groups[match.status] = [];
        }
        groups[match.status].push(match);
        return groups;
    }, {});

    // Generate HTML with status sections
    const statusOrder = ['completed', 'live', 'upcoming'];
    const resultsHTML = statusOrder
        .filter(status => groupedMatches[status]?.length > 0)
        .map(status => `
            <div class="status-section">
                <h2 class="status-title">${status.charAt(0).toUpperCase() + status.slice(1)} Matches</h2>
                <div class="matches-grid">
                    ${groupedMatches[status].map(match => createResultCard(match)).join('')}
                </div>
            </div>
        `).join('');

    // Hide loading spinner and update content
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }
    fixturesContainer.innerHTML = resultsHTML || '<p class="no-fixtures">No matches found</p>';
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for filters
    const teamSelect = document.getElementById('team-select');
    const statusSelect = document.getElementById('status-select');
    const timeSelect = document.getElementById('time-select');

    // Populate team options
    teamSelect.innerHTML = `
        <option value="all">All Teams</option>
        ${window.teamsData.map(team => `<option value="${team.name}">${team.name}</option>`).join('')}
    `;

    teamSelect.addEventListener('change', () => {
        displayResults(teamSelect.value, statusSelect.value, timeSelect.value);
    });

    statusSelect.addEventListener('change', () => {
        displayResults(teamSelect.value, statusSelect.value, timeSelect.value);
    });

    timeSelect.addEventListener('change', () => {
        displayResults(teamSelect.value, statusSelect.value, timeSelect.value);
    });

    // Initial display
    displayResults();
});
