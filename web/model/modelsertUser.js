import mongoose from "mongoose";
export default class UserModelInsert {
  static configModel() {
    mongoose.connect("mongodb+srv://admin:admin1234@dados.7d94myt.mongodb.net/myWebSite");

    const userSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      message: { type: String, required: true },
    });
    return mongoose.model("DadosWebSiteMy", userSchema);
  }

  static async databaseUserInert(name, email, message) {
    try {
        const user = UserModelInsert.configModel()
       
        
        const newUser = new user({ name, email, message });
        await newUser.save();

    } catch (error) {
        console.log(error);
        
       throw new Error("Error ao enviar Email");
    }
  }
}
