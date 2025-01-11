import { createStore,applyMiddleware } from "redux"
import rootReducer from "./reducers/rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"

const intialState={}
const meddleware = [thunk]

 const store=createStore(rootReducer,intialState,composeWithDevTools(applyMiddleware(...meddleware)))
 export default store