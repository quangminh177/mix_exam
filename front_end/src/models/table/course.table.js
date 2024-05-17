import { useNavigate } from "react-router-dom";
import { httpGetData, httpUpdateData } from "../../api/common.api";
import { Button, Space } from "antd";

class CourseData {
    navigateToEdit(id) {
      window.location.assign(`/edit-course/${id}`);
    }

    showModalDelete() {
      
    }

    getColumnShow(callBack, getColumnSearchProps) {
        const columns = [
          {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Tên môn học',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            render: (text, record) => <a href={"/course/" + record.id + '/chapters'}>{text}</a>
          },
          {
            title: 'Mã học phần',
            dataIndex: 'code',
            key: 'code',
            ...getColumnSearchProps('code'),
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
            ),
          }
          
        ];
        return columns;
    }

    async getDataShow() {
      const data = await httpGetData('/courses');
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
  
  
export default CourseData;