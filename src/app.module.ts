import { ArticleModule } from './modules/article/article.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
