"use client";
import { Table } from "antd";
type UMTableProps = {
  columns: any;
  loading?: boolean;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  showPagination?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
};
const UMTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: UMTableProps) => {
  console.log("dataSource::", dataSource);
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onPaginationChange,
      }
    : false;
  return (
    <Table
      loading={false}
      dataSource={dataSource}
      columns={columns}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
