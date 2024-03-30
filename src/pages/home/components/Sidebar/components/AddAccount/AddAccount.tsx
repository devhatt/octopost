import { ChangeEvent, ReactNode } from 'react';

import { useModulesStore } from '~stores/useModulesStore';

import { AddAccountProps } from './AddAccount.types';

function AddAccount(props: AddAccountProps): ReactNode {
  const { modules } = useModulesStore();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e, e.target.id);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        <option disabled selected>
          Select a module
        </option>
        {modules.map((module) => (
          <option id={module.id} key={module.id}>
            {module.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddAccount;
