// 多次使用到的接口
import http from "./http"

export const publish = params => {
    return http.post('/publish',params)
}