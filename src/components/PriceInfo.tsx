import { useRoomsSelector } from "../context/roomsSelector";

const PriceInfo = () => {
    const { premium, economy } = useRoomsSelector()

    return <div className="flex-col">
        <div className="flex-col">
            <div className="flex gap-x-0.5">
                <div className="pr-4" data-testid="usage-premium">Usage Premium: {premium.count} (EUR {premium.price})</div>
            </div>
            <div className="flex gap-x-0.5">
                <div className="pr-4"  data-testid="usage-economy">Usage Economy: {economy.count} (EUR {economy.price})
            </div>
            </div>
        </div>
    </div>

}
export default PriceInfo
