import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from '@modules/user/user.module'
import { DatabaseModule } from '@modules/database/database.modules'
import { AuthModule } from '@modules/auth/auth.module'

@Module({
  imports: [DatabaseModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
