// *********** JavaScript Here ********** //

// function depicting age value that will be typed by user within the inputs.

const age = () => {
    let chosenDay = document.querySelector("#day").value;
    console.log(chosenDay);
    let chosenMonth = document.querySelector('#month').value;
    console.log(chosenMonth);
    let chosenYear = document.querySelector('#year').value;
    console.log(chosenYear);

    // using the new Date() which will bring up the time from the new date chosen.
    let date = new Date();
    console.log(date);

    let newDay = date.getDay();
    console.log(newDay);
    let newMonth = 1 + date.getMonth();
    console.log(newMonth);
    let newYear = date.getFullYear();
    console.log(newYear);

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    console.log(month);

    // statement
    chosenDay > newDay ? newDay = newDay + month[newMonth - 1] : newMonth = newMonth - 1;

    chosenMonth > newMonth ? newMonth = newMonth + 12 : newYear = newYear - 1;

    let dayBeingChecked = newDay - chosenDay;
    console.log(dayBeingChecked);
    let monthBeingChecked = newMonth - chosenMonth;
    console.log(monthBeingChecked);
    let yearBeingChecked = newYear - chosenYear;
    console.log(yearBeingChecked);

    let yourActualAge = document.querySelector('#age-message')

    yourActualAge.innerHTML = `Your age is ${yearBeingChecked} years old, also you are ${monthBeingChecked} months and ${dayBeingChecked} days`;

}

