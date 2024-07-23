import React, { useEffect, useState } from "react";
import {
  JVTypography,
  JVTreeItem2Content,
  JVTreeItem2IconContainer,
  JVTreeItem2Label,
  JVTreeItem2Root,
  JVTreeItem2Icon,
  JVTreeProviderNameSpace,
  useJVTreeItem2ParametersTypes,
  useJVTreeItem2,
  JVIcon,
  JVBox,
  JVCollapse,
} from "@jaspersoft/jv-ui-components";
import { JVRichTreeView } from "@jaspersoft/jv-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getFolderData } from "../../../../actions/action";

const data = [
  {
    version: 0,
    permissionMask: 1,
    label: "Root",
    description: "Root",
    uri: "/",
    resourceType: "folder",
  },
  {
    version: 0,
    label: "Public",
    description: "Public",
    uri: "/public",
    resourceType: "folder",
  },
];

function TransitionComponent(props: any) {
  return <JVCollapse {...props} />;
}

interface CustomLabelProps {
  children: React.ReactNode;
  icon?: React.ElementType;
  expandable?: boolean;
}

const CustomLabel = ({
  icon: Icon,
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
        {/*/!* render icon *!/*/}
        {/*{Icon && (*/}
        <JVBox
          className="labelIcon"
          color="inherit"
          sx={{ mr: 1, fontSize: "1.2rem" }}
        >
          <JVIcon icon="folder" />
        </JVBox>
        {/*)}*/}

        <JVTypography variant="body2">{children}</JVTypography>
      </JVTreeItem2Label>
    </>
  );
};

const isExpandable = (reactChildren: React.ReactNode) => {
  if (Array.isArray(reactChildren)) {
    return reactChildren.length > 0 && reactChildren.some(isExpandable);
  }
  return true;
};

const getIconFromFileType = () => <></>;

interface CustomTreeItemProps
  extends Omit<useJVTreeItem2ParametersTypes, "rootRef">,
    Omit<React.HTMLAttributes<HTMLLIElement>, "onFocus"> {}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: CustomTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const { id, itemId, label, disabled, children, ...other } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useJVTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  let icon = getIconFromFileType();

  if (itemId == "/public/Samples/Reports") {
    debugger;
  }

  status.expandable = true;
  return (
    <JVTreeProviderNameSpace.TreeItem2ProviderNameSpace itemId={itemId}>
      <JVTreeItem2Root {...getRootProps(other)}>
        <JVTreeItem2Content {...getContentProps()}>
          {/*rendering expand collapse icon*/}
          <JVTreeItem2IconContainer {...getIconContainerProps()}>
            <JVTreeItem2Icon status={status} />
          </JVTreeItem2IconContainer>
          <CustomLabel
            {...getLabelProps({
              icon,
              expandable: true,
            })}
          />
        </JVTreeItem2Content>
        {children && <TransitionComponent {...getGroupTransitionProps()} />}
      </JVTreeItem2Root>
    </JVTreeProviderNameSpace.TreeItem2ProviderNameSpace>
  );
});

const addChildrenToTreeOnLoad = (
  treeStructure,
  apiData,
  pathWhereChildrensToBeAdded,
) => {
  let isIterate = true;
  let nodeToManipulate = treeStructure;

  while (isIterate) {
    // retrive first node
    nodeToManipulate = nodeToManipulate.filter(
      (item) => item.uri == pathWhereChildrensToBeAdded[0],
    )[0];
    if (nodeToManipulate && apiData[nodeToManipulate.uri].length) {
      nodeToManipulate.children = apiData[nodeToManipulate.uri];
      nodeToManipulate = nodeToManipulate.children;
    } else {
      isIterate = false;
    }
    pathWhereChildrensToBeAdded.shift();
  }
  return treeStructure;
};

