import { env } from '@constants/environment.constant'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.database.host,
      port: env.database.port,
      username: env.database.username,
      password: env.database.password,
      database: env.database.dbname,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: env.database.sync,
      logging: ['schema', 'error', 'warn'],
    }),
  ],
})
export class DatabaseModule {}
