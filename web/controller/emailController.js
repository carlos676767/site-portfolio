import ValideFilds from "../utils/valideFilds.js";
import UserModelInsert from "../model/modelsertUser.js";
import EmailService from "../utils/email.js";
export default class ControllerEmail {
  static async sendEmail(req, res) {
    try {
  
      console.log(req.body);
      
      ValideFilds.valideData(req.body);
      const { name, email, message } = req.body;


      
      
      ValideFilds.validateEmail(email);

      await UserModelInsert.databaseUserInert(name, email, message);
      await EmailService.sendMessageEmail(email, message, name);

      res.status(200).send({ sucess: "Email enviado com sucesso" });
    } catch (error) {
      
        
      res.status(400).send({ msg: error.message });
    }
  }
}