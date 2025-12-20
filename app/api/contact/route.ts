import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // HTML email content for the advisory team
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

    // Confirmation email for the user
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

    // Send email to advisory team
    const { error: sendError } = await resend.emails.send({
      from: 'Grant Thornton Advisory <onboarding@resend.dev>',
      to: ['info@advisory.kw.gt.com'],
      replyTo: email,
      subject: `New Advisory Inquiry: ${advisoryService} - ${firstName} ${surname} [${referenceNumber}]`,
      html: htmlContent,
    });

    if (sendError) {
      console.error('Error sending email to advisory:', sendError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Send confirmation email to the user
    const { error: confirmError } = await resend.emails.send({
      from: 'Grant Thornton Advisory <onboarding@resend.dev>',
      to: [email],
      subject: `Thank you for contacting Grant Thornton Advisory [${referenceNumber}]`,
      html: confirmationHtml,
    });

    if (confirmError) {
      console.error('Error sending confirmation email:', confirmError);
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      referenceNumber 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}
