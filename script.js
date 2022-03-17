// *********** JavaScript Here ********** //

let validateForm = document.querySelector('form');

// function depicting age value that will be typed by user within the inputs.

const age = () => {
    let chosenDay = document.querySelector("#date").value;
    //console.log(chosenDay);
    let chosenMonth = document.querySelector('#month').value;
    //console.log(chosenMonth);
    let chosenYear = document.querySelector('#year').value;
    //console.log(chosenYear);
    // using the new Date() which will bring up the time from the new date chosen.
    let date = new Date();
    console.log(date);

    let newDay = date.getDate();
    //console.log(newDay);
    let newMonth = 1 + date.getMonth();
    //console.log(newMonth);
    let newYear = date.getFullYear();
    //console.log(newYear);

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

     //console.log(dateOfBirth);
    let appear = document.querySelector('.granted')
    let under = document.querySelector('.not')

    if (yearBeingChecked > 18) {
        appear.classList.add('.granted')
        under.style.display = 'none';
        appear.style.display = 'flex';
        appear.style.color = 'var(--pastel-green)';
        appear.style.backgroundColor = 'var(--dark-purple)';
        appear.innerHTML = `your age is ${yearBeingChecked} so you are eligible for benefits`;
        return false;
    }
    if (monthBeingChecked < 0 || (monthBeingChecked == 0 && yearBeingChecked < 0)) {
        yearBeingChecked = parseInt(yearBeingChecked) - 1;


    }
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


validateForm.addEventListener('submit', (event) => {
    event.preventDefault()
    age();
   
});


