import React, { FC, ReactNode } from 'react'

type FormProps = {
  title?: string;
  description?: string;
  children: ReactNode;
}

const Form: FC<FormProps> = (props) => {
  const { title, description, children } = props
  return (
    <form className='form'>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {children}
    </form>
  )
}

export default Form