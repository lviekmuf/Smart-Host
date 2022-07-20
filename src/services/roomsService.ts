
const sort = (a: number, b: number) => a - b

const sum = (arr: Array<number>) => arr.reduce((partialSum: number, a) => partialSum + a, 0)

const getMaxElements = (arr: Array<number>, length: number) => {
    const sortedArray = arr.sort(sort);
    return sortedArray.slice(Math.max(sortedArray.length - length, 0))
}

const splitGuestsByPrice = (guests: Array<number>, price: number) => 
    guests.filter(guest => guest < price) //


export const getRoomsInfo = ({ 
    guests,
    minPremiumPrice,
    premium,
    economy
}: {
    guests: number[],
    minPremiumPrice: number,
    premium: number,
    economy: number
}) => {
    const lowerPaidGuests = splitGuestsByPrice(guests, minPremiumPrice)
    const usageEconomyCount = Math.min(lowerPaidGuests.length, economy)
    const usagePremiumCount = Math.min(guests.length - usageEconomyCount, premium)

    const premiumGuests = getMaxElements(guests, usagePremiumCount)
    const lowerPaidEconomyGuests = lowerPaidGuests.filter(guest => !premiumGuests.includes(guest))
    const economyGuests = getMaxElements(lowerPaidEconomyGuests, usageEconomyCount)

    return {
        premium: {
            count: premiumGuests.length,
            price: sum(premiumGuests)
        },
        economy: {
            count: economyGuests.length,
            price: sum(economyGuests)
        }
    }
}
