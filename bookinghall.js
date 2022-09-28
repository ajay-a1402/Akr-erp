const router = require('express').Router();
let Booking = require('../models/book')
/*
  //booking add
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
                 Booking.findOne({hall:hall,meetingfrom:{$gte:meetingfrom,$lt:meetingto},meetingto:{$gt:meetingfrom,$lte:meetingto}})
                .then((res)=>res.json())
                .then((data)=>{
                  if(data!=null){
                 return 'send error already date are exist'
                    }
                  else{

                   newBooking.save()
                  .then(()=> res.json('Booking Added'))
                  .catch(err =>res.status(400).json('Error'+err))
                 }
                  
    
      
});

*/
/*
router.route('/add').post((req,res)=>{
    Booking.findOne({
      hall:req.body.hall,
      meetingfrom:req.body.meetingfrom,
      meetingto:req.body.meetingto
    })
    .then(Booking=>{
      console.log(Booking);
      if(Booking){
          Booking.findone({hall:req.body.hall,meetingfrom:req.body.meetingfrom,meetingto:req.body.meetingto})
          .then(data=>{
              if(!data){
     
                  const BookingData=new Booking({
                      username:req.body.username,
                      guestname:req.body.guestname,
                      purpose:req.body.purpose,
                      hall:req.body.hall,
                      meetingfrom:req.body.meetingfrom,
                      meetingto:req.body.meetingto,
                      food:req.body.food,
                      fooddetails:req.body.fooddetails,
                      transport:req.body.transport,
                      transportdetails:req.body.transportdetails
                  }).save()
                  .then(stored =>{
                          res.json({
                              status:'hall booked successfully',
                              Booking:stored
                          })
                  })
                  .catch(err =>{
                      res.json({
                        error : err
                      })
                  })
              }
              else{
                  res.status(500).send({
                      message:"Hall already exits"
                    });
              }
          })
          .catch(err=>{
              res.send(err);
            })
      }
      else {
          res.send('Hall does not exist')
        }

    })
    .catch(err => {
      res.send('error: ' + err)
    })
   
})

*/
/*
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
                      if(hall != newBooking.hall && meetingfrom != newBooking.meetingfrom && meetingto != newBooking.meetingto){
                             newBooking.save()
                             .then(()=> res.json('Booking Added'))
                             .catch(err =>res.status(400).json('Error'+err))
                      }else{
                   console.log('Already Booked')
                    }
                });

*/
/*
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
            res.status(422).json("this Hall is already booked")
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

*/
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
    .then((res)=>res.json('Booking'))
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


router.route('/').get((req,res)=>{
        Booking.find()
        .then (booking=>res.json(booking))
        .catch(err =>res.status(400).json('Error'+err))
});

//find by id

router.route('/:id').get((req,res) =>{
    Booking.findById(req.params.id)
    .then(booking => res.json(booking))
    .catch(err =>res.status(400).json('Error'+err))
});

//find by id and delete

router.route('/:id').get((req,res)=>{
    Booking.findByIdAndDelete(req.params.id)
    .then(booking => res.json(booking))
    .catch(err =>res.status(400).json('Error'+err))
});

//update by id

router.route('update/:id').get((req,res)=>{
    Booking.findById(req.params.id)
    .then(booking =>{
        booking.username = req.body.username;
        booking.guestname = req.body.guestname;
        booking.purpose = req.body.purpose;
        booking.hall = req.body.hall;
        booking.meetingfrom = req.body.meetingfrom;
        booking.meetingto = req.body.meetingto;
        booking.food = req.body.food;
        booking.fooddetails = req.body.foodetails;
        booking.transport = req.body.transport;
        booking.transportdetails = req.body.transportdetails;
        
        booking.save()
        .then(()=>res.json('Hall Updated'))
        .catch(err =>res.status(400).json('Error'+err))
    })
    .catch(err =>res.status(400).json('Error'+err))

});

module.exports = router;


