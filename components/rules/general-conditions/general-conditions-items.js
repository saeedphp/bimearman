import {Fragment, useState} from "react";
import Accordion from "../../ui/accordion";

const GeneralConditionsItems = (props) => {

    const {id, question, answer} = props;

    return (
        <Fragment>

            <Accordion
                key={id}
                question={question}
                answer={answer}
            />

        </Fragment>
    );
};

export default GeneralConditionsItems;