import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  // path of /
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will remove one movie with the id: ${movieId}`;
  }

  // @Put updataes whole resources
  // @Patch updates only some parts of the resources
  @Patch(':/id')
  patch(@Param('id') movieId: string) {
    return `This will update the movie with the id: ${movieId}`;
  }
}
