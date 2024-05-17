import { useNavigate } from "react-router-dom";
import { httpGetData, httpUpdateData } from "../../api/common.api";
import { Button, Space } from "antd";

class ChapterData {
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
            title: 'Tên chương',
            dataIndex: 'chapter_name',
            key: 'name',
            ...getColumnSearchProps('chapter_name'),
            render: (text, record) => <a href={"/course/chapter/" + record.id + '/sections'}>{text}</a>
          },
          {
            title: 'Tên môn học',
            dataIndex: 'course_name',
            key: 'course_name',
            ...getColumnSearchProps('course_name'),
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

    async getDataShow(fatherId) {
      const data = await httpGetData(`/list-chapters/${fatherId}`);
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
  
  
export default ChapterData;