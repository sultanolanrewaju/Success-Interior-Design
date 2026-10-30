import { sendEmail } from "./sendEmail.js";

export const sendContactMessage = async (req, res) => {
    const { name, email, subject, message } = req.body;

    try {
        const contactEmailHtml = `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; color: #333;">
                <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 10px; border: 1px solid #e0e0e0;">
                    <h2 style="color: #031853; border-bottom: 3px solid #FFBD00; padding-bottom: 10px; margin-top: 0;">
                        📩 New Contact Message!
                    </h2>
                    <p style="font-size: 16px;">You have a new message submitted via the <strong>Success Interior Design</strong> Contact Page:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555; width: 35%;">Client Name:</td>
                            <td style="padding: 10px 0; color: #000;">${name}</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Email Address:</td>
                            <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #031853;">${email}</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #f0f0f0;">
                            <td style="padding: 10px 0; font-weight: bold; color: #555;">Subject / Project Type:</td>
                            <td style="padding: 10px 0; color: #031853; font-weight: bold;">${subject || 'General Inquiry'}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 6px;">
                        <strong style="color: #555; display: block; margin-bottom: 5px;">Message / Window Details:</strong>
                        <p style="margin: 0; color: #333; font-style: italic;">"${message || 'No message provided.'}"</p>
                    </div>

                    <p style="color: #888; font-size: 12px; margin-top: 30px; text-align: center;">
                        Success Interior Design &bull; Automated Contact Notification System
                    </p>
                </div>
            </div>
        `;

        const ownerEmail = process.env.OWNER_MAIL;
        await sendEmail(
            ownerEmail, 
            `New Message: ${subject || 'Contact Inquiry'} from ${name}`, 
            contactEmailHtml
        );

        res.status(200).json({ message: "Message sent successfully!" });

    } catch (error) {
        console.error("Contact Email Error:", error);
        res.status(500).json({ message: "Failed to send message." });
    }
};