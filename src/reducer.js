export default function (state, action) {
  switch (action.type) {
    case 'POPULATE':
      return action.payload;
    case 'REMOVE':
      return state.filter(team => team.id !== action.payload);
    case 'ADD':
      return [...state, action.payload];
    default:
      return state;
  }
}