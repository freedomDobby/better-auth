// import { authClient } from "./auth-client";

// const newUser = await authClient.admin.createUser({
//   name: "Test User",
//   email: "test@example.com",
//   password: "password123",
//   role: "user", // this can also be an array for multiple roles (e.g. ["user", "sale"])
//   data: {
//     // any additional on the user table including plugin fields and custom fields
//     customField: "customValue",
//   },
// });

// const users = await authClient.admin.listUsers({
//   query: {
//     searchField: "email",
//     searchOperator: "contains",
//     searchValue: "@example.com",
//     limit: 10,
//     offset: 0,
//     sortBy: "createdAt",
//     sortDirection: "desc",
//     filterField: "role",
//     filterOperator: "eq",
//     filterValue: "admin"
//   }
// });