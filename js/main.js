$(() => {
    setupInput();
    setupGame();

    const update = () => {
        if (!game.paused) {
            game.update();
        }
    };
    setInterval(update, 1000);
});
