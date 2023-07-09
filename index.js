const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hourDigital = document.querySelector('.hour-digits');
const minDigital = document.querySelector('.min-digits');
const amPm = document.querySelector('.amPm');

const quote = document.querySelector('.coding-quote');

function setDate() {
    // Using the built in Date object to get the current date and time
    const now = new Date();

    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    // calculate the dergrees the hand needs to move each second, 
    // the +90 is to account for the transform: rotate(90deg); I set in CSS to make the default hand position 12 o'clock
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90; // Only need to divide by 12 here as analog clock is 12 hour time  
    
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // Fixes ticking glitch that previously occured every 60 seconds
    if (secondsDegrees === 90) {
        secondHand.style.transition = 'all 0s'; 
    } else {
        secondHand.style.transition = 'all 0.05s';
    }


    // Set Digital Time
    let amOrPm;
    let hoursDigital = hours;
    let minsDigital = mins;

    if (hours >= 12) {
        amOrPm = 'PM'
    } else {
        amOrPm = 'AM'
    }

    if (hours > 12) {
        hoursDigital = hours - 12;
    }

    if (mins < 10) {
        minsDigital = "0" + mins;
    }

    hourDigital.textContent = `${hoursDigital}`;
    minDigital.textContent = `${minsDigital}`;
    amPm.textContent = `${amOrPm}`;

    // Quote that changes 3 times per minute
    if (seconds < 20 ) {
        quote.textContent = '"Time spent coding is not time lost but time invested in shaping a better future through innovation."';
    } else if (seconds < 40) {
        quote.textContent = '"Time is the most valuable currency in coding. Spend it wisely, for it determines the quality and efficiency of your creation."';
    } else {
        quote.textContent = '"In the world of programming, time is both a constraint and an opportunity. Embrace it, for within its bounds lies the power to create."';
    }

    }

setInterval(setDate, 1000); // Runs the setDate function once every 1 second