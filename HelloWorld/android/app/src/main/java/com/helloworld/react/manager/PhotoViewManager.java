package com.helloworld.react.manager;

import com.bumptech.glide.Glide;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.github.chrisbanes.photoview.PhotoView;
import com.helloworld.R;

/**
 * Created by chenyou on 2018/12/7.
 */

public class PhotoViewManager extends SimpleViewManager<PhotoView> {

    private PhotoView mPhotoView;

    @Override
    public String getName() {
        return "PhotoView";
    }

    @Override
    protected PhotoView createViewInstance(ThemedReactContext reactContext) {
        mPhotoView = new PhotoView(reactContext);
        mPhotoView.setImageResource(R.mipmap.ic_launcher);
        return mPhotoView;
    }

    @ReactProp(name = "imgSource")
    public void setSource(PhotoView view, String source) {
        Glide.with(view.getContext()).load(source).into(view);
    }

}
