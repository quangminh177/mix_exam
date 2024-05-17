import { useNavigate } from "react-router-dom";
import { httpGetData, httpUpdateData } from "../../api/common.api";
import { Button, Space } from "antd";

class SectionData {
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
            title: 'Tên phần',
            dataIndex: 'section_name',
            key: 'name',
            ...getColumnSearchProps('section_name')
          },
          {
            title: 'Tên chương',
            dataIndex: 'chapter_name',
            key: 'chapter_name',
            ...getColumnSearchProps('chapter_name')
          },
          {
            title: 'Tên môn học',
            dataIndex: 'course_name',
            key: 'course_name',
            ...getColumnSearchProps('course_name')
          },
          {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (_, record, index) => (
              <Space size="middle">
                <Button type="primary" onClick={() => callBack('edit',record.id, index)}>Edit</Button>
                <Button type="primary" danger onClick={() => callBack('delete', record.id)}>Delete</Button>
              </Space>
            ),
          }
          
        ];
        return columns;
    }

    async getDataShow(fatherId) {
      const data = await httpGetData(`/list-sections/${fatherId}`);
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
  
  
export default SectionData;