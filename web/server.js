import expressApi from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routerApi from "./routers/routers.js";
import env from "dotenv";

class Express {
  static api = expressApi();
  
  static envConfig(){
    return env.config();
  }
 
  static configExpress() {
    Express.envConfig()
    this.api.use(cors());
    this.api.use(bodyParser.json());
    this.api.use(routerApi)

    const port = 9090;
    
    
    this.api.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

Express.configExpress();

