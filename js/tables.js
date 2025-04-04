// Function to calculate team statistics from matches
function calculateTeamStats() {
    const teamStats = {};

    // Initialize stats for all teams
    window.teamsData.forEach(team => {
        teamStats[team.name] = {
            name: team.name,
            logo: team.logo,
            played: 0,
            wins: 0,
            draws: 0,
            losses: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalDifference: 0,
            points: 0,
            form: []
        };
    });

    // Process all matches
    window.fixturesData.forEach(timeSlot => {
        timeSlot.matches.forEach(match => {
            if (match.status === 'completed') {
                // Home team stats
                const homeStats = teamStats[match.homeTeam];
                homeStats.played++;
                homeStats.goalsFor += match.homeScore;
                homeStats.goalsAgainst += match.awayScore;

                // Away team stats
                const awayStats = teamStats[match.awayTeam];
                awayStats.played++;
                awayStats.goalsFor += match.awayScore;
                awayStats.goalsAgainst += match.homeScore;

                // Determine match result
                if (match.homeScore > match.awayScore) {
                    homeStats.wins++;
                    homeStats.points += 3;
                    homeStats.form.push('W');
                    awayStats.losses++;
                    awayStats.form.push('L');
                } else if (match.homeScore < match.awayScore) {
                    awayStats.wins++;
                    awayStats.points += 3;
                    awayStats.form.push('W');
                    homeStats.losses++;
                    homeStats.form.push('L');
                } else {
                    homeStats.draws++;
                    homeStats.points++;
                    homeStats.form.push('D');
                    awayStats.draws++;
                    awayStats.points++;
                    awayStats.form.push('D');
                }

                // Calculate goal difference
                homeStats.goalDifference = homeStats.goalsFor - homeStats.goalsAgainst;
                awayStats.goalDifference = awayStats.goalsFor - awayStats.goalsAgainst;

                // Keep only last 5 matches in form
                homeStats.form = homeStats.form.slice(-5);
                awayStats.form = awayStats.form.slice(-5);
            }
        });
    });

    return Object.values(teamStats);
}

// Function to create form indicators HTML
function createFormIndicators(form) {
    return form.map(result => {
        const className = result === 'W' ? 'form-win' : result === 'D' ? 'form-draw' : 'form-loss';
        return `<div class="form-indicator ${className}">${result}</div>`;
    }).join('');
}

// Function to determine team position class
function getPositionClass(position) {
    if (position <= 4) return 'qualification';
    return 'non-qualification';
}

// Function to display the league table
function displayTable() {
    const tableBody = document.querySelector('.table-body');
    const teamStats = calculateTeamStats();

    // Sort teams by points, goal difference, goals scored, and then alphabetically
    teamStats.sort((a, b) => {
        // First sort by points
        if (b.points !== a.points) return b.points - a.points;
        
        // Then by goal difference
        if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
        
        // Then by goals scored
        if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
        
        // Finally, sort alphabetically by team name
        return a.name.localeCompare(b.name);
    });

    // Generate table rows
    const tableHTML = teamStats.map((team, index) => {
        const position = index + 1;
        const positionClass = getPositionClass(position);
        
        return `
            <div class="table-row ${positionClass}">
                <div class="cell rank">${position}</div>
                <div class="cell team">
                    <img src="images/club-logos/${team.logo}" alt="${team.name}" class="team-logo">
                    <span class="team-name">${team.name}</span>
                </div>
                <div class="cell matches">${team.played}</div>
                <div class="cell wins">${team.wins}</div>
                <div class="cell draws">${team.draws}</div>
                <div class="cell losses">${team.losses}</div>
                <div class="cell goals-for">${team.goalsFor}</div>
                <div class="cell goals-against">${team.goalsAgainst}</div>
                <div class="cell goal-difference">${team.goalDifference > 0 ? '+' + team.goalDifference : team.goalDifference}</div>
                <div class="cell points">${team.points}</div>
                <div class="cell form">${createFormIndicators(team.form)}</div>
            </div>
        `;
    }).join('');

    tableBody.innerHTML = tableHTML;
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayTable();
}); 