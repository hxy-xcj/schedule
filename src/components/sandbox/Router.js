import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "../../views/sandbox/home/home";

import Regular from "../../views/sandbox/rules-manage/regular";
import Customization from "../../views/sandbox/rules-manage/customization";
import Outlet from "../../views/sandbox/organization-manage/outlet";
import Personnel from "../../views/sandbox/organization-manage/personnel";
import CharacterRight from "../../views/sandbox//organization-manage/character-right";
import Auditlist from "../../views/sandbox/organization-manage/auditlist";

import VolumnPredict from "../../views/sandbox/prediction-manage/volumn-predict";
import SchedulePredict from "../../views/sandbox/prediction-manage/schedule-predict";
import ScheduleOutlet from "../../views/sandbox/center/schedule-outlet";
import ScheduleMine from "../../views/sandbox/center/schedule-mine";
import PreInfo from "../../views/sandbox/center/per-info";
import OrgInfo from "../../views/sandbox/center/org-info";

export default function Router() {
  return (
    <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/rules-manage/regular"  component={Regular} exact/>
      <Route path="/rules-manage/customization"  component={Customization} exact/>
      <Route path="/organization-manage/outlet"  component={Outlet} exact/>
      <Route path="/organization-manage/personnel"  component={Personnel} exact/>
      <Route path="/organization-manage/character-right"  component={CharacterRight} exact/>
      <Route path="/organization-manage/auditlist"  component={Auditlist} exact/>

      <Route path="/prediction-manage/volumn-predict"  component={VolumnPredict} exact/>
      <Route path="/prediction-manage/schedule-predict"  component={SchedulePredict} exact/>
      <Route path="/center/schedule-outlet"  component={ScheduleOutlet} exact/>
      <Route path="/center/schedule-mine"  component={ScheduleMine} exact/>
      <Route path="/center/per-info"  component={PreInfo} exact/>
      <Route path="/center/org-info"  component={OrgInfo} exact/>
      <Redirect from="/" to="home" exact/>
    </Switch>
    )
}


