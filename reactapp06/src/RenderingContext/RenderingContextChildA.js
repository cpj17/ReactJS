import React from 'react'

function RenderingContextChildA() {
  console.log("RenderingContextChildA");
    return (
    <div>RenderingContextChildA</div>
  )
}

export default React.memo(RenderingContextChildA)

// export const MemoizedChildA = React.memo(RenderingContextChildA)