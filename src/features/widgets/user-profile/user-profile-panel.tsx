import * as React from 'react'
import { Panel } from 'designer-widgets'
import { PanelContent } from 'designer-widgets'
import { PanelControl, PopoverWidget } from 'designer-widgets'
import { TextInput,  ToggleButton, DropDown } from 'designer-widgets'

export interface UserProfilePanelProps {
  selection?: any
  component?: any
  fonts?:any
  onPropChange?: Function
  onMetaChange?: Function
  onStyleChange?: Function
}

export interface UserProfilePanelState { 
  showPopover?: boolean
}

export class UserProfilePanel extends React.Component<UserProfilePanelProps, UserProfilePanelState> {
  private deviceCompatibiltyPopover
  constructor(props) {
    super(props)
  }

  changeComponentName = (name) => {
    let { path, id } = this.props.selection[0]
    this.props.onMetaChange(`${path}/${id}`, { name })
  }

  handleUserNameChange = ( selected: boolean) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isNameConfig: selected })
  }

  handleProfilPhotoChange = ( selected: boolean ) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isProfilPhoto: selected })
  }

  handleProfilNameChange = ( selected: boolean ) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isProfilName: selected })
  }

  handleUserDOBChange = ( selected: boolean) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isDobConfig: selected })
  }

  handlePhoneChange = ( selected: boolean) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isPhoneNoConfig: selected })
  }

  handleAddressChange = ( selected: boolean) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isAddressConfig: selected })
  }

  handleEmailChange = ( selected: boolean) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isEmailConfig: selected })
  }

  handleGenderChange = ( selected: boolean) => {
    let { path, id } = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, { isGenderConfig: selected })
  }

  getFontOptions() {
    let options: any = [{ value: '', text: 'None', image: '' }],
      fonts = this.props.fonts || []
    fonts.map(item => {
      options.push({
        value: item.class,
        text: item.name,
        image: ''
      })
    })
    return options
  }

  changeFont = ( font: string ) => {
    let { path, id } = this.props.selection[0]
    this.props.onStyleChange(`${path}/${id}`, { font })
  }

  renderPopupContent = () => {
    let platforms
    let items = this.props.component?.supportedDevices?.filter(el => el?.supportedPlatforms?.length > 0)
    platforms = items?.map((item, index) => {
      return (
        <div className={index !== (items.length - 1) ?
          "flex pt2 bo0 b--solid bob1 primary-s3-bb " : "flex pt2"}>
          <div className="flex flex-row pb2">
            <i className={this.getDeviceIcon(item)}></i>
            {item.deviceType === "Desktop" ?
              <div className="f7 pt2">{item.deviceType}</div>
              : <div className="f7 pt2 pr1 ">{item.deviceType}</div>
            }
            <span className="pl3 pt2">:</span>
          </div>
          {item.supportedPlatforms?.map((platform) => {
            return (
              <div className="flex flex-row pl2 pb2">
                <i className={this.getPlatformIcon(platform)}></i>
                <div className="f7 pt2 pr2">{platform}</div>
              </div>
            )
          })}
        </div>)
    })
    return (
      <div className="nb3">
        <div className="f7 pt2 pb2">This widget is compatible with:</div>
        {platforms}
      </div>
    )
  }


  showPopover() {
    this.deviceCompatibiltyPopover.showPopover()
  }
  
    getDeviceIcon = (item) => {
      let icon
      switch (item?.deviceType) {
        case 'Mobile':
          icon = 'ion-ios-phone-portrait f4 pt2 ph3 flex items-start'
          break
        case 'Tablet':
          icon = 'ion-ios-tablet-portrait f4 pt2 ph3 flex items-start'
          break
        default:
          icon = 'ion-ios-laptop f3 ph2'
      }
      return icon
    }
  
    getPlatformIcon = (platfroms) => {
      let icon
      switch (platfroms) {
        case 'Android':
          icon = 'ion-logo-android f4 pr2 pl3'
          break
        case 'iOS':
          icon = 'ion-logo-apple f4 pr2 pl3'
          break
        default:
          icon = 'pl3'
      }
      return icon
    }
  renderDesignPanel() {
    return (
      <PanelContent>
        <PanelControl>
          <TextInput label="Name" value={this.props.component.name} onBlur={this.changeComponentName} />
        </PanelControl>
        <div className="flex flex-row">
          <div className="flex-row w-70">
              <PanelControl title="Device Compatibility" >
              </PanelControl>
          </div> 
          <PopoverWidget className=""
          titleIcon="ion-md-information-circle"
          isConfirmable={false}
          messageTitle="Device Compatibility"
          ref={(el) => this.deviceCompatibiltyPopover = el}
          position="right"
          message={this.renderPopupContent()}>              
          <div className="flex flex-row w-30 mr2">
            <div className="">
              <div className="flex flex-row pt3 pl4">
                <span className="bp3-icon-info-sign flex mr1 pointer accent-text">
                  <div className="pl2" onClick={() => this.showPopover()}>
                    Info
                  </div>
                </span>
              </div>
            </div>
          </div>
          </PopoverWidget>
        </div>

        <PanelControl title="component" >
          <TextInput label="Id #" value={this.props.component.id} disabled />
          <TextInput label="Name" value={this.props.component.name} onBlur={this.changeComponentName} />
        </PanelControl>
        <PanelControl title="Bussiness Configurations">
          <ToggleButton onChange={this.handleUserNameChange} text="Name"
          selected={this.props.component.props.isNameConfig}/>
          <ToggleButton onChange={this.handleUserDOBChange} text="DOB"
          selected={this.props.component.props.isDobConfig}/>
          <ToggleButton onChange={this.handlePhoneChange} text="Phone"
          selected={this.props.component.props.isPhoneNoConfig}/>
          <ToggleButton onChange={this.handleAddressChange} text="Address1"
          selected={this.props.component.props.isAddressConfig}/>
          <ToggleButton onChange={this.handleEmailChange} text="Email Address"
          selected={this.props.component.props.isEmailConfig}/>
          <ToggleButton onChange={this.handleGenderChange} text="Gender"
          selected={this.props.component.props.isGenderConfig}/>
        </PanelControl>

        <PanelControl title="UI Configurations">
          <ToggleButton onChange={this.handleProfilPhotoChange} text="Profil Photo"
          selected={this.props.component.props.isProfilPhoto}/>
          <ToggleButton onChange={this.handleProfilNameChange} text="Profil Name"
          selected={this.props.component.props.isProfilName}/>
        </PanelControl>

        <PanelControl title="Font">
          <DropDown value={this.props.component.style.font || ''}
            options={this.getFontOptions()} onChange={this.changeFont}/>
        </PanelControl>

      </PanelContent >
    )
  }

  render() {
    return (
      <Panel>
        {this.renderDesignPanel()}
      </Panel >
    )
  }

}
