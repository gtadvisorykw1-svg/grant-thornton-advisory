import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      advisoryService,
      title,
      firstName,
      surname,
      companyName,
      email,
      phone,
      industry,
      message,
      preferredContact,
      marketingConsent,
      referenceNumber,
    } = body;

    // Validate required fields
    if (!firstName || !surname || !email || !message || !advisoryService) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email transporter for Office 365
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.office365.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // Office 365 uses STARTTLS on port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
    });

    // For Office 365, the from address must match the authenticated user
    const fromAddress = process.env.SMTP_USER || 'info@advisory.kw.gt.com';

    // Format the email content
    const emailContent = `
New Contact Form Submission
============================

Reference Number: ${referenceNumber}

SERVICE DETAILS
---------------
Advisory Service: ${advisoryService}

CONTACT INFORMATION
-------------------
Title: ${title}
Name: ${firstName} ${surname}
Company: ${companyName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Industry: ${industry || 'Not specified'}

PREFERRED CONTACT METHOD
------------------------
${preferredContact || 'Not specified'}

MESSAGE
-------
${message}

CONSENT
-------
Marketing Communications: ${marketingConsent ? 'Yes, opted in' : 'No'}

---
This email was sent from the Grant Thornton Kuwait Advisory website contact form.
    `.trim();

    // HTML version for better formatting
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #4f2d7f; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background: #f9f9f9; }
    .section { margin-bottom: 20px; }
    .section-title { color: #4f2d7f; font-weight: bold; border-bottom: 2px solid #ce2c2c; padding-bottom: 5px; margin-bottom: 10px; }
    .field { margin-bottom: 8px; }
    .label { font-weight: bold; color: #666; }
    .value { color: #333; }
    .message-box { background: white; padding: 15px; border-left: 4px solid #4f2d7f; margin-top: 10px; }
    .reference { background: #4f2d7f; color: white; padding: 10px; text-align: center; font-family: monospace; font-size: 18px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Contact Form Submission</h1>
    </div>
    
    <div class="reference">
      Reference: ${referenceNumber}
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">Service Details</div>
        <div class="field">
          <span class="label">Advisory Service:</span>
          <span class="value">${advisoryService}</span>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field">
          <span class="label">Name:</span>
          <span class="value">${title} ${firstName} ${surname}</span>
        </div>
        <div class="field">
          <span class="label">Company:</span>
          <span class="value">${companyName}</span>
        </div>
        <div class="field">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${email}">${email}</a></span>
        </div>
        <div class="field">
          <span class="label">Phone:</span>
          <span class="value">${phone || 'Not provided'}</span>
        </div>
        <div class="field">
          <span class="label">Industry:</span>
          <span class="value">${industry || 'Not specified'}</span>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Preferred Contact Method</div>
        <div class="field">
          <span class="value">${preferredContact || 'Not specified'}</span>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Message</div>
        <div class="message-box">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">Consent</div>
        <div class="field">
          <span class="label">Marketing Communications:</span>
          <span class="value">${marketingConsent ? '✓ Yes, opted in' : '✗ No'}</span>
        </div>
      </div>
    </div>
    
    <div class="footer">
      This email was sent from the Grant Thornton Kuwait Advisory website contact form.
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email to advisory team
    await transporter.sendMail({
      from: fromAddress,
      to: 'info@advisory.kw.gt.com',
      replyTo: email,
      subject: `New Advisory Inquiry: ${advisoryService} - ${firstName} ${surname} [${referenceNumber}]`,
      text: emailContent,
      html: htmlContent,
    });

    // Also send a confirmation email to the user
    const confirmationHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #4f2d7f; color: white; padding: 30px; text-align: center; }
    .content { padding: 30px; background: #f9f9f9; }
    .reference { background: #eee; padding: 15px; text-align: center; font-family: monospace; font-size: 18px; margin: 20px 0; border-radius: 8px; }
    .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    .contact-info { background: white; padding: 20px; border-radius: 8px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Thank You for Contacting Us</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Grant Thornton Kuwait - Advisory Services</p>
    </div>
    
    <div class="content">
      <p>Dear ${title} ${firstName} ${surname},</p>
      
      <p>Thank you for reaching out to Grant Thornton Kuwait Advisory Services. We have received your inquiry regarding <strong>${advisoryService}</strong>.</p>
      
      <div class="reference">
        Your Reference Number: <strong>${referenceNumber}</strong>
      </div>
      
      <p>Our advisory team will review your message and respond within 1-2 business days.</p>
      
      <div class="contact-info">
        <p style="margin: 0 0 10px 0; font-weight: bold; color: #4f2d7f;">For urgent matters, please contact us directly:</p>
        <p style="margin: 5px 0;">📞 Phone: +965 2244 3900 Ext: 263</p>
        <p style="margin: 5px 0;">📱 WhatsApp: +965 4102 1616</p>
        <p style="margin: 5px 0;">✉️ Email: info@advisory.kw.gt.com</p>
      </div>
    </div>
    
    <div class="footer">
      <p>Grant Thornton Kuwait - Advisory Services</p>
      <p>Souk Al Kabeer Building, Block 9, Murgab, Kuwait City</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send confirmation email to the user
    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: `Thank you for contacting Grant Thornton Advisory [${referenceNumber}]`,
      html: confirmationHtml,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      referenceNumber 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
