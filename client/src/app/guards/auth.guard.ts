import { CanActivateFn, Router } from "@angular/router";
import { AuthService} from "../services/auth.service";
import { inject } from "@angular/core";


// гуард для защиты роутов (перехода на разные страницы без аунтификации)

export function authGuard(): CanActivateFn{
    return () => {
        const authService: AuthService = inject(AuthService)
        const router: Router = inject(Router)

        
        if (authService.isAuthSig()){

            return true; 
        }
        router.navigate([''])
        return false
    }
}