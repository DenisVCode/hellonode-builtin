import express from "express";
import { ENSInstance } from "./ens_provider.js";
import { PROJECT_API_KEY } from "./defaults.js";

const app = express();
const port = process.env.PORT || 3000;

app.get(["/:name"], async (req, res) => {
  if (req.headers.authorization !== PROJECT_API_KEY) {
    res.status(401).send("Unauthorized");
    return;
  }
  const name = req.params["name"];
  console.log(name);
  if (name) {
    try {
      const profile = await ENSInstance.getProfile(name);
      res.send(profile);
    } catch (error) {
      res.status(500).send(String(error));
    }
  } else {
    // Missing required parameter
    res.status(400).send("Missing required parameter");
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
