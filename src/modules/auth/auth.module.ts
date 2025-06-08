import { env } from '@constants/environment.constant'
import { User } from '@modules/user/entities/user.entity'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthService } from './services/auth.service'
import { UserService } from '@modules/user/services/user.service'
import { AuthController } from './controllers/auth.controller'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from 'src/middleware/strategies/jwt.strategy'
import { AuthGuard } from 'src/middleware/guards/auth.guard'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: env.jwt.accessTokenSecret,
      signOptions: { expiresIn: '3h' },
    }),
  ],
  providers: [AuthService, UserService, JwtStrategy, AuthGuard],
  controllers: [AuthController],
  exports: [AuthService, JwtStrategy, AuthGuard],
})
export class AuthModule {}
