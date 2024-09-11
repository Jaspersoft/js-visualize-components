import { createContext } from "react";
import { BaseInputControlProps } from "../BaseInputControl";

export const PanelContext = createContext<BaseInputControlProps[]>([]);
