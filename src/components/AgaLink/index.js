import React from 'react'
import {Button} from 'antd-mobile'
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import FlexLayout from "../Layout/FlexLayout/index";
import WingBlankApp from "../Layout/WingBlankApp/index";
import WhiteSpaceApp from "../Layout/WhiteSpaceApp/index";
import MenuApp from "../Menu/MenuApp/index";
import OneLevelMenuApp from "../Menu/OneLevelMenuApp/index";
import MultiSelectMenuApp from "../Menu/MultiSelectMenuApp/index";
import SingleMultiMenuApp from "../Menu/SingleMultiMenuApp/index";
import DrawerApp from "../Navigation/DrawerApp/index";
import NarBarApp from "../Navigation/NavBarApp/index";
import PopoverApp from "../Navigation/PopoverApp/index";
import SegmentedControlApp from "../Navigation/SegmentedControlApp/index";
import TabApp1 from "../Navigation/Tab/TabApp1/index";
import TabApp2 from "../Navigation/Tab/TabApp2/index";
import TabApp3 from "../Navigation/Tab/TabApp3/index";
import TabApp4 from "../Navigation/Tab/TabApp4/index";
import TabApp5 from "../Navigation/Tab/TabApp5/index";
import TabApp6 from "../Navigation/Tab/TabApp6/index";
import TabBarApp1 from "../Navigation/TabBar/TabBarApp1/index";
import TabBarApp2 from "../Navigation/TabBar/TabBarApp2/index";
import TabBarApp3 from "../Navigation/TabBar/TabBarApp3/index";
import ButtonApp1 from "../DataEntry/Button/ButtonApp1/index";
import ButtonApp2 from "../DataEntry/Button/ButtonApp2/index";
import CheckboxApp from "../DataEntry/CheckboxApp/index";
import CalendarApp from "../DataEntry/CalendarApp/index";
import DatePickerViewApp from "../DataEntry/DatePickerViewApp/index";
import DatePickerApp1 from "../DataEntry/DatePicker/DatePickerApp1/index";
import DatePickerApp2 from "../DataEntry/DatePicker/DatePickerApp2/index";
import InputItemApp1 from "../DataEntry/InputItem/InputItemApp1/index";
import InputItemApp2 from "../DataEntry/InputItem/InputItemApp2/index";
import InputItemApp3 from "../DataEntry/InputItem/InputItemApp3/index";
import ImagePickerApp1 from "../DataEntry/ImagePicker/ImagePickerApp1/index";
import ImagePickerApp2 from "../DataEntry/ImagePicker/ImagePickerApp2/index";
import {ImagePickerApp3} from "../DataEntry/ImagePicker/ImagePickerApp3/index";
import {PickerViewApp1} from "../DataEntry/PickerView/PickerViewApp1/index";
import {RadioApp1} from "../DataEntry/Radio/RadioApp1/index";
import {RangeApp1} from "../DataEntry/Range/RangeApp1/index";
import {SwitchApp1} from "../DataEntry/Switch/SwitchApp1/index";
import {StepperApp1} from "../DataEntry/Stepper/StepperApp1/index";
import {SliderApp1} from "../DataEntry/Slider/SliderApp1/index";
import {SearchBarApp1} from "../DataEntry/SearchBar/SearchBarApp1/index";
import {TextareaItemApp1} from "../DataEntry/TextareaItem/TextareaItemApp1/index";
import {AccordionApp1} from "../DataDisplay/Accordion/AccordionApp1/index";
import {AccordionApp2} from "../DataDisplay/Accordion/AccordionApp2/index";
import {ActivityIndicatorApp1} from "../Feedback/ActivityIndicator/ActivityIndicatorApp1/index";
import {ModelApp1} from "../Feedback/Modal/ModelApp1/index";
import {ModelApp2} from "../Feedback/Modal/ModelApp2/index";
import {ModelApp3} from "../Feedback/Modal/ModelApp3/index";
import {ModelApp4} from "../Feedback/Modal/ModelApp4/index";
import {BadgeApp1} from "../DataDisplay/Badge/BadgeApp1/index";
import {CardApp1} from "../DataDisplay/Card/CardApp1/index";
import {CardApp2} from "../DataDisplay/Card/CardApp2/index";
import {GridApp1} from "../DataDisplay/Grid/GridApp1/index";
import {IconApp1} from "../DataDisplay/Icon/IconApp1/index";
import {IconApp2} from "../DataDisplay/Icon/IconApp2/index";
import {ListApp1} from "../DataDisplay/List/ListApp1/index";
import {ListApp2} from "../DataDisplay/List/ListApp2/index";
import {NoticeBarApp1} from "../DataDisplay/NoticeBar/NoticeBarApp1/index";
import {StepsApp1} from "../DataDisplay/Steps/StepsApp1/index";
import {StepsApp2} from "../DataDisplay/Steps/StepsApp2/index";
import {TagApp1} from "../DataDisplay/Tag/TagApp1/index";
import {ActionSheetApp1} from "../Feedback/ActionSheet/ActionSheetApp1/index";
import {ProgressApp1} from "../Feedback/Progress/ProgressApp1/index";
import {ToastApp1} from "../Feedback/Toast/ToastApp1/index";
import {PullToRefreshApp1} from "../Gesture/PullToRefresh/PullToRefreshApp1/index";
import {PullToRefreshApp2} from "../Gesture/PullToRefresh/PullToRefreshApp2/index";
import {SwipeActionApp1} from "../Gesture/SwipeAction/SwipeActionApp1/index";
import {ListViewApp1} from "../Combination/ListView/ListViewApp1/index";
import {ListViewApp2} from "../Combination/ListView/ListViewApp2/index";
import {ListViewApp3} from "../Combination/ListView/ListViewApp3/index";
import {ListViewApp4} from "../Combination/ListView/ListViewApp4/index";
import {ResultApp1} from "../Combination/Result/ResultApp1/index";
import {LocaleProviderApp1} from "../Other/LocaleProvider/LocaleProviderApp1/index";
import {SwiperApp} from "../AgaApp/Swiper/index"
import CarouselApp1 from "../DataDisplay/Carousel/CarouselApp1/index";
import {CarouselApp2} from "../DataDisplay/Carousel/CarouselApp2/index";
import {CarouselApp3} from "../DataDisplay/Carousel/CarouselApp3/index";
import {CarouselApp4} from "../DataDisplay/Carousel/CarouselApp4/index";
import {CarouselApp5} from "../DataDisplay/Carousel/CarouselApp5/index";
import LoanHome from "../AgaApp/LoanHome/index";

