import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SuppressLongpress)
public class SuppressLongpress: CAPPlugin {
    @objc func suppress(_ call: CAPPluginCall) {
        let webView = self.bridge.getWebView()
        
        let longPress = UILongPressGestureRecognizer(target: nil, action: nil)
        longPress.minimumPressDuration = 0.2
        
        DispatchQueue.main.async {
            webView?.addGestureRecognizer(longPress)
            
            call.success([
                "result": true
            ])
        }
    }
}
