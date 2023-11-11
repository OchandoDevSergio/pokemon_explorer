import { configureStore } from "@reduxjs/toolkit";
// import pacienteSlice from "../pages/pacienteSlice";
// import profesionalSlice from "../pages/profesionalSlice";
// import polizaSlice from "../pages/polizaSlice";

//storage es de redux-persist para que la información no se pierda en una eventual recarga
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import thunk from "redux-thunk";


const reducers = combineReducers({
  // paciente: pacienteSlice,
  // profesional: profesionalSlice,
  // poliza: polizaSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
