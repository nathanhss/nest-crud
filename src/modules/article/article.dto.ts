export type ArticleDTO = {
  id?: string;
  title: string;
  description: string;
  body: string;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};
