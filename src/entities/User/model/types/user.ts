import type { TTelegraphResponse } from '@/shared/types';

export type TCreateUser = {
  short_name: string;
  author_name?: string;
  author_url?: string;
};

export type TUser = {
  short_name: string;
  author_name: string;
  author_url: string;
};

export type TEditUser = {
  access_token: string | null;
  short_name?: string;
  author_name?: string;
  author_url?: string;
};

type TFieldsForGet = 'short_name' | 'author_name' | 'author_url' | 'auth_url' | 'page_count';

export type TGetUserInfo = {
  access_token: string;
  fields?: TFieldsForGet[];
};

export type TGEtUserResponse = TTelegraphResponse<TUser>;
