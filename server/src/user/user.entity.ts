import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from 'typeorm';
import * as crypto from 'crypto';
import {UserConstant} from './user.constant';

@Entity('user')
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100})
    name: string;

    @Column({length: 50})
    email: string;

    @Column()
    password: string;

    @Column({default: ''})
    image: string;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdTime: Date;

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    modifiedTime: Date;

    @BeforeInsert()
    hashPassword() {
        this.password = crypto.createHmac(UserConstant.PasswordAlgorithm.SHA256, this.password).digest('hex');
    }

    @BeforeUpdate()
    updateTimestamp() {
        this.modifiedTime = new Date;
    }

    comparePassword(password: string) {
        const pw = crypto.createHmac(UserConstant.PasswordAlgorithm.SHA256, password).digest('hex');
        return this.password === pw;
    }
}
