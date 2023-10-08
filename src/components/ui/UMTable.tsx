"use client";
import { Table } from "antd";
const UMTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];
  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
  ];
  const onPageSizeChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
  };
  return (
    <Table
      loading={false}
      dataSource={tableData}
      columns={columns}
      pagination={{
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10],
        showSizeChanger: true,
        onChange: onPageSizeChange,
      }}
    />
  );
};

export default UMTable;
