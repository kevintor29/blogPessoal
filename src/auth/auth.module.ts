import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsuarioModule } from "../usuario/usuario.module";

import { Bcrypt } from "./bcrypt/bsrypt";
import { jwtConstants } from "./constants/constants";
import { AuthController } from "./controllers/auth.controller";
import { JwtStrategy } from "./estrategy/jwt.strategy";
import { LocalStrategy } from "./estrategy/local.strategy";
import { AuthService } from "./service/auth.service";


@Module({
    imports:[
        UsuarioModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions:{expiresIn: `24h`}
        })
    ],
    providers:[Bcrypt,AuthService,LocalStrategy,JwtStrategy],
    controllers:[AuthController],
    exports:[Bcrypt]
})
export class AuthModule{}