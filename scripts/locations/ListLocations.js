// Import the function that returns a copy of the fish array
import { getLocation } from "../fish/database.js"

export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocation()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="location__List">'

    // Create HTNL representations of each fish here
    for (const loca of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="location__card">
            <div><img  class="location__image image--card" src="${loca.image}" /></div>
            <div class="locations__blurb">${loca.name}</div>
            <div class="locations__blurb">${loca.date}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}