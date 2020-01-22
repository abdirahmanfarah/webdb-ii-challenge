
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string("VIN", 17)

    tbl.string("Make").index().notNullable();

    tbl.string("Model").index().notNullable();

    tbl.integer("Mileage").notNullable();

    tbl.string("Transmission");

    tbl.string("StatusOfTitle");

    tbl.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
