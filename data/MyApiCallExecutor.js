import axios from "axios";
import * as AxiosLogger from "axios-logger";
import {API_HEADER} from "./ApiConstants";

export function getApiCallExecutor() {
    const executor = axios.create()
    executor.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger)
    executor.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger)
    return executor
}

export const callApi = async (url, setOnLoading, setOnError, onSuccess) => {
    setOnLoading(true)
    await getApiCallExecutor()
        .get(url, API_HEADER)
        .then((res) => {
            console.log("res = " + res.data)
            onSuccess(res.data)
            res.data
        })
        .catch((err) => {
            console.log("error = " + err.message)
            setOnError(err.message)
        }).finally(() => {
        setOnLoading(false)
        console.log("finally")
    })
}