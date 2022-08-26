import React from 'react';
import Calendar from './Calendar.js'
import format from "date-fns/format";
import { useState, useEffect} from 'react'


const CalendarOutput = (props) => {

  const [freeTimes, setFreeTimes] = useState()
  // const [outputReady, setOutputReady] = useState(false)

    const allStartTimes = [];
    const allEndTimes = [];
    const busyBlocksToAdd = [];

    const fetchFreeTimes = () => {
      // Check if endDate is set, if not set to startDate

        // Format start date to 8am
        var start = new Date(props.startDate)
        start.setHours(8)
        start.setMinutes(0)
        start.setSeconds(0)
        start = start.toISOString();

        // Format end date to 8 pm
        let end = ''
        if (props.endDate === null) {
          end = new Date(props.startDate)
          const piza = new Date(props.startDate)
          props.setEndDate(piza)
          end = new Date(piza)
        } else {
          end = new Date(props.endDate)
        }
        end.setHours(20)
        end.setMinutes(0)
        end.setSeconds(0)
        end = end.toISOString();
        
        console.log(start)
        console.log(end)

        // Build request body
        const request = {}
        request.timeMin = start;
        request.timeMax = end;
        request.timeZone = "America/New_York";

        // Create calendars object
        let cals = []
        for (let i=0; i<props.selectedCalendars.length; i++){
            let calObj = {}
            calObj.id = props.selectedCalendars[i]
            cals.push(calObj)
        }

        request.items = cals

        let num_days = ''
        if (props.endDate === null) {
          console.log("we here")
          let num_days = props.startDate.getDate() - props.startDate.getDate()
        } else {
          let num_days = props.endDate.getDate() - props.startDate.getDate()
        }

        // for each day in between input dates, add event
        // day1 8am 830am, 8pm to day2 8am
        for (let x=0; x < num_days; x++){
            let day = props.startDate.getDate()

            let curDateDay = day + x
            let inputDate = props.startDate

            //appendPre(curDateDay)
            let morningBusyStart = new Date()
            morningBusyStart.setDate(curDateDay)
            morningBusyStart.setHours(8)
            morningBusyStart.setMinutes(0)
            morningBusyStart.setSeconds(0)
            morningBusyStart.setFullYear(inputDate.getFullYear())

            let morningBusyEnd = new Date()
            morningBusyEnd.setDate(curDateDay)
            morningBusyEnd.setHours(8)
            morningBusyEnd.setMinutes(30)
            morningBusyEnd.setSeconds(0)
            morningBusyEnd.setFullYear(inputDate.getFullYear())


            let nightBusyStart = new Date()
            nightBusyStart.setDate(curDateDay)
            nightBusyStart.setHours(20)
            nightBusyStart.setMinutes(0)
            nightBusyStart.setSeconds(0)
            nightBusyStart.setFullYear(inputDate.getFullYear())

            let nightBusyEnd = new Date()
            nightBusyEnd.setDate(curDateDay)
            nightBusyEnd.setHours(20)
            nightBusyEnd.setMinutes(30)
            nightBusyEnd.setSeconds(0)
            nightBusyEnd.setFullYear(inputDate.getFullYear())

            // prettyStartTime = morningBusyStart.toLocaleString('en-US', { timeZone: 'EST' });
            // prettyEndTime = morningBusyEnd.toLocaleString('en-US', { timeZone: 'EST' });
            var morningBusyStart_formatted = {date: morningBusyStart};
            var morningBusyEnd_formatted = {date: morningBusyEnd};

            var nightBusyStart_formatted = {date: nightBusyStart};
            var nightBusyEnd_formatted = {date: nightBusyEnd};

            allStartTimes.push(morningBusyStart_formatted);
            allEndTimes.push(morningBusyEnd_formatted);

            allStartTimes.push(nightBusyStart_formatted);
            allEndTimes.push(nightBusyEnd_formatted);

            let timecombo = [morningBusyStart, morningBusyEnd];
            busyBlocksToAdd.push(timecombo);

        }
        return gapi.client.calendar.freebusy.query(request)
      
              .then(function(response) {
                for (let k = 0; k < props.selectedCalendars.length; k++) {
                    var curCal = props.selectedCalendars[k];
                    var busyTimes = response.result.calendars[curCal].busy;
        
                    for (let i = 0; i < busyTimes.length; i++){
                      var busyBlock = busyTimes[i];
                      console.log("Busy block for " + curCal, busyBlock);
        
                      var startTime = busyBlock.start;
                      var endTime = busyBlock.end;
        
                      var data = {date: startTime};
                      var data2 = {date: endTime};
        
                      allStartTimes.push(data);
                      allEndTimes.push(data2);
        
                    }
                  }
                consolidateAllBusyTimes();
              },
              function(err) { console.error("Execute error", err); });
      }


      const consolidateAllBusyTimes = () => {
        allStartTimes.sort(function(a, b) {
          var c = new Date(a.date);
          var d = new Date(b.date);
          return c-d;
      });
  
      //    appendPre("- - - - - - - Sorting end times")
  
      allEndTimes.sort(function(a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c-d;
      });
  
        let startTimes = allStartTimes;
        let endTimes = allEndTimes;

      var masterArray = [];
        for (let x = 0; x < startTimes.length; x++){
          let startTime = startTimes[x].date;
          let endTime = endTimes[x].date;
  
          let timeStartDateFormat = new Date(startTime);
          let timeEndDateFormat = new Date(endTime);
  
          let prettyStartTime = timeStartDateFormat.toLocaleString('en-US', { timeZone: 'EST' });
          let prettyEndTime = timeEndDateFormat.toLocaleString('en-US', { timeZone: 'EST' });
  
          let timecombo = [timeStartDateFormat, timeEndDateFormat];
          masterArray.push(timecombo);
        }

        for (let k=0; k<masterArray.length;k++){
          let data = masterArray[k];
          let start = data[0];
          let end = data[1];
  
          let start2 = new Date(start).toLocaleString('en-US', { timeZone: 'EST' });
          let end2 = new Date(end).toLocaleString('en-US', { timeZone: 'EST' });
  
          console.log(k + " Start: " + start2 + " || End: " + end2);
        }

        // STEP 1 merge all same start times
        var newtimes = [];
        for (let x = 0; x < masterArray.length; x++){
              var data = masterArray[x];
  
              var curstart = data[0].getTime();
              var curend = data[1].getTime();
  
              var latestend = curend;
  
              for (let i = 0; i < masterArray.length; i++){
                var data2 = masterArray[i];
  
                var start2 = data2[0].getTime();
                var end2 = data2[1].getTime();
                if (curstart == start2) {
                      if (latestend < end2) {
                        latestend = end2;
                      }
                }
              }
  
              let newtime = [curstart, latestend];
  
              var shouldWeAddIt = true;
              for (let k=0; k<newtimes.length;k++){
                let data = newtimes[k];
                let start = data[0];
                let end = data[1];
  
                if (start == curstart){
                  if (end == latestend) {
                    shouldWeAddIt = false;
                  }
                } else {
                }
              }
  
              if (shouldWeAddIt){
                newtimes.push(newtime);
              }
          }
  
          // print OG array
        //
      //  appendPre("Merging same start times");
          for (let k=0; k<newtimes.length;k++){
            let data = newtimes[k];
            let start = data[0];
            let end = data[1];
  
            start2 = new Date(start).toLocaleString('en-US', { timeZone: 'EST' });
            end2 = new Date(end).toLocaleString('en-US', { timeZone: 'EST' });
  
            //appendPre(k + " Start: " + start2 + " || End: " + end2);
          }
  
        // STEP 2  Remove times within larger time blocks
        var newertimes = [];
        for (let x = 0; x < newtimes.length; x++){
              var data = newtimes[x];
  
              var curstart = data[0]
              var curend = data[1]
              var latestend = curend;
  
              var shouldAdd = true;
              for (let i = 0; i < newtimes.length; i++){
                var data2 = newtimes[i];
                var start2 = data2[0]
                var end2 = data2[1]
  
                if (start2 < curstart) {
                  if (end2 > curend){
                    shouldAdd = false;
                  }
                }
  
              }
  
              let newtime = [curstart, curend];
  
              if (shouldAdd) {
                newertimes.push(newtime);
              }
          }
  
  
              // STEP 2 printing results
            //  appendPre("TIMES WITH OVERLAPPING BLOCKS REMOVED: " + newertimes);
              for (let k=0; k<newertimes.length;k++){
                data = newertimes[k];
                let start = data[0];
                let end = data[1];
  
                let start2 = new Date(start).toLocaleString('en-US', { timeZone: 'EST' });
                let end2 = new Date(end).toLocaleString('en-US', { timeZone: 'EST' });
  
              }
  
          // STEP  3 FINAL STEP - consolidate back to back events
          var newesttimes = [];
          var removedtimes = [];
          for (let x = 0; x < newertimes.length; x++){
                var data = newertimes[x];
  
                var curstart = data[0];
                var curend = data[1];
  
                for (let i = 0; i < newertimes.length; i++){
                  var data2 = newertimes[i];
  
                  var start2 = data2[0];
                  var end2 = data2[1];
  
                  if (curend > start2){
                    if (curend < end2) {
                      let newtime = [curstart, end2];
                      newesttimes.push(newtime);
                      removedtimes.push([curstart,curend]);
                      removedtimes.push([start2, end2]);
                    }
                  }
            }
          }
  
              // STEP 3 printing results
              for (let k=0; k<newesttimes.length; k++){
                data = newesttimes[k];
                let start = data[0];
                let end = data[1];
  
                let start2 = new Date(start).toLocaleString('en-US', { timeZone: 'EST' });
                let end2 = new Date(end).toLocaleString('en-US', { timeZone: 'EST' });
  
              }
  
              // more printing results
              for (let k=0; k<removedtimes.length; k++){
                data = removedtimes[k];
                let start = data[0];
                let end = data[1];
  
                let start2 = new Date(start).toLocaleString('en-US', { timeZone: 'EST' });
                let end2 = new Date(end).toLocaleString('en-US', { timeZone: 'EST' });
              }
  
            // Adding consolidated times together, finishing up etc
            var finaltimes = [];
            for (let k=0; k < newertimes.length; k++){
              data = newertimes[k];
              let start = data[0];
              let end = data[1];
  
              var shouldWeAddIt = true;
  
              for (let x=0; x < removedtimes.length; x++){
                    let data2 = removedtimes[x];
                    let start2 = data2[0];
                    let end2 = data2[1];
  
                    if (start2 == start) {
                      if (end2 == end) {
                        shouldWeAddIt = false;
                      }
                      }
                }
  
              if (shouldWeAddIt == true) {
                finaltimes.push(data);
              }
           }
  
         for (let k=0; k<finaltimes.length; k++){
           data = finaltimes[k];
           let start = data[0];
           let end = data[1];
  
           let start2 = new Date(start).toLocaleString('en-US', { timeZone: 'EST' });
           let end2 = new Date(end).toLocaleString('en-US', { timeZone: 'EST' });
  
         }
  
         for (let k=0; k<newesttimes.length; k++){
           let data = newesttimes[k];
           finaltimes.push(data);
         }
  
         for (let k=0; k<finaltimes.length; k++){
           data = finaltimes[k];
           let start = data[0];
           let end = data[1];
  
           let start2 = new Date(start).toLocaleString('en-US', { timeZone: 'EST' });
           let end2 = new Date(end).toLocaleString('en-US', { timeZone: 'EST' });
  
         }
  
         var allstarttimes3 = [];
         var allendtimes3 = [];
         for (let k=0; k<finaltimes.length; k++){
           data = finaltimes[k];
           let start = data[0];
           let end = data[1];
  
           allstarttimes3.push(start);
           allendtimes3.push(end);
         }
  
        allstarttimes3.sort(function(a, b){return a-b});
        allendtimes3.sort(function(a, b){return a-b});
  
        var finalmasterArray = [];
  
          for (let x = 0; x < allstarttimes3.length; x++){
            let startTime = allstarttimes3[x];
            let endTime = allendtimes3[x];
  
            let timeStartDateFormat = new Date(startTime);
            let timeEndDateFormat = new Date(endTime);
  
            let prettyStartTime = timeStartDateFormat.toLocaleString('en-US', { timeZone: 'EST' });
            let prettyEndTime = timeEndDateFormat.toLocaleString('en-US', { timeZone: 'EST' });
  
            let timecombo = [timeStartDateFormat, timeEndDateFormat];
            finalmasterArray.push(timecombo);
          }
  
          printPrettyTimeslots(allstarttimes3, allendtimes3, finalmasterArray);
  
    }

    function printPrettyTimeslots(allstarttimes3, allendtimes3, finalmasterArray){
        var awesomeArray = [];
        let diff = ''
        let beginfreeslot = ''
        let endfreeslot = ''
        let prettyStart = ''
        let prettyEnd = ''
        let prettyStartTime = ''
        let prettyEndTime = ''
        let splitStart = ''
        let splitEnd = ''
        let ogStart = ''
        let ogEnd = ''
        for (let x = 0; x < finalmasterArray.length-1; x++){
              var times = finalmasterArray[x];
              var curstart = times[0];
              var curend = times[1];
    
              var times = finalmasterArray[x+1];
    
              var nextstart = times[0];
              var nextend = times[1];
    
    
              if (x==0) {
                // First element, subtract from 8am
                let eightAm = new Date(curstart);
    
                eightAm.setHours(8);
                eightAm.setMinutes(0);
                eightAm.setSeconds(0);
    
                eightAm = eightAm.getTime();
                eightAm = new Date(eightAm);
    
                let diff = curstart - eightAm;
    
                if ((diff > 0) && (diff < 36000000)) {
                  let beginfreeslot = eightAm;
                  eightAm = eightAm.getTime();
                  let endfreeslot = eightAm + diff;
                  let prettyStart = new Date(beginfreeslot);
                  let prettyEnd = new Date(endfreeslot);
    
                  let prettyStartTime = prettyStart.toLocaleString('en-US', { timeZone: 'EST' });
                  let prettyEndTime = prettyEnd.toLocaleString('en-US', { timeZone: 'EST' });
    
                  let splitStart = prettyStartTime.split(" ");
                  let splitEnd = prettyEndTime.split(" ");
    
                  let ogStart = splitStart[1];
                  let ogEnd = splitEnd[1];
                  awesomeArray.push([prettyStart, prettyEnd]);
                }
    
                diff = nextstart - curend;
    
                if ((diff > 0) && (diff < 36000000)) {
                  let beginfreeslot = curend;
                  let endfreeslot = nextstart + diff;
                  let prettyStart = new Date(beginfreeslot);
                  let prettyEnd = new Date(endfreeslot);
    
                  let prettyStartTime = prettyStart.toLocaleString('en-US', { timeZone: 'EST' });
                  let prettyEndTime = prettyEnd.toLocaleString('en-US', { timeZone: 'EST' });
    
                  let splitStart = prettyStartTime.split(" ");
                  let splitEnd = prettyEndTime.split(" ");
    
                  let ogStart = splitStart[1];
                  let ogEnd = splitEnd[1];
                  awesomeArray.push([prettyStart, prettyEnd]);
                }
    
              }
    
              else if (x == finalmasterArray.length-2){
                diff = nextstart - curend;
    
                  if ((diff > 0) && (diff < 36000000)) {
                  let beginfreeslot = curend;
                  let endfreeslot = nextstart + diff;
                  let prettyStart = new Date(beginfreeslot);
                  let prettyEnd = new Date(endfreeslot);
    
                  let prettyStartTime = prettyStart.toLocaleString('en-US', { timeZone: 'EST' });
                  let prettyEndTime = prettyEnd.toLocaleString('en-US', { timeZone: 'EST' });
    
                  let splitStart = prettyStartTime.split(" ");
                  let splitEnd = prettyEndTime.split(" ");
    
                  let ogStart = splitStart[1];
                  let ogEnd = splitEnd[1];
                  awesomeArray.push([prettyStart, prettyEnd]);
                }
    
                // Proceed to add final end of day -> 8 pm time slot
                let sevenPm = new Date(curend);
    
                sevenPm.setHours(8+12);
                sevenPm.setMinutes(0);
                sevenPm.setSeconds(0);
    
                nextend = nextend.getTime()
    
                diff = sevenPm - nextend;
    
                if ((diff > 0) && (diff < 36000000)) {
                  // nextend = nextend.getTime()
                  beginfreeslot = nextend;
                  endfreeslot = nextend + diff;
    
                  prettyStart = new Date(beginfreeslot);
                  prettyEnd = new Date(endfreeslot);
    
                  prettyStartTime = prettyStart.toLocaleString('en-US', { timeZone: 'EST' });
                  prettyEndTime = prettyEnd.toLocaleString('en-US', { timeZone: 'EST' });
    
                  splitStart = prettyStartTime.split(" ");
                  splitEnd = prettyEndTime.split(" ");
    
                  ogStart = splitStart[1];
                  ogEnd = splitEnd[1];
                  awesomeArray.push([prettyStart, prettyEnd]);
                }
    
    
              }
              else {
                  let diff = nextstart - curend;
    
                  if ((diff > 0) && (diff < 36000000)) {
                    beginfreeslot = curend;
                    endfreeslot = nextstart + diff;
                    prettyStart = new Date(beginfreeslot);
                    prettyEnd = new Date(endfreeslot);
    
                    prettyStartTime = prettyStart.toLocaleString('en-US', { timeZone: 'EST' });
                    prettyEndTime = prettyEnd.toLocaleString('en-US', { timeZone: 'EST' });
    
                    splitStart = prettyStartTime.split(" ");
                    splitEnd = prettyEndTime.split(" ");
    
                    ogStart = splitStart[1];
                    ogEnd = splitEnd[1];
                    awesomeArray.push([prettyStart, prettyEnd]);
                  }
                }
        }
    
        // Remove old elements in list
        console.log("awesome array")
        console.log(awesomeArray)
        var finalArr = []
        for (let x = 0; x < awesomeArray.length; x++){
          var times = awesomeArray[x];
          var curstart = times[0];
          curstart = new Date(curstart.setHours(curstart.getHours() + 0))
          var curend = times[1];
          curend = new Date(curend.setHours(curend.getHours() + 0))

          var comb = [curstart, curend]
          finalArr.push(comb)
    
          let curstartString = String(curstart);
          let curendString = String(curend);

          let startstring = curstart.toLocaleString('en-US', { timeZone: 'EST',  timeStyle: "short", dateStyle: "short" });
          let endstring = curend.toLocaleString('en-US', { timeZone: 'EST',  timeStyle: "short", dateStyle: "short" });
    
          let startstringsplit = curstartString.split(" ");
          let pretty_dayofweek = startstringsplit[0]
          let month = curstart.getMonth() + 1;
          let day = curstart.getDate();
    
          let startstringsplit2 = startstring.split(" ");
          let pretty_starttime = startstringsplit2[1] + " " + startstringsplit2[2];
          let endstringsplit2 = endstring.split(" ");
          let pretty_endtime = endstringsplit2[1] + " " + endstringsplit2[2];
    
          let prettystring = (pretty_dayofweek + " " + month + "/" + day + ": " + pretty_starttime + " to " + pretty_endtime);
          console.log("prettty" + prettystring);
    
        }
        console.log(finalArr)
        setFreeTimes(finalArr)
        finishUp(finalArr)
    }

    const unique_days = []
    const finishUp = (finalArr) => {
      // const unique_days = []
      const temp = finalArr.map((obj, i, arr) => {
        const xx = getDate(obj[0])
        if (unique_days.includes(String(xx)) === false) {
          unique_days.push(String(xx))
        } else {
          return 'ignore'
        }
      })

      const motherToEndAll = []
      for (let i=0; i<unique_days.length; i++) {
        const thisDay = unique_days[i]
        const dkl = new Date(thisDay)  
        const hihi = dkl.toLocaleDateString()      
        
        const thisDayTimes = []
        for (let j = 0; j < finalArr.length; j++) {
          const dayObj = finalArr[j]
          const firstTime = dayObj[0]
          const secondTime = dayObj[1]
          const startDay2 = removeTime(firstTime)

          const freeTimeSlot = {}

          if (String(startDay2) === String(thisDay)) {
            const freeTimeSlot = []
            const temp1 = String(dayObj[0].toLocaleString())
            const splitted1 = temp1.split(" ")

            freeTimeSlot.start = String(splitted1[1] + " " + splitted1[2])

            const temp = String(dayObj[1].toLocaleString())
            const splitted = temp.split(" ")

            freeTimeSlot.end = String(splitted[1] + " " + splitted[2])
            thisDayTimes.push(freeTimeSlot)
          }

        }

        const finalDolphin = [hihi, thisDayTimes]
        motherToEndAll.push(finalDolphin)
      }

  

      console.log("hard yeet")
      console.log(motherToEndAll)
      setFreeTimes(motherToEndAll)
      props.setOutputReady(true)

    }

    function removeTime(date = new Date()) {
      return new Date(date.toDateString());
    }

    const getDate = (inputDate) => {
      const d = new Date(inputDate)
      const dods = removeTime(d)
      return dods
  }


     return (
    <div className="todo-container">
          {props.outputReady ? (
          <div>
          {freeTimes.map(test => {
                console.log("yoyoyoyo")
                const thisDate = test[0]
                const thisDateTimeSlots = test[1]
                        return (

        <div>
            <div>
            <h2>{thisDate}:</h2>
            <ul>
                {thisDateTimeSlots.map(item => {
                  console.log("item here")
                  console.log(item)
                        return (
                            <div>
                            <li>{item.start} to {item.end}</li>
                            {/* <p>Start time: {item.start}</p>
                            <p>End time: {item.end}</p> */}
                            </div>
                            
                            )
                    })}
              </ul>
            </div>
        </div>
                        ) })}

          </div>
      ) : (

        <button className="btn-upload" onClick={fetchFreeTimes}> Fetch free times </button>
         
      )}
    <br />
    <br />

    </div>

     );
}

export default CalendarOutput;