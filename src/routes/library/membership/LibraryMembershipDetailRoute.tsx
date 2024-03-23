import React from 'react'
import { useParams } from 'react-router-dom'
import RouteContainer from '../../../common/styles/RouteContainer'
import NoContent from '../../../common/NoContent'
import RowSpacer from '../../../common/styles/RowSpacer'
import LibraryMembershipCardLoading from './LibraryMembershipCardLoading'
import LibraryMembershipCard from './LibraryMembershipCard'
import useLibraryMembership from '../useLibraryMembership'
import LibraryMembershipDetailLibraryCard from './LibraryMembershipDetailLibraryCard'

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
                <span className='not-clickable'>
                    <LibraryMembershipCard
                        membership={membership}
                        width={2}
                    />
                </span>
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

export default LibraryMembershipDetailRoute