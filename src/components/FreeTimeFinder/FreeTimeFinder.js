import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../portfolio";
import "./FreeTimeFinder.css";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

import CalendarList from "./CalendarList";
import CalendarOutput from "./CalendarOutput";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import format from "date-fns/format";

const FreeTimeFinder = () => {
  // const { title, description, subhead, socidal } = ftf;
  const title = "Free Time Finder";
  const description =
    "This tool automatically finds and lists free times via Google Calendar API.";
  const subhead = "";

  const [profile, setProfile] = useState(null);

  const [calendars, setCalendars] = useState([]);
  const [selectedCalendars, setSelectedCalendars] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const [outputReady, setOutputReady] = useState(false);

  const clientId =
    "501334517326-6umils6sm37ai65fgh1v2r83s9ggefkg.apps.googleusercontent.com";
  const API_KEY = "AIzaSyARUa77-dQ96I7e2tRCHCQexJcmUOEW9ZI";
  const DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
    getCalendarIDs();
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
  };

  const getCalendarIDs = () => {
    return gapi.client.calendar.calendarList.list({}).then(
      function (response) {
        localStorage.clear();

        // Handle the results here (response.result has the parsed body).
        var cals = response.result.items;
        setCalendars(cals);
      },
      function (err) {
        console.error("Execute error", err);
      }
    );
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setOutputReady(false);
  };

  return (
    <div className="about center">
      <h1> {title} </h1>
      <h2 className="about__role">{subhead} </h2>
      <p className="about__desc">{description && description}</p>

      <br />
      <br />
      <br />
      {profile ? (
        <div>
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />

          <ul id="checkboxes"> Your calendars: </ul>

          <CalendarList
            calendars={calendars}
            setCalendars={setCalendars}
            selectedCalendars={selectedCalendars}
            setSelectedCalendars={setSelectedCalendars}
          />
          <br />
          <br />

          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />

          <br />
          <CalendarOutput
            selectedCalendars={selectedCalendars}
            startDate={startDate}
            endDate={endDate}
            outputReady={outputReady}
            setOutputReady={setOutputReady}
            setEndDate={setEndDate}
          />
          <br />

          <br />
          <GoogleLogout
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={logOut}
          />
        </div>
      ) : (
        <div>
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
          <br />
          <br />
          <h3>Example (when logged in): </h3>
          <img
            src="https://i.gyazo.com/04e481ac9e2c539352cc60a227c306de.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default FreeTimeFinder;

// Fetches calendar IDs, creates checkboxes and adds event listener
// called on site load
function test() {}
