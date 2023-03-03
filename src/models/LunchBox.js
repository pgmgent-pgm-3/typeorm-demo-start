import typeorm from "typeorm";
const { EntitySchema } = typeorm;

export default new EntitySchema({
  name: "LunchBox",
  tableName: "lunchboxes",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    color: {
      type: "varchar",
    },
    size: {
      type: "varchar",
    },
    contents: {
      type: "varchar",
    },
  },
});
