import { Body, Controller, Get, Post, Put } from '@nestjs/common';

import { ArticleService } from './article.service';
import { Prisma } from '@prisma/client';

@Controller('article')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}

  @Post()
  async createArticle(@Body() data: Prisma.ArticleCreateInput) {
    return await this.articlesService.create(data);
  }

  @Get()
  async getAllArticles() {
    return await this.articlesService.getAll();
  }

  @Put('/update:id')
  async updateArticle(id: string, data: Prisma.ArticleUpdateInput) {
    return await this.articlesService.updateArticle(id, data);
  }
}
