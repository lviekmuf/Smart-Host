import { createContext, useReducer } from "react";
import { roomReducer, RoomsInterface } from "./reducers";


const initialState: RoomsInterface = {
    usageRooms: {
        premium: 0,
        economy: 0
    },
    guests: [
        23,
        45,
        155,
        374,
        22,
        99,
        100,
        101,
        115,
        209
    ]
}
export const RoomContext = createContext<any | null>(null)


export const RoomProvider:React.FC = ({ children }: any) => {
    const [state, dispatch] = useReducer(roomReducer, initialState)
    const value = { state, dispatch }
    return (
        <RoomContext.Provider value={value} >{children} </RoomContext.Provider>
    );
}

export default RoomProvider

