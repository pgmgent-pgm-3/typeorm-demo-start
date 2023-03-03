import typeorm from "typeorm";

const { EntitySchema } = typeorm;

export default new EntitySchema({
  name: "Interest",
  tableName: "interests",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
  },
  relations: {
    users: {
      target: "User", // name of the entity
      type: "many-to-many", // type of relation
      joinTable: {
        name: "users_interests",
      },
    },
  },
});
