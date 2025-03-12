import expressApi from "express";
import bodyParser from "body-parser";

import routerApi from "./routers/routers.js";

class Express {
  static api = expressApi();


 
  static configExpress() {
    this.api.use(bodyParser.json());
    this.api.use(routerApi)
    const port = 8080 || process.env.PORT;
    
    this.api.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

Express.configExpress();
