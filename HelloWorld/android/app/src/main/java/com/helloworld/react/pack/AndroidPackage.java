package com.helloworld.react.pack;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.helloworld.react.manager.PhotoViewManager;
import com.helloworld.react.module.ModuleIntent;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by chenyou on 2018/12/4.
 */

public class AndroidPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> list = new ArrayList<>();
        list.add(ModuleIntent.getInstance(reactContext));
        return list;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> list = new ArrayList<>();
        list.add(new PhotoViewManager());
        return list;
    }
}
