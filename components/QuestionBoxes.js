import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import JSONQUESTION from '../lib/questions.json'
import Select from 'react-select'
import { useState } from "react";


const styles = {
    wrapper: `flex flex-col  h-[60%] w-[30%] border-4 border-white rounded-xl bg-[#0653F6]`,
    header: `flex h-[15%] bg-black rounded-t-xl text-white font-black items-center pl-4 text-xl`,
    questionContainer: `flex flex-col  `,
    titile: `mt-2 font-black text-sm pl-4`,
    selectContainer: `mt-4 w-[90%] `,
    buttonContainer: `flex flex-row mt-20 items-center rounded-xl h-[60px] w-[40%] justify-center ml-28 pl-2  border-2 border-white bg-gray-900 text-white font-bold cursor-pointer hover:opacity-90`,
    inputBox: `bg-transparent outline-none text-[#141515] w-full`,
    icon: `pr-2 cursor-pointer hover:opacity-70`,
    answerContainer: ``
}

const customStyle = {
    // option: (provided, state) => ({
    //     ...provided,
    //     borderBottom: '1px dotted pink',
    //     color: state.isSelected ? 'red' : 'blue',
    //     padding: 20,
    //   }),
}

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


const QuestionBoxes = () => {

    const [questionSelected, setQuestionSelected] = useState()

    const handleChange =({value}) => {
        setQuestionSelected(value)
        console.log(value)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>Question 1</h2>
            </div>
            <div className={styles.questionContainer}>
                <div className={styles.titile}>
                    <h2>Please Select your Question:</h2>
                    <Select
                        options={questionsArray}
                        onChange={handleChange}
                        styles={customStyle}
                        className={styles.selectContainer}
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <button 
                    type="submit"
                    //className={styles.inputBox}
                    />
                    ASK
                </div>
            </div>
        </div>
    )
}

export default QuestionBoxes