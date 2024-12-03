/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import React from "react";
import {
  JVBox,
  JVIcon,
  JVTreeItem2Label,
  JVTypography,
} from "@jaspersoft/jv-ui-components";

interface CustomLabelProps {
  children: React.ReactNode;
  icon?: React.ElementType;
  expandable?: boolean;
}

export const TreeItemLabel = ({
  expandable,
  children,
  ...other
}: CustomLabelProps) => {
  return (
    <>
      <JVTreeItem2Label
        {...other}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <JVBox
          className="labelIcon"
          color="inherit"
          sx={{ mr: 1, fontSize: "1.2rem" }}
        >
          <JVIcon icon="folder" />
        </JVBox>

        <JVTypography>{children}</JVTypography>
      </JVTreeItem2Label>
    </>
  );
};
