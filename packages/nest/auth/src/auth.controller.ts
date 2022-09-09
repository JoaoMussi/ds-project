import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUser } from './models';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('users')
  getUsers(): AuthUser[] {
    return this.authService.getUsers();
  }
}
