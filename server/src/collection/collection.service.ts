import {BadRequestException, Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';

// npm start run:dev

@Injectable()
export class CollectionService {

  constructor(
    @InjectRepository(Collection)
    private readonly collectionRepository: Repository<Collection> ) {}

  //Создаёт Новую коллекцию

  async create(createCollectionDto: CreateCollectionDto, id:number) {

    const isExist = await this.collectionRepository.findBy({
      user: { id },
      title: createCollectionDto.title,
    })

    if(isExist.length) 
      throw new BadRequestException('This collection already exist!') ///Проверка на существует ли такая уже Коллекция

    const newCollection = {
        
        title: createCollectionDto.title,
        img: createCollectionDto.img,
        user: { id } ,
      }
      console.log(newCollection)

    return await this.collectionRepository.save(newCollection)
    
  }


  async findAll(id: number) {
    return await this.collectionRepository.find({
      where:{
        user: {id},
      },
      // relations: { 
      //   notes: true,
      // },
    })
  }

  async findOne(id: number) {
    return `This action returns a #${id} collection`;
  }

  async update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return updateCollectionDto;
  }

  async remove(id: number) {
    return id;
  }
}
