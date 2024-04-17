import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';

import { MapModule } from './map/map.module';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';
 
@Module({
  imports: 
  [
    UserModule, 
    NotesModule,
    CollectionModule,
    AuthModule,
    MapModule, 
    ConfigModule.forRoot( {isGlobal: true} ),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
          return {
              type: 'postgres',
              host: 'localhost',
              port: 5432 ,
              username: 'postgres',
              password: 'root',
              database: 'jojo_db',
              entities: [__dirname + '/**/*.entity{.ts,.js}'],
              synchronize: true,
          } as TypeOrmModuleOptions;
      },
  }),
    CollectionModule,
   ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
