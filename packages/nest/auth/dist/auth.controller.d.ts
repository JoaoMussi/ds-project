import { AuthService } from './auth.service';
import { AuthUser } from './models';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getUsers(): AuthUser[];
}
