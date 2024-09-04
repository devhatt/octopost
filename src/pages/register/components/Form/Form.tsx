import { ReactNode, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';

import Button from '~components/Button/Button';
import TextInput from '~components/TextInput/TextInput';

import { schema } from './FormSchema';

import scss from './Form.module.scss';

type IInputs = z.infer<typeof schema>;

function Form(): ReactNode {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>({ resolver: zodResolver(schema) });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars -- TODO: create submit action
  const onSubmit = (_data: IInputs) => {};

  return (
    <form
      aria-label="sign in form"
      className={scss.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextInput
            aria-label="Email"
            error={!!errors.email}
            label="Email"
            placeholder="example@gmail.com"
            rightIcon={'letter'}
            supportText={errors.email?.message}
            {...field}
          />
        )}
        rules={{ required: true }}
      />
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <TextInput
            aria-label="Password"
            error={!!errors.password}
            handleRightIconClick={() => setIsPasswordVisible((old) => !old)}
            label="Password"
            placeholder="************"
            rightIcon={isPasswordVisible ? 'blind-eye' : 'blind-eye'}
            supportText={errors.password?.message}
            type={isPasswordVisible ? 'text' : 'password'}
            {...field}
          />
        )}
      />
      <Button className={scss.submitButton} type="submit" variant="container">
        Sign up
      </Button>
    </form>
  );
}

export default Form;
