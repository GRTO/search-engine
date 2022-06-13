import { Typography } from "@mui/material";
import { ResultItem } from "../state/results/types";
import SearchItem from "./SearchItem";
import SkeletalLoader from "./SkeletalLoader";

export interface SearchItemListProps {
  loading: boolean;
  results?: Array<ResultItem>;
  error?: Error;
}

const SearchItemList: React.FC<SearchItemListProps> = ({
  loading,
  error,
  results,
}) => {
  if (loading) {
    return <SkeletalLoader />;
  }

  if (error) {
    return (
      <div>
        <Typography variant="h4" component="h4">
          Error: {error.name}
        </Typography>
      </div>
    );
  }
  return (
    <div>
      {results?.map((item) => (
        <SearchItem
          key={`${item.url}-${item.searchEngine}`}
          description={item.description}
          searchEngine={item.searchEngine}
          title={item.title}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default SearchItemList;
