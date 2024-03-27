"use strict";

function checkingPalindrome(testString) {
  var testSepTestString = testString.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  var testCheckingPalindrome = testSepTestString.split("").reverse().join("");

  if (!testString) {
    document.querySelector("#result").textContent = "No word entered";
    window.alert("Please input a value");
  } else if (testSepTestString === testCheckingPalindrome) {
    document.querySelector(
      "#result"
    ).innerHTML = `"<span class="palindrome">${testString}</span> is a palindrome"`;
  } else {
    document.querySelector(
      "#result"
    ).innerHTML = `"<span class="palindrome">${testString}</span> is not a palindrome"`;
  }
}

document.querySelector("#check-btn").addEventListener("click", function () {
  const testString = document.querySelector("#text-input").value;
  checkingPalindrome(testString);
});
