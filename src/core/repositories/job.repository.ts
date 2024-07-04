import { Job } from "../domain";

export interface IJobRepository {
  createOne(job: Job): Promise<void>;
}
