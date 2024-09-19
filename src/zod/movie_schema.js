const { z } = require("zod");

const movieSchema = z.object({
  movie_name: z
    .string({
      required_error: "movie name is required",
      invalid_type_error: "movie name must be a valid string",
    })
    .min(1), // Ensures string is at least 1 character long

  release_date: z.string({
    required_error: "Release date is required",
    invalid_type_error: "Release date must be a valid string",
  }),
  movie_image: z.string({
    required_error: "image source is required",
    invalid_type_error: "image sourse must be a valid string",
  }),
  available: z.enum(["open", "not open"], {
    invalid_type_error: "Available status must be either 'open' or 'not open'",
    required_error: "Available status is required",
  }),
  certificate: z
    .string({
      required_error: "movie certificate is required",
      invalid_type_error: "movie certificate must be a valid string",
    })
    .min(1),
});

module.exports = movieSchema;
