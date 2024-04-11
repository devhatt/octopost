import { ChangeEvent, ReactNode } from 'react';

import { useModulesStore } from '~stores/useModulesStore';

import { AddAccountProps } from './AddAccount.types';

function AddAccount(props: AddAccountProps): ReactNode {
  const { modules } = useModulesStore();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.onChange(e, e.target.value);
  };

  return (
    <div>
      <select defaultValue="DEFAULT" onChange={(e) => handleChange(e)}>
        <option disabled value="DEFAULT">
          Select a module
        </option>
        {modules.map((module) => (
          <option key={module.id} value={module.id}>
            {module.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AddAccount;
