// Player Statistics Data
const statsData = {
    topScorers: [
         { rank: 1, name: 'Antony', team: 'Mbarara', goals: 2, matches: 2 },
         { rank: 2, name: 'Uncle Mo', team: 'Wakiso', goals: 1, matches: 2 },
         { rank: 3, name: 'Ivan', team: 'Mbale', goals: 1, matches: 2 },
         { rank: 4, name: 'Ken', team: 'Masaka', goals: 1, matches: 1 },
         { rank: 5, name: 'Kelvin', team: 'Masaka', goals: 1, matches: 1 },
         { rank: 6, name: 'Felix', team: 'Arua', goals: 1, matches: 2 },
         { rank: 7, name: 'Alex', team: 'Arua', goals: 1, matches: 1 },
         { rank: 8, name: 'denis', team: 'Arua', goals: 1, matches: 1 },
         { rank: 9, name: 'Malcom', team: 'Mbarara', goals: 1, matches: 1 },
        // { rank: 10, name: 'Mark O', team: 'Arua', goals: 8, matches: 15 }
    ],
    topAssists: [
        // { rank: 1, name: 'Success', team: 'Mbarara', assists: 12, matches: 15 },
        // { rank: 2, name: 'Herbert I', team: 'Wakiso', assists: 11, matches: 14 },
        // { rank: 3, name: 'Sharif', team: 'Arua', assists: 10, matches: 15 },
        // { rank: 4, name: 'Isaac M', team: 'Kabale', assists: 9, matches: 14 },
        // { rank: 5, name: 'Benja', team: 'Mbale', assists: 8, matches: 15 },
        // { rank: 6, name: 'Ken', team: 'Masaka', assists: 8, matches: 13 },
        // { rank: 7, name: 'BK', team: 'Jinja', assists: 7, matches: 14 },
        // { rank: 8, name: 'Elaisha', team: 'Mbarara', assists: 7, matches: 15 },
        // { rank: 9, name: 'Gideon K', team: 'Wakiso', assists: 6, matches: 13 },
        // { rank: 10, name: 'Emmy', team: 'Arua', assists: 6, matches: 15 }
    ],
    cleanSheets: [
        // { rank: 1, name: 'Amon', team: 'Mbarara', cleanSheets: 8, matches: 15 },
        // { rank: 2, name: 'Uncle Mo', team: 'Wakiso', cleanSheets: 7, matches: 14 },
        // { rank: 3, name: 'Aaron', team: 'Arua', cleanSheets: 7, matches: 15 },
        // { rank: 4, name: 'Aziz', team: 'Kabale', cleanSheets: 6, matches: 15 },
        // { rank: 5, name: 'Allan G', team: 'Mbale', cleanSheets: 5, matches: 14 },
        // { rank: 6, name: 'Barney', team: 'Masaka', cleanSheets: 5, matches: 15 },
        // { rank: 7, name: 'Dario', team: 'Jinja', cleanSheets: 4, matches: 13 },
        // { rank: 8, name: 'Martin', team: 'Mbarara', cleanSheets: 4, matches: 14 },
        // { rank: 9, name: 'Wasswa', team: 'Wakiso', cleanSheets: 3, matches: 15 },
        // { rank: 10, name: 'Victor', team: 'Arua', cleanSheets: 3, matches: 14 }
    ]
};

function createStatsTable(data, type) {
    const headers = {
        topScorers: ['Rank', 'Player', 'Team', 'Goals', 'Matches'],
        topAssists: ['Rank', 'Player', 'Team', 'Assists', 'Matches'],
        cleanSheets: ['Rank', 'Player', 'Team', 'Clean Sheets', 'Matches']
    };

    const statKey = {
        topScorers: 'goals',
        topAssists: 'assists',
        cleanSheets: 'cleanSheets'
    };

    return `
        <table class="stats-table">
            <thead>
                <tr>
                    ${headers[type].map(header => `<th>${header}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                ${data.map(player => `
                    <tr>
                        <td class="rank">${player.rank}</td>
                        <td class="player-name">${player.name}</td>
                        <td class="team-name">
                            <img src="images/club-logos/${player.team.toLowerCase()}.svg" alt="${player.team}" class="team-logo">
                            ${player.team}
                        </td>
                        <td class="stat-value">${player[statKey[type]]}</td>
                        <td class="matches">${player.matches}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

function displayStats() {
    // Display Top Scorers
    const topScorersContainer = document.querySelector('.stats-category:nth-child(1) .stats-table-container');
    if (topScorersContainer) {
        topScorersContainer.innerHTML = createStatsTable(statsData.topScorers, 'topScorers');
    }

    // Display Top Assists
    const topAssistsContainer = document.querySelector('.stats-category:nth-child(2) .stats-table-container');
    if (topAssistsContainer) {
        topAssistsContainer.innerHTML = createStatsTable(statsData.topAssists, 'topAssists');
    }

    // Display Clean Sheets
    const cleanSheetsContainer = document.querySelector('.stats-category:nth-child(3) .stats-table-container');
    if (cleanSheetsContainer) {
        cleanSheetsContainer.innerHTML = createStatsTable(statsData.cleanSheets, 'cleanSheets');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayStats();
}); 
