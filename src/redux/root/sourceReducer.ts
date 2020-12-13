import alertReducer from "../common/alert/alert.reducer"
import authReducer from "../module/auth/auth.reducers"
import { combineReducers } from "redux"
import contactReducer from "../module/contact/contact/contact.reducer"
import customFieldReducer from "../module/contact/custom-field/custom-field.reducer"
import individualReducer from "../module/individual/individual.reducer"
import maskingReducer from "../module/sms/masking/masking.reducer"
import operatorReducer from "../module/operator/operator/operator.reducer"
import { persistReducer } from "redux-persist"
import prefixesReducer from "../module/operator/prefixes/prefixes.reducer"
import segmentReducer from "../module/contact/segment/segment.reducers"
import smsConfigReducer from "../module/sms/sms-config/sms-config.reducer"
import smsGatewayReducer from "../module/sms/sms-gateway/sms-gateway.reducer"
import smsPackageReducer from "../module/sms/sms-package/sms-package.reducer"
import smsReducer from "../module/sms/sms/sms.reducer"
import storage from "redux-persist/lib/storage"
import themeReducer from "../common/themeing/theme.reducer"
import userReducer from "../module/user/user.reducer"

//REDUX PERSIS CONFIG

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["themeState"],
}

const appReducer = combineReducers({
	alert: alertReducer,
	sms: smsReducer,
	auth: authReducer,
	segment: segmentReducer,
	customFields: customFieldReducer,
	contact: contactReducer,
	masking: maskingReducer,
	operatorState: operatorReducer,
	prefixesState: prefixesReducer,
	smsGatewayState: smsGatewayReducer,
	smsPackageState: smsPackageReducer,
	smsConfigState: smsConfigReducer,
	individualState: individualReducer,
	userState: userReducer,
	themeState: themeReducer,
})

const rootReducer = (state: any, action: any) => {
	// when a logout action is dispatched it will reset redux state
	if (action.type === "LOG_OUT") {
		state = undefined
		storage.removeItem("persist:root")
	}

	return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
