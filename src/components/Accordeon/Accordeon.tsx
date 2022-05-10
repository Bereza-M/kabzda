import React from "react";

type AccordeonPropsType = {
    titleValue: string
    collapsed: boolean
}

export function Accordeon(props: AccordeonPropsType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordeonTitle title={props.titleValue}/>
            </div>
        )
    }
    else {
        return (
            <div>
                <AccordeonTitle title={props.titleValue}/>
                <AccordeonBody/>
            </div>
        )
    }
}

type AccordeonTitlePropsType = {
    title: string
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccordeonBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}