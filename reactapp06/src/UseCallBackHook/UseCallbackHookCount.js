import React from 'react'

function UseCallbackHookCount({text, count}) {
  console.log(`count rendered - ${text}`);
    return (
    <div>
        {text} - {count}
    </div>
  )
}

export default React.memo(UseCallbackHookCount)