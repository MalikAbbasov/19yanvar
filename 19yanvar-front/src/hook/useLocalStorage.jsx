import  { useEffect, useState } from 'react'

function useLocalStorage( key,initialValue="") {
    const [value, setValue] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue)
    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    }, [value,key])
    
  return [value,setValue]
}

export default useLocalStorage