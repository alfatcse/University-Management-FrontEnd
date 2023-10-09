"use client";
import { Table } from "antd";
import { boolean } from "yup";
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
  const paginationConfig = showPagination
    ? {
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10],
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
