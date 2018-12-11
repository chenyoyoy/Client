package com.helloworld.nattive.setting;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.TextView;

import com.bumptech.glide.module.AppGlideModule;
import com.helloworld.R;
import com.helloworld.nattive.image.GlideApp;

/**
 * Created by chenyou on 2018/12/5.
 */

public class SettingActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.layout_setting);

        ImageView imageView = findViewById(R.id.image);
        GlideApp.with(this).load("http://192.168.1.3:8082/images/banner1.jpg").into(imageView);
    }
}
