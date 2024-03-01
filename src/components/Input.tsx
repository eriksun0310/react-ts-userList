import React from 'react'
import { ComponentProps ,ComponentPropsWithRef} from 'react'
import Button from './Button'
//ComponentPropsWithRef 可以傳入ref
// 擴充 input本身該有的屬性
type InputProps ={
    id:string;
    label:string;
}& ComponentProps<"input">

type ButtonProps = ComponentProps<typeof Button>


const Input = ({id, label, ...props}:InputProps) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...props}/>
    </div>
  )
}

export default Input