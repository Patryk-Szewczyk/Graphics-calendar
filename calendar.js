// Dostosowywanie maksymalnej wysokości
const siteWindow = window;
const calBody = document.querySelector('div.cal-body');
let cB_Height = 0;
siteWindow.addEventListener('load', () => {
    cB_Height = window.innerHeight;
    calBody.style.height = cB_Height + 'px';
}, false);
siteWindow.addEventListener('resize', () => {
    cB_Height = window.innerHeight;
    calBody.style.height = cB_Height + 'px';
}, false);

// Tworzenie "kółek":
let balls_Array = [];
(function(){
    const ballsBox = document.querySelector('div.cal-fotter-balls-box');
    for (i = 0; i < 12; i++) {
        balls_Array[i] = document.createElement('div');
        balls_Array[i].setAttribute('class', 'cal-fotter-balls-prop-style-1');
        ballsBox.appendChild(balls_Array[i]);
        
    };
}());

// Do - Zawartość - dni:
let year_2023_DaysPerMonth_Object = {
    January_Days: 31, January_Space: 7,
    Febulary_Days: 28, Febulary_Space: 3,
    March_Days: 31, March_Space: 3,
    April_Days: 30, April_Space: 6,
    May_Days: 31, May_Space: 1,
    June_Days: 30, June_Space: 4,
    July_Days: 31, July_Space: 6,
    August_Days: 31, August_Space: 2,
    September_Days: 30, September_Space: 5,
    October_Days: 31, October_Space: 7,
    November_Days: 30, November_Space: 3,
    December_Days: 31, December_Space: 5
};
let currentMonthWithVal = 0, currentMonthSpace = 0;

// Obiekt "Date":
(function() {
    const calMonth_Val = document.querySelector('div.cal-month-value');
    const calYear_Val = document.querySelector('div.cal-year-value');
    let today = new Date;
    let year = today.getFullYear();
    let month = today.getMonth();
    let date_Object = {calMonth_Val, calYear_Val, today, year, month};
    calYear_Val.textContent = date_Object.year;
    let ball_Target = date_Object.month;
    balls_Array[ball_Target].setAttribute('class', 'cal-fotter-balls-prop-style-2');
    if (date_Object.month == 0) {
        calMonth_Val.textContent = 'January';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.January_Days;   // Do - Zawartość - dni
        currentMonthSpace = year_2023_DaysPerMonth_Object.January_Space;
    } else if (date_Object.month == 1) {
        calMonth_Val.textContent = 'Febulary';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.Febulary_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.Febulary_Space;
    } else if (date_Object.month == 2) {
        calMonth_Val.textContent = 'March';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.March_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.March_Space;
    } else if (date_Object.month == 3) {
        calMonth_Val.textContent = 'April';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.April_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.April_Space;
    } else if (date_Object.month == 4) {
        calMonth_Val.textContent = 'May';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.May_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.May_Space;
    } else if (date_Object.month == 5) {
        calMonth_Val.textContent = 'June';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.June_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.June_Space;
    } else if (date_Object.month == 6) {
        calMonth_Val.textContent = 'July';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.July_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.July_Space;
    } else if (date_Object.month == 7) {
        calMonth_Val.textContent = 'August';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.August_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.August_Space;
    } else if (date_Object.month == 8) {
        calMonth_Val.textContent = 'September';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.September_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.September_Space;
    } else if (date_Object.month == 9) {
        calMonth_Val.textContent = 'October';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.October_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.October_Space;
    } else if (date_Object.month == 10) {
        calMonth_Val.textContent = 'November';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.November_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.November_Space;
    } else if (date_Object.month == 11) {
        calMonth_Val.textContent = 'December';
        currentMonthWithVal = year_2023_DaysPerMonth_Object.December_Days;
        currentMonthSpace = year_2023_DaysPerMonth_Object.December_Space;
    }
    console.log('Rok: ' + year + ' | Miesiąc: ' + date_Object.month + ' | Ilość dni: ' + currentMonthWithVal + ' | Ilość wolnych komórek: ' + currentMonthSpace);
}());

// Zawartość - miesiące:
calCon_MthBox_Array = [];
(function() {
    let = calCon_MthNm_Array = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const calCon_MthNm_Box = document.querySelector('div.cal-content-monthName-box');
    for (i = 0; i < calCon_MthNm_Array.length; i++) {
        calCon_MthBox_Array[i] = document.createElement('div');
        calCon_MthBox_Array[i].setAttribute('class', 'cal-content-monthName-prop');
        calCon_MthBox_Array[i].style.width = (100 / calCon_MthNm_Array.length) + '%';
        calCon_MthNm_Box.appendChild(calCon_MthBox_Array[i]);
        calCon_MthBox_Array[i].textContent = calCon_MthNm_Array[i];
    }
}());

// Zawartość - dni:
calCon_DayBox_Array = [];
(function() {
    const calCon_DayNum_Box = document.querySelector('div.cal-content-daysNum-box');
    for (i = 0; i < currentMonthWithVal; i++) {
        calCon_DayBox_Array[i] = document.createElement('div');
        calCon_DayBox_Array[i].setAttribute('class', 'cal-content-daysNum-prop');
        calCon_DayNum_Box.appendChild(calCon_DayBox_Array[i]);
        calCon_DayBox_Array[i].textContent = (i + 1);   // +1 bo zaczynamy od 0, a liczenie dni w kalendarzu rozpoczynamy od 1 i ostatni dzień byłby zaniżony o 1
    }
    calCon_DayBox_Array[0].style.gridColumn = currentMonthSpace;
    let today = new Date;
    day = today.getUTCDate();   // Nie wiem dalczego, ale trzeba było odjąć 1. Być może w ameryce jest dzień do przodu i to właśnie jet ten powód...
    calCon_DayBox_Array[day - 1].setAttribute('class', 'cal-content-daysNum-prop cal-content-daysNum-prop-current');
    console.log(day);
}());