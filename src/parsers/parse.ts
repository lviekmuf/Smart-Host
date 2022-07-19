export const getRooms = (room: number[]) => {
    return room
}

const getTotalCost = (costs: number[]) =>
    costs.reduce((accumulator: number, curr: number) => accumulator + curr)


const getFreePremiumGuests = (guests: number[], minCost: number): number[] => {
    return guests.filter((guest => minCost <= guest))
}

const getFreeEconomyGuests = (guests: number[], maxCost: number): number[] => {
    return guests.filter((guest => maxCost > guest))
}

const getPremiumRooms = (guests: number[], premiumRooms: number) => {
    const freePremiumGuests = getFreePremiumGuests(guests, 100)
    return Math.max(freePremiumGuests.length, premiumRooms)
}

const gropGuests = (guests: number[]) => {
    const premiumGuests = guests.filter(guest => guest >= 100)
    const economGuests = guests.filter(guest => guest < 100)
}
