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
    pets: {
      target: "Pet", // name of the entity
      type: "one-to-many",
      cascade: true,
      inverseSide: "baasje",
    },
    interests: {
      target: "Interest", // name of the entity
      type: "many-to-many", // type of relation
      joinTable: {
        name: "users_interests",
      },
      cascade: true,
    },
  },
});
