package com.helloworld.react.module;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Intent;
import android.os.Bundle;
import android.telecom.Call;
import android.text.TextUtils;
import android.util.SparseArray;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;

import java.util.LinkedList;

/**
 * Created by chenyou on 2018/12/4.
 */

public class ModuleIntent extends ReactContextBaseJavaModule {

    private static String MODULE_NAME = "Intent";

    public static ModuleIntent mInstance;

    public SparseArray<Callback> callBacks = new SparseArray();

    public ModuleIntent(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    public void deliverActivityResult(int code, Intent intent) {
        Callback callback = callBacks.get(code);
        if (callback != null) {
            Bundle bundle = intent.getExtras();
            WritableMap map = new WritableNativeMap();
            map.putInt("requestCode", code);
            callback.invoke(code, map);
        }
    }

    @ReactMethod
    public void removeIntentCallback(Callback callback) {
        if (callBacks != null) {
            LinkedList<Integer> list = new LinkedList();
            for (int i = 0; i < callBacks.size(); i++) {
                if (callBacks.get(i) == callback) {
                    list.add(i);
                }
            }

            for (int i = 0; i < list.size(); i++) {
                callBacks.remove(list.get(i));
            }
        }


    }


    public static ModuleIntent getInstance(ReactApplicationContext reactApplicationContext) {
        if (mInstance == null) {
            synchronized (ModuleIntent.class) {
                if (mInstance == null) {
                    mInstance = new ModuleIntent(reactApplicationContext);
                }
            }
        }
        return mInstance;
    }


    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void startActivityForResult(ReadableMap map, Callback callback, int code) {
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
            activity.startActivityForResult(intent, code);
            callBacks.append(code, callback);
        }
    }
}
