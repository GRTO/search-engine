import { Skeleton } from "@mui/material";

const SkeletalLoader: React.FC = () => (
  <>
    {Array.from({ length: 5 }).map((_item, index) => (
      <div key={index} style={{ paddingBottom: "0.5rem" }}>
        <Skeleton variant="text" />
      </div>
    ))}
  </>
);

export default SkeletalLoader;
