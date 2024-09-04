import { z } from 'zod';

const MIN_PASSWORD_CHARACTERS = 8;

export const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Must be a valid email.' }),
  password: z
    .string()
    .min(MIN_PASSWORD_CHARACTERS, {
      message: 'Must have 8 or more characters.',
    })
    .refine(
      (v) => {
        const hasNumber = /\d/.test(v);
        const hasSpecialChar = /[!"#$%&()*,.:<>?@^{|}]/.test(v);

        return hasNumber && hasSpecialChar;
      },
      { message: 'Must contain at least 1 number and 1 special character.' }
    ),
});
