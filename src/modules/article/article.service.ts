import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ArticleCreateInput) {
    console.log({ data });
    try {
      const article = await this.prisma.article.findFirst({
        where: {
          title: data.title,
        },
      });

      if (article) {
        throw new Error('Article already exists');
      }

      const newArticle = await this.prisma.article.create({
        data,
      });

      return newArticle;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteArticleByTitle(data: Prisma.ArticleWhereUniqueInput) {
    try {
      const article = await this.prisma.article.findFirst({
        where: {
          title: data.title,
        },
      });

      if (!article) {
        throw new Error('Article not found');
      }

      const deletedArticle = await this.prisma.article.delete({
        where: {
          title: data.title,
        },
      });

      return deletedArticle;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteArticleById(data: Prisma.ArticleWhereUniqueInput) {
    try {
      const article = await this.prisma.article.findFirst({
        where: {
          id: data.id,
        },
      });

      if (!article) {
        throw new Error('Article not found');
      }

      const deletedArticle = await this.prisma.article.delete({
        where: {
          id: data.id,
        },
      });

      return deletedArticle;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAll() {
    const articles = await this.prisma.article.findMany();

    return articles;
  }

  async getArticleById(data: Prisma.ArticleWhereUniqueInput) {
    const article = await this.prisma.article.findFirst({
      where: {
        id: data.id,
      },
    });

    return article;
  }

  async updateArticle(id: string, data: Prisma.ArticleUpdateInput) {
    try {
      const article = await this.prisma.article.findUnique({
        where: {
          id,
        },
      });

      if (!article) {
        throw new Error('Article not found');
      }

      const updatedArticle = await this.prisma.article.update({
        where: {
          id,
        },
        data,
      });

      return updatedArticle;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
