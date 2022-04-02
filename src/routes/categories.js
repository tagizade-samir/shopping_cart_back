const express = require('express');
const router = express.Router();
const data = require('../data');

router.get('/', function (req, res) {
	const categories = data.categories;
	res.send(categories);
});

router.get('/:name', function (req, res) {
	const categoryName = req.params.name;
	const category = data.categories.find(cat => cat.url === categoryName);
	if (category) {
		const sub_categories = data.sub_categories.filter(sub => sub.category_id === category.id);
		let images = {};
		sub_categories.forEach(category => {
			images = {
				...images,
				[category.id]: category.image_url,
			}
		});
		const products = data.products.filter(product => product.category_id === category.id).map(product => ({
			...product,
			image_url: images[product.sub_category_id]
		}));
		res.status(200).send({
			sub_categories,
			products
		});
	} else {
		res.status(404).send('Incorrect category');
	}
})

module.exports = router;