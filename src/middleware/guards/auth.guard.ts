import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AuthGuard as AuthenGuard } from '@nestjs/passport'

@Injectable()
export class AuthGuard extends AuthenGuard('jwt') implements CanActivate {
  constructor() {
    super()
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context)
  }
}
