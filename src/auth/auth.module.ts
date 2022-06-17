import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, JwtModule.register({
    secret: process.env.PRIVATE_KEY || 'SECRET_VALUE',
    signOptions: {
      expiresIn: '24h'
    }
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
