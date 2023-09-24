import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";

const HabitCard = (props) => {
  const { habit } = props;
  var target = 5 ; 
  var progress = 0  ; 

  for(let i= 0 ; i < 6 ; i++){
    if(habit.weekdays[i].doneStatus === "done"){
      progress++ ; 
    }
  }
  const dispatch = useDispatch();

  // for deleting habit
  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className={styles.habitCardContainer}>
      <div className={styles.habitCard}>
        <div className={styles.habitCardTitle}>
          <div className={styles.habitActionName}>
            <span>
              <ActionButton habit={habit} />
            </span>
            <span className={styles.cardName}>
               { `:   ${habit.name}` }
            </span>
          
           <span>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWI65OwrFMI09AHxD8KhNaDoX1pXRs0GLakg&usqp=CAU" onClick={handleDeleteHabit}/>
          </span> 
          </div>
        </div>

        <div className={styles.weeklyProgress}>
          <span>Target : {target} days / week</span>
          <span>Progress :{progress}  / {target} </span>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
