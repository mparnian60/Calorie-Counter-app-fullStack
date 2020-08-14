// import React from 'react'
// import { Calendar, Views } from 'react-big-calendar'
// import events from '../events'
// import dates from '../../src/utils/dates'

// let allViews = Object.keys(Views).map(k => Views[k])

// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: 'lightblue',
//     },
//   })

// let Basic = ({ localizer }) => (
//   <Calendar
//     events={events}
//     views={allViews}
//     step={60}
//     showMultiDayTimes
//     max={dates.add(dates.endOf(new Date(2015, 17, 1), 'day'), -1, 'hours')}
//     defaultDate={new Date(2015, 3, 1)}
//     components={{
//       timeSlotWrapper: ColoredDateCellWrapper,
//     }}
//     localizer={localizer}
//   />
// )

// export default ColoredDateCellWrapper;

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { result } from 'lodash';

const localizer = momentLocalizer(moment);

class MyCalendar extends React.Component {
  constructor() {
    super();
    const now = new Date();
    moment(now).format("dddd, MMMM Do YYYY");
    console.log('now', now);

    const APIresult = [{
        _id:"5f36810f5da34a007e4f5b2c",
        userId: "5f28b6ee465308361a23b835",
        date:"2020-08-14T00:00:00.000+00:00"
    },
    {
        _id:"5f3681195da34a007e4f5b33",
        userId: "5f28b6ee465308361a23b835",
        date:"2020-08-28T00:00:00.000+00:00"
    }
    ]

    const dayPlans = APIresult.map((dayPlan)=>{
        return {
            id: dayPlan._id,
            title: "Day Plan",
            start: new Date(dayPlan.date),
            end: new Date(dayPlan.date)
        }
    })

    console.log('dayPLAN', dayPlans);

    const events = [
      {
          id: 14,
          title: 'Today',
          start: new Date(new Date().setHours(new Date().getHours() - 3)),
          end: new Date(new Date().setHours(new Date().getHours() + 3)),
      }
    ]
    this.state = {
      name: 'React',
      events,
      dayPlans
    };
  }

  render() {
    return (
      <div>
        <p style={{ marginTop:'20pt', marginBottom:'20pt',fontSize: 30}}>
          My Diet Calendar
        </p>
        <div style={{ height: '400pt', width: '500pt', margin:'auto'}}>
          <Calendar
            events={this.state.dayPlans}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
  }
}

export default MyCalendar;