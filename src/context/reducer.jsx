export function MusicReducer(state , action){
    switch (action.type) {
        case "next": return {
            ...state,
            currentsong : state.currentsong >= state.songs.length - 1 ? 0 : state.currentsong + 1
        }
        case "setsong": return {
            ...state,
            currentsong : action.payload.id
        }
        default:
            break;
    }
}