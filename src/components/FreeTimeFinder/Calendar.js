import React from 'react';
import { useState, useEffect} from 'react'


const Calendar = (props) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleSelection = () => {
        setIsSelected(!isSelected);
        updateSelectedCalendars();
    }

    const updateSelectedCalendars = () => {
        const thisCalendarId = props.calendar.id
        const currentSelectedCalendars = props.selectedCalendars 

        const isIdInArray = currentSelectedCalendars.includes(thisCalendarId)

        if (!isSelected) {
            // creates new array and react will detect state change
            const filteredArr = currentSelectedCalendars.map(calId => { return calId})
            filteredArr.push(thisCalendarId)
            props.setSelectedCalendars(filteredArr)
        } else {
            // do this if this calendar was unselected!
            console.log(isIdInArray)
            const filteredArr = currentSelectedCalendars.filter(calId => { return calId !== thisCalendarId})
            props.setSelectedCalendars(filteredArr)

        }
    }

    return (
        <div className='calendarFilter'>
            <label className='toggle'>
                <input
                className='toggle-checkbox'
                type="checkbox"
                id={props.calendar.id}
                name={props.calendar.id}
                value={props.title}
                checked={isSelected}
                onChange={handleSelection}
                /> 
                <div className='toggle-switch'></div>
                <span className='toggle-label'> {props.title}</span>
            </label>
        </div>
    );
}; 

export default Calendar; 