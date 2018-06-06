

$('#mute-toggle').on('click', function() {
    var mute_toggle = $(this); // The button

    if(player.isMuted()){
        player.unMute();
        mute_toggle.text('P1 mute');
    }
    else{
        player.mute();
        mute_toggle.text('P1 un-mute');
    }
});

$('#mute-toggle1').on('click', function() {
    var mute_toggle = $(this); // The button

    if(player1.isMuted()){
        player1.unMute();
        mute_toggle.text('P2 mute');
    }
    else{
        player1.mute();
        mute_toggle.text('P2 un-mute');
    }
});

$('#mute-toggle2').on('click', function() {
    var mute_toggle = $(this); // The button

    if(player2.isMuted()){
        player2.unMute();
        mute_toggle.text('P3 mute');
    }
    else{
        player2.mute();
        mute_toggle.text('P3 un-mute');
    }
});

$('#mute-toggle3').on('click', function() {
    var mute_toggle = $(this); // The button

    if(player3.isMuted()){
        player3.unMute();
        mute_toggle.text('P4 mute');
    }
    else{
        player3.mute();
        mute_toggle.text('P4 un-mute');
    }
});
