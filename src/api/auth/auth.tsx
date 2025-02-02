import { BASEURL } from '../../utils/variables';
import { ISigninResponse, ISingin } from './auth.types';

export const login = async ({
  username,
  password,
}: ISingin): Promise<ISigninResponse> => {
  const res = await fetch(`${BASEURL}auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error('Login failed');

  return res.json();
};
