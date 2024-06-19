import { ChangeEvent, ReactNode } from 'react';

import { useSocialMediaStore } from '~stores/useSocialMediaStore/useSocialMediaStore';

import { AddAccountProps } from './AddAccount.types';

function AddAccount(props: AddAccountProps): ReactNode {
  const { socialMedias } = useSocialMediaStore();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    props.onChange(e.target.value, e);
  };

  return (
    <div>
      <select defaultValue="DEFAULT" onChange={(e) => handleChange(e)}>
        <option disabled value="DEFAULT">
          Select a module
        </option>
        {Array.from(socialMedias, ([key, socialMedia]) => (
          <option key={key} value={key}>
            {socialMedia.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddAccount;
