import { EnrollmentsService } from './../../../services/enrollments.service';
import { Enrollment } from './../models/enrollment';
import { Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from '../../../../../purchases/src/http/auth/authorization.guard';

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(private enrollmentsService: EnrollmentsService) {}

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  enrollments() {
    return this.enrollmentsService.listAllEnrollments();
  }
}
