import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Softtech Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `Softtech Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Message</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              font-size: 28px;
              margin-bottom: 10px;
            }
            .header p {
              font-size: 16px;
              opacity: 0.9;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 25px;
              border-bottom: 1px solid #eee;
              padding-bottom: 20px;
            }
            .field:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .label {
              font-size: 14px;
              font-weight: 600;
              color: #991b1b;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .value {
              font-size: 16px;
              color: #333;
              background: #f9f9f9;
              padding: 12px 15px;
              border-radius: 8px;
              border-left: 4px solid #dc2626;
            }
            .message-box {
              background: #f9f9f9;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #dc2626;
              white-space: pre-wrap;
              font-size: 15px;
              line-height: 1.8;
            }
            .footer {
              background: #f5f5f5;
              padding: 20px;
              text-align: center;
              font-size: 14px;
              color: #666;
              border-top: 1px solid #ddd;
            }
            .badge {
              display: inline-block;
              background: rgba(220, 38, 38, 0.1);
              color: #991b1b;
              padding: 4px 12px;
              border-radius: 20px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 New Contact Message</h1>
              <p>You've received a new inquiry from your website</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email Address</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">📞 Phone Number</div>
                <div class="value">
                  ${phone ? `<a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a>` : 'Not provided'}
                </div>
              </div>
              
              <div class="field">
                <div class="label">📋 Subject</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="badge">
                Sent via Softtech Contact Form
              </div>
            </div>
            
            <div class="footer">
              <p>This email was sent from your website's contact form.</p>
              <p style="margin-top: 10px; font-size: 12px;">
                © ${new Date().getFullYear()} Softtech. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
        NEW CONTACT MESSAGE - SOFTTECH
        ==============================
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent from Softtech Portfolio Website
        Date: ${new Date().toLocaleString()}
      `,
    });

    // Optional: Send auto-reply to the user
    await transporter.sendMail({
      from: `"Softtech Team" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting Softtech",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 500px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 20px; text-align: center; border-radius: 10px; }
            .content { padding: 20px; background: #f9f9f9; border-radius: 10px; margin-top: 20px; }
            .button { display: inline-block; padding: 10px 20px; background: #dc2626; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Softtech!</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
              
              <p><strong>Your message details:</strong></p>
              <p>Subject: ${subject}</p>
              <p>Message: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Check out our portfolio</li>
                <li>Follow us on social media</li>
                <li>Call us directly for urgent inquiries</li>
              </ul>
              
              <a href="https://softtech-development-creations.vercel.app/" class="button ">Visit Our Website</a>
              
              <p style="margin-top: 20px;">Best regards,<br>The Softtech Team</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error: any) {
    console.error("Contact form error:", error);
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { error: "Email authentication failed. Please check your credentials." },
        { status: 500 }
      );
    }
    
    if (error.code === 'ESOCKET') {
      return NextResponse.json(
        { error: "Network error. Please check your SMTP settings." },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: error.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

export const runtime = "nodejs";