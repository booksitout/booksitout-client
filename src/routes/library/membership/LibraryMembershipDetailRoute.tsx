import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import RouteContainer from '../../../common/styles/RouteContainer'
import NoContent from '../../../common/NoContent'
import RowSpacer from '../../../common/styles/RowSpacer'
import LibraryMembershipCardLoading from './LibraryMembershipCardLoading'
import LibraryMembershipCard from './LibraryMembershipCard'
import useLibraryMembership from '../useLibraryMembership'
import LibraryMembershipDetailLibraryCard from './LibraryMembershipDetailLibraryCard'
import { Button } from 'react-bootstrap';
import ColorConfig from '../../../config/ColorConfig';

const LibraryMembershipDetailRoute = () => {

    const { membershipId } = useParams()

    const [membership, isLoading, isNotFound, deleteMembership] = useLibraryMembership(Number(membershipId) ?? 0)

    if (isNotFound) return <NoContent message='도서관 회원증이 없어요' />

    return (
        <RouteContainer>
            <RowSpacer />

            {isLoading ? (
                <LibraryMembershipCardLoading padding={20} />
            ) : (
                <MembershipContainer>
                    <span className='not-clickable'>
                        <LibraryMembershipCard
                            membership={membership}
                            width={2}
                        />
                    </span>

                    <DeleteButton onClick={() => deleteMembership()}>삭제</DeleteButton>
                </MembershipContainer>
            )}
            <RowSpacer />

            <LibraryMembershipDetailLibraryCard libraryList={membership?.usableLibrary ?? []} />
            <RowSpacer />

            {/* <MembershipDetailAddCard id={id} /> */}
            <RowSpacer />

            {/* <MembershipDetailRemoveEditCard id={id} deleteMembership={deleteMembership} /> */}
            <RowSpacer />
        </RouteContainer>
    )
}

const MembershipContainer = styled.div`
    position: relative;
`;

const DeleteButton = styled(Button)`
    position: absolute;
    bottom: 10px;
    right: 10px;

    color: white;
    background-color: ${ColorConfig.Danger};

    border: none;

    &:hover {
        background-color: ${ColorConfig.DangerHover};
    }
`;

export default LibraryMembershipDetailRoute