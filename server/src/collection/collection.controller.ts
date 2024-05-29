import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ValidationPipe, UsePipes, Req, BadRequestException } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { AuthorGuard } from 'src/guard/author.guard';

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  create(@Body() createCollectionDto: CreateCollectionDto, @Req() req) {
    const userId = +req.user.id;
      if (isNaN(userId)) {
          throw new BadRequestException('Invalid user id');
  }
    
    return this.collectionService.create(createCollectionDto , +req.user.id ) // возврат id: user
  }

  @Get('')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  findAll(@Req() req) {
    return this.collectionService.findAll(+req.user.id) // возврат всех коллекций 
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard , AuthorGuard )
  findOne(@Param('id')  id: string) {
    return this.collectionService.findOne(+id); // возврат одной коллекции(не работает )
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard )
  update(
      @Param('id') id: string, 
      @Body() updateCollectionDto: UpdateCollectionDto ,

  ) {
    return this.collectionService.update(+id, updateCollectionDto); // (не работает )
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, AuthorGuard)
  @UsePipes(new ValidationPipe())
  remove(@Param('id') id: string) {
    return this.collectionService.remove(+id);
  }
}
