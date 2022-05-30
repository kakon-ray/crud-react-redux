import { GET_DETAILS } from "../type";

const initialState = {
  details: [
    {
      id: 1,
      name: "Kakon Ray",
      email: "kakonroy043@gmail.com",
      country: "India",
    },
    {
      id: 2,
      name: "Angel Ray",
      email: "angel@gmail.com",
      country: "India",
    },
    {
      id: 3,
      name: "ANgeli Ray",
      email: "angeli@gmail.com",
      country: "Austrilia",
    },
    {
      id: 4,
      name: "Jak Ray",
      email: "jak@gmail.com",
      country: "India",
    },
  ],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return state;

    default:
      return state;
  }
};

export default Reducer;
