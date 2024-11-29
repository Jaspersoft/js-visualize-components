/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import { VisualizeGenericError } from "../../..";

export interface useVisualizeConfig {
  errorCallback: (error: Error | VisualizeGenericError | string) => void;
}
