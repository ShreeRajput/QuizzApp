import { useRef } from "react"
import './namePage.css'

export default function NamePage({ setUsername }) {
    const inputRef = useRef()
  
    const handleClick = () => {
      inputRef.current.value.trim() && setUsername(inputRef.current.value)
    };
  
    return (
      <div className="start">
        <input
          className="startInput"
          placeholder="enter your name"
          ref={inputRef}
          onKeyDown={(event)=>{event.key==="Enter"&&handleClick()}}
        />
        <button className="startButton" onClick={handleClick}>
          <span style={{color:"black"}}>Start</span>
        </button>
      </div>
    )
}