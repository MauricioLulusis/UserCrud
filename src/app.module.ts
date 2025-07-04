import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: 'localhost', 
    port: 1433, 
    username:'sa', 
    password:'Nicolas..8', 
    database:'USER-CRUD',
    entities:[User],
    synchronize:true
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
