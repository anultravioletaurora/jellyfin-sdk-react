/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

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
