import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { Watchlist } from '../watchlist/models/watchlist.model';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [SequelizeModule.forFeature([User, Watchlist]), TokenModule],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
