import { Env } from '@/libs/Env';

class HttpError extends Error {
  status: number;

  payload: any;

  constructor({ status, payload }: { status: number; payload: any }) {
    super('Http Error');
    this.status = status;
    this.payload = payload;
  }
}

class Token {
  private token = '';

  get value() {
    return this.token;
  }

  set value(token: string) {
    this.token = token;
  }
}

export const clientToken = new Token();

const request = async <Response>(
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string,
  options: RequestInit,
) => {
  const baseUrl = Env.API_URL;

  const body = options?.body ? JSON.stringify(options.body) : undefined;

  const baseHeader = {
    'Content-Type': 'application/json',
    Authorization:
      clientToken.value !== '' ? `Bearer ${clientToken.value}` : '',
  };

  const response = await fetch(baseUrl + url, {
    method,
    ...baseHeader,
    headers: {
      ...options.headers,
    },
    body,
  });
  const payload: Response = await response.json();

  const data = {
    status: response.status,
    payload,
  };

  if (!response.ok) {
    throw new HttpError({ status: response.status, payload });
  }

  return data;
};

const http = {
  get: <Response>(url: string, options?: RequestInit) =>
    request<Response>('GET', url, options || {}),
  post: <Response>(url: string, options?: RequestInit) =>
    request<Response>('POST', url, options || {}),
  put: <Response>(url: string, options?: RequestInit) =>
    request<Response>('PUT', url, options || {}),
  delete: <Response>(url: string, options?: RequestInit) =>
    request<Response>('DELETE', url, options || {}),
};

export default http;
