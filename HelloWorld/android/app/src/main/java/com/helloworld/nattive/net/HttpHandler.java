package com.helloworld.nattive.net;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class HttpHandler {

    private OkHttpClient mClient;
    HttpHandler mInstance;

    private HttpHandler() {

    }

    public HttpHandler getInstance() {
        if (mInstance == null) {
            synchronized (HttpHandler.class) {
                if (mInstance == null) {
                    mInstance = new HttpHandler();
                    initClient() ;
                }
            }
        }

        return mInstance;
    }


    private void initClient() {
        mClient = new OkHttpClient.Builder().
                build() ;
    }


    public void get(Request request , HttpCallback callback) {
        mClient.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                callback.onResult();
                callback.onFinish();
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                callback.onFinish();
            }
        });
        callback.onStart();
    }

    public void post() {

    }


    public void upload() {


    }


    public void download() {

    }


}
