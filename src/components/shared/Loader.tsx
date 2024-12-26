import "./loader.css";
const Loader: React.FC<{ msg?: string }> = ({ msg="Loading..."}) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div>
        <span className="loader"></span>
      </div>
      <p className="text-primary font-bold">{msg}</p>
    </div>
  );
};

export default Loader;
