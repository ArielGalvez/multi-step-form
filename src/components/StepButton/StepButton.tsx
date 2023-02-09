import React, { FC } from 'react'
import "./styles.css";

type StepButtonProps = {
  number: number;
  title: string;
  active?: boolean;
  completed: boolean;
}

const StepButton: FC<StepButtonProps> = (props) => {
  const { number, title, active = false, completed } = props
  return (
    <li className='step_button'>
      <button className={`step_button__button ${active && 'active'}`}>
        <div className='step_button__number'>{number}</div>
        <div className='step_button__content'>
          <span>{`STEP ${number}`}</span>
          <h4>{title}</h4>
        </div>
      </button>
    </li>
  )
}

export default StepButton