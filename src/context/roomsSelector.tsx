import { useContext } from "react";
import { RoomContext } from "./RoomsContext";

const sort = (a: number, b: number) => a - b

const sum = (arr:Array<number>) => arr.reduce((partialSum:number, a) => partialSum + a, 0)

const getMaxElements = (arr: Array<number>, length: number) => {
    const sortedArray = arr.sort(sort);
    return sortedArray.slice(Math.max(sortedArray.length - length, 0))
}

const splitGuestsByPrice = (guests: Array<number>, price: number) => ({
    higherPaidGuests: guests.filter(guest => guest >= price),
    lowerPaidGuests: guests.filter(guest => guest < price)
})

const getUsagePremiumRooms = ({ premium, economy, higherPaidGuestsCount, lowerPaidGuestsCount }:any) => {
    const premiumCount = Math.min(higherPaidGuestsCount, premium)
    const isFreeEconomyRooms = economy > lowerPaidGuestsCount.length
    const freePremiumRooms = premium > premiumCount && !isFreeEconomyRooms ? premium - premiumCount : 0
    return premiumCount + freePremiumRooms
}

export const useRoomsSelector = () => {
    const { state } = useContext(RoomContext);
    const { guests, minPremiumPrice } = state
    const { premium, economy } = state.usageRooms
    const { higherPaidGuests, lowerPaidGuests } = splitGuestsByPrice(guests, minPremiumPrice)

    const usagePremiumCount = getUsagePremiumRooms(
        {
            premium,
            economy,
            higherPaidGuestsCount: higherPaidGuests.length,
            lowerPaidGuestsCount: lowerPaidGuests.length
        }
    )
    const usageEconomyCount = Math.min(lowerPaidGuests.length, economy)    
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
