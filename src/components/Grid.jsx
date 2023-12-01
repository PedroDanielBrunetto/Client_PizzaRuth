import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";

const TABLE_HEAD = ["Nome", "Email", "Endereço", ""];

export default function TableWithStripedRows() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/get-all-clients")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter clientes:", error);
      });
  }, []); 

  // const deletarUser = () => {
  //   const response = axios.delete(`http://localhost:3000/deletar-cliente/${clients.id}`);
  //   if (response.status === 200) {
  //     alert("pizza deletada com sucesso");
  //   }
  //   Navigate("/list-clientes")
  // };

  // useEffect(() => {
  //   deletarUser();
  // }, []);

  return (
    <div className="flex justify-center">
      <Card className="h-full w-4/6 overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.map(({ name, email, rua, bairro, cidade, residencia }, index) => (
              <tr key={name} className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {`${rua}, ${residencia}, ${bairro}, ${cidade}`}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography as="a"  variant="small" color="blue-gray" className="font-medium">
                    Excluir
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
