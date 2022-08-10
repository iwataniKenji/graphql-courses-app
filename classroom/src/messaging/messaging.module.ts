import { CoursesService } from './../services/courses.service';
import { StudentsService } from './../services/students.service';
import { Module } from '@nestjs/common';
import { PurchaseController } from './controllers/purchases.controller';
import { EnrollmentsService } from 'src/services/enrollments.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}
