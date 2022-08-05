let elSiteForm = document.querySelector(".fizzbuzz-form");
let elNumTaker = elSiteForm.querySelector(".num-taker");
let elInfoSender = elSiteForm.querySelector(".info-sender");
let elResultTaker = document.querySelector(".result-taker");

elSiteForm.addEventListener("submit", function(evt) {
  evt.preventDefault()

  let elNumTakerValue = elNumTaker.value;
  let fizzNum = "3";
  let buzzNum = "5";
  let zeroNum = "0";

  if (elNumTakerValue <= zeroNum){
    elResultTaker.textContent = "Write with positive number!"
  } else if (elNumTakerValue % fizzNum == zeroNum && elNumTakerValue % buzzNum == zeroNum) {
    elResultTaker.textContent = "FizzBuzz!"
  } else if (elNumTakerValue % fizzNum == zeroNum) {
    elResultTaker.textContent = "Fizz!"
  } else if (elNumTakerValue % buzzNum == zeroNum) {
    elResultTaker.textContent = "Buzz!"
  }
})