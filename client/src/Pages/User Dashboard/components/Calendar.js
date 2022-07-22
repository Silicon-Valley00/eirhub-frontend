import React, { useState } from 'react';
import styles from './calendar.module.css';
import {
   MdOutlineArrowBackIos,
   MdOutlineArrowForwardIos,
} from 'react-icons/md';

function Calendar() {
   // Array of months to display
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   // Current date variables
   const currentDate = new Date();
   const year = currentDate.getFullYear();
   const month = currentDate.getMonth();
   const date = currentDate.getDate();
   // Handles changes on month
   const [selectedMonth, setSelectedMonth] = useState(month);

   var days;
   // Gets the total days in selected month
   var startDay = [7, 1, 2, 3, 4, 5, 6][
      new Date(year, selectedMonth, 1).getDay()
   ];
   var totalNumberOfDays = new Date(year, selectedMonth + 1, 0).getDate();

   //Gets an array of the available days in a month
   var dayNumbers = [...Array(totalNumberOfDays + startDay - 1).keys()].map(
      (x) => ++x
   );
   // maps array of available days to html tags
   days = dayNumbers.map((num) => {
      if (num >= startDay) {
         if (
            num - startDay + 1 ===
               new Date(currentDate.toDateString()).getUTCDate() &&
            selectedMonth === month
         ) {
            return (
               <div className={styles.today} key={num}>
                  {num - startDay + 1}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            );
         } else {
            return (
               <div key={num}>
                  {num - startDay + 1}
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            );
         }
      } else {
         return (
            <div className={styles.empty} key={num}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
            </div>
         );
      }
   });
   function handleMonthGoBack() {
      if (selectedMonth === 0) {
         setSelectedMonth(0);
      } else if (selectedMonth <= 11) {
         setSelectedMonth(selectedMonth - 1);
      }
      console.log(selectedMonth);
   }
   function handleMonthGoForward() {
      if (selectedMonth === 11) {
         setSelectedMonth(11);
      } else if (selectedMonth >= 0) {
         setSelectedMonth(selectedMonth + 1);
      }
   }
   return (
      <>
         <div className={styles.calendarHeader}>
            <div className={styles.selectMonthYear}>
               <span className={styles.monthChange} id={styles.prevMonth}>
                  <pre onClick={() => handleMonthGoBack()}>
                     <MdOutlineArrowBackIos />
                  </pre>
               </span>
               <span className={styles.monthPicker} id={styles.monthPicker}>
                  {months[selectedMonth]}
               </span>
               <span id={styles.year}>{year}</span>
               <span className={styles.monthChange} id={styles.nextMonth}>
                  <pre onClick={() => handleMonthGoForward()}>
                     <MdOutlineArrowForwardIos />
                  </pre>
               </span>
            </div>
         </div>

         <div className={styles.calendarBody}>
            <div className={styles.calendarWeekDay}>
               <div>Mon</div>
               <div>Tue</div>
               <div>Wed</div>
               <div>Thu</div>
               <div>Fri</div>
               <div>Sat</div>
               <div>Sun</div>
            </div>
            <div className={styles.calendarDays}>{days}</div>
         </div>
      </>
   );
}
export default Calendar;
