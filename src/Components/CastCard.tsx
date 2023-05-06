import { memo } from "react";

const CastCard = ({
  avatarLink,
  name,
}: {
  avatarLink?: string;
  name: string;
}) => {
  return (
    <div className="p-1 m-1">
      <img className="rounded-sm w-28" src={avatarLink} alt="" />
      <p className="font-semibold text-gray-500">{name}</p>
    </div>
  );
};

export default memo(CastCard);
