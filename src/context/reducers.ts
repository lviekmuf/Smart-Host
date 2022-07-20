type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    setPremium = 'SET_PREMIUM',
    setEconomy = 'SET_ECONOMY',
    setRooms = 'SET_ROOMS',
}

export interface RoomsInterface {
    usageRooms: {
        premium: number;
        economy: number;
    };
    minPremiumPrice: number;
    guests: number[];
}

type RoomsPayload = {
    [Types.setRooms]: {
        premium: number;
        economy: number;
    }
}

export type RoomsActions = ActionMap<RoomsPayload>[keyof ActionMap<RoomsPayload>];

export const roomReducer = (state: RoomsInterface, action: RoomsActions) => {
    switch (action.type) {
        case Types.setRooms: {
            return { ...state, usageRooms: action.payload }
        }
        default: {
            return state
        }
    }
}

