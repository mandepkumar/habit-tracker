import HabitForm from "@/components/home/HabitForm";
import HabitList from "@/components/home/HabitList";
import HabitStats from "@/components/home/HabitStats";

const HomePage: React.FC = () => {
  return (
    <main className="flex justify-center h-screen">
      <div className="md:w-[800px]">
        <HabitForm />
        <HabitList />
        <HabitStats />
      </div>
    </main>
  );
};

export default HomePage;
