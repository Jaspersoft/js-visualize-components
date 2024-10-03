import { createContext } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";

export const PanelContext = createContext<InputControlProperties[]>([]);
