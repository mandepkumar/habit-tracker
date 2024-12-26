import {
  deleteHabit,
  Habit,
  updateHabitCompleteStatus,
} from "@/store/habit.slice";
import { AppDispatch, RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { P } from "../Typography";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CircleCheckBig, Trash2 } from "lucide-react";
import { getTodayDate } from "@/utils";

const HabitItem: React.FC<Habit> = ({ name, id, frequency, createAt }) => {
  const disptach = useDispatch<AppDispatch>();
  const completedDates = useSelector(
    (state: RootState) =>
      state.habits.habits.find((h) => h.id === id)?.completedDates
  );
  const handleTaskDone = () => {
    disptach(updateHabitCompleteStatus({ id }));
  };
  const isCompleted = getTodayDate() === completedDates?.at(-1);
  return (
    <li
      className={`my-2 rounded-md border  px-4 py-3 font-mono text-sm flex justify-center gap-4 ${
        isCompleted ? "border-green-600" : "border-primary"
      }`}
    >
      <Badge variant="secondary">{frequency.toUpperCase()}</Badge>
      <div className="flex-1 text-start">
        <P className={isCompleted ? "line-through" : ""}>{name}</P>
      </div>
      <div className="flex gap-1">
        <Button variant="outline" onClick={handleTaskDone}>
          <CircleCheckBig className={isCompleted ? "text-green-600" : ""} />
        </Button>
        <Button
          variant="destructive"
          onClick={() => disptach(deleteHabit({ id }))}
        >
          <Trash2 />
        </Button>
      </div>
    </li>
  );
};

const HabitList: React.FC = () => {
  const habits = useSelector((state: RootState) => state.habits.habits);
  return (
    <div className="my-2 rounded-md border px-4 py-3 font-mono text-sm">
      {habits && habits.length > 0 && (
        <ul>
          {habits.map((props) => (
            <HabitItem key={"habit-" + props.id} {...props} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default HabitList;
