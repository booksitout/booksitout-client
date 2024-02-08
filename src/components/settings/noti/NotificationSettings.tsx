import RouteContainer from "../../common/RouteContainer"
import RouteTitle from "../../common/RouteTitle"
import booksitoutIcon from '../../common/icons/booksitoutIcon';
import NotificationEmailSettingsCard from "./NotificationEmailSettingsCard";
import NotificationMethodSettingsCard from "./NotificationMethodSettingsCard";

const NotificationSettings = () => {
	return (
		<RouteContainer>
			<RouteTitle icon={<booksitoutIcon.settings />} title={'설정 - 알림 설정'} subTitle={null} currentKey={undefined} buttons={[]} rightUi={null} />

			<NotificationMethodSettingsCard />
			<NotificationEmailSettingsCard />
		</RouteContainer>
	)
}

export default NotificationSettings