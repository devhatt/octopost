import React from 'react';

export type ISocialMediaListProps = {
  tags: ISocialMedia[];
};

export type ISocialMedia = {
  icon: React.ReactElement;
  id: number;
  name: string;
};
