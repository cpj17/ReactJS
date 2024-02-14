import React from 'react'
import Marquee from 'react-fast-marquee'

// link used => https://www.npmjs.com/package/react-fast-marquee

const T1Component2 = () => {
  return (
    <div>
        <h3> Marquee </h3>

        <Marquee
            direction='right'
            speed={200}
            gradient={true}
            // gradientColor='red'
        >
         <label htmlFor=""> Marquee text </label>
        </Marquee>
    </div>
  )
}

export default T1Component2