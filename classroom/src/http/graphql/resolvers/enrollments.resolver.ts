import { Enrollment } from './../models/enrollment';
import { Resolver } from '@nestjs/graphql';

@Resolver(() => Enrollment)
export class EnrollmentsResolver {}
