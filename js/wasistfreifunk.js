$(document).ready(function() {
    projekktor('#player_a', {
    title: 'Was ist Freifunk?',
    playerFlashMP4: '/assets/media/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
    playerFlashMP3: '/assets/media/swf/StrobeMediaPlayback/StrobeMediaPlayback.swf',
    width: 640,
    height: 385,
    playlist: [
        {
        0: {src: "/assets/media/freifunk.mp4", type: "video/mp4"},
        1: {src: "/assets/media/freifunk.webm", type: "video/webm"}
        }
    ]
    }, function(player) {} // on ready 
    );
});

