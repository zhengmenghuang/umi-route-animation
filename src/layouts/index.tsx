import React from 'react';
import withRouter from 'umi/withRouter';
// @ts-ignore
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ANIMATION_MAP: any = {
  PUSH: 'forward',
  POP: 'back'
};

export default withRouter(({location, children, history}: any) => {
  return (
    <TransitionGroup childFactory={(child: React.FunctionComponentElement<{ classNames: any; }>) => React.cloneElement( child, {classNames: ANIMATION_MAP[history.action]})}>
      <CSSTransition key={location.pathname} timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
});
