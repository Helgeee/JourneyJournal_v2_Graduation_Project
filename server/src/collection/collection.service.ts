import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  create(createCollectionDto: CreateCollectionDto) {
    return createCollectionDto;
  }

  findAll() {
    return `This action returns all collection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return updateCollectionDto;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}
