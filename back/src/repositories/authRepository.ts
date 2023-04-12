import users from "@/entities/users/users";
import { userProps } from "@/utils/userTypes";

async function findByEmail(email: string) {
  return users.find({ email: email });
}

async function findByUserId(id: string) {
  return users.find({ _id : id });
}

async function create(data: userProps) {
  return users.create(data);
}

const authRepository = {
  findByEmail,
  create,
  findByUserId
};

export default authRepository;
