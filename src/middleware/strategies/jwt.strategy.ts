import { env } from '@constants/environment.constant'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: env.jwt.accessTokenSecret,
      passReqToCallback: true,
    })
  }

  async validate(payload: any) {
    try {
      const user = await this.getUser(payload)

      if (!user) {
        return false
      }

      return user
    } catch (error) {
      return false
    }
  }

  async getUser(payload: any) {
    return payload
  }
}
