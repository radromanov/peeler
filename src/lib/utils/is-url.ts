import z from "zod";

export function isUrl(candidate: string): boolean {
  const parsed = z.string().min(1).url().safeParse(candidate);

  return parsed.success ? true : false;
}
