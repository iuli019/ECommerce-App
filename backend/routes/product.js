const router = require("express").Router();
let Product = require("../models/product");


router.route("/").get((req, res) => {
  Product.find()
    .then((panels) => res.json(panels))
    .catch((err) => res.status(400).json("Error:" + err));
});

// add admin
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const numberInStock = req.body.numberInStock;
  const imageUrl = req.body.imageUrl;
  const inCart = req.body.inCart;
  const numberForCart = req.body.numberForCart;
  const newProduct = new Product({ name, description, price, numberInStock, imageUrl, inCart });

  newProduct
    .save()
    .then(() => res.json(newProduct))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error:" + err));
});

// add admin
router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted."))
    .catch((err) => res.status(400).json("Error:" + err));
});

//admin
router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      product.name = req.body.name;
      product.description = req.body.description;
      product.price = req.body.price;
      product.numberInStock = req.body.numberInStock;
      product.imageUrl = req.body.imageUrl;
      product.inCart = req.body.inCart;
      product.numberForCart = req.body.numberForCart;

      product
        .save()
        .then(() => res.json("Product updated!"))
        .catch((err) => res.status(400).json("Error:" + err));
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
