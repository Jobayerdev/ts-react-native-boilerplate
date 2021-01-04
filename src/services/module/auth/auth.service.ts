import { loginIF, registerIF } from "./auth.IF"

import { CoreAxiosInstance } from "../../config/core.axios"

const END_POINT = "/auth/admin/"

export const AuthService = {
	login: (payload: loginIF) => {
		return CoreAxiosInstance.post(`${END_POINT}login`, payload)
	},
	register: (payload: registerIF) => {
		return CoreAxiosInstance.post(`${END_POINT}register`, payload)
	},
}
