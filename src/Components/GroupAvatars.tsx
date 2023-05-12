// import * as React from "react";
// import Avatar from "@mui/material/Avatar";
// import AvatarGroup from "@mui/material/AvatarGroup";

// export default function GroupAvatars() {
//   return (
//     <AvatarGroup max={4}>
//       <Avatar alt="Remy Sharp" />
//       <Avatar alt="Travis Howard" />
//       <Avatar alt="Cindy Baker" />
//       <Avatar alt="Agnes Walker" />
//       <Avatar alt="Trevor Henderson" />
//     </AvatarGroup>
//   );
// }
// MUI Code above

import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  partitionAvatarGroupItems,
  AvatarGroupProps,
} from "@fluentui/react-components";
import * as React from "react";

const names = [
  "Johnie McConnell",
  "Allan Munger",
  "Erik Nason",
  "Kristin Patterson",
  "Daisy Phillips",
  "Carole Poland",
  "Carlos Slattery",
  "Robert Tolbert",
  "Kevin Sturgis",
  "Charlotte Waltson",
  "Elliot Woodward",
];

function AvatarGroups(props: Partial<AvatarGroupProps>) {
  const { inlineItems, overflowItems } = partitionAvatarGroupItems({
    items: names,
  });

  return (
    <AvatarGroup {...props}>
      {inlineItems.map((name) => (
        <AvatarGroupItem name={name} key={name} />
      ))}

      {overflowItems && (
        <AvatarGroupPopover>
          {overflowItems.map((name) => (
            <AvatarGroupItem name={name} key={name} />
          ))}
        </AvatarGroupPopover>
      )}
    </AvatarGroup>
  );
}

export default AvatarGroups;
