import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "~/store";
import {updateTime} from "~/store/reducer/quizSlice";

const Timer = () => {
    const dispatch = useAppDispatch();
    const {time} = useAppSelector((state) => state.quizState);

    useEffect(() => {
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
