import { mailTrapClient, sender } from "./mailtrap.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }];

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        });

        console.log("Email send successfully", response);
    } catch (error) {
        console.error("Error sending verification email", error);
        throw new Error("Error sending verification email", error);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "e062d587-219a-4b06-9343-c6879198777b",
            template_variables: {
                company_info_name: "Auth-App",
                name: name,
            }
        });
        console.log("Welcome e-mail sent!", response);
    } catch (error) {
        console.error("Error sending welcome email", error);
        throw new Error("Error sending welcome email", error);
    }
};