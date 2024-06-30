import React from 'react'
import RouteContainer from '../common/styles/RouteContainer'
import {Outlet} from "react-router-dom";
import RouteTitle from "../common/RouteTitle/RouteTitle";
import booksitoutIcon from "../config/booksitoutIcon";
import RowSpacer from "../common/styles/RowSpacer";
import RouteTitleConfig from "../config/RouteTitleConfig";
import useUrl from "../common/hooks/useUrl";
import ScrollToTop from "../common/ScrollToTop";

const AddRoute = () => {
    const url = useUrl();
    const type: 'BOOK' | 'MEMBERSHIP' = url.includes('membership') ? 'MEMBERSHIP' : 'BOOK';

    const config = {
        BOOK: {
            icon: <booksitoutIcon.book/>,
            title: '책 추가하기',
            buttons: RouteTitleConfig.AddBook,
            currentKey: url.includes('search') ? 'search' : 'manual'
        },
        MEMBERSHIP: {
            icon: <booksitoutIcon.membership/>,
            title: '회원증 추가하기',
            buttons: RouteTitleConfig.AddMembership,
            currentKey: url.includes('image') ? 'image' : 'manual'
        }
    };

    const {icon, title} = config[type];

    return (
        <RouteContainer>
            <ScrollToTop/>
            <RouteTitle
                icon={icon}
                title={title}
                subTitle={null}
                currentKey={type}
                buttons={RouteTitleConfig.Add}
                rightUi={undefined}
            />
            <RowSpacer/>

            <Outlet/>
        </RouteContainer>
    );
};

export default AddRoute
