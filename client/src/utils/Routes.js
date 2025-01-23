const BASE_URL = "http://localhost:3000"
const BASE_URL_2 = "http://localhost:5000"
const ADD = "api"
const ADD2="v1"
const USER = "users"

export const SIGNUP_ROUTE = `${BASE_URL}/${ADD}/${ADD2}/${USER}/register`
export const LOGIN_ROUTE = `${BASE_URL}/${ADD}/${ADD2}/${USER}/login`
export const LOGOUT_ROUTE = `${BASE_URL}/${ADD}/${USER}/logout`
export const TOKEN_ROUTE = `${BASE_URL}/${ADD}/${USER}/verify-token`
export const EDIT_PROFILE_ROUTE = `${BASE_URL}/${ADD}/${USER}/`
export const GET_ALL_JUDGES_HACKATHON_ROUTE = `${BASE_URL}/${ADD}/${ADD2}/users/alljudgehackathons`

export const CHATBOT_URL=`${BASE_URL_2}/query`
export const FETCH_RELEVANT_TEAMMATES=`${BASE_URL_2}/fetch_relevant_users`



export const CREATE_HAKATHON_ROUTE = `${BASE_URL}/${ADD}/${ADD2}/hackathons/create`
export const GET_ACTIVE_UPCOMING_HACKATHONS_ROUTE = `${BASE_URL}/${ADD}/${ADD2}/hackathons/active-upcoming`
export const GET_HACKATHON_BY_ID_ROUTE = `${BASE_URL}/${ADD}/${ADD2}/hackathons`
