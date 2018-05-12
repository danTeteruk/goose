const initialState = {
  products: [
    { name: 'pets', alias: 'pet', id: 1, selected: false, suggested: [2,3], isSuggested: false },
    { name: 'health', alias: 'cra', id: 2, selected: false, suggested: [], isSuggested: false },
    { name: 'car', alias: 'bil', id: 3, selected: false, suggested: [], isSuggested: false },
    { name: 'house', alias: 'war', id: 4, selected: false, suggested: [], isSuggested: false },
  ],
  rows: 4,
  color: 'green',
  suggested: [],
  theme: 'default',
  max: 40
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "SHOW_ALL":
      return { ...state, max: 10000 }

    case "TOGGLE_PRODUCT":
      return Object.assign({}, state, { products: state.products.map(item => {
        if (item.id === action.payload) {
          item.selected = !item.selected;
          return item;
        } else {
          return item;
        }
      })} );

    case "CHECK_SUGGESTED":
      let actives = []
      state.products.forEach(item => {
        if (item.selected) { actives = actives.concat(item.suggested) }
      });
      return Object.assign({}, state, { products: state.products.map(item => {
        item.isSuggested = false;
        if (actives.indexOf(item.id) !== -1) {
          item.isSuggested = true;
        }

        return item;
      })} );

    default:
      return state;
  }
};


export function showAll() {
  return { type: 'SHOW_ALL' }
}

export function toggleProduct(payload) {
  return { type: 'TOGGLE_PRODUCT', payload }
}

export function checkSuggested(payload) {
  return { type: 'CHECK_SUGGESTED', payload }
}
