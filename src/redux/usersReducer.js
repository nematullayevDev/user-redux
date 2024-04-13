const defaulState = {
  users: [],
};

export function usersReducer(state = defaulState, action) {
  if (action.type == "USER_ADD") {
    let copied = JSON.parse(JSON.stringify(state.users));
    copied.push(action.payload);
    return { ...state, users: copied };
  } else if (action.type == "USER_DELETE") {
    let copied = JSON.parse(JSON.stringify(state.users));
    copied = copied.filter((el) => {
      return el.id != action.payload;
    });
    return { ...state, users: copied };
  } else {
    return state;
  }
}
