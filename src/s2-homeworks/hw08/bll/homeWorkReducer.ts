import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            return action.payload === "up"
                ? copyState.sort((a,b) => a.name.localeCompare(b.name))
                : copyState.sort((a,b) => b.name.localeCompare(a.name))
            // need to fix
        }
        case 'check': {
            let copyState = [...state]
            return copyState.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}
