import React from 'react'

function UseCallbackHookTitle() {
  console.log("title rendered");
    return (
    <div>
        UseCallbackHookTitle
    </div>
  )
}

export default React.memo(UseCallbackHookTitle)
