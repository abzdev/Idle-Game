var button,
  money = 0,
  displayMoney,
  displayPrice,
  clickerPrice = 10,
  displayClickers,
  autoClickerButton,
  buttonIsCreated = false;

var autoClickers = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  button = createButton("Click Me");
  button.position(100, 100);
  displayMoney = createElement("h1");
  displayMoney.position(200, 70);
  displayClickers = createElement("h1");
  displayClickers.position(450,70);
  displayPrice = createElement("h1");
  displayPrice.position(635,120);
}

function draw() {
  background("grey");
  displayMoney.html("$" + money.toFixed(1));
  displayPrice.html("Price: $" + clickerPrice.toFixed(1));
  displayPrice.style('color','#ff0000');
  displayClickers.html("Autoclickers owned: " + autoClickers.length);
  button.mousePressed(() => {
    money++;
  });

  if (money >= clickerPrice) {
    autoClickerButton = createButton("Buy Auto Clicker");
    autoClickerButton.position(300,100);
    displayPrice.style('color','#00ff00');
    buttonIsCreated = true;
  }
  if (buttonIsCreated === true) {
    autoClickerButton.mousePressed(() => {
      if (money >= clickerPrice){
        money -= clickerPrice;
        autoClickers.push(new AutoClicker());
        clickerPrice += 0.1;
      }
    });
    
    if (frameCount % 60 === 0) {
      for(var i = 0; i < autoClickers.length; i++) {
        money++;
      }
    }
  }
}
