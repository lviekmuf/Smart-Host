import { ChangeEvent, useContext, useState, Dispatch, SetStateAction } from "react"
import { Types } from "../context/reducers";
import { RoomContext } from "../context/RoomsContext";

const RoomsInfo = () => {
    const { dispatch, state } = useContext(RoomContext);
    const { economy, premium } = state.usageRooms
    const [premiumRooms, setPremiumRooms] = useState<number | undefined>(premium)
    const [economyRooms, setEconomyRooms] = useState<number | undefined>(economy)
    const handleRoomsChange = (setPrice: Dispatch<SetStateAction<number | undefined>>) =>
        (event: ChangeEvent<HTMLInputElement>) => {
            const rooms = Number(event.target.value)
            if (rooms >= 0) setPrice(rooms)
        }

    const handleSubmit = () => {
        dispatch({
            type: Types.setEconomy,
            payload: { rooms: Number(economyRooms) }
        })
        dispatch({
            type: Types.setPremium,
            payload: { rooms: Number(premiumRooms) }
        })
    }

    return <div className="flex-col">
        <div className="flex-col">
            <div className="flex gap-x-0.5 mb-2">
                <div className="pr-4">Free Premium rooms: { }</div>
                <input
                    type="number"
                    className="input input-xs w-16"
                    value={premiumRooms}
                    onChange={handleRoomsChange(setPremiumRooms)}
                />
            </div>
            <div className="flex gap-x-0.5  mb-2">
                <div className="pr-4">Free Economy rooms:</div>
                <input
                    type="number"
                    className="input input-xs w-16"
                    value={economyRooms}
                    onChange={handleRoomsChange(setEconomyRooms)}
                />
            </div>
            <div className="flex gap-x-0.5 mb-2">
                <button className="btn btn-outline btn-sm w-full" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>

}
export default RoomsInfo