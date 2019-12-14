import React, { FunctionComponent, Fragment } from "react";

interface ConditionalComponentProps {
  condition: boolean;
  whenTrue: JSX.Element | JSX.Element[];
  whenFalse?: JSX.Element | JSX.Element[];
}

const ConditionalComponent: FunctionComponent<ConditionalComponentProps> = ({
  condition,
  whenTrue,
  whenFalse = <Fragment />
}) =>
  condition
    ? <Fragment>
        {whenTrue}
      </Fragment>
    : <Fragment>
        {whenFalse}
      </Fragment>;

export default ConditionalComponent;
