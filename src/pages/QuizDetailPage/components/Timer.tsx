import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store";
import {updateStatus, updateTime} from "@/store/reducer/quizSlice";
import {QuizStatus} from "@/types/state/quiz";

const Timer = () => {
    const dispatch = useAppDispatch();
    const {time} = useAppSelector((state) => state.quizState);

    useEffect(() => {
        if (time < 0) {
            dispatch(updateStatus(QuizStatus.FINISHED))
        }
        const timeInterval = setInterval(() => {
            dispatch(updateTime(time - 1));
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        };

    }, [time]);

    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return (
        <div>{minutes} : {seconds}</div>
    );
};

export default Timer;
