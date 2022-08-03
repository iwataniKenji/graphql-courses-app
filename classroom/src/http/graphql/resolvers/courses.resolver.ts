import { CreateCourseInput } from './../inputs/create-course-input';
import { CoursesService } from './../../../services/courses.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
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

  @Mutation(() => Course)
  @UseGuards(AuthorizationGuard)
  createCourse(@Args('data') data: CreateCourseInput) {
    return this.coursesService.createCourse(data);
  }
}
