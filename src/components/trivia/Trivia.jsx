import { useState ,useEffect } from 'react'
import useSound from "use-sound"
import './trivia.css'
import wrongSound from "../../sounds/waitSound.mp3"
import correctSound from "../../sounds/correctSound.mp3"
import waitSound from "../../sounds/waitSound.mp3"
import dataSet from "../../questiondata.js"

export default function Trivia({randomNO,timer,setTimer,setStop,queNumber,setQueNumber}) {

  const [selectedOption,setSelectedOption] = useState('')
  const [classToApply,setClassToApply] = useState("option")
  const [isChosen,setIsChosen] = useState(false)
  const [playCorrect] = useSound(correctSound)
  const [playWrong] = useSound(wrongSound)
  const [playWait] = useSound(waitSound)
  const data = dataSet[randomNO]

  useEffect(() => {
    if (timer <= 0) {
      setStop(true)
    };
  
    const intervalId = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)
  
    return () => clearInterval(intervalId) // Cleanup function
  }, [timer,setStop,setTimer])

  const delay = (option)=> {
    setTimeout(()=>{
      if(option.correct){
        if(queNumber>=15){
          setStop(true)
          return null
        }
        setQueNumber(queNumber+1)
        setIsChosen(false)
        setSelectedOption('')
        setClassToApply("option")
      } else {
        setStop(true)
      }
    },2000)
  }

  const optionHandler = (option)=>{
      setIsChosen(true)
      setSelectedOption(option.text)
      setClassToApply("option active")
      playWait()
      if(timer<5){
          if(option.correct){
            playCorrect()
            setClassToApply("option correct")
            if(queNumber>=15){
              setStop(true)
              return null
            }
            setQueNumber(queNumber+1)
            setIsChosen(false)
            setSelectedOption('')
            setClassToApply("option")
          } else{  
            playWrong()
            setClassToApply("option wrong")
            setStop(true)
          }
      } else {
        setTimeout(()=>{
          if(option.correct){
            playCorrect()
            setClassToApply("option correct")
          } else{  
            playWrong()
            setClassToApply("option wrong")
          }
          delay(option)
        },2000)
      }
  }

  return (
    <div className="trivia">
      <div className="question">
        {data[queNumber-1].question}
      </div>
      <div className="options">
        {
          data[queNumber-1].options.map(
              (o,index) => <div 
                      key={index}
                      className={selectedOption===o.text ? classToApply : "option"} 
                      onClick={()=>{!isChosen&&optionHandler(o)}} 
                    >
                      {o.text}
                    </div>)
        }
      </div>
    </div>
  )
}
