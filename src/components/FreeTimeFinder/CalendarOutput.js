import React from "react";
import Calendar from "./Calendar.js";
import format from "date-fns/format";
import { useState, useEffect } from "react";

const CalendarOutput = (props) => {
  const [freeTimes, setFreeTimes] = useState();
  // const [outputReady, setOutputReady] = useState(false)

  const fetchFreeTimes2 = (busyTimes) => {
    const startDate = globalStart;
    const endDate = globalEnd;
    var daysOfYear = [];
    for (
      var d = new Date(startDate);
      d <= new Date(endDate);
      d.setDate(d.getDate() + 1)
    ) {
      daysOfYear.push(new Date(d));
    }

    const finalPenguin = [];
    for (let i = 0; i < daysOfYear.length; i++) {
      var thisDay = new Date(daysOfYear[i]);
      var thisDayMorning = new Date(thisDay.setHours(6, 0, 0));
      var thisDayNight = new Date(
        thisDayMorning.getYear(),
        thisDayMorning.getMonth(),
        thisDayMorning.getDate(),
        23
      );

      var thisDayBusyTimes = [];
      for (let x = 0; x < busyTimes.length; x++) {
        var temp = busyTimes[x];
        if (sameDay(thisDayMorning, new Date(temp[0]))) {
          thisDayBusyTimes.push(temp);
        }
      }

      var freeTimes = [];
      console.log(thisDayBusyTimes);
      var lastTimeSlot = thisDayBusyTimes.length - 1;
      console.log("LAST TIME SLOT ");
      console.log(lastTimeSlot);
      for (let x = 0; x < thisDayBusyTimes.length; x++) {
        var start = new Date(thisDayBusyTimes[x][0]);
        var end = new Date(thisDayBusyTimes[x][1]);

        if (sameDay(thisDayMorning, end)) {
          if (x === 0) {
            if (thisDayBusyTimes.length === 1) {
              var out = [];
              var k = prettyTime(thisDayMorning);
              var n = prettyTime(start);
              out.start = k[1];
              out.end = n[1];
              freeTimes.push(out);

              var outer = [];
              var e = prettyTime(end);
              var p = prettyTime(thisDayNight);
              outer.start = e[1];
              outer.end = "onwards";
              freeTimes.push(outer);
            } else {
              var out = [];
              var k = prettyTime(thisDayMorning);
              var n = prettyTime(start);
              out.start = k[1];
              out.end = n[1];
              freeTimes.push(out);
            }
          } else {
            var outhi = [];
            // end of prev time slot
            var kk = prettyTime(new Date(thisDayBusyTimes[x - 1][1]));
            var zz = prettyTime(start);

            outhi.start = kk[1];
            outhi.end = zz[1];
            freeTimes.push(outhi);
            console.log("outhi");
            console.log(outhi);

            var test = new Date(thisDayBusyTimes[x][1]);

            if (x === thisDayBusyTimes.length - 1) {
              var tempo = new Date(thisDayBusyTimes[lastTimeSlot][1]);
              console.log(tempo);
              var outer = [];
              var e = prettyTime(tempo);
              var p = prettyTime(thisDayNight);
              outer.start = e[1];
              outer.end = "onwards";
              freeTimes.push(outer);
            }
          }
        }
      }
      const output = [String(prettyTime(thisDay)[0]), freeTimes];
      console.log(output);
      finalPenguin.push(output);
    }
    console.log(finalPenguin);
    setFreeTimes(finalPenguin);
    props.setOutputReady(true);
  };

  function prettyTime(d1) {
    var p = String(
      d1.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
    var splitted = p.split(" ");
    var day = splitted[0];
    var time = splitted[1] + " " + splitted[2];

    const day2 = day.slice(0, -1);
    var output = [day2, time];

    return output;
  }

  function sameDay(d1, d2) {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  // end test

  var globalStart = "";
  var globalEnd = "";
  const fetchFreeTimes = () => {
    // Format start date to 8am
    var start = new Date(props.startDate);
    start.setHours(8);
    start.setMinutes(0);
    start.setSeconds(0);
    start = start.toISOString();
    globalStart = start;

    // Format end date to 8 pm
    let end = "";
    if (props.endDate === null) {
      end = new Date(props.startDate);
      const piza = new Date(props.startDate);
      props.setEndDate(piza);
      end = new Date(piza);
    } else {
      end = new Date(props.endDate);
    }
    end.setHours(23);
    end.setMinutes(59);
    end.setSeconds(0);
    end = end.toISOString();
    globalEnd = end;

    console.log(start);
    console.log(end);

    // Build request body
    const request = {};
    request.timeMin = start;
    request.timeMax = end;
    request.timeZone = "America/New_York";

    // Create calendars object
    let cals = [];
    for (let i = 0; i < props.selectedCalendars.length; i++) {
      let calObj = {};
      calObj.id = props.selectedCalendars[i];
      cals.push(calObj);
    }

    request.items = cals;

    let num_days = "";
    if (props.endDate === null) {
      let num_days = props.startDate.getDate() - props.startDate.getDate();
    } else {
      num_days = props.endDate.getDate() - props.startDate.getDate();
    }
    num_days = num_days + 1;

    return gapi.client.calendar.freebusy
      .query(request)

      .then(
        function (response) {
          let allTimes = [];
          let fuckme = [];
          for (let k = 0; k < props.selectedCalendars.length; k++) {
            var curCal = props.selectedCalendars[k];
            var busyTimes = response.result.calendars[curCal].busy;

            for (let i = 0; i < busyTimes.length; i++) {
              var busyBlock = busyTimes[i];
              var startTime = busyBlock.start;
              var endTime = busyBlock.end;
              var p = prettyTime(startTime)[0];
              let test = [new Date(startTime), new Date(endTime)];
              allTimes.push(test);
            }
          }
          const merged = newfunc(allTimes);
          fetchFreeTimes2(merged);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  };

  const newfunc = (times) => {
    console.log(times);
    console.log("woohhoo");
    times.sort(function (a, b) {
      return a[0] - b[0];
    });

    const merged = [];
    for (let i = 0; i < times.length; i++) {
      if (!merged.length) {
        merged.push(times[i]);
      } else if (merged[merged.length - 1][1] < times[i][0]) {
        merged.push(times[i]);
      } else {
        var left = merged[merged.length - 1][1];
        var right = times[i][1];

        var comp = Math.max(left, right);
        console.log(comp);
        comp = new Date(comp);
        merged[merged.length - 1][1] = comp;
      }
    }

    for (let i = 0; i < merged.length; i++) {
      const temp = new Date(merged[i][0]).toLocaleString();
      const temp2 = new Date(merged[i][1]).toLocaleString();
    }

    return merged;
  };

  function removeTime(date = new Date()) {
    return new Date(date.toDateString());
  }

  const getDate = (inputDate) => {
    const d = new Date(inputDate);
    const dods = removeTime(d);
    return dods;
  };

  return (
    <div className="todo-container">
      {props.outputReady ? (
        <div>
          {freeTimes.map((test) => {
            const thisDate = test[0];
            const thisDateTimeSlots = test[1];
            return (
              <div>
                <div>
                  <h2>{thisDate}:</h2>
                  <ul>
                    {thisDateTimeSlots.map((item) => {
                      console.log("item here");
                      console.log(item);
                      return (
                        <div>
                          <li>
                            {item.start} to {item.end}
                          </li>
                          {/* <p>Start time: {item.start}</p>
                            <p>End time: {item.end}</p> */}
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <button className="btn-upload" onClick={fetchFreeTimes}>
          {" "}
          Fetch free times{" "}
        </button>
      )}
      <br />
      <br />
    </div>
  );
};

export default CalendarOutput;
