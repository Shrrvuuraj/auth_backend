import { client, sender } from "./mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE,PASSWORD_RESET_REQUEST_TEMPLATE } from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const respone = await client.send({
      from: sender,
      to: recipient,
      subject: "verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("otp is sent",respone)
  } catch (error) {
    console.log(error);
    console.log(email);
    throw new Error("Verification Error :", error.message);
  }
};

export const sendWelcomeData = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      template_uuid: "d3ff3efe-33f3-49e5-acd9-2a5246896601",
      template_variables: {
        company_info_name: "Auth",
        name: name,
      },
    });
    console.log("Email Is Verified", response)
  } catch (error) {
    throw new Error("Code Verification Ero",error)
  }
};

export const forgotPasswordEmail=async (email)=>{
 const recipient = [{ email }];
 try {
  const response=await client.send({
    from:sender,
    to:recipient,
    html:PASSWORD_RESET_REQUEST_TEMPLATE,
    subject:"request for forgot password",
    category:"form"

  })
  console.log("reset password email is send",response)
 } catch (error) {
  throw new Error("reset passsword email:" ,error)
 }
}