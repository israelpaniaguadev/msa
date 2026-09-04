let k = 0;
let vrun = true;
function setLoad() {
    if (vrun) {
        switch (k) {
            case 1:
                document.getElementById('txt').innerHTML = ">---";
                break;
            case 2:
                document.getElementById('txt').innerHTML = "->--";
                break;
            case 3:
                document.getElementById('txt').innerHTML = "-->-";
                break;
            case 4:
                document.getElementById('txt').innerHTML = "--->";
                break;
            default:
                document.getElementById('txt').innerHTML = "----";
                k = 0;
                break;
        }
        k = k + 1;
        setTimeout(setLoad, 500);
    }
}

function setStart() {
    vrun = true;
    setLoad();
}

function setStop() {
    vrun = false;
}

function update() {
    var element = document.getElementById("myprogressBar");
    var width = 1;
    var identity = setInterval(scene, 10);
    function scene() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
        }
    }
}

function pBar() {
    var i = 0;
    var bar = document.querySelector(".progress-bar");
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