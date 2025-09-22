import { NavLink } from "react-router";
const Card = ({ bg_color, menu_title, to_url }) => {
  return (
    <div
      className={`${bg_color}  text-white rounded-xl p-5 shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out flex flex-col items-center justify-center cursor-pointer py-13`}
    >
      <h3 className="text-2xl font-semibold mb-4">{menu_title}</h3>
      <p className="text-sm opacity-80">
        <NavLink to={`/${to_url}`}>ক্লিক করুন বিস্তারিত জানার জন্য</NavLink>
      </p>
    </div>
  );
};

export default Card;
