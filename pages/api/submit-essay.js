import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // 2. Get the data from the frontend modal
    const { firstName, lastName, email,school, category,contactNumber,idDriveLink,docLink } = req.body;

    // firstName: "",
    // lastName: "",
    // email: "",
    // school:"",
    // category: "",
    // contactNumber: "",
    // idDriveLink:"",
    // docLink: "",

    // 3. Use your exact existing transporter setup
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Format the email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'unidiscoveryfiles@gmail.com', // Sends to your own email inbox
      replyTo: email, // If you hit "Reply" in your inbox, it replies to the student
      subject: `🚨 New Essay Submission: ${category} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0a2342; padding: 20px;">
          <h2 style="color: #c5a059;">New Global Essay Prize Submission</h2>
          <p>A new student has submitted their essay for review.</p>
          
          <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 20px;">
            <tr style="background-color: #f4f4f4;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Student Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">School Name</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${school}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">ID Drive Link</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${idDriveLink}</td>
            </tr>
            <tr style="background-color: #f4f4f4;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${contactNumber}</td>
            </tr>
            <tr style="background-color: #f4f4f4;">
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Category</td>
              <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #0a2342;">${category}</td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; border: 1px solid #ddd;">Google Doc Link</td>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <a href="${docLink}" target="_blank" style="color: #c5a059; font-weight: bold;">View Essay Document</a>
                <br />
                <span style="font-size: 12px; color: #888;">Raw link: ${docLink}</span>
              </td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">Submitted via The Career Discovery Forge Essay Submission Form</p>
        </div>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    // 6. Tell the frontend it was successful
    return res.status(200).json({ message: 'Essay submitted successfully' });

  } catch (error) {
    console.error('Error sending essay submission:', error);
    return res.status(500).json({ error: 'Failed to send submission' });
  }
}