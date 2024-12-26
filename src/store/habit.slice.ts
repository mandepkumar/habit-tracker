import { getTodayDate } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type HabitFrequency = "daily" | "weekly";

export interface Habit {
  id: string;
  name: string;
  frequency: HabitFrequency;
  completedDates: string[];
  createAt: string;
}

interface HabitState {
  habits: Habit[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HabitState = {
  habits: [],
  isLoading: false,
  error: null,
};

export const fetchHabits = createAsyncThunk("habit/fetchHabits", async () => {
  await new Promise((res) => setTimeout(res, 1000));
  const habits: Habit[] = [
    {
      id: "1000",
      name: "Read Book",
      frequency: "daily",
      completedDates: [],
      createAt: "2024-12-26T09:33:36.433Z",
    },
    {
      id: "1001",
      name: "cycling",
      frequency: "weekly",
      completedDates: [],
      createAt: "2024-12-26T09:33:36.433Z",
    },
  ];
  return habits;
});

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (
      state,
      action: PayloadAction<{ name: string; frequency: HabitFrequency }>
    ) => {
      const newHabit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createAt: new Date().toISOString(),
      };

      state.habits.push(newHabit);
    },
    updateHabitCompleteStatus: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      const { id } = action.payload;
      const today = getTodayDate();
      state.habits.forEach((habit) => {
        if (habit.id=== id) {
          const lastCompletedDate = habit.completedDates.at(-1);
          if (lastCompletedDate == today) {
            habit.completedDates.pop();
          } else habit.completedDates.push(today);
          return habit;
        }
      });
    },
    deleteHabit: (state, action: PayloadAction<{ id: string }>) => {
      state.habits = state.habits.filter(
        (habit) => habit.id != action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHabits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchHabits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.habits = action.payload;
      })
      .addCase(fetchHabits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to fetch!";
      });
  },
});

export const { addHabit, deleteHabit, updateHabitCompleteStatus } =
  habitSlice.actions;
export default habitSlice.reducer;
