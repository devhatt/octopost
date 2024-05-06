import { ChangeEvent } from 'react';

export type AddAccountProps = {
  onChange: (addonId: string, event: ChangeEvent<HTMLSelectElement>) => void;
};
