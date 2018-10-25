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


const ListView = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <Button key={p.number} type="primary" href={'#/antdMobileRoster/${p.number}'}>
                        {/*<Link to={`/antdMobileRoster/${p.number}`}>{p.name}</Link>*/}
                        {p.name}
                    </Button>
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

const AgaLink = () => (
    <HashRouter>
        <div>
            <Link to={'/antdMobileRoster'}>Ant Design Mobile</Link>
            <Main/>
        </div>
    </HashRouter>
)

export default AgaLink;