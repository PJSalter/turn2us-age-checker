// *********** JavaScript Here ********** //

// picking up the form element.
let validateForm = document.querySelector('form');

// function depicting age value that will be typed by user within the inputs.

const age = () => {
    // picking up each id attribute for all day, month and year id attributes.
    let chosenDay = document.querySelector("#date").value;
    //console.log(chosenDay);
    let chosenMonth = document.querySelector('#month').value;
    //console.log(chosenMonth);
    let chosenYear = document.querySelector('#year').value;
    //console.log(chosenYear);
    // using the new Date() which will bring up the time from the new date chosen.
    let date = new Date();
    //console.log(date);

    // returning the day of the month.
    let newDay = date.getDate();
    //console.log(newDay);
    // returns the specified month plussing one.
    let newMonth = 1 + date.getMonth();
    //console.log(newMonth);
    // returns the year of specified year
    let newYear = date.getFullYear();
    //console.log(newYear);

    // a numbered length for each month for all 12 months in a year. 
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    //console.log(month);

    // statement

    if(chosenDay > newDay) {
        newDay = newDay + month[newMonth - 1];
        newMonth = newMonth - 1;
    }
    
    if (chosenMonth > newMonth) {
        newMonth = newMonth + 12;
        newYear = newYear - 1;
    }

    let dayBeingChecked = newDay - chosenDay;
    //console.log(dayBeingChecked);
    let monthBeingChecked = newMonth - chosenMonth;
    //console.log(monthBeingChecked);
    let yearBeingChecked = newYear - chosenYear;
    //console.log(yearBeingChecked);


    let yourActualAge = document.querySelector('#age-message')
    yourActualAge.style.display = 'flex';
    yourActualAge.style.color = 'var(--orange-sunset)';
    yourActualAge.innerHTML = `Your age is ${yearBeingChecked} years old, also you are ${monthBeingChecked} months and ${dayBeingChecked} days`;

     //picking up the classes for granted and not within there individual <span> elements.
    let appear = document.querySelector('.granted')
    let under = document.querySelector('.not')

    // if the age is more than or over 18 then appear with a message to user that they are eligible for benefits.
    // styling for colours in JavaScript.
    if (yearBeingChecked > 18) {
        appear.classList.add('.granted')
        under.style.display = 'none';
        appear.style.display = 'flex';
        appear.style.color = 'var(--pastel-green)';
        appear.style.backgroundColor = 'var(--dark-purple)';
        appear.innerHTML = `your age is ${yearBeingChecked} so you are eligible for benefits`;
        return false;
    } 
    //if month is less than zero. pass the age as an integer with parseInt method.
    if (monthBeingChecked < 0 || (monthBeingChecked == 0 && yearBeingChecked < 0)) {
        yearBeingChecked = parseInt(yearBeingChecked) - 1;
    
    } 
    // if not eligible for benefits then negative message appears with red styled colour in JavaScript
    // if 18 or less than that age.
    if ((yearBeingChecked == 18 && monthBeingChecked <= 0 && dayBeingChecked <= 0) || yearBeingChecked < 18) {
        under.classList.add('.not')
        appear.style.display = 'none';
        under.style.display = 'flex';
        under.style.color = 'var(--ruby-retro-red)';
        under.style.backgroundColor = 'var(--pastel-pink)';
        under.innerHTML = `You are ${yearBeingChecked} which states that you are too young for benefits`;
        return false;
    }
    

}

// handling an event which handles the form to submit which enables the called function age().
validateForm.addEventListener('submit', (event) => {
    //if the event does not get handled particularly then its default action should not be taken as it normally would be.
    event.preventDefault()
    // calling the function in the handler.
    age();
});


