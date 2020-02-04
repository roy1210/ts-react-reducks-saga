import React from 'react'

interface Props {
  goNextStep: () => void;
  goBackStep: () => void;
  step: number
}

const PlayGround: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div>
        <h1>Hello World: React, Redux-saga, and TypeScript</h1>
        <h1>step</h1>
        {props.step}
      </div>
      <div>
        <button onClick={props.goNextStep}>
          NextStep
        </button>
        <button onClick={props.goBackStep}>
          Step 1
        </button>
      </div>
    </div>
  )
}

export default PlayGround
