import React from "react";
import {
  JVTypography,
  JVTreeItem2Content,
  JVTreeItem2IconContainer,
  JVTreeItem2Label,
  JVTreeItem2Root,
  JVTreeItem2Icon,
  JVTreeProviderNameSpace,
  JVTreeViewBaseItemTypes,
  useJVTreeItem2ParametersTypes,
  useJVTreeItem2,
  JVIcon,
  JVBox,
  JVCollapse,
} from "@jaspersoft/jv-ui-components";
import { JVRichTreeView } from "@jaspersoft/jv-ui-components";

type FileType =
  | "image"
  | "pdf"
  | "doc"
  | "video"
  | "folder"
  | "pinned"
  | "trash";

type ExtendedTreeItemProps = {
  fileType?: FileType;
  id: string;
  label: string;
};

const ITEMS: JVTreeViewBaseItemTypes<ExtendedTreeItemProps>[] = [
  {
    id: "1",
    label: "Documents",
    children: [
      {
        id: "1.1",
        label: "Company",
        children: [
          { id: "1.1.1", label: "Invoice", fileType: "pdf" },
          { id: "1.1.2", label: "Meeting notes", fileType: "doc" },
          { id: "1.1.3", label: "Tasks list", fileType: "doc" },
          { id: "1.1.4", label: "Equipment", fileType: "pdf" },
          { id: "1.1.5", label: "Video conference", fileType: "video" },
        ],
      },
      { id: "1.2", label: "Personal", fileType: "folder" },
      { id: "1.3", label: "Group photo", fileType: "image" },
    ],
  },
  {
    id: "2",
    label: "Bookmarked",
    fileType: "pinned",
    children: [
      { id: "2.1", label: "Learning materials", fileType: "folder" },
      { id: "2.2", label: "News", fileType: "folder" },
      { id: "2.3", label: "Forums", fileType: "folder" },
      { id: "2.4", label: "Travel documents", fileType: "pdf" },
    ],
  },
  { id: "3", label: "History", fileType: "folder" },
  { id: "4", label: "Trash", fileType: "trash" },
];

function DotIcon() {
  return <JVBox />;
}

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
        {expandable && <DotIcon />}
      </JVTreeItem2Label>
    </>
  );
};

const isExpandable = (reactChildren: React.ReactNode) => {
  if (Array.isArray(reactChildren)) {
    return reactChildren.length > 0 && reactChildren.some(isExpandable);
  }
  return Boolean(reactChildren);
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
    // getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
    // publicAPI
  } = useJVTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  // const item = publicAPI.getItem(itemId);
  const expandable = isExpandable(children);
  let icon = getIconFromFileType();

  return (
    <JVTreeProviderNameSpace.TreeItem2ProviderNameSpace itemId={itemId}>
      <JVTreeItem2Root {...getRootProps(other)}>
        <JVTreeItem2Content {...getContentProps()}>
          <JVTreeItem2IconContainer {...getIconContainerProps()}>
            <JVTreeItem2Icon status={status} />
          </JVTreeItem2IconContainer>
          {/*    /!* <TreeItem2Checkbox {...getCheckboxProps()} /> *!/*/}
          <CustomLabel
            {...getLabelProps({
              icon,
              expandable: expandable && status.expanded,
            })}
          />
        </JVTreeItem2Content>
        {children && <TransitionComponent {...getGroupTransitionProps()} />}
      </JVTreeItem2Root>
    </JVTreeProviderNameSpace.TreeItem2ProviderNameSpace>
  );
});

export const TreeView = () => {
  return (
    <JVRichTreeView
      items={ITEMS}
      defaultExpandedItems={["1", "1.1"]}
      defaultSelectedItems="1.1"
      slots={{ item: CustomTreeItem }}
    />
  );
};
