import  { useState } from 'react'

const App = () => {
  const questions =[
  "is ahmed mohamed tall ?",
  "is university is heogh level education ?",
  "is ethiopia muslim countery ?",
  "is tigist your teacher ?"
  ]
   
  
    const[currenntIndex,setCurerentIndex]=useState(0)
    
    const addAnswer=()=>{
      
      if(currenntIndex < questions.length -1 ){
        setCurerentIndex(currenntIndex +1)
      }
     
    }
    // console.log(addAnswer)
  
    
  return (
  
    <div>
 
   <h1>QUESTION: {questions[currenntIndex]}</h1>
  
      <button onClick={addAnswer}>yes</button>
      <button onClick={addAnswer}>no</button>
    </div>
  )
}

export default App