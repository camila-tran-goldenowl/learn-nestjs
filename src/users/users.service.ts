import { IUser } from './interfaces/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly usersList: Array<IUser> = [];
  create(user: IUser) {
    this.usersList.push(user);
    return user;
  }

  findAll() {
    return this.usersList;
  }

  findOne(id: string) {
    const user = this.usersList.find((item: IUser) => item.id === id);
    if (!user) {
      return {
        message: 'Not found user',
      };
    }
    return user;
  }

  update(id: string, user: Omit<IUser, 'id'>) {
    const userIndex = this.usersList.findIndex((item: IUser) => item.id === id);
    if (userIndex === -1) {
      return {
        message: 'Not found user',
      };
    }
    const newUserInfo = { ...this.usersList[userIndex], ...user };
    this.usersList[userIndex] = newUserInfo;
    return newUserInfo;
  }

  remove(id: string) {
    const userIndex = this.usersList.findIndex((item: IUser) => item.id === id);
    if (userIndex === -1) {
      return {
        message: 'Not found user',
      };
    }
    this.usersList.splice(userIndex);
    return {
      message: 'Delete successfully',
    };
  }
}
