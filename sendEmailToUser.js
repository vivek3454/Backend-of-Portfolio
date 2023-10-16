import sendEmail from "./sendEmail.js";

const sendEmailToUser = (req, res) => {
    const { firstname, lastname, email, message } = req.body;
    const Message = `
    name: ${firstname} ${lastname} \n
    email: ${email}\n
    message: ${message}
    `;
    sendEmail(email, Message);
    res.status(200).json({ success: true, message: Message });
}

export { sendEmailToUser };