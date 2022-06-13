// const express = require('express');
// const router = express.Router();
// const Feedback = require('../models/Feedback');


// // ROUTE 1: get all the feedbacks using:get "/api/feedbacks/getuser"
// router.get('/fetch_feedbacks', async (req, res) => {
//   try {
//     const feedbacks = await Feedback.find();
//     res.json(feedbacks)

//   } catch (error) {       
//     console.log(error.message);
//     res.status(500).send("some error ocured")
//   }
// })

// // ROUTE 2: add a new feedback  using:POST  "/api/feedbacks/addfeedback"
// async function findUserByEmail (email) {
// 	try {
// 		return Feedback.findOne({'email': email.toLowerCase()})
// 	} catch (error) {
// 		throw new Error(`Unable to connect to the database.`)
// 	}
// }
// router.post('/', async (req, res) => {
//     try {
//         		const feedData = new Feedback({
//         			name: req.body.name,
//         			email: req.body.email,
//         			feed: req.body.feedback
//         		}); 
// 				const userWithEmail = await findUserByEmail(feedData.email)
// 				if (userWithEmail ) {
// 					return response.status(409).send({message: 'Email is already taken.'})
// 				}
//         		feedData.save()
//         			.then(data => {
//         				res.status(200).json({"sucess":"sucess"})
//         	// 			res.render('FeedbackForm',
//         	// { msg: "Your feedback successfully saved." });
//         			})	
//         	} catch (error) {
//         		res.status(400).json()
//         		// res.render('FeedbackForm',
//         		// 	{ msg: "Check Details." });
//         	}
//   })



// module.exports = router