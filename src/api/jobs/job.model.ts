import z from "zod";
import { notNullString } from "@lib/core";

export const JobModel = z.object({
  id: notNullString("id", 36, 36),
  title: notNullString("title"),
  description: notNullString("description"),
  company: notNullString("company"),
  location: notNullString("location"),
  url: notNullString("url").url("Invalid job url provided"),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
});

export type Job = z.infer<typeof JobModel>;
