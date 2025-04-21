export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  token?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  message?: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}
export interface RegisterResponse {
  message: string;
  user: {
    id: string;
    username: string;
    email: string;
  };
}
