const { z } = require("zod");
const validateUpdatedMovieData = require("../../validations/update_movie.validaton");

const updateMovieSchema = z.object({
  movie_name: z
    .string({
      invalid_type_error: "movie name must be a string",
    })
    .min(1, "Title is required")
    .optional(),
  release_date: z
    .string({
      required_error: "release date is required",
    })
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format")
    .optional(),
  certificate: z
    .enum(
      [
        "G",
        "PG",
        "PG-13",
        "R",
        "NC-17",
        "U",
        "UA",
        "A",
        "S",
        "12A",
        "15",
        "18",
      ],
      {
        required_error: "certificate is required",
        invalid_type_error: "certificate must be a string",
      }
    )
    .optional(),
  available: z
    .enum(["open", "not_open", "closed"], {
      required_error: "movie availaibility status is required",
      invalid_type_error: "availaibility must must be a string",
    })
    .optional(),
  movie_image: z
    .string({
      invalid_type_error: "movie image must be a string",
    })
    .min(1, "movie image is required")
    .optional(),
}).refine(updatedMovieData => Object.keys(updatedMovieData).length > 0, {
    message: "Please provie at least one movie column to be updated",
  });

module.exports = updateMovieSchema;
