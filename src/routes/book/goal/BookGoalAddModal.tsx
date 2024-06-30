import Modal from '../../../common/Modal';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import AddButton from '../../../common/button/AddButton';
import RowSpacer from '../../../common/styles/RowSpacer';
import { booksitoutServer } from '../../../config/booksitoutServer';
import toast from 'react-hot-toast';

interface Props {
    isOpen: boolean
    onHide: () => void
    year: number
}

const BookGoalAddModal: React.FC<Props> = ({ isOpen, onHide, year }) => {
    const [goalCount, setGoalCount] = useState<number>(0)
    const addGoalCount = () => {
        if (goalCount <= 0)  {
            toast.error('1권 이상의 목표 권수를 입력해 주세요.')
            return
        }

        if (goalCount > 200) {
            toast.error('목표는 200권까지만 설정할 수 있어요.')
            return
        }

        booksitoutServer
            .post(`/v1/book/goals/${year}`, {goal: goalCount})
            .then(() => {
                toast.success('목표가 추가되었습니다.')
                onHide()
            })
            .catch(() => {
                toast.error('오류가 발생했어요. 잠시 후 다시 시도해 주세요.')
            })

            window.location.reload()
    }

    return (
        <Modal 
            isShowing={isOpen} 
            onClose={onHide} 
            titleText={`🗓️ ${year}년도 목표 추가하기`} 
            body={
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    addGoalCount()
                }}>
                    <Form.Group>
                        <Form.Control
                            type="number"
                            placeholder="목표 책 권수"
                            onChange={(e) => setGoalCount(Number(e.target.value))}
                            autoFocus={true}
                        />

                        <RowSpacer size={10} />

                        <AddButton label='추가하기' onClick={addGoalCount} />
                    </Form.Group>
                </Form>
            }
        />
    )
}

export default BookGoalAddModal