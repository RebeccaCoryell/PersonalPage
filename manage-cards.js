function addCard(interest) {
    var x1 = document.getElementById("interest_1");
    var x2 = document.getElementById("interest_2");
    var x3 = document.getElementById("interest_3");
    
    var tweet = document.createElement("DIV");
    var button = document.createElement("DIV");
    var title = document.createElement("H5");
    var text = document.createElement("P");
    var image = document.createElement("IMG");
    var body = document.createElement("DIV");
    // set up elements within the card (button)
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-danger btn-sm ml-auto");
    button.setAttribute("onclick", "deleteCard("+interest+")");
    button.innerText = "x";

    // set up image for the card
    image.setAttribute("class", "card-img-top mx-auto");
    image.setAttribute("src", "https://logodix.com/logo/512378.png");
    image.setAttribute("alt", "Twitter Logo");

    // set up text and title
    title.setAttribute("class", "card-title ml-auto");
    title.innerHTML = "Tweet";
    text.setAttribute("class", "card-text ml-auto");
    text.innerHTML = "Sample tweet will go here.";

    // set up body
    body.setAttribute("class", "card-body ml-auto");
    body.appendChild(title);
    body.appendChild(text);

    // set up the card
    tweet.setAttribute("class", "card");
    tweet.setAttribute("style", "width:15rem; margin:auto")
    tweet.setAttribute("id", "interest_card"+interest);
    tweet.appendChild(button);
    tweet.appendChild(image);
    tweet.appendChild(body);
    
    // add tweet to the original card:
    if(interest == 1) {
        x1.appendChild(tweet);
    }
    if(interest == 2) {
        x2.appendChild(tweet);
    }
    if(interest == 3) {
        x3.appendChild(tweet);
    }
}

function deleteCard(interest) {
    var tweet = document.getElementById("interest_card"+interest);
    tweet.remove();
}