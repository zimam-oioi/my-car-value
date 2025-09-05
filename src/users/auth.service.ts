import { Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";

@Injectable()
export class AuthSerive{
    constructor(private userService: UsersService){}

    
}