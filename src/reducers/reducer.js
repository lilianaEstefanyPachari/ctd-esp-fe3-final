export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentistas: action.payload };

    case "ADD_FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };

    case "CHANGE_THEME":
      return state.tema === "light"
        ? { ...state, tema: "dark" }
        : { ...state, tema: "light" };

    case "DELETE_FAVORITES":
      return { ...state, favs: action.payload };

    default:
      throw new Error("La accion no existe");
  }
};
