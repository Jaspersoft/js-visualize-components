import "../css/demoPages.css";
import "./avatar.css";
import { Avatar } from "@mui/material";

/*----------------------------
 *  TABLE OF CONTENTS
 *
 *  1. AVATAR
 *
 *  2. XXXXXX
 *
 * ------------------------------
 *  last modified Mar 10, 2023
 * ------------------------------ */

export default {
  component: Avatar,
  title: "Components/Avatar/Design",
};

export const DefaultAvatar = () => {
  return (
    <>
      <h1 className={"demoType demoTypeDesign"}>Design</h1>
      <h1 className={"demoTitle"}>Avatar</h1>

      {/* ------------------
                 1. AVATAR
                ------------------ */}
      <div className="demoWrapper demoAvatar">
        <div className={"demoWrapper demoInput"}>
          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Medium</p>

            <p className={"demoSubtitle-2"}>Resources</p>
            <div className="demoAvatarType">
              <Avatar
                className={"jv-mAvatar jv-mAvatarMedium jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconAdhoc mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarMedium jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconReport mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarMedium jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDashboard mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarMedium jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDatasource mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarMedium jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDomain mui"}
                ></div>
              </Avatar>
            </div>
          </div>

          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Large</p>

            <p className={"demoSubtitle-2"}>Resources</p>
            <div className="demoAvatarType">
              <Avatar
                className={"jv-mAvatar jv-mAvatarLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconAdhoc mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconReport mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDashboard mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDatasource mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDomain mui"}
                ></div>
              </Avatar>
            </div>
          </div>

          <div className={"demoSize"}>
            <p className={"demoSubtitle"}>Extra Large</p>

            <p className={"demoSubtitle-2"}>Resources</p>
            <div className="demoAvatarType">
              <Avatar
                className={"jv-mAvatar jv-mAvatarXLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconAdhoc mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarXLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconReport mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarXLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDashboard mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarXLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDatasource mui"}
                ></div>
              </Avatar>

              <Avatar
                className={"jv-mAvatar jv-mAvatarXLarge jv-mAvatarResource mui"}
              >
                <div
                  className={"jv-mAvatar-icon jv-mAvatar-iconDomain mui"}
                ></div>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DefaultAvatar.storyName = "Avatar";
