import { Modal } from 'antd';
import { httpUpdateData } from '../../api/common.api';
import { ExclamationCircleFilled } from '@ant-design/icons';

const { confirm } = Modal;

export const showDeleteConfirm = (table, id) => {
    const tableName = table.slice(0, -1);
    confirm({
      title: 'Xóa thành phần',
      icon: <ExclamationCircleFilled />,
      content: 'Bạn có chắc muốn xóa mục này không',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Không',
      async onOk() {
        console.log('Xóa');
        // Update data to db with delete_flag = 1
        let data = await httpUpdateData(`/${tableName}/${id}/update`, {'delete_flag': 1});
        
        if (data) {
          // Navigate to table page
            window.location.assign(`/${table}`);
        }
      },
      onCancel() {
        console.log('Hủy');
      },
    });
}; 