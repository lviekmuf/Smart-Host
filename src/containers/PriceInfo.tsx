import UsageInfo from "../components/UsageInfo";
import { useRoomsSelector } from "../context/roomsSelector";

const PriceInfo = () => {
    const { premium, economy } = useRoomsSelector()

    return <div className="flex-col">
        <div className="flex-col">
            <UsageInfo
                count={premium.count}
                price={premium.price}
                testId="usage-premium"
            />
            <UsageInfo
                count={economy.count}
                price={economy.price}
                testId="usage-economy"
            />
        </div>
    </div>

}
export default PriceInfo
