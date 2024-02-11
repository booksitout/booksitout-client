import React from 'react'
import RouteContainer from '../common/RouteContainer'
import RouteTitle from '../common/RouteTitle'
import booksitoutIcon from '../common/icons/booksitoutIcon'
import { settingsRouteButtons } from './settingsUi'

const PublicProfileSettingsRoute = () => {
    return (
        <RouteContainer>
            <RouteTitle 
                icon={<booksitoutIcon.settings />} 
                title={'설정'} 
                subTitle={null} 
                currentKey={'profile'} 
                buttons={settingsRouteButtons} 
                rightUi={null} 
            />
        </RouteContainer>
    )
}

export default PublicProfileSettingsRoute