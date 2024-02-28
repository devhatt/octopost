import React from 'react';

export interface ISocialMediaListProps {
  tags: ISocialMedia[];
}

export interface ISocialMedia {
  icon: React.ReactElement;
  id: number;
  name: string;
}
