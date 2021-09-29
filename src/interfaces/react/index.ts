import React from 'react';

export type TypeReactNode =
  | React.ReactChild
  | React.ReactFragment
  | React.ReactPortal
  | boolean
  | null
  | undefined;
