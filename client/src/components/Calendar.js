import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getAllDayPlanAPI } from '../api/dayPlanAPI';
import { result } from 'lodash';

const localizer = momentLocalizer(moment);

const MyCalendar =() =>{

    const [dayPlan, setDayPlan] = useState([]);

    useEffect(()=>{
      allDayPlans(userId).then(dayplansdetails =>{
        setDayPlan(dayplansdetails);
      })
    },[])

    const now = new Date();
    moment(now).format("dddd, MMMM Do YYYY");
    console.log('now', now);

    // const APIresult = [{
    //   _id: "5f36810f5da34a007e4f5b2c",
    //   userId: "5f28b6ee465308361a23b835",
    //   date: "2020-08-14T00:00:00.000+00:00"
    // },
    // {
    //   _id: "5f3681195da34a007e4f5b33",
    //   userId: "5f28b6ee465308361a23b835",
    //   date: "2020-08-28T00:00:00.000+00:00"
    // }
    // ]

    
    const userId = window.localStorage.getItem('userId')
    console.log('userId', userId);

    
    const allDayPlans = async (userId) => {
      let allDayPlanDetails;
        const result = await getAllDayPlanAPI(userId)
      
          allDayPlanDetails = result.map((dayPlan) => {
            return {
              id: dayPlan._id,
              title: "Day Plan",
              start: new Date(dayPlan.date),
              end: new Date(dayPlan.date)
            }
          })
          console.log('allDayPlan details', allDayPlanDetails);
    
        return allDayPlanDetails;
        // console.log('allDayPlans', allDayPlans);
    }
  
    


    // const dayPlans = APIresult.map((dayPlan) => {
    //   return {
    //     id: dayPlan._id,
    //     title: "Day Plan",
    //     start: new Date(dayPlan.date),
    //     end: new Date(dayPlan.date)
    //   }
    // })

    // console.log('dayPLAN', dayPlans);

    // const events = [
    //   {
    //     id: 14,
    //     title: 'Today',
    //     start: new Date(new Date().setHours(new Date().getHours() - 3)),
    //     end: new Date(new Date().setHours(new Date().getHours() + 3)),
    //   }
    // ]
    // this.state = {
    //   name: 'React',
    //   events,
    //   dayPlan
    // };
  

 
    return (
      <div>
        <p style={{ marginTop: '20pt', marginBottom: '20pt', fontSize: 30 }}>
          My Diet Calendar
        </p>
        <div style={{ height: '400pt', width: '500pt', margin: 'auto' }}>
          <Calendar
            events={dayPlan}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
          />
        </div>
      </div>
    );
}

export default MyCalendar;