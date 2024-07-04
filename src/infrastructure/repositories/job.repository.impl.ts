import { Job } from "@core/domain";
import { IJobRepository } from "@core/repositories";

export class JobRepositoryImpl implements IJobRepository {
  createOne(job: Job): Promise<void> {
    console.log(job);
    throw new Error("Method not implemented.");
  }
}
