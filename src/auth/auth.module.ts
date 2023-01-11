import { Module } from "@nestjs/common";

import { UsersModule } from "src/users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy} from "./jwt.strategy"
import { LocalStrategy } from "./local.strategy";
import { PassportModule} from '@nestjs/passport'
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from './constants';
import { UsersService } from "src/users/users.service";

@Module({
  imports: [UsersModule, PassportModule ,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions:{ expiresIn: '60s'}

  })],
  providers: [AuthService, LocalStrategy, JwtStrategy,UsersService],
  controllers: [AuthController],
})
export class AuthModule {}



