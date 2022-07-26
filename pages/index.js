import Header from '../components/Header'
import QuestionBoxes from '../components/QuestionBoxes'
import Prediction from '../components/Prediction'


const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  questionsContainer: `flex flex-col items-center mt-10 flex-1  `,
  
}

export default function Home() {
  return (
    <div className= {style.wrapper}>
      <Header />
      <div className={style.questionsContainer}>
          <QuestionBoxes />
          <Prediction />
      </div>
    </div>
  )
}