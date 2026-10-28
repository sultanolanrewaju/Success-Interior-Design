/**
 * Sends an email directly via Resend's REST API (No npm installation required!)
 * @param {string} to - Recipient's email address
 * @param {string} subject - The subject line of the email
 * @param {string} htmlContent - The HTML formatted body of the email
 */
export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Use 'onboarding@resend.dev' for local testing
        from: "Success Interior Design <onboarding@resend.dev>",
        to: [to],
        subject: subject,
        html: htmlContent,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Resend API Error:", data);
      return false;
    }

    console.log("📧 Email sent successfully! ID:", data.id);
    return true;
  } catch (err) {
    console.error("❌ Exception during email sending:", err.message);
    return false;
  }
};