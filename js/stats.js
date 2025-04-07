// Player Statistics Data
const statsData = {
    topScorers: [
        { rank: 1, name: 'Ken', team: 'Masaka', goals: 6, matches: 7 },
        { rank: 2, name: 'Ivan', team: 'Mbale', goals: 4, matches: 8 },
        { rank: 3, name: 'Mo', team: 'Wakiso', goals: 3, matches: 6 },
        { rank: 4, name: 'Alex', team: 'Arua', goals: 3, matches: 5 },
        { rank: 5, name: 'Malcom', team: 'Mbarara', goals: 2, matches: 6 },
        { rank: 6, name: 'Isaac', team: 'Mbale', goals: 2, matches: 7 },
        { rank: 7, name: 'Okanya', team: 'Arua', goals: 2, matches: 6},
        { rank: 8, name: 'Panda', team: 'Gulu', goals: 2, matches: 6},
        { rank: 9, name: 'Romeo', team: 'Gulu', goals: 2, matches: 6},
        { rank: 10, name: 'Bobby', team: 'Mbale', goals: 2, matches: 7},
        { rank: 11, name: 'Seith', team: 'Wakiso', goals: 2, matches: 4},
        { rank: 12, name: 'Ballack', team: 'Mbarara', goals: 2, matches: 6},
        { rank: 13, name: 'Kelvin', team: 'Masaka', goals: 1, matches: 5 },
        { rank: 14, name: 'Anthony', team: 'Mbarara', goals: 1, matches: 5 },
        { rank: 15, name: 'Felix', team: 'Arua', goals: 1, matches: 6 },
        { rank: 16, name: 'Marvin', team: 'Kabale', goals: 1, matches: 4},
        { rank: 17, name: 'Charlie', team: 'Jinja', goals: 1, matches: 7},
        { rank: 18, name: 'Jona', team: 'Jinja', goals: 1, matches: 4},
        { rank: 19, name: 'Kabox', team: 'Kabale', goals: 1, matches: 7},
        { rank: 20, name: 'Ballack', team: 'Gulu', goals: 1, matches: 5},
        { rank: 21, name: 'Arafa', team: 'Wakiso', goals: 1, matches: 6},
        { rank: 22, name: 'Ronnie', team: 'Jinja', goals: 1, matches: 4},
        { rank: 23, name: 'Matayo', team: 'Wakiso', goals: 1, matches: 6}
        
    ],
    topAssists: [
        { rank: 1, name: 'Pato', team: 'Masaka', assists: 2, matches: 6 },
        { rank: 2, name: 'Isaac', team: 'Mbale', assists: 2, matches: 7 },
        { rank: 3, name: 'Panda', team: 'Gulu', assists: 2, matches: 6 },
        { rank: 4, name: 'Eric', team: 'Mbale', assists: 2, matches: 7 },
        { rank: 5, name: 'Sancho', team: 'Wakiso', assists: 2, matches: 4 }, 
        { rank: 6, name: 'Abel', team: 'Mbale', assists: 2, matches: 6 },
        { rank: 7, name: 'Matayo', team: 'Wakiso', assists: 1, matches: 6 },
        { rank: 8, name: 'Obita', team: 'Arua', assists: 1, matches: 5 },
        { rank: 9, name: 'Kelvin', team: 'Masaka', assists: 1, matches: 5 },
        { rank: 10, name: 'Ballack', team: 'Mbarara', assists: 1, matches: 6 },
        { rank: 11, name: 'Cliff', team: 'Mbarara', assists: 1, matches: 5 },
        { rank: 12, name: 'Okanya', team: 'Arua', assists: 1, matches: 5 },
        { rank: 13, name: 'Isaac', team: 'Arua', assists: 1, matches: 6 },
        { rank: 14, name: 'Ephraim', team: 'Mbale', assists: 1, matches: 5},
        { rank: 15, name: 'Bob', team: 'Masaka', assists: 1, matches: 4},
        { rank: 16, name: 'Kabox', team: 'Kabale', assists: 1, matches: 7 },
        { rank: 17, name: 'Benard', team: 'Mbarara', assists: 1, matches: 6 },
        { rank: 18, name: 'Charlie', team: 'Jinja', assists: 1, matches: 7 },
        { rank: 19, name: 'Aggrey', team: 'Arua', assists: 1, matches: 6},
        { rank: 20, name: 'Franco', team: 'Arua', assists: 1, matches: 5},
        { rank: 21, name: 'Ballack', team: 'Gulu', assists: 1, matches: 5 },
        { rank: 22, name: 'Derrick', team: 'Gulu', assists: 1, matches: 6},
        { rank: 23, name: 'Alex', team: 'Mbale', assists: 1, matches: 6},
        { rank: 24, name: 'Denis', team: 'Wakiso', assists: 1, matches: 5},
        { rank: 25, name: 'Marvin', team: 'Kabale', assists: 1, matches: 6},
        { rank: 26, name: 'Felix', team: 'Masaka', assists: 1, matches: 4},
        { rank: 27, name: 'Latif', team: 'Mbarara', assists: 1, matches: 6},
        { rank: 28, name: 'Lucky', team: 'Gulu', assists: 1, matches: 4},
        { rank: 29, name: 'Mo', team: 'Wakiso', assists: 1, matches: 6},
        { rank: 30, name: 'Tony', team: 'Jinja', assists: 1, matches: 5},
        { rank: 31, name: 'Ronnie', team: 'Mbarara', assists: 1, matches: 6},
        { rank: 32, name: 'Arafa', team: 'Wakiso', assists: 1, matches: 6},
        { rank: 33, name: 'Martin', team: 'Wakiso', assists: 1, matches: 5}
       
        
    ],
    cleanSheets: [
        { rank: 1, name: 'Nfumu', team: 'Arua', cleanSheets: 6, matches: 8 },
        { rank: 2, name: 'Hakim', team: 'Mbale', cleanSheets: 6, matches: 9 },
        { rank: 3, name: 'Eddy', team: 'Wakiso', cleanSheets: 5, matches: 9 },
        { rank: 4, name: 'Mico', team: 'Jinja', cleanSheets: 3, matches: 7 },
        { rank: 5, name: 'Lwanga', team: 'Gulu', cleanSheets: 2, matches: 7 },
        { rank: 6, name: 'Van', team: 'Mbarara', cleanSheets: 2, matches: 7 },
        { rank: 7, name: 'Onana', team: 'Kabale', cleanSheets: 2, matches: 8 }
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
