import typeorm from "typeorm";
const { EntitySchema } = typeorm;

export default new EntitySchema({
  name: "Pet",
  tableName: "pets",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    animal: {
      type: "varchar",
    },
    age: {
      type: "int",
    },
  },
  relations: {
    baasje: {
      target: "User",
      type: "many-to-one",
      inverseSide: "pets",
      joinColumn: {
        name: "user_id",
      },
      onDelete: "CASCADE",
    },
  },
});
