import React, { useEffect, useState } from "react";
import "./tree.css";
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Label,
  TreeItem2Root,
} from "@mui/x-tree-view/TreeItem2";
import { unstable_useTreeItem2 as useTreeItem2 } from "@mui/x-tree-view/useTreeItem2";
import { TreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";
import { TreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import { Collapse as JVCollapse } from "../../../material-ui/Collapse/Collapse";
import { Typography as JVTypography } from "../../../material-ui/Typography/Typography";
import { Box as JVBox } from "../../../material-ui/Box/Box";
import { Icon as JVIcon } from "../../../material-ui/Icon/Icon";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. FOLDER TREE
 *
 *  2. AD HOC TREE
 *
 * ----------------------------
 *  last modified Dec 8, 2022
 * ---------------------------- */

export default {
  title: "Components/Tree/Design",
};

/* ------------------ */
/*  1. FOLDER TREE    */
/* ------------------ */
export const treeFolders = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Tree - Folders</h1>

    <div className={"demoWrapper demoTree"}>
      <div className={"demoWrapperSection"}>
        <ul
          role="tree"
          aria-multiselectable="true"
          className="jv-mTree jv-mTreeRepository mui jv-MuiTreeView-root tc-jsw-report-outline-label"
        >
          <div>
            <li
              className="jv-mTree-item mui jv-MuiTreeItem-root jv-Mui-selected jv-Mui-expanded"
              role="treeitem"
            >
              <div className="jv-MuiTreeItem-content">
                <div className="jv-MuiTreeItem-iconContainer">
                  {/* Collapsed Arrow */}
                  <svg width="10px" height="12px" viewBox="0 0 10 12">
                    <g
                      id="chevron_right_theme_6"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                        id="Combined-Shape"
                        fill="#055DAB"
                        transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                  <div
                    className="tc-jsw-noselect"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* ICON */}
                    <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                    <span className="jv-mTree-item-label-text mui">
                      Organizations
                    </span>
                  </div>
                </div>
              </div>

              <div className="jv-MuiTreeItem-content">
                <div className="jv-MuiTreeItem-iconContainer">
                  {/* Expanded arrow */}
                  <svg width="10px" height="12px" viewBox="0 0 10 12">
                    <g
                      id="chevron_down_theme_6"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                        id="Combined-Shape"
                        fill="#055DAB"
                        transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                  <div
                    className="tc-jsw-noselect"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* ICON */}
                    <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                    <span className="jv-mTree-item-label-text mui">Public</span>
                  </div>
                </div>
              </div>

              <ul
                className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                style={{
                  minHeight: "0",
                  height: "auto",
                  transitionDuration: "300ms",
                }}
              >
                <div className="jv-MuiCollapse-wrapper">
                  <div className="jv-MuiCollapse-wrapperInner">
                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Expanded arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_down_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                Ad Hoc Components
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul
                          className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                          style={{
                            minHeight: "0",
                            height: "auto",
                            transitionDuration: "300ms",
                          }}
                        >
                          <div className="jv-MuiCollapse-wrapper">
                            <div className="jv-MuiCollapse-wrapperInner">
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Topics
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>
                    </div>

                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root jv-Mui-expanded">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Expanded arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_down_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                Samples
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul
                          className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                          style={{
                            minHeight: "0",
                            height: "auto",
                            transitionDuration: "300ms",
                          }}
                        >
                          <div className="jv-MuiCollapse-wrapper">
                            <div className="jv-MuiCollapse-wrapperInner">
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Ad Hoc Views
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Dashboards
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Data Sources
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Domains
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          OLAP
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Reports
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Resources
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </ul>

              <div className="jv-MuiTreeItem-content">
                <div className="jv-MuiTreeItem-iconContainer">
                  {/* Collapsed Arrow */}
                  <svg width="10px" height="12px" viewBox="0 0 10 12">
                    <g
                      id="chevron_right_theme_6"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                        id="Combined-Shape"
                        fill="#055DAB"
                        transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                  <div
                    className="tc-jsw-noselect"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* ICON */}
                    <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                    <span className="jv-mTree-item-label-text mui">Temp</span>
                  </div>
                </div>
              </div>
              <div className="jv-MuiTreeItem-content">
                <div className="jv-MuiTreeItem-iconContainer">
                  {/* Expanded arrow */}
                  <svg width="10px" height="12px" viewBox="0 0 10 12">
                    <g
                      id="chevron_down_theme_6"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                        id="Combined-Shape"
                        fill="#055DAB"
                        transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                  <div
                    className="tc-jsw-noselect"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* ICON */}
                    <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                    <span className="jv-mTree-item-label-text mui">Themes</span>
                  </div>
                </div>
              </div>

              <ul
                className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                style={{
                  minHeight: "0",
                  height: "auto",
                  transitionDuration: "300ms",
                }}
              >
                <div className="jv-MuiCollapse-wrapper">
                  <div className="jv-MuiCollapse-wrapperInner">
                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Collapsed Arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_right_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                default
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Collapsed Arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_right_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                easy_access
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Collapsed Arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_right_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                jasper_dark
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Collapsed Arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_right_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                pods_summer
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </>
);
treeFolders.storyName = "Tree - Folders";

