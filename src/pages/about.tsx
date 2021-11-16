import React, {FC} from "react";

const content: Array<string> = ['123', '345', '456']

const About: FC = () => (
    <div>
        <ul>
            {content.map((item) => <li>{item}</li>)}
        </ul>
    </div>
)

export default About
