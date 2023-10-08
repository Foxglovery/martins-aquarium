/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            species:"Fugu Fugu",
            name: "Bart",
            food: "crustaceans",
            size: 3,
            location: "San Tropez",
            image: "https://worldoftopia.com/wp-content/uploads/2022/05/Sheepshead-wrasse-1024x683.jpg"
        },{
            species:"Ostio Partak",
            name: "Eno",
            food: "human flesh",
            size: 1,
            location: "Maldives",
            image: "https://ca-times.brightspotcdn.com/dims4/default/19f8bab/2147483647/strip/true/crop/800x450+0+41/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F20%2F3d%2F76d0e12979356a28ff11a8e7ef33%2Fla-sea-sponge-mauricio-handler-20130927"
        },{
            species:"Cumbaroo Oolangh",
            name: "Steven",
            food: "mermaid songs",
            size: 25,
            location: "Antartica",
            image: "https://d.newsweek.com/en/full/1952902/striated-frogfish.jpg?w=1600&h=1600&q=88&f=f84597afb49240b505dd6d04d959d730"
        }
            
        
    ],
    tips: [
        {
            niche: "salinity",
            text: "Salt will raise salinity. Go Figure!"
        },{
            niche: "cleanliness",
            text: "Yo, clean that thing!"
        },{
            niche: "temperature",
            text: "Think Ceviche. Not Gumbo"
        }
    ],
    locations: [
        {
            name: "The Big Blue Maw",
            date: "3/12/2020",
            image: "https://media.cntraveler.com/photos/5669ae37c3c9e01555a4eabe/4:3/w_935,h_701,c_limit/strangest-sublime-places-tout.jpg"
        },{
            name: "Krankmore Quay",
            date: "8/24/2021",
            image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/08/Ca%C3%B1o-Cristales.jpg"
        },{
            name: "Dumpleborowitz Mine",
            date: "11/11/1931",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUTExVcYUVWFqv9WHKCo1cT2Oyo3k3RGBWsw&usqp=CAU"
        },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish})) //creates constant that is function that gets map of this array
}

export const getTip = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocation = () => {
    return database.locations.map(locations => ({...locations}))
}