/* ------------------ */
/*  2. AD HOC TREE    */
/* ------------------ */
export const treeAdhoc = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Tree - Ad Hoc</h1>

    <div className={"demoWrapper demoTree"}>
      <div className="demoSize">
        <div className="demoSubtitle">Fields</div>
        <ul
          role="tree"
          aria-multiselectable="true"
          className="jv-mTree jv-mTreeAdhoc mui jv-MuiTreeView-root"
        >
          <div>
            <li
              className="jv-mTree-item mui jv-MuiTreeItem-root jv-Mui-selected jv-Mui-expanded"
              role="treeitem"
            >
              <div className="jv-MuiTreeItem-content">
                <div className="jv-MuiTreeItem-iconContainer">
                  {/* Expanded arrow */}
                  <svg width="10px" height="12px" viewBox="0 0 10 12">
                    <g
                      id="chevron_down_theme_6"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                        id="Combined-Shape"
                        fill="#055DAB"
                        transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                  <div
                    className="tc-jsw-noselect"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* ICON */}
                    <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconSet mui"></span>
                    <span className="jv-mTree-item-label-text mui">Sales</span>
                  </div>
                </div>
              </div>

              <ul
                className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                style={{
                  minHeight: "0",
                  height: "auto",
                  transitionDuration: "300ms",
                }}
              >
                <div className="jv-MuiCollapse-wrapper">
                  <div className="jv-MuiCollapse-wrapperInner">
                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Expanded arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_down_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconSet mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                Products
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul
                          className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                          style={{
                            minHeight: "0",
                            height: "auto",
                            transitionDuration: "300ms",
                          }}
                        >
                          <div className="jv-MuiCollapse-wrapper">
                            <div className="jv-MuiCollapse-wrapperInner">
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Brand
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Product Name
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconBooleanfield mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Recyclable Packaging
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconBooleanfield mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Low Fat
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                            </div>
                          </div>
                        </ul>
                      </li>
                    </div>

                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root jv-Mui-expanded">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Expanded arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_down_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                Stores
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul
                          className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                          style={{
                            minHeight: "0",
                            height: "auto",
                            transitionDuration: "300ms",
                          }}
                        >
                          <div className="jv-MuiCollapse-wrapper">
                            <div className="jv-MuiCollapse-wrapperInner">
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Store Type
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Store Name
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_right_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M6.24264069,8.04264069 L6.24264069,9.24264069 L1.44264069,9.24264069 L1.44264069,8.04264069 L6.24264069,8.04264069 Z M1.44264069,3.24264069 L1.44264069,9.24264069 L0.242640687,9.24264069 L0.242640687,3.24264069 L1.44264069,3.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(3.242641, 6.242641) scale(-1, 1) rotate(45.000000) translate(-3.242641, -6.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Store Contact
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_down_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Regions
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <ul
                                className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                                style={{
                                  minHeight: "0",
                                  height: "auto",
                                  transitionDuration: "300ms",
                                }}
                              >
                                <div className="jv-MuiCollapse-wrapper">
                                  <div className="jv-MuiCollapse-wrapperInner">
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                City
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                State
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_down_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Store Features
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <ul
                                className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                                style={{
                                  minHeight: "0",
                                  height: "auto",
                                  transitionDuration: "300ms",
                                }}
                              >
                                <div className="jv-MuiCollapse-wrapper">
                                  <div className="jv-MuiCollapse-wrapperInner">
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconTimefield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Open Date
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconTimefield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Remodel Date
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Coffee Bar
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Florist
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </div>
        </ul>
      </div>

      <div className="demoSize">
        <div className="demoSubtitle">Measures</div>
        <ul
          role="tree"
          aria-multiselectable="true"
          className="jv-mTree jv-mTreeAdhoc mui jv-MuiTreeView-root"
        >
          <div>
            <li
              className="jv-mTree-item mui jv-MuiTreeItem-root jv-Mui-selected jv-Mui-expanded"
              role="treeitem"
            >
              <div className="jv-MuiTreeItem-content">
                <div className="jv-MuiTreeItem-iconContainer">
                  {/* Expanded arrow */}
                  <svg width="10px" height="12px" viewBox="0 0 10 12">
                    <g
                      id="chevron_down_theme_6"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                        id="Combined-Shape"
                        fill="#055DAB"
                        transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                  <div
                    className="tc-jsw-noselect"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {/* ICON */}
                    <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconSet mui"></span>
                    <span className="jv-mTree-item-label-text mui">Sales</span>
                  </div>
                </div>
              </div>

              <ul
                className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                style={{
                  minHeight: "0",
                  height: "auto",
                  transitionDuration: "300ms",
                }}
              >
                <div className="jv-MuiCollapse-wrapper">
                  <div className="jv-MuiCollapse-wrapperInner">
                    <div>
                      <li className="jv-mTree-item mui jv-MuiTreeItem-root jv-Mui-expanded">
                        <div className="jv-MuiTreeItem-content">
                          <div className="jv-MuiTreeItem-iconContainer">
                            {/* Expanded arrow */}
                            <svg width="10px" height="12px" viewBox="0 0 10 12">
                              <g
                                id="chevron_down_theme_6"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <path
                                  d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                  id="Combined-Shape"
                                  fill="#055DAB"
                                  transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                ></path>
                              </g>
                            </svg>
                          </div>
                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                            <div
                              className="tc-jsw-noselect"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              {/* ICON */}
                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                              <span className="jv-mTree-item-label-text mui">
                                Stores
                              </span>
                            </div>
                          </div>
                        </div>

                        <ul
                          className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                          style={{
                            minHeight: "0",
                            height: "auto",
                            transitionDuration: "300ms",
                          }}
                        >
                          <div className="jv-MuiCollapse-wrapper">
                            <div className="jv-MuiCollapse-wrapperInner">
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconNumbermeasure mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Store Sales 2019
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconNumbermeasure mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Store Cost 2019
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconNumbermeasure mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Unit Sales 2019
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Expanded arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_down_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconSet mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Products
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {" "}
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconNumbermeasure mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          SKU
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconNumbermeasure mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          SRP
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer"></div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconNumbermeasure mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Gross Weight
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>

                              <div>
                                <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                  <div className="jv-MuiTreeItem-content">
                                    <div className="jv-MuiTreeItem-iconContainer">
                                      {/* Collapsed Arrow */}
                                      <svg
                                        width="10px"
                                        height="12px"
                                        viewBox="0 0 10 12"
                                      >
                                        <g
                                          id="chevron_down_theme_6"
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                        >
                                          <path
                                            d="M2.44264069,1.24264069 L2.44264069,6.04264069 L7.24264069,6.04264069 L7.24264069,7.24264069 L2.44264069,7.24264069 L2.44264069,7.24264069 L1.24264069,7.24264069 L1.24264069,1.24264069 L2.44264069,1.24264069 Z"
                                            id="Combined-Shape"
                                            fill="#055DAB"
                                            transform="translate(4.242641, 4.242641) rotate(-45.000000) translate(-4.242641, -4.242641) "
                                          ></path>
                                        </g>
                                      </svg>
                                    </div>
                                    <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                      <div
                                        className="tc-jsw-noselect"
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          alignItems: "center",
                                        }}
                                      >
                                        {/* ICON */}
                                        <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconFolder mui"></span>
                                        <span className="jv-mTree-item-label-text mui">
                                          Store Features
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </div>
                              <ul
                                className="jv-MuiCollapse-container jv-MuiTreeItem-group jv-MuiCollapse-entered"
                                style={{
                                  minHeight: "0",
                                  height: "auto",
                                  transitionDuration: "300ms",
                                }}
                              >
                                <div className="jv-MuiCollapse-wrapper">
                                  <div className="jv-MuiCollapse-wrapperInner">
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconTimefield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Open Date
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconTimefield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Remodel Date
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Coffee Bar
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                    <div>
                                      <li className="jv-mTree-item mui jv-MuiTreeItem-root">
                                        <div className="jv-MuiTreeItem-content">
                                          <div className="jv-MuiTreeItem-iconContainer"></div>
                                          <div className="jv-mTree-item-label mui jv-MuiTypography-root jv-MuiTreeItem-label jv-MuiTypography-body1">
                                            <div
                                              className="tc-jsw-noselect"
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                alignItems: "center",
                                              }}
                                            >
                                              {/* ICON */}
                                              <span className="jv-mTree-item-label-icon jv-mTree-item-label-iconStringfield mui"></span>
                                              <span className="jv-mTree-item-label-text mui">
                                                Florist
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </div>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </>
);
treeAdhoc.storyName = "Tree - Ad Hoc";

