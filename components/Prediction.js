import { FaHeart } from "react-icons/fa";

const styles = {
    wrapper: `flex flex-row ml-10 mt-20 items-center justify-center h-[15%] w-[80%] `,
    buttonContainer: `flex h-full w-[38%] ml-56 border items-center justify-center border-2 border-white rounded-xl bg-[#37C207] text-white font-black cursor-pointer hover:opacity-60`,
    livesContainer: ` flex flex-row pl-24 gap-4 items-center`,
    icon: ``
}


const Prediction = () => {

    return(
        <div className={styles.wrapper}>
            <div className={styles.buttonContainer}>
                <h2>Make your Guess</h2> 
            </div>
            <div className={styles.livesContainer}>
                <FaHeart size={50} color='red' className={styles.icon} />
                <FaHeart size={50} color='red' className={styles.icon} />
                <FaHeart size={50} color='red' className={styles.icon} />
            </div>
        </div>
    )
}


export default Prediction