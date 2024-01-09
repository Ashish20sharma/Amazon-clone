// import { applyMiddleware } from "redux"
import { configureStore } from "@reduxjs/toolkit"
// import { thunk } from "redux-thunk"
// import { composeWithDevTools } from "@redux-devtools/extension"
import reducer from "./components/redux/reducer/main"

// const middleware = [thunk];

const store = configureStore({
    reducer,
    // composeWithDevTools(applyMiddleware(...middleware))
});

export default store;