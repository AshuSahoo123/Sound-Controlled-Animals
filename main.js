function StartClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gthmMuPsf/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }

    random_r = Math.floor(Math.random() * 255) + 1;
    random_g = Math.floor(Math.random() * 255) + 1;
    random_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = "I can hear -> " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy -> " + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
    document.getElementById("result_confidence").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
  
    img1 = document.getElementById("Main");

    if (results[0].label == "cat") {
      img1.src = "Cat.webp";
    } 
    else if (results[0].label == "dog") {
      img1.src = "Dog.jpg";
    }
    else if (results[0].label == "mouse") {
      img1.src = "Mouse.jpg";
    }
    else {
      img1.src = "Background.webp";
    }
}