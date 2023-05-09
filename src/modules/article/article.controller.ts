import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ArticleService } from './article.service';
import { Prisma } from '@prisma/client';

@Controller('article')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}

  @Post()
  async createArticle(@Body() data: Prisma.ArticleCreateInput) {
    return await this.articlesService.create(data);
  }

  @Delete('/delete/:id')
  async deleteArticle(@Param('id') id: string) {
    return await this.articlesService.deleteArticleById(id);
  }

  @Get()
  async getAllArticles() {
    return await this.articlesService.getAll();
  }

  @Get(':id')
  async getArticleById(@Param('id') id: string) {
    return await this.articlesService.getArticleById(id);
  }

  @Put('/update/:id')
  async updateArticle(
    @Param('id') id: string,
    @Body() data: Prisma.ArticleUpdateInput,
  ) {
    return await this.articlesService.updateArticle(id, data);
  }
}
