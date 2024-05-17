import { httpGetData } from "../../api/common.api";
import { Button, Space } from "antd";

class UserData {
    getColumnShow(callBack, getColumnSearchProps) {
      const columns = [
        {
          title: 'STT',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Họ và tên',
          dataIndex: 'name',
          key: 'name',
          ...getColumnSearchProps('name'),
          // render: (text) => <a>{text}</a>
        },
        {
          title: 'Mã số người dùng',
          dataIndex: 'code',
          key: 'code',
          ...getColumnSearchProps('code'),
        },
        {
          title: 'Giới tính',
          dataIndex: 'gender',
          key: 'gender',
        },
        {
          title: 'Ngày sinh',
          dataIndex: 'birthday',
          key: 'birthday',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          ...getColumnSearchProps('email'),
        },
        {
          title: 'Trường',
          dataIndex: 'school',
          key: 'school',
          ...getColumnSearchProps('school'),
        },
        {
          title: 'Khoa/Viện',
          dataIndex: 'faculty',
          key: 'faculty',
          ...getColumnSearchProps('faculty'),
        },
        {
          title: 'Hành động',
          dataIndex: 'action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Button type="primary" onClick={() => callBack('edit', record.id)}>Edit</Button>
              <Button type="primary" danger onClick={() => callBack('delete', record.id)}>Delete</Button>
            </Space>
          )
        }
      ];

        return columns;
    }

    async getDataShow() {
      // const data = [
        // {
        //   stt: 0,
        //   name: 'Nguyễn Khánh Toàn',
        //   code: 20203610,
        //   gender: 'Nam',
        //   birthday: '26/08/2022',
        //   email: 'toan@gmail.com',
        //   school: 'Trường Đại học Bách Khoa Hà Nội',
        //   faculty: 'Điện tử viễn thông'
        // },
        // {
        //   stt: 1,
        //   name: 'Quyền Quang Minh',
        //   code: 20193020,
        //   gender: 'Nam',
        //   birthday: '17/07/2001',
        //   email: 'minh@gmail.com',
        //   school: 'Trường Đại học Bách Khoa Hà Nội',
        //   faculty: 'Điện tử viễn thông'
        // },
        // {
        //   stt: 2,
        //   name: 'Phạm Quang Huy',
        //   code: 20193610,
        //   gender: 'Nam',
        //   birthday: '17/07/2001',
        //   email: 'huy@gmail.com',
        //   school: 'Trường Đại học Bách Khoa Hà Nội',
        //   faculty: 'Điện tử viễn thông'
        // },
        // {
        //   stt: 3,
        //   name: 'Trần Xuân Quyến',
        //   code: 20213610,
        //   gender: 'Nam',
        //   birthday: '17/07/2003',
        //   email: 'quyen@gmail.com',
        //   school: 'Trường Đại học Bách Khoa Hà Nội',
        //   faculty: 'Điện tử viễn thông'
        // }
      // ];
      const data = await httpGetData('/users');
      return data;
    }

    getInfomationToEdit() {

    }

    getInformationToAdd() {

    }

    getHTMLToAdd () {

    }

    getTypeSelectToAdd() {

    }

    getColumnValidate() {

    }
}
  
  
export default UserData;