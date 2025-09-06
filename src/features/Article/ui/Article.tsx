import type { TArticle } from '@entities/Articles';
import { Grid, Link } from '@mui/material';
import { TextWithTooltip } from '@shared/ui';
import type { FC } from 'react';

type TProps = {
  item: TArticle;
};

export const Article: FC<TProps> = ({ item }) => {
  return (
    <Grid py={1} px={1.5} border={1} borderRadius={3}>
      <TextWithTooltip variant="recurringTitle" color="secondary.light">
        {item.title}
      </TextWithTooltip>
      <div>
        <Link href={item.url}>{item.author_name}</Link>
      </div>
      <div>{item.description}</div>
    </Grid>
  );
};
