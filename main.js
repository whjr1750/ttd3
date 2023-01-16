Webcam.attach( '#camera' ); //code moved up

camera = document.getElementById("camera"); //code moved up

Webcam.set({
    width: 500,
    height: 500,
    image_format: 'png',
    png_quality: 100,
    force_flash: true
});

// camera = document.getElementById("camera");

// Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
