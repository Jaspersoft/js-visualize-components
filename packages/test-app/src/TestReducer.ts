export default function TestReducer(state: any, action: any) {
  console.log("state: ", state, " action: ", action);
  if (action.type === "bump") {
    if (state.store >= 10) state.store = 0;
    return {
      store: state.store + 1,
    };
  }
}
