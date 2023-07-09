const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // Using the built in Date object to get the current date and time
    const now = new Date();

    const seconds = now.getSeconds();
    // calculate the dergrees the hand needs to move each second, 
    // the +90 is to account for the transform: rotate(90deg); I set in CSS to make the default hand position 12 o'clock
    const secondsDegrees = ((seconds / 60) * 360) + 90;  
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90; // Only need to divide by 12 here as analog clock is 12 hour time
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

setInterval(setDate, 1000); // Runs the setDate function once every 1 second