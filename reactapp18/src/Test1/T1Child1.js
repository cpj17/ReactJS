import React from 'react'
import T1Provider from './T1Provider'

const T1Child1 = () => {
  return (
    <div>
        <T1Provider>
            <h2> child using provider </h2>
        </T1Provider>
    </div>
  )
}

export default T1Child1