function setupInput() {
    $('#pauseButton').click(e => {
        if (game.paused) {
            $(e.target).text('Pause');
        }
        else {
            $(e.target).text('Resume');
        }
        game.paused = !game.paused;
    });
}
