<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>딸도우미</title>
    <link rel="stylesheet" type="text/css" href="embed.css">
</head>
<body>
    <div id="video-section-container">
        <!-- video-section-container -->
        <div class="video-ads-top">
            <a href="" target="_blank">
                <img src="img/thisisit.jpg" alt="hi">
            </a>
        </div>
        <div id="view-video">
            <!-- view-video -->
            <video id="playingvid" preload="none" controls="controls" controlsList="nodownload" autoplay="autoplay">
                <source src="videos/nobela.mp4" type="video/mp4" />
                <source src="videos/nobela.mp4" type="video/webm" />
                <source src="videos/nobela.mp4" type="video/ogg" />
            </video>
          
            <!-- modal-ads-container -->
            <div id="modal-ads-container">
                <div id="modal-ads-content">
                    <button id="close-ads-button">x</button>
                    <a href="" target="_blank">
                        <img src="img/thisisit.jpg" alt="hi">
                    </a>
                </div>
            </div>
        </div><!-- view-video -->
    </div><!-- video-section-container -->

    <script src="js/jquery-3.4.1.min.js"></script>

    <script type="text/javascript">
        setTimeout(function () {
            $('#modal-ads-container').css({ 'display': 'block' });
            $('#playingvid')[0].pause();
        }, 10000);

        $('#modal-ads-container #close-ads-button').click(function () {
            $('#modal-ads-container').hide();
            $('#playingvid')[0].play();
        });
    </script>
</body>
</html>