import { Controller, Post ,Body, Logger} from '@nestjs/common';
import { GetUserDto } from 'src/users/dto/get_user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
        async login(@Body() GetUserDto:GetUserDto){   
            return this.authService.login(GetUserDto);
    }
    @Post('refresh')
    async refresh(@Body() refresh:string){   
        return this.authService.refresh(refresh);
}
}
