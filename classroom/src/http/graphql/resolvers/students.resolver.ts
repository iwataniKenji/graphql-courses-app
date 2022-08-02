import { AuthorizationGuard } from './../../../../../purchases/src/http/auth/authorization.guard';
import { Student } from './../models/student';
import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { StudentsService } from 'src/services/students.service';

@Resolver(() => Student)
export class StudentsResolver {
  constructor(private studentsService: StudentsService) {}

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  students() {
    return this.studentsService.listAllStudents();
  }
}
