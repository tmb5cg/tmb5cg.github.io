import React from 'react';
import Calendar from './Calendar.js'

const CalendarList = (props) => {
     return (
    <div className="todo-container">
    <br />
    <br />
        <ul className="todo-list">
            {
                props.calendars.map(calendar => (
                    <Calendar 
                        calendar = {calendar} 
                        calendars = {props.calendars}
                        key={calendar.id} 
                        title={calendar.summary} 
                        setCalendars={props.setCalendars} 
                        selectedCalendars = {props.selectedCalendars}
                        setSelectedCalendars = {props.setSelectedCalendars}
                    />
                ))
            }
        </ul>
    </div>

     );
}

export default CalendarList;