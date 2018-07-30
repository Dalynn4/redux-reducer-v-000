export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
    let newfriends = state.friends.push(action.friend)
      return {friends: newfriends}
    case 'REMOVE_FRIEND':
    return {}
    default:
      return state;
  }
}
