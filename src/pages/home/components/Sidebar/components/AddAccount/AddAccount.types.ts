import { ChangeEvent } from 'react';

export type AddAccountProps = {
  onChange: (event: ChangeEvent<HTMLSelectElement>, addonId: string) => void;
};
