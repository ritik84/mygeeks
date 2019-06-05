var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/send',function(req,res,next){
	var transporter =nodemailer.createTransport({
		service:'Gmail',
		auth:{
			user:'critik1234@gmail.com',
			pass:'ritikmaratha'
		}
	});
	var mailoptions ={
		from:'critik1234@gmail.com',
		to:'chauhanritik220@gmail.com',
		subject:'website check',
		text:'you have new submission From: '+req.body.name+'\n'+'Number '+req.body.number+'\n'+'Email '+req.body.email+'\n'+'Message '+req.body.message
	}
	transporter.sendMail(mailoptions,function(error,info){
		if(error){
			console.log(error);
			console.log('Ni gaya tera mail');
			res.redirect('/');
		}
		else{
			console.log('done');
			res.redirect('/');
		}
	});
});
module.exports = router;
