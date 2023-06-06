import React from 'react'
import s from './error.module.css'

const ErrorIndicator = () => {
  return (
    <>
    <div className={s.error_indicator}>     
        <span className={s.boom}>
        BOOM!  
        </span>
        <span>
        something has done terribly wrong  
        </span>
        <span>
        (but we already sent droids to fix it)
        </span>
    </div>
    </>
  )
}

export default ErrorIndicator