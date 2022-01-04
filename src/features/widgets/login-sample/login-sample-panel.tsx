import * as React from 'react'
import { Panel } from 'designer-widgets'
import { PanelContent } from 'designer-widgets'
import { PanelControl, PopoverWidget } from 'designer-widgets'
import { TextInput } from 'designer-widgets'

import { ColorSelect } from 'designer-widgets'
import { DropDown } from 'designer-widgets'
import { Slider } from 'designer-widgets'
export interface LoginSamplePanelProps {
  selection?: any
  component?: any

  theme?: any
  fonts?: any
  onPropChange?: Function
  onMetaChange?: Function
  onStyleChange?: Function
}

export interface LoginSamplePanelState { 
  showPopover?: boolean
}

export class LoginSamplePanel extends React.Component<LoginSamplePanelProps, LoginSamplePanelState> {
  private deviceCompatibiltyPopover
  constructor(props) {
    super(props)
  }

  getFontOptions() {
    let options: any = [{ value: '', text: 'None', image: '' }], fonts = this.props.fonts || []
    fonts.map(item => {
      options.push({
        value: item.class,
        text: item.name,
        image: ''
      })
    })
    return options
  }

  changeFont = (font: string) => {
    let { path, id } = this.props.selection[0]
    this.props.onStyleChange(`${path}/${id}`, { font })
  }

  getFontNumber(fontSize: string = ''): number {
    switch (fontSize.replace('f', '')) {
      case '-6': return 9
      case '-5': return 8
      case '7': return 1
      case '6': return 2
      case '5': return 3
      case '4': return 4
      case '3': return 5
      case '2': return 6
      case '1': return 7
      default: return 3
    }
  }

  getFontSize(num: number): number {
    switch (num) {
      case 9: return -6
      case 8: return -5
      case 7: return 1
      case 6: return 2
      case 5: return 3
      case 4: return 4
      case 3: return 5
      case 2: return 6
      case 1: return 7
      default: return 5
    }
  }

  changeFontSize = (fontSize) => {
    let { path, id } = this.props.selection[0]
    this.props.onStyleChange(`${path}/${id}`, { fontSize: 'f' + this.getFontSize(fontSize) })
  }

  getColorOptions(colors) {
    let options: any
    if (colors && colors.length) {
      options = [{ value: '', text: 'None', image: '' }]
      colors.map(item => {
        options.push({
          value: item.id,
          text: item.name,
          image: `br-100 shadow-1 ${item.name}`
        })
      })
    }
    return options
  }

  changeColor = (color) => {
    let { path, id } = this.props.selection[0]
    this.props.onStyleChange(`${path}/${id}`, { backgroundColor: `${color}-bg` })
  }

  changeTextColor = (color) => {
    let { path, id } = this.props.selection[0]
    this.props.onStyleChange(`${path}/${id}`, { color: `${color}-text` })
  }

  changeBorderColor = (color) => {
    let { path, id } = this.props.selection[0]
    let style: any = {
      borderColor: color ? `${color}-b` : '',
      border: color ? `ba` : '',
      borderWidth: color ? `` : 'bw0'
    }
    this.props.onStyleChange(`${path}/${id}`, style)
  }

  getBorderNumber(radiusSize: string = ''): number {
    switch (radiusSize.replace('br', '')) {
      case '4': return 4
      case '3': return 3
      case '2': return 2
      case '1': return 1
      case '0': return 0
      default: return 0
    }
  }

  changeBorderRadius = (borderRadius: number) => {
    let { path, id } = this.props.selection[0]
    this.props.onStyleChange(`${path}/${id}`, { borderRadius: 'br' + borderRadius })
  }

  changeComponentName = (name) => {
    let { path, id } = this.props.selection[0]
    this.props.onMetaChange(`${path}/${id}`, { name })
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

        <PanelControl title="Background Color">
          <ColorSelect
            colors={this.props.theme ? this.getColorOptions(this.props.theme.colors) : undefined}
            selectedThemeId={this.props.theme ? this.props.theme.id : ''}
            value={(this.props.component.style.backgroundColor || '').replace('-bg', '')}
            onChange={this.changeColor} />
        </PanelControl>

        <PanelControl title="Text Color">
          <ColorSelect
            colors={this.props.theme ? this.getColorOptions(this.props.theme.colors) : undefined}
            selectedThemeId={this.props.theme ? this.props.theme.id : ''}
            value={(this.props.component.style.color || '').replace('-text', '')}
            onChange={this.changeTextColor} />
        </PanelControl>

        <PanelControl title="Font">
          <DropDown value={this.props.component.style.font || ''}
            options={this.getFontOptions()} onChange={this.changeFont} />
        </PanelControl>

        <PanelControl title="Font Size">
          <div className="ph2">
            <Slider min={1} max={9} value={this.getFontNumber(this.props.component.style.fontSize)} stepSize={1}
              labelStepSize={10} onChange={this.changeFontSize} />
          </div>
        </PanelControl>

        <PanelControl title="Border Color">
          <ColorSelect
            colors={this.props.theme ? this.getColorOptions(this.props.theme.colors) : undefined}
            selectedThemeId={this.props.theme ? this.props.theme.id : ''}
            value={(this.props.component.style.borderColor || '').replace('-b', '')}
            onChange={this.changeBorderColor} />
        </PanelControl>
        <PanelControl title="Border Radius">
          <Slider min={0} max={4} value={this.getBorderNumber(this.props.component.style.borderRadius)} stepSize={1}
            labelStepSize={4} onChange={this.changeBorderRadius} />
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
