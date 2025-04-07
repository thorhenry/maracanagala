// Awards Data
const awardsData = {
    tournamentWinner: {
        team: 'Wakiso',
        teamLogo: 'images/club-logos/wakiso.svg',
        stats: {
            wins: 6,
            goals: 8,
            points: 18,
            goalDiff: 1
        }
    },
    playerOfTheTournament: {
        winner: 'Moze',
        team: 'Wakiso',
        teamLogo: 'images/club-logos/wakiso.svg',
        photo: 'images/tbd.svg',
        stats: {
            goals: 0,
            assists: 0,
            games: 7,
            motm: 4
        }
    },
    goalkeeperOfTheTournament: {
        winner: 'Hakim',
        team: 'Mbale',
        teamLogo: 'images/club-logos/mbale.svg',
        photo: 'images/tbd.svg',
        stats: {
            cleanSheets: 6,
            saves: 23,
            games: 9,
            savePercentage: 82
        }
    }
};

// Function to create tournament winner card
function createTournamentWinnerCard(data) {
    const statsHtml = Object.entries(data.stats)
        .filter(([_, value]) => value !== null)
        .map(([key, value]) => `
            <div class="stat-item">
                <div class="stat-value" data-value="${value}">${value}</div>
                <div class="stat-label">${formatStatLabel(key)}</div>
            </div>
        `).join('');

    return `
        <div class="award-card winner-award">
            <div class="award-content">
                <div class="winner-details">
                    <div class="winner-team-large">
                        <img src="${data.teamLogo}" alt="${data.team}" class="team-logo-large">
                        <div class="team-info">
                            <div class="winner-name">${data.team}</div>
                            <div class="winner-subtitle">${data.team === 'TBD' ? 'To Be Determined' : '2025 Easter Cup Champions'}</div>
                        </div>
                    </div>
                    ${statsHtml ? `<div class="stats-grid">${statsHtml}</div>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Function to create player award card
function createPlayerAwardCard(data, trophyType) {
    const statsHtml = Object.entries(data.stats)
        .filter(([_, value]) => value !== null)
        .map(([key, value]) => `
            <div class="stat-item">
                <div class="stat-value" data-value="${value}">${value}</div>
                <div class="stat-label">${formatStatLabel(key)}</div>
            </div>
        `).join('');

    return `
        <div class="award-card player-award">
            <div class="award-content">
                <div class="player-photo-container">
                    <img src="${data.photo}" alt="${data.winner}" class="player-photo">
                </div>
                <div class="winner-details">
                    <div class="winner-name">${data.winner}</div>
                    <div class="winner-team">
                        <img src="${data.teamLogo}" alt="${data.team}" class="team-logo">
                        ${data.team}
                    </div>
                    ${statsHtml ? `<div class="stats-grid">${statsHtml}</div>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Helper function to format stat labels
function formatStatLabel(key) {
    const labels = {
        goals: 'Goals',
        assists: 'Assists',
        games: 'Games',
        motm: 'MOTM',
        cleanSheets: 'Clean Sheets',
        saves: 'Saves',
        savePercentage: 'Save %',
        wins: 'Wins',
        points: 'Points',
        goalDiff: 'Goal Diff'
    };
    return labels[key] || key;
}

// Function to display all awards
function displayAwards() {
    // Tournament Winner
    const twContainer = document.querySelector('#tournamentWinner .award-grid');
    if (twContainer) {
        twContainer.innerHTML = createTournamentWinnerCard(awardsData.tournamentWinner);
    }

    // Player of the Tournament
    const potContainer = document.querySelector('#playerOfTournament .award-grid');
    if (potContainer) {
        potContainer.innerHTML = createPlayerAwardCard(awardsData.playerOfTheTournament, 'gold');
    }

    // Goalkeeper of the Tournament
    const gotContainer = document.querySelector('#goalkeeperOfTournament .award-grid');
    if (gotContainer) {
        gotContainer.innerHTML = createPlayerAwardCard(awardsData.goalkeeperOfTheTournament, 'silver');
    }
}

// Initialize awards display when DOM is loaded
document.addEventListener('DOMContentLoaded', displayAwards); 