export const TreeView = () => {
  const [treeData, setTreeData] = useState([]);
  const resourceUri = useSelector(
    (state: any) => state.schedulerUIConfig.resourceURI,
  );
  const folderData = useSelector((state: any) => state.folderData);
  const [currentExpandedNode, setCurrentExpandedNode] = useState("");
  const [alreadyLoadedTreeNode, setAlreadyLoadedTreeNode] = useState([]); // to keep track of whethere children nodes have been added to tree or not
  const [currentStructureExpanded, setCurrentStructureExpanded] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  const dispatch = useDispatch();

  // show data and expansion on initial load
  // TODO : need to add initial data on load
  useEffect(() => {
    let foldersNameFromResourceUri = resourceUri.split("/").filter(Boolean); // splits the string at each slash character and removes empty strings
    foldersNameFromResourceUri.pop();
    // gets folders name from uri
    let foldersUriToBeExapanded = foldersNameFromResourceUri.reduce(
      (acc, curr, i) => {
        if (i === 0) {
          acc.push(`/${curr}`);
        } else {
          acc.push(`${acc[i - 1]}/${curr}`);
        }
        return acc;
      },
      [],
    );

    const initialTreeStructure = addChildrenToTreeOnLoad(data, folderData, [
      ...foldersUriToBeExapanded,
    ]);
    setTreeData([...initialTreeStructure]);
    setAlreadyLoadedTreeNode([
      ...alreadyLoadedTreeNode,
      foldersUriToBeExapanded[foldersUriToBeExapanded.length - 1],
    ]);
    setExpandedItems(foldersUriToBeExapanded);
    setCurrentExpandedNode(
      foldersUriToBeExapanded[foldersUriToBeExapanded.length - 1],
    );
  }, []);

  useEffect(() => {
    const currentExpandedNodeData = folderData[currentExpandedNode];
    if (
      currentExpandedNodeData &&
      !alreadyLoadedTreeNode[currentExpandedNodeData]
    ) {
      if (currentExpandedNodeData.length !== 0) {
        let foldersNameFromResourceUri = currentExpandedNode
          .split("/")
          .filter(Boolean); // splits the string at each slash character and removes empty strings
        // gets folders name from uri
        let foldersUriToBeExapanded = foldersNameFromResourceUri.reduce(
          (acc, curr, i) => {
            if (i === 0) {
              acc.push(`/${curr}`);
            } else {
              acc.push(`${acc[i - 1]}/${curr}`);
            }
            return acc;
          },
          [],
        );

        const initialTreeStructure = addChildrenToTreeOnLoad(data, folderData, [
          ...foldersUriToBeExapanded,
        ]);
        setTreeData([...initialTreeStructure]);
        setAlreadyLoadedTreeNode([
          ...alreadyLoadedTreeNode,
          currentExpandedNode,
        ]);
      }
      setExpandedItems([...expandedItems, currentExpandedNode]);
    }
  }, [folderData]);

  console.log(currentExpandedNode);
  return (
    <JVRichTreeView
      items={treeData}
      onItemExpansionToggle={(
        event: React.SyntheticEvent,
        itemId: [],
        isExpanded: [],
      ) => {
        if (isExpanded) {
          setCurrentExpandedNode(itemId as any);
          dispatch(getFolderData(itemId as string));
        }
      }}
      getLabel={(item) => {
        return item.label;
      }}
      expandedItems={expandedItems}
      onItemExpansionToggle={(event, itemId, isExapnded) => {
        if (isExapnded) {
          if (folderData[itemId]) {
            setExpandedItems(() => [...expandedItems, itemId]);
          } else {
            setCurrentExpandedNode(itemId);
            dispatch(getFolderData(itemId));
          }
        } else {
          setExpandedItems(() =>
            expandedItems.filter((item) => item !== itemId),
          );
        }
      }}
      selectedItems={currentExpandedNode}
      multiSelect={false}
      getItemId={(item) => item.uri}
      slots={{ item: CustomTreeItem }}
    />
  );
};
