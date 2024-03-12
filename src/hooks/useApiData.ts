'use client'

import ApiContext from "@/context/ApiContext";
import { useContext } from "react";

const useApiData = () => useContext(ApiContext)

export default useApiData