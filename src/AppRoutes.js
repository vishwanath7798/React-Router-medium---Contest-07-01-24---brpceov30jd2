import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BackgroundColorChanger } from './BackgroundColorChanger';
import { Calculator } from './Calculator';
import { Index } from './Index';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/bgcolor/:colorname" component={BackgroundColorChanger} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/" exact component={Index} />
    </Switch>
  );
};
