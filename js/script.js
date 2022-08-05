let elSiteForm = document.querySelector(".fizzbuzz-form");
let elNumTaker = elSiteForm.querySelector(".num-taker");
let elInfoSender = elSiteForm.querySelector(".info-sender");
let elResultTaker = document.querySelector(".result-taker");

elSiteForm.addEventListener("submit", function(evt) {
  evt.preventDefault()

  let elNumTakerValue = elNumTaker.value;

  if (elNumTakerValue <= 0){
    elResultTaker.textContent = "Write with positive number!"
  } else if (elNumTakerValue % 3 == 0 && elNumTakerValue % 5 == 0) {
    elResultTaker.textContent = "FizzBuzz!"
  } else if (elNumTakerValue % 3 == 0) {
    elResultTaker.textContent = "Fizz!"
  } else if (elNumTakerValue % 5 == 0) {
    elResultTaker.textContent = "Buzz!"
  }
})