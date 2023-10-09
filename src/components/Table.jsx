import { Table } from "flowbite-react";
import ActionModal from "./Action";

function TableComponent({ tableHeadData, tableBodyData, functions }) {
  return (
    <>
      <Table>
        <Table.Head>
          {tableHeadData.map((item) => (
            <Table.HeadCell key={item}>{item}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {tableBodyData.map((item, index) => (
            <Table.Row
              key={index}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {Object.entries(item).map(([key, value]) => (
                <Table.Cell key={key}>{value}</Table.Cell>
              ))}
              <Table.Cell>
                <ActionModal functions={functions}/>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default TableComponent;
