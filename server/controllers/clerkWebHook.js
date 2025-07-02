import User from '../models/User.model.js'
import { Webhook } from 'svix'

const clerkWebhooks = async (req, res) => {
       try {
        //    SVIX instance is clerk webhook secret 
        const wHook = new Webhook (process.env.CLERK_WEBHOOK_SECRET)

        const header = {
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers["svix-timestamp"],
            "svix-signature" : req.headers["svix-signature"],
        }

                await wHook.verify(JSON.stringify(req.body), header)

        // getting data from request body 

        const {data, type} = req.body

        const userData = {
            _id : data.id,
            email : data.email_address[0].email_address,
            name : data.name.first_name + " " + data.name.last_name,
            image : data.image_url
        }

        // switch cases for different events 

        switch (type) {
            case "user.created":{
                await User.create(userData)
                break;
            }

             case "user.updated":{
                await User.findByIdAndUpdate(data.id, userData)
                break;
            }

             case "user.delete":{
                await User.findByIdAndDelete(data.id, userData)
                break;
            }

             case "user.created":{
                await User.create(userData)
                break;
            }
            default:
                break;
        } 
        res.json ({success : true, message : "Webhook received and processed successfully"})

       } catch (error) {
        console.log("Error in clerkWebHook", error.message)
        res.json ({success : false, message : error.message})


         
       }
}

export default clerkWebhooks;