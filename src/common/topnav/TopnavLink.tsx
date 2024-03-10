import styled from 'styled-components';
import ColorConfig from '../../config/ColorConfig';

interface Props {
    label: string;
    url: string;
    isActive: boolean;
}

const TopnavLink: React.FC<Props> = (props) => {
    return (
        <Link href={props.url} isActive={props.isActive}>
            <Text>{props.label}</Text>
        </Link>
    )
}

const Link = styled.a.attrs(props => ({
    href: props.href,
    className: 'clickable',
}))`
    padding-left: 10px;
    padding-right: 10px;

    color: ${props => (props.isActive ? ColorConfig.Primary : '')};

    &:hover {
        color: ${ColorConfig.Primary};
    }
`;

const Text = styled.div`
    font-weight: 600;
`;

export default TopnavLink