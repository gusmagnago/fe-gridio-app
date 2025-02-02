import { ISingin } from '../../api/auth/auth.types';

export interface IAuthLogin extends ISingin {
  rememberMe: boolean;
}

export interface IAuthContext {
  login: (credentials: IAuthLogin) => Promise<boolean>;
  logout: () => void;
  token: string | null;
  isLoginLoading?: boolean;
  loginError: Error | null;
}
