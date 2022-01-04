import * as React from 'react'
import { Panel } from 'designer-widgets'
import { PanelContent } from 'designer-widgets'
import { PanelControl, PopoverWidget } from 'designer-widgets'
import { TextInput, DropDown, ToggleButton } from 'designer-widgets'

export interface SavingsAccountPanelProps {
  selection?: any
  component?: any

  onPropChange?: Function
  onMetaChange?: Function
  onStyleChange?: Function

  fonts?: any
}

export interface SavingsAccountPanelState { 
  showPopover?: boolean
}

export class SavingsAccountPanel extends React.Component<SavingsAccountPanelProps, SavingsAccountPanelState> {
  private deviceCompatibiltyPopover
  constructor(props) {
    super(props)
  }

  changeComponentName = (name) => {
    let { path, id } = this.props.selection[0]
    this.props.onMetaChange(`${path}/${id}`, { name })
  }

  getFontOptions(){
    let options: any = [{value: '', text: 'None', image: ''}],
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

  handleBalanceChange = (selected: boolean) => {
    let {path, id} = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, {isBalanceConfig: selected})
  }

  handleSearchChange = (selected: boolean) => {
    let {path, id} = this.props.selection[0]
    this.props.onPropChange(`${path}/${id}`, {isSearchConfig: selected})
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

        <PanelControl title="Bussiness Configurations">
          <ToggleButton onChange={this.handleBalanceChange} text="Balance"></ToggleButton>
            selected={this.props.component.props.isBalanceConfig}
        </PanelControl>

        <PanelControl title="UI Configurations">
          <ToggleButton onChange={this.handleSearchChange} text="Search"></ToggleButton>
            selected={this.props.component.props.isSearchConfig}
        </PanelControl>

        <PanelControl title="Font">
          <DropDown value={this.props.component.style.font || ''} 
            options={this.getFontOptions()} onChange={this.changeFont}></DropDown>
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
