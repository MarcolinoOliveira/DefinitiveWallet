'use client'

import { useContext } from "react";
import ThemesContext from "../context/ThemeContext";

const useThemeMode = () => useContext(ThemesContext)

export default useThemeMode