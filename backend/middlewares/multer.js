import multer from "multer";

// Multer setup for storing images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save images in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Handle review submission with image
router.post("/:id/reviews", upload.single("image"), async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    const review = {
      name: req.body.name || "Anonymous",
      rating: Number(req.body.rating),
      comment: req.body.comment,
      image: `/uploads/${req.file.filename}`, // Save image path
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added!" });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
