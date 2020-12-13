import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import { persistStore } from "redux-persist"
import rootReducer from "./sourceReducer"
import thunk from "redux-thunk"

const middleware = [thunk]
if (process.env.NODE_ENV === "development") {
	middleware.push(logger as any)
}

export const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store)
