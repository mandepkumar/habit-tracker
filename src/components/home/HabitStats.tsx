import { fetchHabits } from "@/store/habit.slice";
import { AppDispatch, RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../shared/Loader";

const HabitStats: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchHabits());
  }, []);
  return <div>{isLoading && <Loader />}</div>;
};

export default HabitStats;
