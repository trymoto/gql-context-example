import { Module } from '@nestjs/common';
import { GraphQLModule, Query, Resolver } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Resolver()
export class ExampleResolver {
  @Query(() => Boolean)
  example() {
    return true;
  }
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: () => {
        throw new Error('Error from context');
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ExampleResolver],
})
export class AppModule {}
