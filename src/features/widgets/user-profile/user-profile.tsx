import * as React from 'react'
import { LabelProps, ImageProps } from 'core-widget-props'
import { sampleUserDetailsAction } from '../../action'

export interface UserProfileProps {
  className?: string
  componentId?: string
  translate?: Function
  userDetails?: any

  userName?: React.FunctionComponent<LabelProps>
  nameValue?: React.FunctionComponent<LabelProps>

  imageInput?: React.FunctionComponent<ImageProps>
  name?: React.FunctionComponent<LabelProps>

  dob?: React.FunctionComponent<LabelProps>
  dobValue?: React.FunctionComponent<LabelProps>

  phone?: React.FunctionComponent<LabelProps>
  phoneValue?: React.FunctionComponent<LabelProps>

  address?: React.FunctionComponent<LabelProps>
  address2?: React.FunctionComponent<LabelProps>
  addressLine1?: React.FunctionComponent<LabelProps>
  postalCode?: React.FunctionComponent<LabelProps>

  email?: React.FunctionComponent<LabelProps>
  emailValue?: React.FunctionComponent<LabelProps>

  gender?: React.FunctionComponent<LabelProps>
  genderValue?: React.FunctionComponent<LabelProps>

  sampleUserDetailsAction?: typeof sampleUserDetailsAction

  onProfileImageClick?: Function

  isNameConfig?: boolean
  isProfilPhoto?: boolean
  isProfilName?: boolean
  isDobConfig?: boolean
  isPhoneNoConfig?: boolean
  isAddressConfig?: boolean
  isEmailConfig?: boolean
  isGenderConfig?: boolean
}

export interface UserProfileState { }

export class UserProfile extends React.Component<UserProfileProps, UserProfileState> {

  constructor(props) {
    super(props)
  }

  handleProfileImageChange = () => {
    this.props.onProfileImageClick && this.props.onProfileImageClick()
  }

  componentDidMount(){
    console.log("Component Did Mount is Appear")
    this.props.sampleUserDetailsAction?.()
  }

  render() {
    console.log("The Render", this.props.userDetails)
    let { className, userDetails } = this.props

    const fullName = userDetails?.fullName
    const birthDate = userDetails?.birthDate?.day
    const contactNumber = userDetails?.contactNumbers?.mobile
    const addressLine1 = userDetails?.postalContact?.business?.line1
    const postalCode = userDetails?.postalContact?.business?.postalCode
    const email = userDetails?.email?.person
    const gender = userDetails?.gender

    return  <div className={`${className} ph3`}>
      <div className="flex flex-row w-100">
       {this.props.isProfilPhoto && <this.props.imageInput onClick={this.handleProfileImageChange} />}
       {this.props.isProfilName && <this.props.name text={fullName ? fullName : 'Not Available'} />}
      </div>
      <div className="flex flex-column w-100">
      {this.props.isNameConfig && <div className="flex flex-row">
          <this.props.userName />
          <this.props.nameValue text={fullName ? fullName : 'Not Available'}/>
        </div>}
      </div>
      <div className="flex flex-column w-100">
      {this.props.isDobConfig && <div className="flex flex-row">
          <this.props.dob />
          <this.props.dobValue text={birthDate ? birthDate : 'Not Available'}/>
        </div>}
      </div>
      <div className="flex flex-column w-100">
      {this.props.isPhoneNoConfig && <div className="flex flex-row">
          <this.props.phone />
          <this.props.phoneValue text={contactNumber ? contactNumber : 'Not Available'}/>
        </div>}
      </div>
      {this.props.isAddressConfig && <div className="flex flex-column w-100">
       <div className="flex flex-row">
          <this.props.address />
          <this.props.addressLine1 text={addressLine1 ? addressLine1 : 'Not Available'}/>
        </div>
        <div className='flex flex-row'>
          <this.props.address2 />
          <this.props.postalCode text={postalCode ? postalCode : 'Not Available'}/>
        </div>
      </div>}
      <div className="flex flex-column w-100">
      {this.props.isEmailConfig && <div className="flex flex-row">
          <this.props.email />
          <this.props.emailValue text={email ? email : 'Not Available'}/>
        </div>}
      </div>
      <div className="flex flex-column w-100">
      {this.props.isGenderConfig &&<div className="flex flex-row">
          <this.props.gender />
          <this.props.genderValue text={gender ? gender : 'Not Available'}/>
        </div>}
      </div>
    </div>
  }

}
