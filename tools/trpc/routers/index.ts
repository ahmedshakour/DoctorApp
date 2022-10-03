import { createRouter } from "./helpers/createRouter";
import { usersRouter } from "./User.router";
import { rolesRouter } from "./Role.router";
import { roleforusersRouter } from "./RoleForUser.router";
import { gendersRouter } from "./Gender.router";
import { peopleRouter } from "./Person.router";
import { receiptsRouter } from "./Receipt.router";

export const appRouter = createRouter()

  .merge('user.', usersRouter)

  .merge('role.', rolesRouter)

  .merge('roleforuser.', roleforusersRouter)

  .merge('gender.', gendersRouter)

  .merge('person.', peopleRouter)

  .merge('receipt.', receiptsRouter)
