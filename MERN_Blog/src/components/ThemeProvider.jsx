import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const themeState = useSelector((state) => state.theme);
  const { theme } = themeState;

  return (
    <div className={theme}>
      <div className="bg-white text-gray-700 dark:bg-[#060910]  min-h-screen ">
        {children}
      </div>
    </div>
  );
}
