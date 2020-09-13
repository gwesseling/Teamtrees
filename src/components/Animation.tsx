import React, {Children, ReactElement} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

type Props = {
    className?: string;
    animation: string;
    appear?: number;
    enter?: number;
    leave?: number;
    children: (ReactElement | null) | Array<ReactElement | null>;
};

/**
 * Animation component
 */
export default function Animation(props: Props) {
    const {
        className = "",
        animation = "fade",
        appear = 500,
        enter = 500,
        leave = 300,
        children,
    } = props;
    const childs = Children.toArray(children);

    return (
        <TransitionGroup className={className}>
            {childs.map((child, i) => 
                <CSSTransition
                    classNames={animation}
                    timeout={{
                        appear: appear,
                        enter: enter,
                        exit: leave,
                    }}
                    key={i}
                >
                    {child}
                </CSSTransition>
            )}
        </TransitionGroup>
    );
}