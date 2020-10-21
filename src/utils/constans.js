export const BASE_URL = 'http://localhost:3000/';

// Necessary for API access
export const REQUSET_PARAMS = {
    headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "3e1b03f54d824792b93300da73efe173",
    }
}

// ------- API url Limited calles per 1 minute -------
const API_PATH = 'https://api.football-data.org';

// UEFA Champions league ID
const CHAMPIONS_LEAGUE_ID = '2001';

// List all teams for a particular competition. (UEFA Champoions league teams)
export const GET_COMPETITION_TEAMS_API = `${API_PATH}/v2/competitions/${CHAMPIONS_LEAGUE_ID}/teams`;

// Show one particular team.
export const GET_TEAM_API = `${API_PATH}/v2/teams/`;