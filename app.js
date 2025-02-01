const start = () => displaySection("menu-section");
const choose = () => displaySection("timer-section");
const stop = () => displaySection("done-section");
const finish = () => displaySection("start-section");

const displaySection = (sectionId) => {
    // hide all section elements except section in parameter
    document.querySelectorAll("section").forEach(el => el.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
};


const startTimerFast = () => startTimer(10);
const startTimerSoft = () => startTimer(3 * 60);
const startTimerHard = () => startTimer(7 * 60);

const startTimer = (seconds) => {
    choose();
    const timerDisplay = document.getElementById("timer");
    let duration = seconds;

    const timerStep = () => {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = `${minutes}:${seconds}`;

        if (duration <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "";
            stop();
        }
        duration--;
    };
    timerStep();  // remove initial delay
    const countdown = setInterval(timerStep, 1000);

};
