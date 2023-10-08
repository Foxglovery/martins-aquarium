import { getFish } from "./database.js"
const holyFishArray = getFish()
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    
    const holyFish = []

    for (const fish of holyFishArray) {
        if (fish.size % 3 === 0) {
            holyFish.push(fish)
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []
    
    for (const fish of holyFishArray) {
        if (fish.size % 5 === 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const fish of holyFishArray) {
        if (fish.size % 3 != 0 && fish.size % 5 != 0)
        regularFish.push(fish)
    }
    return regularFish
}
