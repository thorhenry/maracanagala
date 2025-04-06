// Knockout Stage Data
const knockoutData = {
    semiFinals: [
        {
            id: 'sf1',
            homeTeam: 'Mbale', // 1st in table
            awayTeam: 'Masaka',    // 3rd in table
            homeScore: 1,
            awayScore: 0,
            status: 'completed',
            date: '2025-04-06',
            time: '17:00',
            stadium: 'Maracaná Stadium'
        },
        {
            id: 'sf2',
            homeTeam: 'Arua',  // 2nd in table
            awayTeam: 'Wakiso',  // 4th in table
            homeScore: 0,
            awayScore: 1,
            status: 'completed',
            date: '2025-04-06',
            time: '18:00',
            stadium: 'Maracaná Stadium'
        }
    ],
    final: {
        id: 'final',
        homeTeam: 'Wakiso',
        awayTeam: 'Mbale',
        homeScore: null,
        awayScore: null,
        status: 'upcoming',
        date: '2025-04-06',
        time: '19:00',
        stadium: 'Maracaná Stadium'
    }
};

// Helper Functions
function getTeamLogo(teamName) {
    return teamName === 'TBD' ? 'images/club-logos/tbd.svg' : `images/club-logos/${teamName.toLowerCase()}.svg`;
}

function formatMatchStatus(status, homeScore, awayScore, penaltyHome, penaltyAway) {
    if (status === 'completed') {
        if (penaltyHome !== undefined && penaltyAway !== undefined) {
            return `${homeScore}-${awayScore} (${penaltyHome}-${penaltyAway} pen)`;
        }
        return `${homeScore}-${awayScore}`;
    }
    return 'vs';
}

function createMatchCard(match) {
    return `
        <div class="match-card ${match.status}">
            <div class="match-header">
                <span class="match-date">${match.date}</span>
                <span class="match-time">${match.time}</span>
            </div>
            <div class="match-teams">
                <div class="team home">
                    <img src="${getTeamLogo(match.homeTeam)}" alt="${match.homeTeam}">
                    <span class="team-name">${match.homeTeam}</span>
                </div>
                <div class="match-score">
                    ${formatMatchStatus(match.status, match.homeScore, match.awayScore, match.penaltyHome, match.penaltyAway)}
                </div>
                <div class="team away">
                    <img src="${getTeamLogo(match.awayTeam)}" alt="${match.awayTeam}">
                    <span class="team-name">${match.awayTeam}</span>
                </div>
            </div>
            <div class="match-footer">
                <span class="match-stadium">${match.stadium}</span>
            </div>
        </div>
    `;
}

function displayKnockoutStage() {
    // Semi Finals
    const semiFinalsSection = document.querySelector('.semi-finals .matches');
    if (semiFinalsSection) {
        semiFinalsSection.innerHTML = knockoutData.semiFinals.map(match => createMatchCard(match)).join('');
    }

    // Final
    const finalSection = document.querySelector('.final .matches');
    if (finalSection) {
        finalSection.innerHTML = createMatchCard(knockoutData.final);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    displayKnockoutStage();
}); 
