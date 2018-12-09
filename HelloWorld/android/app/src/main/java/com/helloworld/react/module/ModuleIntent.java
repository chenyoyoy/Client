package com.helloworld.react.module;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.text.TextUtils;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;

/**
 * Created by chenyou on 2018/12/4.
 */

public class ModuleIntent extends ReactContextBaseJavaModule {

    private static String MODULE_NAME = "Intent";

    public ModuleIntent(ReactApplicationContext reactContext) {
        super(reactContext);
    }


    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void startActivity(ReadableMap map) {
        Intent intent = new Intent();
        ReadableMap extra = map.getMap("extra");
        if (extra != null) {
            ReadableMapKeySetIterator iterator = extra.keySetIterator();
            while (iterator.hasNextKey()) {
                String key = iterator.nextKey();
                intent.putExtra(iterator.nextKey(), extra.getString(key));
            }
        }

        ReadableMap clsMap = map.getMap("cls");
        if (clsMap != null) {
            String pac = clsMap.getString("packageName");
            String cls = clsMap.getString("clsName");
            ComponentName componentName = new ComponentName(pac, cls);
            intent.setComponent(componentName);
        }

        Activity activity = getCurrentActivity();
        if (activity != null) {
            activity.startActivity(intent);
        }
    }
}
