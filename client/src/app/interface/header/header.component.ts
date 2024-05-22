import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component( {
    selector: 'app-header' ,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class Header implements OnInit {

    
    // isAuth = true   //отображение на странице
    


    //Необходимо настроить отображение Header и sidebar при логине и выходу
    constructor(public authService: AuthService){}
    
    // свойство для отображения
    ngOnInit(): void {
        
    }
}