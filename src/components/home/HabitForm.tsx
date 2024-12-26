import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addHabit, HabitFrequency } from "@/store/habit.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

const HabitForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [frequency, setFrequency] = useState<HabitFrequency | undefined>(
    undefined
  );
  const disptach = useDispatch<AppDispatch>();

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && frequency) {
      disptach(
        addHabit({
          name,
          frequency,
        })
      );
      setName("");
    }
  };
  return (
    <form className="p-2 m-2" onSubmit={handleSubmitForm}>
      <div className="flex gap-2 my-2">
        <Select
          onValueChange={(v) => setFrequency(v as HabitFrequency)}
          value={frequency}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Habit Frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Frequency</SelectLabel>
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button className="w-full" type="submit">
        ADD HABIT
      </Button>
    </form>
  );
};

export default HabitForm;
