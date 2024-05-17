import { Space, Button } from "antd";
import { httpGetData } from "../../api/common.api";

class ExamData {
    getColumnShow(callBack, getColumnSearchProps) {
        const columns = [
          {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: 'Môn học',
            dataIndex: 'course_name',
            key: 'course_name',
            ...getColumnSearchProps('course_name'),
            // render: (text) => <a>{text}</a>
          },
          {
            title: 'Kỳ học',
            dataIndex: 'semester',
            key: 'semester',
            ...getColumnSearchProps('semester'),
          },
          {
            title: 'Kiểu đề thi',
            dataIndex: 'exam_type',
            key: 'exam_type',
            ...getColumnSearchProps('exam_type'),
          },
          {
            title: 'Mã đề',
            dataIndex: 'exam_number',
            key: 'number',
            ...getColumnSearchProps('exam-number'),
            render: (text, record) => <a href={"/exam/" + record.id}>{text}</a>
          },
          {
            title: 'Mã đề gốc',
            dataIndex: 'exam_origin',
            key: 'origin',
            ...getColumnSearchProps('exam_origin'),
          },
          {
            title: 'Ngày tạo đề thi',
            dataIndex: 'created_at',
            key: 'created_at',
          },
          {
            title: 'Người tạo đề',
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
      const data = await httpGetData('/exams');
      // const data = [
      //   {
      //     stt: 0,
      //     name: 'Tư tưởng Hồ Chí Minh',
      //     semester: '2022-2',
      //     type: 'Cuối kỳ',
      //     created_at: '2/06/2023',
      //     updated_at: '2/06/2023',
      //   },
      //   {
      //       stt: 1,
      //       name: 'Tư tưởng Hồ Chí Minh',
      //       semester: '2022-2',
      //       type: 'Cuối kỳ',
      //       created_at: '2/06/2023',
      //       updated_at: '2/06/2023',
      //   },
      //   {
      //       stt: 2,
      //       name: 'Tư tưởng Hồ Chí Minh',
      //       semester: '2022-2',
      //       type: 'Cuối kỳ',
      //       created_at: '2/06/2023',
      //       updated_at: '2/06/2023',
      //   }
      // ];

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
  
  
export default ExamData;