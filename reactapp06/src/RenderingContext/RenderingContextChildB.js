import React, { useContext} from 'react'
import { CountContext } from './RenderingContextContainer';

function RenderingContextChildB() {
    const count = useContext(CountContext)
  console.log("RenderingContextChildB");
    return (
    <div>
        RenderingContextChildB
        <br />
        valu from compa {count}
    </div>
  )
}

export default React.memo(RenderingContextChildB)

// export const MemoizedChildB = React.memo(RenderingContextChildB)