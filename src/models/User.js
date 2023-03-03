import typeorm from "typeorm";
const { EntitySchema } = typeorm;

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    firstname: {
      type: "varchar",
    },
    lastname: {
      type: "varchar",
    },
    age: {
      type: "int",
    },
  },
  relations: {
    lunchBox: {
      target: "LunchBox",
      type: "one-to-one",
      inverseSide: "owner",
      cascade: true,
    },
  },
});
