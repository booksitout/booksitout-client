import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import TipsType from '../../types/TipsType'
import { booksitoutServer } from '../../config/axios'
import RouteContainer from '../common/RouteContainer'
import styled from 'styled-components';

const AdminTipsRoute = () => {
    const { id } = useParams()

    const [tip, setTip] = useState<TipsType | null>(null) 
    useEffect(() => {
        booksitoutServer
            .get(`/v4/forum/tips/admin/${id}`)
            .then((res) => {
                setTip(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)
                setImageUrl(res.data.displayImageUrl)
            })
    }, [id])

    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<string>()
    const [imageUrl, setImageUrl] = useState<string>()

    const edit = () => {
        booksitoutServer
            .put(`/v4/forum/tips/admin/${id}`, {
                title: title,
                content: content,
                displayImageUrl: imageUrl
            })
            .then(() => alert('수정되었습니다.'))
    }

    if (tip == null) return <></>
    return (
        <RouteContainer>
            <div className="row justify-content-center">
                <Margin />
                <Form.Control value={title} size='lg' onChange={(e) => setTitle(e.target.value)}/>

                <Margin />
                <Form.Control value={imageUrl} size='lg' onChange={(e) => setImageUrl(e.target.value)}/>

                <Margin />
                <Form.Control value={content} as='textarea' rows={20} onChange={((e) => setContent(e.target.value))}/>

                <Margin />
                <Button variant='book' onClick={() => edit()}>수정하기</Button>
            </div>
        </RouteContainer>
    )
}

const Margin = styled.div`
    margin-top: 50px;
`;

export default AdminTipsRoute