const ListView = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/antdMobileRoster/${p.number}`}>{p.name}</Link>
                    </li>

                ))
            }
        </ul>
    </div>
)

const PlayerAPI = {
    players: [
        {number: 1, name: "FlexLayout", position: "G"},
        {number: 2, name: "WingBlankApp", position: "D"},
        {number: 3, name: "WhiteSpaceApp", position: "D"},
        {number: 4, name: "DrawerApp", position: "M"},
        {number: 5, name: "MenuApp", position: "M"},
        {number: 6, name: "OneLevelMenuApp", position: "F"},
        {number: 7, name: "MultiSelectMenuApp", position: "F"},
        {number: 8, name: "SingleMultiMenuApp", position: "F"},
        {number: 9, name: "NarBarApp", position: "F"},
        {number: 10, name: "PopoverApp", position: "F"},
        {number: 11, name: "SegmentedControlApp", position: "F"},
        {number: 12, name: "TabApp1", position: "F"},
        {number: 13, name: "TabApp2", position: "F"},
        {number: 14, name: "TabApp3", position: "F"},
        {number: 15, name: "TabApp4", position: "F"},
        {number: 16, name: "TabApp5", position: "F"},
        {number: 17, name: "TabApp6", position: "F"},
        {number: 18, name: "TabBarApp1", position: "F"},
        {number: 19, name: "TabBarApp2", position: "F"},
        {number: 20, name: "TabBarApp3", position: "F"},
        {number: 21, name: "ButtonApp1", position: "F"},
        {number: 22, name: "ButtonApp2", position: "F"},
        {number: 23, name: "CheckboxApp", position: "F"},
        {number: 24, name: "CalendarApp", position: "F"},
        {number: 25, name: "DatePickerViewApp", position: "F"},
        {number: 26, name: "DatePickerApp1", position: "F"},
        {number: 27, name: "DatePickerApp2", position: "F"},
        {number: 28, name: "InputItemApp1", position: "F"},
        {number: 29, name: "InputItemApp2", position: "F"},
        {number: 30, name: "InputItemApp3", position: "F"},
        {number: 31, name: "ImagePickerApp1", position: "F"},
        {number: 32, name: "ImagePickerApp2", position: "F"},
        {number: 33, name: "ImagePickerApp3", position: "F"},
        {number: 34, name: "PickerViewApp1", position: "F"},
        {number: 36, name: "RadioApp1", position: "F"},
        {number: 37, name: "RangeApp1", position: "F"},
        {number: 38, name: "SwitchApp1", position: "F"},
        {number: 39, name: "StepperApp1", position: "F"},
        {number: 40, name: "SliderApp1", position: "F"},
        {number: 41, name: "SearchBarApp1", position: "F"},
        {number: 42, name: "TextareaItemApp1", position: "F"},
        {number: 43, name: "AccordionApp1", position: "F"},
        {number: 44, name: "AccordionApp2", position: "F"},
        {number: 45, name: "ActivityIndicatorApp1", position: "F"},
        {number: 46, name: "ModelApp1", position: "F"},
        {number: 47, name: "ModelApp2", position: "F"},
        {number: 48, name: "ModelApp3", position: "F"},
        {number: 49, name: "ModelApp4", position: "F"},
        {number: 50, name: "BadgeApp1", position: "F"},
        {number: 51, name: "CardApp1", position: "F"},
        {number: 52, name: "CardApp2", position: "F"},
        {number: 53, name: "GridApp1", position: "F"},
        {number: 54, name: "IconApp1", position: "F"},
        {number: 55, name: "IconApp2", position: "F"},
        {number: 56, name: "ListApp1", position: "F"},
        {number: 57, name: "ListApp2", position: "F"},
        {number: 58, name: "NoticeBarApp1", position: "F"},
        {number: 59, name: "StepsApp1", position: "F"},
        {number: 60, name: "StepsApp2", position: "F"},
        {number: 61, name: "TagApp1", position: "F"},
        {number: 62, name: "ActionSheetApp1", position: "F"},
        {number: 63, name: "ProgressApp1", position: "F"},
        {number: 64, name: "ToastApp1", position: "F"},
        {number: 65, name: "PullToRefreshApp1", position: "F"},
        {number: 66, name: "PullToRefreshApp2", position: "F"},
        {number: 67, name: "SwipeActionApp1", position: "F"},
        {number: 68, name: "ListViewApp1", position: "F"},
        {number: 69, name: "ListViewApp2", position: "F"},
        {number: 70, name: "ListViewApp3", position: "F"},
        {number: 71, name: "ListViewApp4", position: "F"},
        {number: 72, name: "ResultApp1", position: "F"},
        {number: 73, name: "LocaleProviderApp1", position: "F"},
        {number: 74, name: "CarouselApp1", position: "F"},
        {number: 75, name: "CarouselApp2", position: "F"},
        {number: 76, name: "CarouselApp3", position: "F"},
        {number: 77, name: "CarouselApp4", position: "F"},
        {number: 78, name: "CarouselApp5", position: "F"},
        {number: 100, name: "SwiperApp", position: "F"},
        {number: 101, name: "LoanHome", position: "F"},
    ],
    all: function () {
        return this.players
    },
    get: function (id) {
        const isPlayer = p => p.number === id
        return this.players.find(isPlayer)
    }
}

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }

    if (player.name === "FlexLayout") {
        return <FlexLayout/>
    }
    else if (player.name === "WingBlankApp") {
        return <WingBlankApp/>
    }
    else if (player.name === "WhiteSpaceApp") {
        return <WhiteSpaceApp/>
    }
    else if (player.name === "DrawerApp") {
        return <DrawerApp/>
    }
    else if (player.name === "MenuApp") {
        return <MenuApp/>
    }
    else if (player.name === "OneLevelMenuApp") {
        return <OneLevelMenuApp/>
    }
    else if (player.name === "MultiSelectMenuApp") {
        return <MultiSelectMenuApp/>
    }
    else if (player.name === "SingleMultiMenuApp") {
        return <SingleMultiMenuApp/>
    }
    else if (player.name === "NarBarApp") {
        return <NarBarApp/>
    }
    else if (player.name === "PopoverApp") {
        return <PopoverApp/>
    }
    else if (player.name === "SegmentedControlApp") {
        return <SegmentedControlApp/>
    }
    else if (player.name === "TabApp1") {
        return <TabApp1/>
    }
    else if (player.name === "TabApp2") {
        return <TabApp2/>
    }
    else if (player.name === "TabApp3") {
        return <TabApp3/>
    }
    else if (player.name === "TabApp4") {
        return <TabApp4/>
    }
    else if (player.name === "TabApp5") {
        return <TabApp5/>
    }
    else if (player.name === "TabApp6") {
        return <TabApp6/>
    }
    else if (player.name === "TabBarApp1") {
        return <TabBarApp1/>
    }
    else if (player.name === "TabBarApp2") {
        return <TabBarApp2/>
    }
    else if (player.name === "TabBarApp3") {
        return <TabBarApp3/>
    }
    else if (player.name === "ButtonApp1") {
        return <ButtonApp1/>
    }
    else if (player.name === "ButtonApp2") {
        return <ButtonApp2/>
    }
    else if (player.name === "ButtonApp2") {
        return <CheckboxApp/>
    }
    else if (player.name === "CalendarApp") {
        return <CalendarApp/>
    }
    else if (player.name === "DatePickerViewApp") {
        return <DatePickerViewApp/>
    }
    else if (player.name === "DatePickerApp1") {
        return <DatePickerApp1/>
    }
    else if (player.name === "DatePickerApp2") {
        return <DatePickerApp2/>
    }
    else if (player.name === "InputItemApp1") {
        return <InputItemApp1/>
    }
    else if (player.name === "InputItemApp2") {
        return <InputItemApp2/>
    }
    else if (player.name === "InputItemApp3") {
        return <InputItemApp3/>
    }
    else if (player.name === "ImagePickerApp1") {
        return <ImagePickerApp1/>
    }
    else if (player.name === "ImagePickerApp2") {
        return <ImagePickerApp2/>
    }
    else if (player.name === "ImagePickerApp3") {
        return <ImagePickerApp3/>
    }
    else if (player.name === "PickerViewApp1") {
        return <PickerViewApp1/>
    }
    else if (player.name === "RadioApp1") {
        return <RadioApp1/>
    }
    else if (player.name === "RangeApp1") {
        return <RangeApp1/>
    }
    else if (player.name === "SwitchApp1") {
        return <SwitchApp1/>
    }
    else if (player.name === "StepperApp1") {
        return <StepperApp1/>
    }
    else if (player.name === "SliderApp1") {
        return <SliderApp1/>
    }
    else if (player.name === "SearchBarApp1") {
        return <SearchBarApp1/>
    }
    else if (player.name === "TextareaItemApp1") {
        return <TextareaItemApp1/>
    }
    else if (player.name === "AccordionApp1") {
        return <AccordionApp1/>
    }
    else if (player.name === "AccordionApp2") {
        return <AccordionApp2/>
    }
    else if (player.name === "ActivityIndicatorApp1") {
        return <ActivityIndicatorApp1/>
    }
    else if (player.name === "ModelApp1") {
        return <ModelApp1/>
    }
    else if (player.name === "ModelApp2") {
        return <ModelApp2/>
    }
    else if (player.name === "ModelApp3") {
        return <ModelApp3/>
    }
    else if (player.name === "ModelApp4") {
        return <ModelApp4/>
    }
    else if (player.name === "BadgeApp1") {
        return <BadgeApp1/>
    }
    else if (player.name === "CardApp1") {
        return <CardApp1/>
    }
    else if (player.name === "CardApp2") {
        return <CardApp2/>
    }
    else if (player.name === "GridApp1") {
        return <GridApp1/>
    }
    else if (player.name === "IconApp1") {
        return <IconApp1/>
    }
    else if (player.name === "IconApp2") {
        return <IconApp2/>
    }
    else if (player.name === "ListApp1") {
        return <ListApp1/>
    }
    else if (player.name === "ListApp2") {
        return <ListApp2/>
    }
    else if (player.name === "NoticeBarApp1") {
        return <NoticeBarApp1/>
    }
    else if (player.name === "StepsApp1") {
        return <StepsApp1/>
    }
    else if (player.name === "StepsApp2") {
        return <StepsApp2/>
    }
    else if (player.name === "TagApp1") {
        return <TagApp1/>
    }
    else if (player.name === "ActionSheetApp1") {
        return <ActionSheetApp1/>
    }
    else if (player.name === "ProgressApp1") {
        return <ProgressApp1/>
    }
    else if (player.name === "ToastApp1") {
        return <ToastApp1/>
    }
    else if (player.name === "PullToRefreshApp1") {
        return <PullToRefreshApp1/>
    }
    else if (player.name === "PullToRefreshApp2") {
        return <PullToRefreshApp2/>
    }
    else if (player.name === "SwipeActionApp1") {
        return <SwipeActionApp1/>
    }
    else if (player.name === "ListViewApp1") {
        return <ListViewApp1/>
    }
    else if (player.name === "ListViewApp2") {
        return <ListViewApp2/>
    }
    else if (player.name === "ListViewApp3") {
        return <ListViewApp3/>
    }
    else if (player.name === "ListViewApp4") {
        return <ListViewApp4/>
    }
    else if (player.name === "ResultApp1") {
        return <ResultApp1/>
    }
    else if (player.name === "LocaleProviderApp1") {
        return <LocaleProviderApp1/>
    }
    else if (player.name === "CarouselApp1") {
        return <CarouselApp1/>
    }
    else if (player.name === "CarouselApp2") {
        return <CarouselApp2/>
    }
    else if (player.name === "CarouselApp3") {
        return <CarouselApp3/>
    }
    else if (player.name === "CarouselApp4") {
        return <CarouselApp4/>
    }
    else if (player.name === "CarouselApp5") {
        return <CarouselApp5/>
    }
    else if (player.name === "SwiperApp") {
        return <SwiperApp/>
    }
    else if (player.name === "LoanHome") {
        return <LoanHome/>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/antdMobileRoster'>Back</Link>
        </div>
    )
}

// The antdMobileRoster component matches one of two different routes
// depending on the full pathname
const antdMobileRoster = () => (
    <Switch>
        <Route exact path='/antdMobileRoster' component={ListView}/>
        <Route path='/antdMobileRoster/:number' component={Player}/>
    </Switch>
)

const Main = () => (
    <main>
        <Switch>
            <Route path='/antdMobileRoster' component={antdMobileRoster}/>
        </Switch>
    </main>
)

const
    AgaLink = () => (
    <HashRouter>
        <div>
            <Link to={'/antdMobileRoster'}>Ant Design Mobile</Link>
            <Main/>
        </div>
    </HashRouter>
)

export default AgaLink;