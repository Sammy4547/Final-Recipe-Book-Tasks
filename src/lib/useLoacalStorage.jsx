import React from 'react'

export const useLoacalStorage = (key) => {

    const setItem=(value)=>{
      window.localStorage.setItem(key,JSON.stringify(value))
    }

    const 
 return{setItem}
}
