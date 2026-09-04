function setLoad(pID) {
    var i = 0;
    // var bar = document.querySelector(".progress-bar");
    var bar = document.getElementById(pID);
    function makeProgress() {
        if (i < 100) {
            i = i + 1;
            bar.style.width = i + "%";
            //bar.innerText = i + "%";
        }

        // Wait for sometime before running this script again
        setTimeout(makeProgress, 20);
    }
    makeProgress();
}