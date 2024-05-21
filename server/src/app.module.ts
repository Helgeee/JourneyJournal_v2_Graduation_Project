import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions, } from '@nestjs/typeorm';


import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';
import { CollectionModule } from './collection/collection.module';
import { AuthModule } from './auth/auth.module';



import { MapsModule } from './maps/maps.module';
import { MessageModule } from './message/message.module';
import { SubscriptionModule } from './subscription/subscription.module';


@Module({
  imports: 
  [
    UserModule, 
    NotesModule,
    
    CollectionModule,
    
    AuthModule,

    MapsModule,

    CollectionModule,

    SubscriptionModule,

    MessageModule,

    ConfigModule.forRoot( {isGlobal: true} ),


    TypeOrmModule.forRootAsync({
      useFactory: () => {
          return {
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: 'root',
              database: 'JoJo-db',
              entities: [__dirname + '/**/*.entity{.ts,.js}'],
              synchronize: true,
          } as TypeOrmModuleOptions;
      },
  }),

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService ) => ({
    //       type: 'postgres',
    //       host: configService.get('DB_HOST'),
    //       port: configService.get('DB_PORT'),
    //       username: configService.get('DB_USERNAME'),
    //       password: configService.get('DB_PASSWORD'),
    //       database: configService.get('DB_NAME'),
    //       synchronize: true,
    //       entities:  [__dirname + '/../**/*.entity.{js,ts}'],
    //   }),
    //   inject: [ConfigService]
    // }),

    
   ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}


