import React from 'react'
import {Button} from 'antd-mobile'
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import FlexLayout from "../FlexLayout/index";
import WingBlankApp from "../WingBlankApp/index";
import WhiteSpaceApp from "../WhiteSpaceApp/index";
import DrawerApp from "../DrawerApp/index";
import MenuApp from "../MenuApp/index";
import OneLevelMenuApp from "../OneLevelMenuApp/index";
import MultiSelectMenuApp from "../MultiSelectMenuApp/index";
import SingleMultiMenuApp from "../SingleMultiMenuApp/index";
import NarBarApp from "../NavBarApp/index";
import PopoverApp from "../PopoverApp/index";
import SegmentedControlApp from "../SegmentedControlApp/index";
import TabApp1 from "../TabApp1/index";
import TabApp2 from "../TabApp2/index";


const ListView = () => (
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <Button key={p.number} type="primary">
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
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
    else if (player.name === "WingBlankApp"){
        return <WingBlankApp/>
    }
    else if (player.name === "WhiteSpaceApp"){
        return <WhiteSpaceApp/>
    }
    else if (player.name === "DrawerApp"){
        return <DrawerApp/>
    }
    else if (player.name == "MenuApp") {
        return <MenuApp/>
    }
    else if (player.name == "OneLevelMenuApp") {
        return <OneLevelMenuApp/>
    }
    else if (player.name == "MultiSelectMenuApp") {
        return <MultiSelectMenuApp/>
    }
    else if (player.name == "SingleMultiMenuApp") {
        return <SingleMultiMenuApp/>
    }
    else if (player.name == "NarBarApp") {
        return <NarBarApp/>
    }
    else if (player.name == "PopoverApp") {
        return <PopoverApp/>
    }
    else if (player.name == "SegmentedControlApp") {
        return <SegmentedControlApp/>
    }
    else if (player.name == "TabApp1") {
        return <TabApp1/>
    }
    else if (player.name == "TabApp2") {
        return <TabApp2/>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>
    )
}

// The Roster component matches one of two different routes
// depending on the full pathname
const Roster = () => (
    <Switch>
        <Route exact path='/roster' component={ListView}/>
        <Route path='/roster/:number' component={Player}/>
    </Switch>
)

const Main = () => (
    <main>
        <Switch>
            <Route path='/roster' component={Roster}/>
        </Switch>
    </main>
)

const AgaLink = () => (
    <HashRouter>
        <div>
            <Link to={'/roster'}>Link</Link>
            <Main/>
        </div>
    </HashRouter>
)

export default AgaLink;