DB_host: localhost
DB_port: 5432
DB_username: postgres
DB_pass: root
DB_name: jj_db

//Нужно встроить подключение через env

 TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService ) => ({
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          synchronize: true,
          entities: [ __dirname + '/**/*.entity{ .js , .ts}'],
      }),
      inject: [ConfigService],
    }),