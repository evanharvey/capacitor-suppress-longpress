package com.pocopoco.plugins.suppresslongpress;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin
public class SuppressLongpress extends Plugin {

    @PluginMethod
    public void suppress(PluginCall call) {
        JSObject ret = new JSObject();
        ret.put("result", false);
        call.success(ret);
    }
}
