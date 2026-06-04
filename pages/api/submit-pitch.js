import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      teamType,
      fullName,
      email,
      teamSize,
      selectedTrack,
      projectTitle,
      deckLink,
      videoLink,
    } = req.body;

    // Fallback Validation
    if (!email || !projectTitle || !deckLink || !videoLink) {
      return res.status(400).json({ error: "Missing critical submission links or fields." });
    }

    // Configure Nodemailer Transporter using your existing .env properties
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Your Google App Password
      },
    });

    // Premium HTML Email Template
    const mailOptions = {
      from: `"SOLVE Registration" <${process.env.EMAIL_USER}>`,
      to: "unidiscoveryfiles@gmail.com", // Routes pitch details directly to your master inbox
      replyTo: email, // Click 'Reply' to easily contact the student team leader
      subject: `🚀 [SOLVE Pitch] ${projectTitle} — ${selectedTrack.toUpperCase()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #ffffff; border: 1px solid #eef2f6; border-radius: 12px; color: #1e293b;">
          
          <!-- Header Banner -->
          <div style="text-align: center; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 20px;">
            <span style="font-size: 11px; font-weight: 800; color: #c5a059; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 6px;">
              Youth Innovation & Social Impact Challenge
            </span>
            <h2 style="font-size: 24px; font-weight: 700; color: #0a2342; margin: 0;">
              New Pitch Registration Logged
            </h2>
          </div>

          <!-- Section 1: Project Details -->
          <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0a2342; margin-top: 28px; margin-bottom: 12px; border-left: 3px solid #c5a059; padding-left: 10px;">
            Concept Profile
          </h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569; width: 35%;">Project Title:</td>
              <td style="padding: 12px; font-size: 14px; font-weight: 700; color: #0a2342;">${projectTitle}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Assigned Track:</td>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: ${selectedTrack === "tech" ? "#7c3aed" : "#06b6d4"}; text-transform: capitalize;">
                ${selectedTrack === "tech" ? "Tech Innovation" : "Social Impact"}
              </td>
            </tr>
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Format Dynamic:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155; text-transform: capitalize;">
                ${teamType === "individual" ? "Solo Founder" : `Collaborative Team (${teamSize} members)`}
              </td>
            </tr>
          </table>

          <!-- Section 2: Contact Info -->
          <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0a2342; margin-top: 24px; margin-bottom: 12px; border-left: 3px solid #c5a059; padding-left: 10px;">
            Leader Profile
          </h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569; width: 35%;">Full Name:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Email Address:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
            </tr>
          </table>

          <!-- Section 3: Deliverables Link Boxes -->
          <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0a2342; margin-top: 24px; margin-bottom: 16px; border-left: 3px solid #c5a059; padding-left: 10px;">
            Submission Deliverables
          </h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; border-left: 4px solid #7c3aed; margin-bottom: 12px;">
              <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; font-weight: 700; color: #475569;">📂 Pitch Deck Link (8-10 Slides)</p>
              <a href="${deckLink}" target="_blank" style="font-size: 14px; color: #2563eb; font-weight: 600; word-break: break-all;">${deckLink}</a>
            </div>
            
            <div style="padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; border-left: 4px solid #ef4444;">
              <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; font-weight: 700; color: #475569;">🎥 YouTube Video Pitch (2-3 Mins)</p>
              <a href="${videoLink}" target="_blank" style="font-size: 14px; color: #dc2626; font-weight: 600; word-break: break-all;">${videoLink}</a>
            </div>
          </div>

          <!-- Footer Text -->
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
            Automated delivery engine for SOLVE Challenge.
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Nodemailer routing failure:", error);
    return res.status(500).json({ error: "Internal server error failed to transmit data." });
  }
}