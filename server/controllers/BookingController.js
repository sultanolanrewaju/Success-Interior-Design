import Booking from "../models/BookingModel.js";
import { sendEmail } from "./sendEmail.js";
export const getBooking = async(req,res)=>{
    try {
        // Ceck category
        const  Category = req.query.category;

        let query = {}
         
         if(Category && Category !== "all"){
            query.category = Category;
         }

        const Bookings = await Booking.find(query).sort({createdAt: -1})
        res.status(200).json(Bookings)
    } catch (error) {
        res.status(400).json({message:"Error in Booking Controller. "})
        console.log("Error in Booking Controller.",error);
    
}
}

export const addBooking = async(req,res)=>{
    const {service,date,time,name,phone,email,address,description} = req.body;
    try {
        const AddedBooking =  new Booking({
            service,
            date,
            time,
            name,
            phone,
            email,
            address,
            description
        })
        await AddedBooking.save()

        // 2. Use the database's official timestamp for the email
        const dbTimestamp = AddedBooking.createdAt;

        const bookingDate = new Date(dbTimestamp).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        const bookingTime = new Date(dbTimestamp).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

 const ownerEmailHtml = `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #e0e0e0;">
                    <h2 style="color: #031853; border-bottom: 3px solid #FFBD00; padding-bottom: 10px; margin-top: 0;">
                        🔔 New Booking Request!
                    </h2>
                    <p style="font-size: 16px;">You have a new client booking submitted via <strong>Success Interior Design</strong>:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                           <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 30%;">Booking Time:</td>
                            <td style="padding: 10px 0; color: #000;">${bookingTime}</td>
                        </tr>

                    
                    <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 30%;">Client Name:</td>
                            <td style="padding: 10px 0; color: #000;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email Address:</td>
                            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #031853;">${email}</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone Number:</td>
                            <td style="padding: 10px 0; color: #000;">${phone || 'Not provided'}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Requested Service:</td>
                            <td style="padding: 10px 0; color: #031853; font-weight: bold;">${service}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Preferred Date:</td>
                            <td style="padding: 10px 0; color: #000;">${bookingDate}</td>
                        </tr>
                           <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Client Address:</td>
                            <td style="padding: 10px 0; color: #000;">${address}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 6px;">
                        <strong style="color: #555; display: block; margin-bottom: 5px;">Client Message:</strong>
                        <p style="margin: 0; color: #333; font-style: italic;">"${description || 'No additional message provided.'}"</p>
                    </div>

                    <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">
                        Success Interior Design &bull; Automated Client Notification System
                    </p>
                </div>
            </div>
        `;

        // 3. Send the email directly to the owner's inbox using Resend
        const ownerEmail = process.env.OWNER_MAIL;
        await sendEmail(
            ownerEmail, 
            `New Booking: ${service} from ${name}`, 
            ownerEmailHtml
        );

        res.status(200).json({ 
            message: "Booking submitted and owner notified successfully!", 
            data: AddedBooking
        });
        
    } catch (error) {
        res.status(400).json({message:"Error while trying to add booking"})
        console.log("Error in Adding Booking: " + error);
        
    }
}


