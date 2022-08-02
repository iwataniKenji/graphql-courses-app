import { CoursesService } from './../../../services/courses.service';
import { Query, Resolver } from '@nestjs/graphql';
import { Course } from '../models/course';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../../../../../purchases/src/http/auth/authorization.guard';

@Resolver(() => Course)
export class CoursesResolver {
  constructor(private coursesService: CoursesService) {}

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  courses() {
    return this.coursesService.listAllCourses();
  }
}
