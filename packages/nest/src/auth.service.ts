import { Injectable } from '@nestjs/common';
import { users } from './mocks/users.mocks';
import { AuthUser } from './models';

@Injectable()
export class AuthService {
  getUsers(): AuthUser[] {
    return users;
  }
}
