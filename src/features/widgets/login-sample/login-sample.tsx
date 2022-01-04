import * as React from 'react'

export interface LoginSampleProps {
  className?: string
  componentId?: string
  translate?: Function
}

export interface LoginSampleState { }

export class LoginSample extends React.Component<LoginSampleProps, LoginSampleState> {

  constructor(props) {
    super(props)
  }

  render() {
    let { children, componentId, translate, ...props } = this.props
    return  <div {...props}>LoginSample</div>
  }

}
