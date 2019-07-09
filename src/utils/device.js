export const device = function() {
   
    var sUserAgent = navigator.userAgent.toLowerCase();
    // 检索字符串
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    if (bIsIphoneOs || bIsIpad) {
        try {
            // window.alert('我是ios')
            // 其中 callNativeApp 是 iOS 客户端注册的一个 handler 名称, 可以你这边定.
            // iOS 端根据实际的 handler 名称在原生代码中注册 handler 即可.
            let token = webkit.messageHandlers.callNativeCode.postMessage("2a2b881b-a1ee-11e8-b13b-00163e06f780")
            window.alert(token)
            return token
        } catch (error) {
            console.error('The native context not exist ')
        }
    } else if (bIsAndroid) {
        window.alert('我是android')
        let token = window.android.CloseWeb();
        return token
        // window.android.handlePics();
    }
}