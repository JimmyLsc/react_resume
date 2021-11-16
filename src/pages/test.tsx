import React, {ChangeEvent} from "react"

class Test extends React.Component<any, any> {
    state:{
        text1: string,
        text2: string
    } = {
        text1: "",
        text2: ""
    }
    changeText: (event:ChangeEvent<HTMLInputElement>) => void = event => {
        let target = event.target;
        this.setState({"text1": target.value, "text2": target.value})
        console.log(this.state)
    }
    render: () => React.ReactNode = () => {
        return <form action={""}>
            <input type={"text"} onChange={this.changeText} />
            <input type="text" value={this.state.text2}/>
        </form>
    }
}

export default Test;
