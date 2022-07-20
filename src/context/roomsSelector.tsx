import { useContext } from "react";
import { getRoomsInfo } from "../services/roomsService";
import { RoomContext } from "./RoomsContext";

export const useRoomsSelector = () => {
    const { state } = useContext(RoomContext);
    const { guests, minPremiumPrice } = state
    const { premium, economy } = state.usageRooms
    return getRoomsInfo({ guests, minPremiumPrice, premium, economy })
}