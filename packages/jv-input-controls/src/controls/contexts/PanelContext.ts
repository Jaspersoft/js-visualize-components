import { createContext } from "react";
import { BaseInputControlProps } from "@jaspersoft/jv-tools";

export const PanelContext = createContext<BaseInputControlProps[]>([]);
