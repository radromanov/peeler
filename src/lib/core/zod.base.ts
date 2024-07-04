import z from "zod";

const minimum = (name: string, min = 1) =>
  `${name} must be at least ${min} character(s)`;
const maximum = (name: string, max = 8) =>
  `${name} must be at least ${max} character(s)`;
const errors = (name: string, type = "string") => ({
  required_error: `${name} is required`,
  invalid_type_error: `Invalid ${name} type. Must be of type ${type}`,
});

export const notNullString = (name: string, min = 1, max?: number) => {
  let builder = z.string(errors(name)).min(min, minimum(name, min));

  if (max) {
    builder = builder.max(max, maximum(name, max));
  }

  return builder;
};
