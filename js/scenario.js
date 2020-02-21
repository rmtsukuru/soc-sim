const game = {
    paused: false,
    update: () => {},
};

function setupGame() {
    game.update = updateClock;
}

function updateClock() {
    printToConsole('Current time is ' + new Date().toString());
}
