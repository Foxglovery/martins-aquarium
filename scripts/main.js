// Import the FishList function from the correct module
import { getFish } from "./fish/database.js";
import { FishList } from "./fish/lister.js";
import { mostHolyFish } from "./fish/MostHoly.js";
import { soldierFish } from "./fish/MostHoly.js";
import { nonHolyFish } from "./fish/MostHoly.js";
import { tipList } from "./tips/MakeTips.js";
import { locationList } from "./locations/ListLocations.js";

const allFish = getFish()
for (const fish of allFish) {
    console.log(fish)
}

console.log(nonHolyFish())
console.log(locationList)


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish__el")
const tipHTMLElement = document.querySelector(".tip__el")
const locationHTMLElement = document.querySelector(".locale__el")
parentHTMLElement.innerHTML = FishList()
tipHTMLElement.innerHTML = tipList()
locationHTMLElement.innerHTML = locationList()
