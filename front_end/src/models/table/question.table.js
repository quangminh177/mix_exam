import { httpGetData } from "../../api/common.api";
import { Button, Space } from "antd";
import { showQuestionInfo } from "../../components/Modal/ModalQuestion";

class QuestionData {
    getColumnShow(callBack, getColumnSearchProps) {
        const columns = [
          {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Tên câu hỏi',
            dataIndex: 'question_name',
            key: 'name',
            ...getColumnSearchProps('question_name'),
            render: (text, record) => <a onClick={() => showQuestionInfo(record)}>{text}</a>
          },
          {
            title: 'Độ khó câu hỏi',
            dataIndex: 'level',
            key: 'level',
            ...getColumnSearchProps('level'),
          },
          {
            title: 'Môn học',
            dataIndex: 'course_name',
            key: 'course',
            ...getColumnSearchProps('course_name'),
          },
          {
            title: 'Chương',
            dataIndex: 'chapter_name',
            key: 'chapter',
            ...getColumnSearchProps('chapter_name'),
          },
          {
            title: 'Phần',
            dataIndex: 'section_name',
            key: 'section',
            ...getColumnSearchProps('section_name'),
          },
          {
            title: 'Ngày tạo câu hỏi',
            dataIndex: 'created_at',
            key: 'created_at',
          },
          {
            title: 'Giáo viên tạo câu hỏi',
            dataIndex: 'created_user',
            key: 'created_user',
            ...getColumnSearchProps('created_user'),
          },
          {
            title: 'Ngày chỉnh sửa gần nhất',
            dataIndex: 'update_at',
            key: 'update_at',
          },
          {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (_, record, index) => (
              <Space size="middle">
                <Button type="primary" onClick={() => callBack('edit', record.id, index)}>Edit</Button>
                <Button type="primary" danger onClick={() => callBack('delete', record.id)}>Delete</Button>
              </Space>
            ),
          }
          
        ];

        return columns;
    }

    async getDataShow() {
      const data = await httpGetData('/questions');
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
  
  
export default QuestionData;