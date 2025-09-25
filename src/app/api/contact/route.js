import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail", // or your email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    })

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL, // admin email
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #4F46E5;">${phone}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 0 5px 5px 0;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              <strong>Quick Actions:</strong><br>
              <a href="mailto:${email}" style="color: white; text-decoration: underline;">Reply via Email</a> | 
              <a href="tel:${phone}" style="color: white; text-decoration: underline;">Call ${phone}</a>
            </p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
    }

    // Thank you email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4F46E5; margin-bottom: 10px;">Thank You!</h1>
            <div style="width: 50px; height: 3px; background: linear-gradient(to right, #4F46E5, #7C3AED); margin: 0 auto;"></div>
          </div>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">Dear ${name},</p>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Thank you for reaching out to us! We have received your message and truly appreciate you taking the time to contact us.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #4F46E5;">
            <h3 style="color: #333; margin-top: 0;">Your Message Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}</p>
          </div>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Our team will review your message and get back to you as soon as possible, typically within 24-48 hours. We may contact you via email or phone based on your inquiry.
          </p>
          
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
            <p style="color: white; margin: 0; font-size: 16px;">
              Need immediate assistance?<br>
              <strong>Call us at +91 92896 77469</strong><br>
              <strong>WhatsApp: +91 92896 77469</strong>
            </p>
          </div>
          
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Best regards,<br>
            <strong>Divine Connect Team</strong>
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>© 2024 Divine Connect. All rights reserved.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([transporter.sendMail(adminMailOptions), transporter.sendMail(userMailOptions)])

    return Response.json({ success: true, message: "Emails sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return Response.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
