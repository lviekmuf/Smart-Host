import { ChangeEvent, useContext, useState, Dispatch, SetStateAction } from "react"
import { Types } from "../context/reducers";
import { RoomContext } from "../context/RoomsContext";
import Button from "../components/Button";
import Input from "../components/Input";

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
            type: Types.setRooms,
            payload: { premium: Number(premiumRooms), economy: Number(economyRooms) }
        })
    }

    return <div className="flex-col">
        <div className="flex-col">
            <Input
                name="Free Premium rooms: "
                value={premiumRooms}
                onChange={handleRoomsChange(setPremiumRooms)}
                autoFocus
                testId="premium-rooms"
            />
            <Input
                name="Free Economy rooms:"
                value={economyRooms}
                onChange={handleRoomsChange(setEconomyRooms)}
                testId="economy-rooms"
            />
            <Button onClick={handleSubmit}/>
        </div>
    </div>

}
export default RoomsInfo