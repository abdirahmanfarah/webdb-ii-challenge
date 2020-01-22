
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate() // resets the id (primary key) back to 1
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { 
          Vin: "1A2B3C4E5D6F7G898", 
          Make: "Toyota", 
          Model: "Camry", 
          Mileage: 11000, 
          Transmission: "8-speed automatic", 
          StatusOfTitle: "Clean" 
        },

        { 
          Vin: "1A2B3C4E5D6F7G898", 
          Make: "Chevy",
          Model: "Silverado", 
          Mileage: 1000, 
          Transmission: "10-speed automatic", 
          StatusOfTitle: "Salvage" 
        },
        { 
          Vin: "1A2B3C4E5D6F7G898", 
          Make: "Mazda", 
          Model: "Mazda6", 
          Mileage: 2500, 
          Transmission: "6-speed manual", 
          StatusOfTitle: "Clean" 
        }
      ]);
    });
};
