function Clock(clockNode) {
    this.formatFull = true;
    this.clockNode = clockNode;
    clockNode.addEventListener('click', () => {
        this.formatFull = !this.formatFull;
        this.render();
    });
}

Clock.prototype.render = function () {
    let time = new Date().toTimeString().split(' ')[0];

    if (!this.formatFull) {
        time = new Date().toTimeString().split(' ')[0].substring(0,5);
    }

    this.clockNode.innerHTML = time;
}

Clock.prototype.start = function () {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
}

Clock.prototype.stop = function () {
    clearInterval(this.timer);
}

Clock.prototype.setFormat = function (format = 'full') {
    this.formatFull = format === 'short' ? false : true;
}

const clock = new Clock(document.querySelector('#clock1'));
const clock2 = new Clock(document.querySelector('#clock2'));

clock.start();
clock2.setFormat('short');
clock2.start();