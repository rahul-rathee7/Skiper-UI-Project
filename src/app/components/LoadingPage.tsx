import React from 'react'
import { motion } from 'motion/react'
import { useMotionValue } from 'motion/react'
 
function MyApp() {
  const scaleX = useMotionValue(0)
  React.useEffect(() => {
    scaleX.set(1)
    const timeout = setTimeout(() => scaleX.set(0), 2000)
    return () => clearTimeout(timeout)
  })
  
  return (
    <div className='fixed z-99 bg-black text-center w-full h-screen top-0 left-0 flex items-center justify-center'>
      <motion.div
        animate={{ scaleX: [2, 36] }}
        transition={{ duration: 3 }}
        style={{
            scaleX,
            position:"fixed",
            top:50,
            left:50,
            right:0,
            originX:0,
            height:10,
            width:50,
            backgroundColor:'#ff0088'
        }}
      />
    </div>
  )
}
 
export default MyApp