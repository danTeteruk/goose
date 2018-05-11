const initialState = {
  data: {
    products: [
      { name: 'pets' },
      { name: 'health' },
      { name: 'car' },
      { name: 'house' },
    ],
    rows: 3,
    color: 'red',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