/* ------------------ */
/*  04. RICH TREE     */
/* ------------------ */
export const richTree = () => {
  const treeData = [
    {
      id: "/root",
      label: "root",
      uri: "/",
      resourceType: "folder",
      permissionMask: 1,
      children: [
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-20T14:42:14",
          updateDate: "2024-06-20T14:42:14",
          label: "AI_ML",
          description: "",
          uri: "/AI_ML",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:02",
          updateDate: "2023-12-01T23:17:20",
          label: "Organizations",
          description: "Organizations",
          uri: "/organizations",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Temp",
          description: "Temp",
          uri: "/temp",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:16:21",
          label: "Themes",
          uri: "/themes",
          resourceType: "folder",
          children: [
            {
              version: 0,
              permissionMask: 2,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:16:23",
              label: "default",
              uri: "/themes/default",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 1,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:17:06",
              label: "easy_access",
              uri: "/themes/easy_access",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 1,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:17:07",
              label: "jasper_dark",
              uri: "/themes/jasper_dark",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 1,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:17:13",
              label: "pods_summer",
              uri: "/themes/pods_summer",
              resourceType: "folder",
            },
          ],
        },
      ],
    },
    {
      id: "/public",
      label: "Public",
      uri: "/public",
      resourceType: "folder",
      permissionMask: 1,
      children: [
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Ad Hoc Components",
          description: "Ad Hoc Components",
          uri: "/public/adhoc",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:50",
          label: "Audit",
          description: "Audit Components",
          uri: "/public/audit",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-07-23T12:23:42",
          updateDate: "2024-07-23T12:23:42",
          label: "Beluga",
          description: "",
          uri: "/public/Beluga",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:18:04",
          label: "Completed Schedules",
          description: "Completed Schedules Components",
          uri: "/public/Completed_Schedules",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Dashboards",
          uri: "/public/Dashboards",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2012-09-06T18:41:43",
          label: "Diagnostic",
          description: "",
          uri: "/public/diagnostic",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:18:11",
          label: "Monitoring",
          description: "Monitoring Components",
          uri: "/public/monitoring",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:23:16",
          updateDate: "2012-10-15T21:47:29",
          label: "Samples",
          description: "Samples",
          uri: "/public/Samples",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Templates",
          uri: "/public/templates",
          resourceType: "folder",
        },
      ],
    },
  ];

  function TransitionComponent(props) {
    return <JVCollapse {...props} />;
  }

  const CustomLabel = ({ expandable, children, ...other }) => {
    return (
      <>
        <TreeItem2Label
          {...other}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <JVBox color="inherit" sx={{ mr: 1, fontSize: "1.2rem" }}>
            <JVIcon icon="folder" />
          </JVBox>

          <JVTypography variant="body2">{children}</JVTypography>
        </TreeItem2Label>
      </>
    );
  };

  const CustomTreeItem = (props) => {
    const { id, itemId, label, disabled, children, ...other } = props;

    const {
      getRootProps,
      getContentProps,
      getIconContainerProps,
      getLabelProps,
      getGroupTransitionProps,
      status,
    } = useTreeItem2({ id, itemId, children, label, disabled });
    status.expandable = true;
    return (
      <TreeItem2Provider itemId={itemId}>
        <TreeItem2Root {...getRootProps(other)}>
          <TreeItem2Content {...getContentProps()}>
            {/*rendering expand collapse icon*/}
            <TreeItem2IconContainer {...getIconContainerProps()}>
              <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
            <CustomLabel
              {...getLabelProps({
                expandable: true,
                disable: status.disabled,
              })}
            />
          </TreeItem2Content>
          {children && <TransitionComponent {...getGroupTransitionProps()} />}
        </TreeItem2Root>
      </TreeItem2Provider>
    );
  };

  return (
    <RichTreeView
      items={treeData}
      getItemLabel={(item) => {
        return item.label;
      }}
      //expandedItems={["/public"]}
      // isItemDisabled={(item) => isItemDisable(item)}
      defaultSelectedItems={"/public/samples"}
      getItemId={(item) =>
        item.uri.startsWith("/public")
          ? item.uri
          : item.uri === "/"
            ? "/root"
            : `/root${item.uri}`
      }
      slots={{ item: CustomTreeItem }}
    />
  );
};
richTree.storyName = "Rich Tree";

