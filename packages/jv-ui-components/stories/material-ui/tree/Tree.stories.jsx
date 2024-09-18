import React from "react";
import "./tree.css";

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
