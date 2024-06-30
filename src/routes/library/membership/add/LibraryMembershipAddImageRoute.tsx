import styled from 'styled-components';
import { useCallback, useState } from 'react'
import RouteContainer from '../../../../common/styles/RouteContainer'
import { useDropzone } from 'react-dropzone'
import LibraryMembershipImageRecognitionResponse from './LibraryMembershipImageRecognitionResponse'
import toast from 'react-hot-toast'
import { booksitoutServer } from '../../../../config/booksitoutServer'
import { Card } from 'react-bootstrap'
import LibraryMembershipAddImageModal from './LibraryMembershipAddImageModal'
import CardTitle from '../../../../common/styles/CardTitle'
import booksitoutIcon from '../../../../config/booksitoutIcon'
import CardBodyContainer from '../../../../common/styles/CardBodyContainer'
import RowSpacer from '../../../../common/styles/RowSpacer'
import IndexContentContainer from '../../../index/IndexContentContainer';
import RouteTitle from '../../../../common/RouteTitle/RouteTitle';
import RouteTitleConfig from '../../../../config/RouteTitleConfig';

const LibraryMembershipAddImageRoute = () => {
    const [image, setImage] = useState<string>()
    const [recognizedData, setRecognizedData] = useState<LibraryMembershipImageRecognitionResponse>()
    const [show, setShow] = useState<boolean>(false)

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: false,
        onDrop: useCallback((image) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                toast.loading('이미지를 분석하고 있어요')

                const buffer = reader.result as ArrayBuffer
                const blob = new Blob([buffer])
                const imageUrl = URL.createObjectURL(blob)

                setImage(imageUrl)
                addImage(image[0])
            }

            reader.readAsArrayBuffer(image[0])
        }, []),
    })

    const addImage = (imageData) => {
        setShow(true)
        const formData = new FormData()
        formData.append('file', imageData ?? '')

        booksitoutServer
            .post('/v1/library/membership/image', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            .then(res => setRecognizedData(res.data))
            .then(() => toast.success('회원증을 인식했어요! 잘못된 정보가 있다면 수정하고 회원증을 추가해 주세요'))
            .catch(() => toast.error('오류가 났어요! 잠시 후 다시 시도해 주세요'))
    }

    return (
        <>
            <LibraryMembershipAddImageModal
                image={image}
                membership={recognizedData}
                setMembership={setRecognizedData}
                show={show}
                onHide={() => setShow(false)}
            />

            <Card>
                <CardBodyContainer height={100}>
                    <CardTitle
                        icon={<booksitoutIcon.membership />}
                        title={'사진으로 도서관 회원증 추가'}
                        subTitle="책잇아웃의 AI가 사진을 분석해서 회원증 정보를 인식해 줘요"
                        url={''}
                    />

                    <DragContainer {...getRootProps()}>
                        <input {...getInputProps()} />

                        <div>
                            <DragTextContainer>
                                {isDragActive ? (
                                    <span className="text-book">맞아요! 여기에 올려 주세요</span>
                                ) : (
                                    <>여기에 이미지를 올리거나 클릭해서 올릴 이미지를 선택할 수 있어요</>
                                )}
                            </DragTextContainer>
                        </div>
                    </DragContainer>
                </CardBodyContainer>
            </Card>
        </>
    )
}

const DragContainer = styled(IndexContentContainer)`
    display:   flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
`;

const DragTextContainer = styled.h5.attrs({
    className: 'text-secondary'
})`
`;

export default LibraryMembershipAddImageRoute