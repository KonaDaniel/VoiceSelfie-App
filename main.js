var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){

    document.getElementById("text_box").innerHTML = "";

    recognition.start();

}

recognition.onresult = function(event){

    console.log(event);
    
    var Content = event.results[0][0].transscript;

    document.getElementById("text_box").innerHTML = Content;

    console.log(Content);

      if(Content == "Take my Selfie"){

          console.log("Taking Selfie");

          speak();
      }
}

function speak(){

    var synth = window.speechSynthesis;

    speak_data = "Taking Selfie in 5 Seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
}

camera = document.getElementById("camera");

Webcam.set({
    width: 360 ,
    height: 250 ,
    imgage_format: 'jpeg' ,
    jpeg_quality: 90 
});


