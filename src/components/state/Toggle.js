import React from 'react'
import { useState } from 'react'
const Toggle = () => {
  const [state, setState] = useState("");
  const onClinkSetState = async () => {
    await setState("doanne");
    console.log("🚀 ~ file: Toggle.js:5 ~ Toggle ~ state", state)
  }
  return (
    <div>
      <button className="button-onclick" onClick={onClinkSetState}>
          log state
      </button>
    </div>
  )
}

export default Toggle