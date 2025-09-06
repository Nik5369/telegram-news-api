import { useEffect, useRef, useState } from 'react';

import type { TypographyProps } from '@mui/material';
import { Tooltip, Typography } from '@mui/material';

export const TextWithTooltip: React.FC<TypographyProps> = (props) => {
  const { children: text, ...otherProps } = props;

  const textRef = useRef<HTMLSpanElement | null>(null);

  const [isTextCollapsed, setIsTextCollapsed] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const isCollapsed = textRef.current.offsetWidth < textRef.current.scrollWidth;

      setIsTextCollapsed(isCollapsed);
    }
  }, [text]);

  const Content = (
    <Typography ref={textRef} noWrap {...otherProps} sx={{ ...otherProps.sx }}>
      {text}
    </Typography>
  );

  return isTextCollapsed ? (
    <Tooltip
      slotProps={{
        popper: {
          color: 'white',
          sx: { color: 'white' },
        },
        tooltip: {
          color: 'white',
          sx: { color: 'white' },
        },
      }}
      title={text}
    >
      {Content}
    </Tooltip>
  ) : (
    Content
  );
};
