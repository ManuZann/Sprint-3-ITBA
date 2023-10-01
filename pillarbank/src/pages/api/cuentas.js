import fsPromises from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  const dataFilePath = path.join(process.cwd(), `public/bankaccounts.json`);

  if (req.method === "POST") {
    try {
      const jsonData = await fsPromises.readFile(dataFilePath);
      const objectData = JSON.parse(jsonData);

      const v = req.body;

      objectData.find((c) => c.idU == v.id1).balance -= Number(v.monto);
      objectData.find((c) => c.numberAccount == v.cuentaDestino).balance +=
        Number(v.monto);
      const updatedData = JSON.stringify(objectData);

      //Guardamos la nueva información
      await fsPromises.writeFile(dataFilePath, updatedData);

      //Respondemos si salió todo correctamente con un código 200
      res.status(200).json({ message: "Información almacenada exitosamente" });
    } catch (error) {
      //Respondemos con un código 500 si hubo algún error
      console.log(error);
      res
        .status(500)
        .json({ message: "Error al intentar guardar la información" });
    }
  }
}
