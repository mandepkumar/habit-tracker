import { deleteHabit, Habit } from "@/store/habit.slice";
import { RootState } from "@/store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { P } from "../Typography";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { CircleCheckBig, Trash2 } from "lucide-react";

const HabitItem: React.FC<Habit> = ({ name, id,frequency, createAt }) => {
  const disptach = useDispatch();
  return (
    <li className="my-2 rounded-md border border-primary   px-4 py-3 font-mono text-sm flex justify-center gap-4">
      <Badge variant="secondary">{frequency.toUpperCase()}</Badge>
      <div className="flex-1 text-start">
        <P>{name}</P>
      </div>
      <div className="flex gap-1">
        <Button variant="outline">
          <CircleCheckBig />
        </Button>
        <Button variant="destructive" onClick={()=>disptach(deleteHabit({id}))}>
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
