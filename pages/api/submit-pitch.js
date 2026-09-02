import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      email,
      age,
      schoolName,
      country,
      videoTitle,
      category,
      videoUrl,
      videoDescription,
      counselorName,
      counselorEmail,
      // SOLVE Challenge specific fields
      teamType,
      teamSize,
      selectedTrack,
      projectTitle,
      deckLink,
      videoLink,
    } = req.body;

    // Validation
    if (!email || (!videoUrl && !videoLink && !projectTitle && !videoTitle)) {
      return res.status(400).json({ error: "Missing required submission fields or links." });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const isApexCompetition = Boolean(videoTitle || videoUrl || category || age);
    const competitionName = isApexCompetition ? "Apex Discovery Competition" : "SOLVE Challenge";
    const subjectTitle = videoTitle || projectTitle || "Pitch Entry";

    const mailOptions = {
      from: `"Career Discovery Competitions" <${process.env.EMAIL_USER}>`,
      to: "unidiscoveryfiles@gmail.com",
      replyTo: email,
      subject: `🚀 [${competitionName}] ${subjectTitle} — ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 32px; background-color: #ffffff; border: 1px solid #eef2f6; border-radius: 12px; color: #1e293b;">
          
          <!-- Header Banner -->
          <div style="text-align: center; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 20px;">
            <span style="font-size: 11px; font-weight: 800; color: #06b6d4; text-transform: uppercase; letter-spacing: 2px; display: block; margin-bottom: 6px;">
              ${competitionName}
            </span>
            <h2 style="font-size: 24px; font-weight: 700; color: #0a2342; margin: 0;">
              New Pitch Submission Received
            </h2>
          </div>

          <!-- Section 1: Student Information -->
          <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0a2342; margin-top: 24px; margin-bottom: 12px; border-left: 3px solid #06b6d4; padding-left: 10px;">
            Participant Profile
          </h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569; width: 35%;">Full Name:</td>
              <td style="padding: 12px; font-size: 14px; font-weight: 700; color: #0a2342;">${fullName || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Email Address:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
            </tr>
            ${age ? `
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Age:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;">${age} years old</td>
            </tr>` : ''}
            ${schoolName ? `
            <tr>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">School Name:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;">${schoolName}</td>
            </tr>` : ''}
            ${country ? `
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Country:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;">${country}</td>
            </tr>` : ''}
            ${teamType ? `
            <tr>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Team Format:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155; text-transform: capitalize;">
                ${teamType === "individual" ? "Solo Founder" : `Collaborative Team (${teamSize} members)`}
              </td>
            </tr>` : ''}
          </table>

          <!-- Section 2: Academic / Counselor Endorsement -->
          <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0a2342; margin-top: 24px; margin-bottom: 12px; border-left: 3px solid #6366f1; padding-left: 10px;">
            Academic Counselor Endorsement
          </h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569; width: 35%;">Counselor Name:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;">${counselorName || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Counselor Email:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;">
                ${counselorEmail ? `<a href="mailto:${counselorEmail}" style="color: #0284c7; text-decoration: none;">${counselorEmail}</a>` : "N/A"}
              </td>
            </tr>
          </table>

          <!-- Section 3: Entry Submission Details -->
          <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0a2342; margin-top: 24px; margin-bottom: 12px; border-left: 3px solid #c5a059; padding-left: 10px;">
            Pitch & Video Deliverables
          </h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569; width: 35%;">Title / Topic:</td>
              <td style="padding: 12px; font-size: 14px; font-weight: 700; color: #0a2342;">${videoTitle || projectTitle || "N/A"}</td>
            </tr>
            ${category || selectedTrack ? `
            <tr>
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Category / Track:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155;">${category || selectedTrack}</td>
            </tr>` : ''}
            ${videoDescription ? `
            <tr style="background-color: #f8fafc;">
              <td style="padding: 12px; font-size: 14px; font-weight: 600; color: #475569;">Summary:</td>
              <td style="padding: 12px; font-size: 14px; color: #334155; line-height: 1.5;">${videoDescription}</td>
            </tr>` : ''}
          </table>

          <!-- Section 4: Deliverables Links -->
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${(videoUrl || videoLink) ? `
            <div style="padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; border-left: 4px solid #ef4444;">
              <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; font-weight: 700; color: #475569;">🎥 Video Pitch URL</p>
              <a href="${videoUrl || videoLink}" target="_blank" style="font-size: 14px; color: #dc2626; font-weight: 600; word-break: break-all;">${videoUrl || videoLink}</a>
            </div>` : ''}
            ${deckLink ? `
            <div style="padding: 16px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; border-left: 4px solid #7c3aed; margin-top: 12px;">
              <p style="margin: 0 0 6px 0; font-size: 12px; text-transform: uppercase; font-weight: 700; color: #475569;">📂 Pitch Deck Link</p>
              <a href="${deckLink}" target="_blank" style="font-size: 14px; color: #2563eb; font-weight: 600; word-break: break-all;">${deckLink}</a>
            </div>` : ''}
          </div>

          <!-- Footer Text -->
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
            Automated delivery engine for Career Discovery (${competitionName}).
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