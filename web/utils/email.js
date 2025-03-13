import mailer from "nodemailer";
export default class Email {
  static #configEmail() {
    return mailer.createTransport({
      service: "yahoo",
      auth: {
        user: `csdev4545@yahoo.com`,
        pass: `buciwjuxnrwdtbop`,
      },
    });
  }

  static async sendMessageEmail(email, message, nome) {
    try {
      await this.#configEmail().sendMail({
        from: `csdev4545@yahoo.com`,
        to: `cshsilva@cshsilva.site`,
        subject: `Mensagem de ${nome} - Contato`,
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 20px;">
          <div style="max-width: 600px; background: #ffffff; padding: 25px; margin: 0 auto; border-radius: 10px; 
                      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); border: 1px solid #e5e7eb;">
            
            <h2 style="color: #1f2937; text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 12px;">
              📩 Nova Mensagem de Contato
            </h2>
      
            <p style="font-size: 16px; color: #4b5563; margin-top: 20px;">
              <strong>Nome:</strong> ${nome}
            </p>
            
            <p style="font-size: 16px; color: #4b5563;">
              <strong>E-mail:</strong> 
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: bold;">
                ${email}
              </a>
            </p>
      
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 10px;">
              <strong>Mensagem:</strong>
            </p>
            
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; font-size: 16px; 
                        color: #374151; line-height: 1.6; border: 1px solid #e5e7eb;">
              ${message}
            </div>
      
            <div style="text-align: center; margin-top: 25px;">
              <a href="mailto:${email}" 
                 style="background: #2563eb; color: #ffffff; padding: 12px 24px; 
                        text-decoration: none; font-size: 16px; font-weight: bold; 
                        border-radius: 6px; display: inline-block; transition: 0.3s;">
                Responder E-mail
              </a>
            </div>
          </div>
        </div>
      `
       
      
      });
    } catch (error) {
      throw new Error("Error ao enviar o email, tente novamente.", error);
    }
  }
}
