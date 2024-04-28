import styled from 'styled-components';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookMineListRange from './BookMineListRange';
import IndexContentContainer from '../../index/IndexContentContainer';
import { Form } from 'react-bootstrap';
import useUrlQuery from '../../../common/hooks/useUrlQuery';

const BookMineRangeSelector = () => {
    const navigate = useNavigate()
    const range = useUrlQuery('range') as BookMineListRange

    const [currentRange, setCurrentRange] = useState<BookMineListRange>(range);
    useEffect(() => {
        if (currentRange != null) {
            window.location.href = `/book/mine?range=${currentRange}`
        }
    }, [currentRange, navigate, range])

    const buttons = [
        {
            url: '/book/mine?range=READING',
            key: 'READING',
            label: '읽는 중'
        },
        {
            url: '/book/mine?range=DONE',
            key: 'DONE',
            label: '다 읽음'
        },
        {
            url: '/book/mine?range=GIVEUP',
            key: 'GIVEUP',
            label: '포기'
        }
    ];

    return (
        <Container>
            <IndexContentContainer style={{ color: 'black' }}>
                <Label>책 범위</Label>

                <FormContainer>
                    <Form.Group>
                        <Form.Select
                            value={buttons.find((b) => b.key === range)?.key.toString() ?? BookMineListRange.READING}
                            onChange={(e) => setCurrentRange(e.target.value as BookMineListRange)}
                        >
                            {buttons.map((button) => <option value={button.key}>{button.label}</option>)}
                        </Form.Select>
                    </Form.Group>
                </FormContainer>
            </IndexContentContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;

    &:hover {
        color: black;
    }
`;

const Label = styled.h5`
    padding: 0px;
    padding-top: 7px;
    margin: 0px;
    font-size: 20px;

    &:hover {
        color: black;
    }
`;

const FormContainer = styled(Form)`
    width: 200px;
`;

export default BookMineRangeSelector