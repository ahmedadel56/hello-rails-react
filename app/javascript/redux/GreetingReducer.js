export const GET_GREETINGS = 'easy-learn/frontEnd/GET_GREETINGS';
const URL = 'http://127.0.0.1:3000/greetings';
const initialState = {
  greetings: [],
};

const getGreetings = (payload) => ({
  type: GET_GREETINGS,
  payload,
});

export const fetchGreetings = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((info) => {
      return Promise.all(info);
    }).then((info) => dispatch(getGreetings(info)));
};

const GreetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return { ...state, greetings: action.payload, mutation: action.payload };
    default:
      return state;
  }
};

export default GreetingReducer;
