export default function (state, action) {
  switch (action.type) {
    case 'POPULATE':
      return action.payload;
    case 'REMOVE':
      return state.filter(team => team.id !== action.id);
    case 'ADD':
      return [...state, {id: action.id, name: action.name}];
    default:
      return state;
  }
}