document.addEventListener("mouseover", e => {
    if (e.target.className == 'rgbtext') {
        const setRed = setInterval(() => {
            e.target.style.color = 'red'
        }, 1000);
        const setGreen = setInterval(() => {
            e.target.style.color = 'green'
        }, 2000);
        const setBlue = setInterval(() => {
            e.target.style.color = 'blue'
            setRed
        }, 3000);
    }
});