import fsPromises from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  const dataFilePath = path.join(process.cwd(), `public/serviciosUser.json`);

  if (req.method === "POST") {
    try {
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      objectData.push(req.body);
      const updatedData = JSON.stringify(objectData);
      await fsPromises.writeFile(dataFilePath, updatedData);

      res.status(200).json({ message: "Data stored successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error storing data" });
    }
  }
}
