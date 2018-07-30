export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {numberofPresents: state.count + 1}
    default:
      return state;
  }
}
