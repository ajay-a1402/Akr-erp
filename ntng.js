const router = require('express').Router();
let Booking = require('../models/book')


router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const guestname = req.body.guestname;
    const purpose = req.body.purpose;
    const hall =req.body.hall;
    const meetingfrom = req.body.meetingfrom;
    const meetingto = req.body.meetingto;
    const food =  req.body.food;
    const fooddetails = req.body.fooddetails;
    const transport = req.body.transport;
    const transportdetails = req.body.transportdetails;
      

    try{
        const prebook=  Booking.findone({hall:hall,meetingfrom:meetingfrom,meetingto:meetingto})
        console.log(prebook);
        if(prebook){
            res.status(422).json("this hall is already booked")
        }
        else{
            const newBooking = new Booking({
                username,
                guestname,
                purpose,
                hall,
                meetingfrom,
                meetingto,
                food,
                fooddetails,
                transport,
                transportdetails

            })
            newBooking.save()
            .then(()=> res.json('Booking Added'))
             console.log(newBooking)
            .catch(err =>res.status(400).json('Error'+err));
        }


    }
    catch (error){
        res.status(422).json(error);
    }
});


module.exports = router;





router.route('/add').post((req,res) =>{
    const username = req.body.username;
    const guestname = req.body.guestname;
    const purpose = req.body.purpose;
    const hall =req.body.hall;
    const meetingfrom = req.body.meetingfrom;
    const meetingto = req.body.meetingto;
    const food =  req.body.food;
    const fooddetails = req.body.fooddetails;
    const transport = req.body.transport;
    const transportdetails = req.body.transportdetails;

    Booking.findOne({hall:hall,meetingfrom:{$gte:meetingfrom,$lt:meetingto},meetingto:{$gt:meetingfrom,$lte:meetingto}})
    .then((res)=>res.json())
    .then((data)=>{
      if(data!=null){
         return 'send error already date are exist'
      }else{
         const newBooking = new Booking({
             username,
             guestname,
             purpose,
             hall,
             meetingfrom,
             meetingto,
             food,
             fooddetails,
             transport,
             transportdetails

         })
            newBooking.save()
            .then(()=> res.json('Booking Added'))
            .catch(err =>res.status(400).json('Error'+err))
      }
    
     })   
 });
