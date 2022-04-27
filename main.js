function setup(){
    canvas = createCanvas(280, 280);
    canvas. center();
    background("grey")
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis
}

function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}

function clearCanvas(){
    background("grey")
}

function gotResult(error, results) {
    if (error) {
      console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
  
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
  
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
  }

  function draw() {
      strokeweight(13);
      stroke(0);
      if (mousIsPressed) {
          line(pmousex, pmouseY, mouseX, mouseY);
      }
  }
  
  function classifyCanvas() {
      classifier.classify(canvas, gotResult);
  }