import { ApplicationError } from "@/protocols";

export function invalidPasswordError(): ApplicationError {
  return {
    name: "InvalidPasswordError",
    message: `Password is not a valid!`,
  };
}

