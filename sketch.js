let sentiment;
let statusEl;
let submitBtn;
let inputBox;
let sentimentResult;

function setup() {
  noCanvas();
  // initialize sentiment
  sentiment = ml5.sentiment("movieReviews", modelReady);

  // setup the html environment
  statusEl = createP("⏳ Loading Model...");
  inputBox = createInput(
    "p5.js is a community interested in exploring the creation of art and design with technology. We are a community of, and in solidarity with, people from every gender identity and expression, sexual orientation, race, ethnicity, language, neuro-type, size, ability, class, religion, culture, subculture, political opinion, age, skill level, occupation, and background. We acknowledge that not everyone has the time, financial means, or capacity to actively participate, but we recognize and encourage involvement of all kinds. We facilitate and foster access and empowerment. We are all learners. We like these hashtags: #noCodeSnobs (because we value community over efficiency), #newKidLove (because we all started somewhere), #unassumeCore (because we don't assume knowledge), and #BlackLivesMatter (because of course)."
  );
  inputBox.attribute("size", "64");
  submitBtn = createButton("🚀 submit");
  sentimentResult = createP("🧠 sentiment score:");

  // predicting the sentiment on mousePressed()
  submitBtn.mousePressed(getSentiment);
}

function getSentiment() {
  // get the values from the input
  const text = inputBox.value();

  // make the prediction
  const prediction = sentiment.predict(text);

  // display sentiment result on html page
  sentimentResult.html("🧠 Sentiment score: " + prediction.score);

  // display visual sentiment result
  if (prediction.score > 0.5) {
    createP("💖 Sentiment result: positive 👍");
  } else {
    createP("🖤 Sentiment result: negative 👎");
  }
}

function modelReady() {
  // model is ready
  statusEl.html("💡 model loaded");
}
