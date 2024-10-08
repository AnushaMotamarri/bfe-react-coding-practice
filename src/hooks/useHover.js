import {  useRef, useState, useEffect } from 'react'
export function useHover() {
  const ref = useRef()
  const [isHovering, setHovering] = useState(false)
  useEffect(() => {
    // false by default if ref.current changes
    setHovering(false)
    const element = ref.current
    if (!element)
      return
    const setYes = () => setHovering(true)
    const setNo = () => setHovering(false)
  
    element.addEventListener('mouseenter', setYes)
    element.addEventListener('mouseleave', setNo)
    return () => {
      element.removeEventListener('mouseenter', setYes)
      element.removeEventListener('mouseleave', setNo)
    }
  }, [ref.current]) // now we could pass a dependency array for better performances.
  return [ref, isHovering]
}