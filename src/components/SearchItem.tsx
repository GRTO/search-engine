import { Typography } from "@mui/material";
import { ResultItem } from "../state/results/types";

const SearchItem: React.FC<ResultItem> = ({
  url,
  description,
  searchEngine,
  title,
}) => (
  <div>
    <Typography variant="subtitle2">{url}</Typography>
    <Typography variant="h6" paddingBottom={1} component="a" href={url}>
      {title} / {searchEngine}
    </Typography>
    <Typography variant="subtitle1" component="div" paddingBottom={5}>
      {description}
    </Typography>
  </div>
);

export default SearchItem;
