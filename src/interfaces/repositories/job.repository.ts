import { Job } from "@/entities";

export interface IJobRepository {
  save(job: Job): Promise<void>;
}
