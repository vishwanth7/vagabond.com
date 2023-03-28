function calculatePrice() {
    // Get the input values from the form
    var cropName = document.getElementById("crop").value;
    var harvestDate = new Date(document.getElementById("date").value);
    var quantityHarvested = parseFloat(document.getElementById("quantity").value);
  
    // Calculate the price fluctuation based on factors such as supply and demand, weather conditions, and market trends
    // For this example, let's assume the price fluctuation is random between -10% and +10%
    var priceFluctuation = Math.random() * (0.1 - (-0.1)) + (-0.1);
  
    // Calculate the current price based on the price fluctuation and the quantity harvested
    // For this example, let's assume the base price is $2 per kg
    var currentPrice = 2 * (1 + priceFluctuation) * quantityHarvested;
  
    // Format the current price to 2 decimal places
    currentPrice = currentPrice.toFixed(2);
  
    // Display the result to the user
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "The current price of " + quantityHarvested + " kg of " + cropName + " harvested on " + harvestDate.toDateString() + " is Rs" + currentPrice;
  }