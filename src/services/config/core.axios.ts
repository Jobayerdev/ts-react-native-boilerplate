import axios from "axios-observable"

const BASE_URL = "https://xxxxxxxxxxxx"

export const CoreAxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 12000,
})
