import { invalidPasswordError } from "@/errors/invalid-password-error";
import { notFoundError } from "@/errors/not-found-error";
import authRepository from "@/repositories/authRepository";
import { generateToken } from "@/utils/jwt";
import bcrypt from "bcrypt";

export async function createUser(email: string, password: string, name: string, image: string) {

  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);


  const user = await authRepository.create({
    name,
    image,
    password: hashedPassword,
    email
  });

  return user;
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await authRepository.findByEmail(email);

  if (userWithSameEmail[0]?.name?.length > 0) {
    throw new Error();
  }
}

export async function signIn(email: string, password: string) {
  const userExists = await authRepository.findByEmail(email);

  if (userExists[0]?.name?.length === 0) {
    throw notFoundError();
  }

  const validPassword = bcrypt.compareSync(password, userExists[0].password);

  if (!validPassword) {
    throw invalidPasswordError();
  }

  const token = generateToken({
    id: userExists[0].id
  });

  const result = [{
    token,
    userData: {
      id: userExists[0]._id,
      name: userExists[0].name,
      image: userExists[0].image,
      email: userExists[0].email
    }
  }];

  return result;
}