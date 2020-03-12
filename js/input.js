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

    $('.view-tabs > button').click(e => {
        const view = $(e.target).data('view');
        $('.view-container > div').hide();
        $('.view-container > #view-' + view).show();
    });
}