export const richTreeDisabled = () => {
  const treeData = [
    {
      id: "/root",
      label: "root",
      uri: "/",
      resourceType: "folder",
      permissionMask: 2,
      children: [
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-20T14:42:14",
          updateDate: "2024-06-20T14:42:14",
          label: "AI_ML",
          description: "",
          uri: "/AI_ML",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:02",
          updateDate: "2023-12-01T23:17:20",
          label: "Organizations",
          description: "Organizations",
          uri: "/organizations",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Temp",
          description: "Temp",
          uri: "/temp",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:16:21",
          label: "Themes",
          uri: "/themes",
          resourceType: "folder",
          children: [
            {
              version: 0,
              permissionMask: 2,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:16:23",
              label: "default",
              uri: "/themes/default",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 2,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:17:06",
              label: "easy_access",
              uri: "/themes/easy_access",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 2,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:17:07",
              label: "jasper_dark",
              uri: "/themes/jasper_dark",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 2,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:17:13",
              label: "pods_summer",
              uri: "/themes/pods_summer",
              resourceType: "folder",
            },
          ],
        },
      ],
    },
    {
      id: "/public",
      label: "Public",
      uri: "/public",
      resourceType: "folder",
      permissionMask: 2,
      children: [
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Ad Hoc Components",
          description: "Ad Hoc Components",
          uri: "/public/adhoc",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 1,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:50",
          label: "Audit",
          description: "Audit Components",
          uri: "/public/audit",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-07-23T12:23:42",
          updateDate: "2024-07-23T12:23:42",
          label: "Beluga",
          description: "",
          uri: "/public/Beluga",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:18:04",
          label: "Completed Schedules",
          description: "Completed Schedules Components",
          uri: "/public/Completed_Schedules",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Dashboards",
          uri: "/public/Dashboards",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 30,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2012-09-06T18:41:43",
          label: "Diagnostic",
          description: "",
          uri: "/public/diagnostic",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:18:11",
          label: "Monitoring",
          description: "Monitoring Components",
          uri: "/public/monitoring",
          resourceType: "folder",
        },
        {
          version: 0,
          permissionMask: 30,
          creationDate: "2024-06-18T15:23:16",
          updateDate: "2012-10-15T21:47:29",
          label: "Samples",
          description: "Samples",
          uri: "/public/Samples",
          resourceType: "folder",
          children: [
            {
              version: 0,
              permissionMask: 2,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:18:11",
              label: "Test1",
              description: "Monitoring Components",
              uri: "/public/Samples/test1",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 30,
              creationDate: "2024-06-18T15:23:16",
              updateDate: "2012-10-15T21:47:29",
              label: "Test2",
              description: "Samples",
              uri: "/public/Samples/test2",
              resourceType: "folder",
            },
            {
              version: 0,
              permissionMask: 2,
              creationDate: "2024-06-18T15:22:03",
              updateDate: "2023-12-01T23:17:25",
              label: "Test3",
              uri: "/public/Samples/test3",
              resourceType: "folder",
            },
          ],
        },
        {
          version: 0,
          permissionMask: 2,
          creationDate: "2024-06-18T15:22:03",
          updateDate: "2023-12-01T23:17:25",
          label: "Templates",
          uri: "/public/templates",
          resourceType: "folder",
        },
      ],
    },
  ];

  const [lastExapanded, setLastExpandedNode] = useState("");
  const [disableNode, setDisableNode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedItems, setExpandedItems] = useState(["/public"]);

  useEffect(() => {
    if (isExpanded && lastExapanded.length) {
      setExpandedItems([...expandedItems, lastExapanded]);
    } else {
      setExpandedItems(expandedItems.filter((item) => item !== lastExapanded));
    }
  }, [lastExapanded, isExpanded]);

  const isTreeNodeDisable = (item) => {
    return !(item.permissionMask == 1 || item.permissionMask & 4);
  };

  function TransitionComponent(props) {
    return <JVCollapse {...props} />;
  }

  const CustomLabel = ({ expandable, children, ...other }) => {
    return (
      <>
        <TreeItem2Label
          {...other}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <JVBox color="inherit" sx={{ mr: 1, fontSize: "1.2rem" }}>
            <JVIcon icon="folder" />
          </JVBox>

          <JVTypography variant="body2">{children}</JVTypography>
        </TreeItem2Label>
      </>
    );
  };

  const CustomTreeItem = (props) => {
    const { id, itemId, label, disabled, children, ...other } = props;

    const {
      getRootProps,
      getContentProps,
      getIconContainerProps,
      getLabelProps,
      getGroupTransitionProps,
      status,
      publicAPI,
    } = useTreeItem2({ id, itemId, children, label, disabled });
    const item = publicAPI.getItem(itemId);
    status.expandable = true;
    status.disabled = isTreeNodeDisable(item);
    return (
      <TreeItem2Provider itemId={itemId}>
        <TreeItem2Root
          {...getRootProps(other)}
          onClick={(event) => {
            event.stopPropagation();
            setLastExpandedNode(itemId);
            setDisableNode(status.disabled);
            setIsExpanded(!status.expanded);
          }}
        >
          <TreeItem2Content {...getContentProps()}>
            {/*rendering expand collapse icon*/}
            <TreeItem2IconContainer {...getIconContainerProps()}>
              <TreeItem2Icon status={status} />
            </TreeItem2IconContainer>
            <CustomLabel
              {...getLabelProps({
                expandable: true,
                disable: status.disabled,
              })}
            />
          </TreeItem2Content>
          {children && <TransitionComponent {...getGroupTransitionProps()} />}
        </TreeItem2Root>
      </TreeItem2Provider>
    );
  };

  return (
    <RichTreeView
      items={treeData}
      getItemLabel={(item) => {
        return item.label;
      }}
      expandedItems={expandedItems}
      defaultSelectedItems={"/public"}
      getItemId={(item) =>
        item.uri.startsWith("/public")
          ? item.uri
          : item.uri === "/"
            ? "/root"
            : `/root${item.uri}`
      }
      slots={{ item: CustomTreeItem }}
    />
  );
};
richTreeDisabled.storyName = "Rich Tree Disabled";
