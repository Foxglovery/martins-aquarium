import { getTip } from "../fish/database.js";
export const tipList = () => {
    const tips = getTip()

    let htmlString = '<article class ="tip__list">'

    for (const tip of tips) {
        const nicheString= tip.niche
        const capitalNiche = nicheString.charAt(0).toUpperCase() + nicheString.slice(1);
        htmlString += `<section class= "tip__card">
        <h3>~${capitalNiche}~  
        <article class= "${tip.niche}__tip">${tip.text}</article>
          
        
        </section>
        `
        
    }
    htmlString += `</article>`

    return htmlString
}