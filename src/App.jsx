import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Trivia from './components/trivia/Trivia.jsx'
import NamePage from './components/namePage/NamePage.jsx'
import Confetti from 'react-confetti'

function App() {
  const [queNumber, setQueNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState(0)
  const [timer, setTimer] = useState(30)
  const [username, setUsername] = useState('')

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amt: "₹ 1000", amount: 1000 },
        { id: 2, amt: "₹ 2000", amount: 2000 },
        { id: 3, amt: "₹ 3000", amount: 3000 },
        { id: 4, amt: "₹ 5000", amount: 5000 },
        { id: 5, amt: "₹ 10000", amount: 10000 },
        { id: 6, amt: "₹ 20000", amount: 20000 },
        { id: 7, amt: "₹ 40000", amount: 40000 },
        { id: 8, amt: "₹ 80000", amount: 80000 },
        { id: 9, amt: "₹ 160000", amount: 160000 },
        { id: 10, amt: "₹ 320000", amount: 320000 },
        { id: 11, amt: "₹ 640000", amount: 640000 },
        { id: 12, amt: "₹ 1250000", amount: 1250000 },
        { id: 13, amt: "₹ 2500000", amount: 2500000 },
        { id: 14, amt: "₹ 5000000", amount: 5000000 },
        { id: 15, amt: "₹ 10000000", amount: 10000000 }
      ].reverse(),
    []
  );

  useEffect(() => {
    setEarned((prev) => {
      if (queNumber === 1)
        return prev
      else if (queNumber > 1)
        return prev + moneyPyramid[15 - queNumber + 1].amount
    })

    setTimer(30)
  }, [queNumber, moneyPyramid])

  const handleReplay = () => {
    setStop(false)
    setEarned(0)
    setQueNumber(1)
  }

  return (
    <div className="app">
      {!username ? <NamePage setUsername={setUsername} />
        :
        <>
          <div className="main">
            {stop ? (
              <>
                {queNumber === 15 && <Confetti />}
                <h1 className='endText'>Congrats {username}!<br />
                  You earned ₹ {earned}!<br />
                  <button className='playAgainButton' onClick={handleReplay}>Play Again</button>
                </h1>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">{timer}</div>
                </div>
                <div className="bottom">
                  <Trivia
                    timer={timer}
                    setTimer={setTimer}
                    setStop={setStop}
                    queNumber={queNumber}
                    setQueNumber={setQueNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((amount, index) => (
                <li key={index} className={amount.id === queNumber ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{amount.id}</span>
                  <span className='moneyListItemAmount'>{amount.amt}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      }
    </div>
  );
}

export default App;