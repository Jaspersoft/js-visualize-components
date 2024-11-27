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
 *  01. RICH FOLDER TREE - HTML ONLY
 *
 *  02. RICH TREE
 *
 *  03. RICH TREE DISABLED
 *
 * ----------------------------
 *  last modified Nov 13, 2024
 * ---------------------------- */

export default {
  title: "Components/Tree/Design",
};

/* ------------------------------------ */
/*  01. RICH FOLDER TREE - HTML ONLY    */
/* ------------------------------------ */
export const richTreeWorking = () => (
  <>
    <h1 className={"demoType demoTypeDesign"}>Design</h1>
    <h1 className={"demoTitle"}>Tree - Rich Folder Tree</h1>

    <div className={"demoWrapper demoTree"}>
      <div className={"demoWrapperSection"}>
        {/* Entire Tree */}
        <ul
          role="tree"
          aria-multiselectable="false"
          className="jv-mTree mui MuiRichTreeView-root css-fc66vf-MuiRichTreeView-root"
        >
          {/* Node + Children */}
          <li role="treeitem" className="css-1uhp40g-MuiTreeItem2-root">
            {/* Individual Node */}
            <div className="jv-mTree-node mui css-gorqh7-MuiTreeItem2-content">
              {/* caret */}
              <div className="jv-mTree-node-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer">
                <svg
                  className="jv-MuiSvgIcon-root jv-MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="TreeViewCollapseIconIcon"
                >
                  <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              </div>

              {/* folder icon and name */}
              <div className="jv-mTree-node-item mui css-1q9fvbo-MuiTreeItem2-label">
                {/* folder icon */}
                <div className="jv-mTree-node-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>

                {/* folder name */}
                <p className="jv-mTree-node-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                  root
                </p>
              </div>
            </div>

            {/* Individual Node's Children */}
            <ul
              className="jv-MuiCollapse-root jv-MuiCollapse-vertical jv-MuiCollapse-entered css-pwcg7p-MuiCollapse-root"
              role="group"
            >
              <div className="jv-MuiCollapse-wrapper jv-MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper">
                <div className="jv-MuiCollapse-wrapperInner jv-MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner">
                  {/* Node + Children */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    {/* Individual Node */}
                    <div className="jv-mTree-node mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-node-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer">
                        <svg
                          className="jv-MuiSvgIcon-root jv-MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="TreeViewExpandIconIcon"
                        >
                          <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </svg>
                      </div>

                      {/* folder icon and name */}
                      <div className="jv-mTree-node-item mui css-1q9fvbo-MuiTreeItem2-label">
                        {/* folder icon */}
                        <div className="jv-mTree-node-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>

                        {/* folder name */}
                        <p className="jv-mTree-node-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Organizations
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Node + Children */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    {/* Individual Node */}
                    <div className="jv-mTree-node mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-node-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer">
                        <svg
                          className="jv-MuiSvgIcon-root jv-MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="TreeViewExpandIconIcon"
                        >
                          <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </svg>
                      </div>

                      {/* folder icon and name */}
                      <div className="jv-mTree-node-item mui css-1q9fvbo-MuiTreeItem2-label">
                        {/* folder icon */}
                        <div className="jv-mTree-node-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>

                        {/* folder name */}
                        <p className="jv-mTree-node-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Temp
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Leaf, Data Source */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafDatasource mui css-gorqh7-MuiTreeItem2-content">
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        {/* folder icon */}
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Data Source
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Domain */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafDomain mui css-gorqh7-MuiTreeItem2-content">
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Domain
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Ad Hoc View */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafAdhoc mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Ad Hoc View
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Report */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafReport mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Report
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Report Option */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafSubreport mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Report Option
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Dashboard */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafDashboard mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Dashboard
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, OLAP */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafOlap mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          OLAP
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Topic */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafTopic mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Topic
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Domain Topic */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafDomaintopic mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Domain Topic
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, File */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafFile mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          File
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Bundle */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafBundle mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Bundle
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Security */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafSecurity mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Security
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Code */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafCode mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Code
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Image */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafImage mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Image
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* Leaf, Undefined */}
                  <li
                    role="treeitem"
                    tabindex="0"
                    aria-expanded="true"
                    className="css-1uhp40g-MuiTreeItem2-root"
                    aria-selected="false"
                  >
                    <div className="jv-mTree-leaf jv-mTree-leafUndefined mui css-gorqh7-MuiTreeItem2-content">
                      {/* caret */}
                      <div className="jv-mTree-leaf-toggle mui css-19d0qwr-MuiTreeItem2-iconContainer"></div>
                      <div className="jv-mTree-leaf-item mui css-1q9fvbo-MuiTreeItem2-label">
                        <div className="jv-mTree-leaf-item-icon mui undefined  mui jv-jv-MuiBox-root css-5v4oby"></div>
                        <p className="jv-mTree-leaf-item-label jv-mText mui jv-MuiTypography-root jv-MuiTypography-body1  css-e784if-MuiTypography-root">
                          Undefined leaf type
                        </p>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>
);
richTreeWorking.storyName = "Tree - Rich Folder Tree";

/* ------------------ */
/*  02. RICH TREE     */
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
          className="jv-mTree-node-item mui" /* Note to Ankita: className added by Anna */
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <JVBox
            className="jv-mTree-node-item-icon"
            color="inherit"
            sx={{ mr: 1, fontSize: "1.2rem" }}
          />

          <JVTypography className="jv-mTree-node-item-label">
            {" "}
            {/* Note to Ankita: variant="body2" removed by Anna */}
            {children}
          </JVTypography>
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
          <TreeItem2Content
            className="jv-mTree-node mui"
            {...getContentProps()}
          >
            {" "}
            {/* Note to Ankita: className "mui" added by Anna */}
            {/*rendering expand collapse icon*/}
            <TreeItem2IconContainer
              className={"jv-mTree-node-toggle mui"}
              {...getIconContainerProps()}
            >
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
      className="jv-mTree mui"
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

/* -------------------------- */
/*  03. RICH TREE DISABLED    */
/* -------------------------- */
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
          <JVBox
            className="jv-mTree-node-item-icon"
            color="inherit"
            sx={{ mr: 1, fontSize: "1.2rem" }}
          ></JVBox>

          <JVTypography className="jv-mTree-node-item-label" variant="body2">
            {children}
          </JVTypography>
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
          <TreeItem2Content className="jv-mTree-node" {...getContentProps()}>
            {/*rendering expand collapse icon*/}
            <TreeItem2IconContainer
              className={"jv-mTree-node-toggle mui"}
              {...getIconContainerProps()}
            >
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
      className="jv-mTree mui"
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
