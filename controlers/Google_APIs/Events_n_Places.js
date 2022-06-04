const axios = require("axios");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

// --------------------------------------------------- SET UP GOOGLE OAUTH ---------------------------------------------------
// --------------------------------------------------- SET UP GOOGLE OAUTH ---------------------------------------------------

const API_KEY = 'AIzaSyCaSuDrgl2EdWzomhRHWWAQXLRe03NdOzA';
const CLIENT_ID = "394339692007-h1nqqrke0j0hb0hjern3037rl9a1i67a.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const refreshToken = "1//047ZcRQE8spLMCgYIARAAGAQSNwF-L9IrHwVESl_1FAVA39iKx-Wi2BrqShhvjdk6e1C4CSxbcLwrvuyYi1bK1rAFSWLk1n4qxnM";

// const API_KEY = process.env.GOOGLE_API_KEY;
// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
// const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

// const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
// const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET);
oAuth2Client.setCredentials({ refresh_token: refreshToken });

// --------------------------------------------------- SET UP GOOGLE CALENDAR ---------------------------------------------------
// --------------------------------------------------- SET UP GOOGLE CALENDAR ---------------------------------------------------

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

async function getEventsList(calendarParams) {
  const { data } = await calendar.events.list(calendarParams);
  const eventsArray = data.items.filter((item) => item.status != "cancelled");
  return eventsArray
}
// getEventsList();


// --------------------------------------------------- SET UP GOOGLE PLACES ---------------------------------------------------
// --------------------------------------------------- SET UP GOOGLE PLACES ---------------------------------------------------


async function getPlace(address) {
    const placesURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${address}&fields=geometry&inputtype=textquery&key=${API_KEY}`;
    let coords = []
    await axios.get(placesURL)
        .then((res) => coords.push(res.data.candidates[0].geometry.location))
        .catch((err) => console.log(err.message))

    return coords;
}

// --------------------------------------------------- FINAL FUNCTION ---------------------------------------------------
// --------------------------------------------------- FINAL FUNCTION ---------------------------------------------------
// --------------------------------------------------- FINAL FUNCTION ---------------------------------------------------


const formatEvents = async function format_ASYNC_Events (calendarID) {

    // const calendarID = cal
    // const calendar_URL = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`;

    let calendarParams = {
        calendarId: calendarID,
        maxResults: 20,
        updatedMin: "2022-05-15T22:00:00.000Z",
        // updatedMin: "2022-05-15T22:00:00.000Z",
        startTime: new Date()
    };

    const eventsArray = await getEventsList(calendarParams)

    const allEventsArr = eventsArray.map((event) => {
        return getPlace(event.location)
            .then((res) => {
                let startTime = event.start.dateTime;
                let endTime = event.end.dateTime;
                startTime = new Date(startTime);
                endTime = new Date(endTime);
                const address = event.location.slice(event.location.indexOf(',') + 2 , event.location.length) 
                const name = event.location.split(',')[0]
                const lat = res[0].lat
                const lng = res[0].lng
                return { startTime, endTime, 'location' : { name, address, lat, lng } }
            })
        })
        const results = await Promise.all(allEventsArr)
    return results
}

// module.exports = format_ASYNC_Events().then((res) => console.log(res))
module.exports = formatEvents
