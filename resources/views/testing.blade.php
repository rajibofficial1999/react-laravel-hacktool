<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capture Photo</title>
    <script type="text/javascript" src="https://unpkg.com/webcam-easy/dist/webcam-easy.min.js"></script>
</head>
<body>
    <h1>Capture Photo</h1>
    <video id="webcam" autoplay playsinline width="640" height="480"></video>
    <canvas id="canvas" class="d-none"></canvas>
    {{-- <audio id="snapSound" src="audio/snap.wav" preload = "auto"></audio> --}}

    <button id="snap">Capture Photo</button>

    <script>
        const webcamElement = document.getElementById('webcam');
        const canvasElement = document.getElementById('canvas');
        // const snapSoundElement = document.getElementById('snapSound');
        const webcam = new Webcam(webcamElement, 'user', canvasElement);

        webcam.start();
    </script>
</body>
</html>
