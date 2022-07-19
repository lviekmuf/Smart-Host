type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    setPremium = 'SET_PREMIUM',
    setEconomy = 'SET_ECONOMY',
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
    [Types.setPremium] : {
      rooms: number
    };
    [Types.setEconomy]: {
      rooms: number;
    }
  }
export type RoomsActions = ActionMap<RoomsPayload>[keyof ActionMap<RoomsPayload>];

export const roomReducer = (state: RoomsInterface, action: RoomsActions) => {
    switch (action.type) {
        case Types.setPremium: {
            return { ...state, usageRooms: { ...state.usageRooms, premium: action.payload.rooms } }
        }
        case Types.setEconomy: {
            return { ...state, usageRooms: { ...state.usageRooms, economy: action.payload.rooms } }
        }
        default: {
            return state
        }
    }
}
