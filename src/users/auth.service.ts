import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";

const scrypt = promisify(_scrypt)

@Injectable()
export class AuthSerive{
    constructor(private userService: UsersService){}

    async signUp(email: string, password: string){
        const user = await this.userService.find(email);
        if(user.length){
            throw new BadRequestException('User Already exist');
        }

        const salt = randomBytes(8).toString('hex');

        const hash = (await scrypt(password, salt, 32)) as Buffer;

        const result = salt + '.' + hash.toString('hex');

        const createUser = await this.userService.create(email, result);

        return createUser;
    }
}