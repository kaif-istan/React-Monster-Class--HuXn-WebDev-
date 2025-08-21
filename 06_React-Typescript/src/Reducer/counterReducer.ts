type Action = { type: "Increment" } | { type: "Decrement" };
type State = {
  count: number;
};
const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "Increment": {
      return { count: state.count + 1 };
    }
    case "Decrement": {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
