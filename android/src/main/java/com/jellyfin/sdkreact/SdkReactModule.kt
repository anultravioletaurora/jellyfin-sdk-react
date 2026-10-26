package com.jellyfin.sdkreact

import com.facebook.react.bridge.ReactApplicationContext

class SdkReactModule(reactContext: ReactApplicationContext) :
  NativeSdkReactSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  companion object {
    const val NAME = NativeSdkReactSpec.NAME
  }
}
