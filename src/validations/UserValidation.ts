import { z } from 'zod';

export const UserValidation = z.object({
  username: z.string().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  email: z.string().email({ message: 'Email is invalid.' }).min(6, {
    message: 'Email must be at least 6 characters.',
  }),
});
