import  JSONQUESTION from '../lib/questions.json'
import Select from 'react-select'
import { useState } from 'react'
import Carousel from "react-elastic-carousel";





const styles = {
    wrapper: `flex flex-col justify-center ml-10 items-center h-screen w-[90%]`,
    container: `p-1 h-[20%] w-[50%] `,
    item: `flex justify-center items-center m-4 h-[250px] w-[100%] bg-[#00008B] color-[#fff] text-xl`

}

const style = {
    wrapper: `flex flex-col h-[250px] w-[1000px] m-4 border-4 border-white rounded-xl bg-[#0653F6] `,
    header: `flex h-[15%] bg-black rounded-t-xl text-white font-black items-center pl-4 text-xl`,
    questionContainer: `flex flex-col  `,
    titile: `mt-2 font-black text-sm pl-4`,
    selectContainer: `mt-4 w-[90%] `,
    buttonContainer: `flex flex-row mt-20 items-center rounded-xl h-[60px] w-[40%] justify-center ml-28 pl-2  border-2 border-white bg-gray-900 text-white font-bold cursor-pointer hover:opacity-90`,
    inputBox: `bg-transparent outline-none text-[#141515] w-full`,
    icon: `pr-2 cursor-pointer hover:opacity-70`,
    answerContainer: ``
}

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const data = ['0nwe', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']

const questionsArray = [
    {label:'Is he retired?', value:'Is he retired?'}, 
    {label:"Was his prime in the 5 big Leagues?",value: "Was his prime in the 5 big Leagues?"},
    {label:"Is he from South-America?", value:"Is he from South-America?"},
    {label:"Does he played for a team which CA is bathed by the Cantabrian see?",value:"Does he played for a team which CA is bathed by the Cantabrian see?"},
    {label:'Is he retired?', value:'Is he retired?'}, 
    {label:"Was his prime in the 5 big Leagues?",value: "Was his prime in the 5 big Leagues?"},
    {label:"Is he from South-America?", value:"Is he from South-America?"},
    {label:"Does he played for a team which CA is bathed by the Cantabrian see?",value:"Does he played for a team which CA is bathed by the Cantabrian see?"},
    {label:'Is he retired?', value:'Is he retired?'}, 
    {label:"Was his prime in the 5 big Leagues?",value: "Was his prime in the 5 big Leagues?"},
    {label:"Is he from South-America?", value:"Is he from South-America?"},
    {label:"Does he played for a team which CA is bathed by the Cantabrian see?",value:"Does he played for a team which CA is bathed by the Cantabrian see?"}
]

const Prueba = () => {

    return(
        <div className={styles.wrapper}>    
         
       <Carousel itemsToShow={2} itemPosition={2}>
          {/* <div className={styles.item}>One</div>
          <div className={styles.item}>Two</div>
          <div className={styles.item}>Three</div>
          <div className={styles.item}>Four</div>
          <div className={styles.item}>Five</div>
          <div className={styles.item}>Six</div>
          <div className={styles.item}>Seven</div>
          <div className={styles.item}>Eight</div> */}
          {data.map((item)=>(
               <div className={style.wrapper}>
                <div className={style.header}>
                    <h2>Question {item}</h2>
                </div>
               <div className={style.questionContainer}>
                   <div className={style.titile}>
                       <h2>Please Select your Question:</h2>
                       <Select
                           options={questionsArray}
                           //onChange={handleChange}
                           //style={customStyle}
                           className={style.selectContainer}
                       />
                   </div>
                   <div className={style.buttonContainer}>
                       <button 
                       type="submit"
                       //className={style.inputBox}
                       />
                       ASK
                   </div>
               </div>
           </div>
          ))}
        </Carousel>
        </div>
         
    )
}


export default Prueba