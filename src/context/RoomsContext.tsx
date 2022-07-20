import { createContext, useReducer, Dispatch } from "react";
import { roomReducer, RoomsActions, RoomsInterface } from "./reducers";
import guests from "../data/guests.json"

const initialState: RoomsInterface = {
    usageRooms: {
        premium: 0,
        economy: 0
    },
    minPremiumPrice: 100,
    guests
}

export interface ContextInterface { state: RoomsInterface; dispatch: Dispatch<RoomsActions>; }

export const RoomContext = createContext<ContextInterface>({
    state: initialState,
    dispatch: () => null
})

export const RoomProvider: React.FC = ({ children }: any) => {
    const [state, dispatch] = useReducer(roomReducer, initialState)
    const value = { state, dispatch }
    return (
        <RoomContext.Provider value={value} >{children} </RoomContext.Provider>
    );
}

export default RoomProvider

