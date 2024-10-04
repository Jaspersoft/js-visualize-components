/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { createContext } from "react";
import { InputControlProperties } from "@jaspersoft/jv-tools";

export const PanelContext = createContext<InputControlProperties[]>([]);
