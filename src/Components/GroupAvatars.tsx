import {
  AvatarGroup,
  AvatarGroupItem,
  AvatarGroupPopover,
  AvatarGroupProps,
  makeStyles,
  partitionAvatarGroupItems,
} from "@fluentui/react-components";
import * as React from "react";
import { Cast } from "../Models/show";
import { IMG } from "../Pages/ShowsList.Page";

const useStyles = makeStyles({
  root: {
    display: "grid",
    flexDirection: "column",
    rowGap: "10px",
  },
});

type ga = {
  item: Cast[];
} & Partial<AvatarGroupProps>;
const AvatarGroups: React.FC<ga> = ({ item }) => {
  const styles = useStyles();
  const partitionedItems = partitionAvatarGroupItems({ items: item });

  return (
    <div className={styles.root}>
      <AvatarGroup layout="stack" size={48}>
        {partitionedItems.inlineItems.map((i) => (
          <AvatarGroupItem
            name={i.name}
            key={i.id}
            image={{
              src: i.image?.medium || IMG,
            }}
          />
        ))}

        {partitionedItems.overflowItems && (
          <AvatarGroupPopover size="large">
            {partitionedItems.overflowItems.map((i) => (
              <AvatarGroupItem
                name={i.name}
                key={i.id}
                image={{
                  src: i.image?.medium || IMG,
                }}
              />
            ))}
          </AvatarGroupPopover>
        )}
      </AvatarGroup>
    </div>
  );
};
export default AvatarGroups;
