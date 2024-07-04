import { Job } from "@/entities";

export interface IJobScraper {
  scrape(url: string): Promise<Job[]>;
}
