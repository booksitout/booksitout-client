import { IconType } from 'react-icons';

import {
	BsFillPersonVcardFill,
	BsPeopleFill,
	BsFileEarmarkBarGraphFill,
	BsBookHalf,
	BsTrainFrontFill,
	BsWebcamFill,
	BsFillQuestionCircleFill,
	BsFillPatchCheckFill,
	BsPencilFill,
	BsFillChatLeftTextFill,
	BsFillCalendarFill,
	BsFillPeopleFill,
	BsFire,
	BsFillPostcardFill,
	BsFillInfoCircleFill,
	BsFillFileImageFill,
	BsMapFill,
	BsGearFill,
} from 'react-icons/bs'
import { FaCross, FaPeopleArrows, FaSearch, FaTheaterMasks, FaUserAlt } from 'react-icons/fa'
import { TbLocationFilled } from 'react-icons/tb'
import { FiLogIn } from 'react-icons/fi'
import { GrCircleQuestion} from 'react-icons/gr'
import { HiDotsCircleHorizontal, HiOutlineUserAdd } from 'react-icons/hi'
import { ImLibrary } from 'react-icons/im'
import { BiNetworkChart, BiSearchAlt2, BiTime, BiTransfer } from 'react-icons/bi'
import { AiFillStar, AiOutlineStar, AiFillCheckCircle, AiOutlineAppstore, AiFillLike, AiFillDislike, AiFillExperiment, AiFillPicture, AiFillNotification } from 'react-icons/ai'
import { TbTargetArrow } from 'react-icons/tb'
import { RiComputerFill, RiFilePaperLine, RiFunctionFill } from 'react-icons/ri'
import { MdBrowserNotSupported, MdEmail, MdFeedback, MdHistoryEdu, MdLanguage, MdOutlineEmojiPeople, MdPrivacyTip, MdQuiz, MdCancel, MdAddCircle } from 'react-icons/md';
import { GiEvilBook, GiThink } from 'react-icons/gi';
import { IoReloadCircle } from 'react-icons/io5';
import { FaMinusCircle } from "react-icons/fa";


const booksitoutIcon: { [key: string]: IconType } = {
	login: FiLogIn,
	join: HiOutlineUserAdd,
	question: GrCircleQuestion,
	user: FaUserAlt,

	// settings
	settings: BsGearFill,
	paid: BsFillPatchCheckFill,

	// pwa
	pwa: AiOutlineAppstore,
	notSupported: MdBrowserNotSupported,
	info: BsFillInfoCircleFill,

	location: TbLocationFilled,
	map: BsMapFill,

	search: FaSearch,
	topnavSearch: BiSearchAlt2,

	book: BsBookHalf,
	title: BsPencilFill,
	author: BsFillPeopleFill,
	description: BsFillChatLeftTextFill,
	publishYear: BsFillCalendarFill,
	page: RiFilePaperLine,

	// Statistics
	statistics: BsFileEarmarkBarGraphFill,
	star: AiOutlineStar,
	starFill: AiFillStar,
	goal: TbTargetArrow,
	language: MdLanguage,
	category: FaTheaterMasks,
	consecutive: BsFire,
	currentReading: MdOutlineEmojiPeople,

	categoryOthers: HiDotsCircleHorizontal,
	categoryPhilosophy: GiThink,
	categoryReligion: FaCross,
	categoryNaturalScience: AiFillExperiment,
	categoryLanguage: MdLanguage,
	categoryLiterature: GiEvilBook,
	categoryHistory: MdHistoryEdu,

	categoryArt: AiFillPicture,
	categoryTechnology: RiComputerFill,
	categorySocialScience: BiNetworkChart,

	// Community
	community: BsPeopleFill,
	popular: BsFire,
	post: BsFillPostcardFill,
	quiz: MdQuiz,
	image: BsFillFileImageFill,
	like: AiFillLike,
	dislike: AiFillDislike,

	check: AiFillCheckCircle,
	xmark: MdCancel,

	// gathering
	gathering: FaPeopleArrows,
	subway: BsTrainFrontFill,
	online: BsWebcamFill,
	others: BsFillQuestionCircleFill,

	// tips
	time: BiTime,

	// library
	library: ImLibrary,
	membership: BsFillPersonVcardFill,

	// admin
	faq: BsFillQuestionCircleFill,
	suggestion: MdFeedback,

	convert: BiTransfer,

	feature: RiFunctionFill,

	privacy: MdPrivacyTip,

	notification: AiFillNotification,
	email: MdEmail,

	reload: IoReloadCircle,

	add: MdAddCircle,
	delete: FaMinusCircle,
}

export default booksitoutIcon