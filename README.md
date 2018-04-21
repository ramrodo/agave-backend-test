# Agave Backend Test

Testing: Mocha, chai, sinon, superagent/axios. Requerimos pruebas unitarias y funcionales/e2e pero cobertura del 100% no es necesaria ya que tampoco queremos que te consuma mucho tiempo, más que nada es para ver tus conocimientos de testing. 
API: Express y passport.js (autenticación no es requerida pero es un plus).
Base de datos: Sequelize con Postgresql.
Plus: Docker setup.

We run a physical store which sells (only) 3 products:
Code         | Name         |  Price
-------------------------------------------------
PANTS        | Pants        |   $5.00
TSHIRT       | T-Shirt      |  $20.00
HAT          | Hat          |   $7.50
Various departments have insisted on the following discounts:
The marketing department believes in 2-for-1 promotions (buy two of the same product, get one free), and would like for there to be a 2-for-1 special on PANTS items.
The CFO insists that the best way to increase sales is with discounts on bulk purchases (buying x or more of a product, the price of that product is reduced), and demands that if you buy 3 or more TSHIRT items, the price per unit should be $19.00.
The checkout process allows for items to be scanned in any order, and should return the total amount to be paid.
Examples:
Items: PANTS, TSHIRT, HAT
Total: $32.50
Items: PANTS, TSHIRT, PANTS
Total: $25.00
Items: TSHIRT, TSHIRT, TSHIRT, PANTS, TSHIRT
Total: $81.00
Items: PANTS, TSHIRT, PANTS, PANTS, HAT, TSHIRT, TSHIRT
Total: $74.50
INSTRUCTIONS:
Implement a basic API for our store.
