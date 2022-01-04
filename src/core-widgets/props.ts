export interface ADKWidgetProps {
  className?: string
  componentId?: string
  dataModels?: any
  translate?: Function
  i18n?: any
}

export interface FrameProps extends ADKWidgetProps {
  backgroundImage?: any
  width?: any,
  widthUnit?: any
}

export interface TextBlockProps extends ADKWidgetProps {
  text?: any
  fontWeight?: number
  fontSize?: number
  lineHeight?: number
  fontSizeUnit?: string
  lineHeightUnit?: string
}

export interface LabelProps extends ADKWidgetProps {
  text?: string
  htmlFor?: string
  languageModels?: any
  fontWeight?: number
  fontSize?: number
  lineHeight?: number
  fontSizeUnit?: string
  lineHeightUnit?: string
}

export interface ADKButtonProps extends ADKWidgetProps {
  value?: string
  type?: any
  icon?: string
  ghost?: boolean
  block?: boolean
  disabled?: boolean
  size?: any
  shape?: any
  onClick?: any
  fontSize?: number
  customColor?: boolean
  fontWeight?: number
  lineHeight?: number
  fontSizeUnit?: string
  lineHeightUnit?: string
  minWidth?: number
  maxWidth?: number
  minWidthUnit?: string
  maxWidthUnit?: string
  paddingTop?: string
  paddingLeft?: string
  paddingBottom?: string
  paddingRight?: string
}

export interface TextInputProps extends ADKWidgetProps {
  value?: string
  type?: string
  maximumLength?: number
  placeholder?: string
  onChange?: Function
  onBlur?: Function
}
export interface ADKInputProps extends ADKWidgetProps {
  textsource?: string
  languagekey?: string
  placeholder?: string
  value?: string
  onChange?: any
  onPressEnter?: any
  onBlur?: any
  size?: any
  visibilityToggle?: boolean
  inputType?: 'Search' | 'TextArea' | 'Password'
  onSearch?: any
  maxLength?: number
  disabled?: boolean
}

export interface ImageProps extends ADKWidgetProps {
  src?: string
  alt?: string
  iconClass?: string
  sourceType?: string
  fontSize?: number
  onClick?: Function
}

export interface ToggleButtonProps extends ADKWidgetProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  label?: string
  onChange?: any
}

export interface SelectOption {
  value: string
  text: string
  image?: string
  customSelection?: any
}

export interface ADKSelectProps extends ADKWidgetProps {
  options?: SelectOption[]
  value?: SelectOption['value']
  defaultValue?: SelectOption['value']
  onChange?: any
  loading?: boolean
  disabled?: boolean
  size?: any
  showSearch?: boolean
  dropdownRender?: any
  tagRender?: any
  bordered?: boolean
  dropdownClassName?: string
  dropdownStyle?: any
  dropdownMenuStyle?: any
  placeholder?: React.ReactNode
  onKeyPress?: Function
  fontWeight?: number
  fontSize?: number
  lineHeight?: number
  fontSizeUnit?: string
  lineHeightUnit?: string
}

export interface AdvancedSelectProps extends ADKWidgetProps {
  options?: any
  value?: SelectOption['value']
  defaultValue?: SelectOption['value']
  onChange?: any
  loading?: boolean
  disabled?: boolean
  size?: any
  optionLabelProp?: string
  showSearch?: boolean
  dropdownRender?: any
  tagRender?: any
  bordered?: boolean
  dropdownClassName?: string
  dropdownStyle?: any
  dropdownMenuStyle?: any
  placeholder?: string
  languagekey?: string,
  textsource?: any
}

export interface RadioOption {
  value: string
  text: string
  textsource?: string
  languagekey?: string
}

export interface ADKRadioProps extends ADKWidgetProps {
  options?: RadioOption[]
  value?: any
  onChange?: any
  disabled?: boolean
  fontWeight?: number
  fontSize?: number
  lineHeight?: number
  fontSizeUnit?: string
  lineHeightUnit?: string
}

export interface ADKDatePickerProps extends ADKWidgetProps {
  placeholder?: string
  size?: any
  onChange?: any
  disabledDate?: (current: any) => boolean
  format?: string
  valueFormat?: string
  valueDate?: string
}

export interface ADKSelectProps extends ADKWidgetProps {
  options?: any
}

export interface TileWithProgressBarProps extends ADKWidgetProps {
  tileData?: any
  showIcon?: boolean
}

export interface ImageTileProps extends ADKWidgetProps {
  logo?: React.FunctionComponent<ImageProps>
  titleLabel?: React.FunctionComponent<LabelProps>
  logoFrame?: React.FunctionComponent<FrameProps>
  onClick?: Function
  imageBackgroundColor?: string
  imageSelectionColor?: string
  imageFocusColor?: string
  imageBorderRadius?: number
  imageBorderColor?: string
  isCircleBackground?: boolean
  circleSize?: number
  shadowVerticalOffset?: number
  shadowBlurRadius?: number
  isSelected?: boolean
}

export interface AccountBalanceProps extends ADKWidgetProps {
  availableBalance?: string
  prefixText?: string
  currency?: string
  wrapperFlex?: boolean
}

export interface CircularProgressBarRcProps extends ADKWidgetProps {
  progress?: number
  color?: string
  showLabel?: boolean
  barSize?: number
}
export interface LineChartRcProps extends ADKWidgetProps {
  //
}

export interface LinearProgressBarRcProps extends ADKWidgetProps {
  progress?: number
  color?: string
}

export interface LifeGoalTileProps extends ADKWidgetProps {
  lifeGoalData?: LifeGoalData
}

export interface LifeGoalData {
  lifeGoal?: string
  price?: string
  balance?: string
  progress?: number
  color?: string
}

export interface LoaderProps extends ADKWidgetProps {
  size?: any
  spinning?: boolean
}

export interface PieChartRcProps extends ADKWidgetProps {
  data?: Array<DataProps>
  color?: Array<string>
  toolTip?: any
  pie?: any
  legend?: any
}

export interface DataProps {
  name?: string
  value?: number
  showLegend?: boolean
}
export interface ExpiryDateInputProps extends ADKWidgetProps {
  size?: any
  placeholder?: string
  format?: string
  onChange?: any
}

export interface PaymentTileProps extends ADKWidgetProps {
  data?: PaymentTileDataProps
}

export interface PaymentTileDataProps {
  image?: string
  billerName?: string,
  date?: string,
  amount?: string
}

export interface PlaceholderProps extends ADKWidgetProps {
  descriptionText?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onClickPrimaryButton?: Function
  onClickSeconadryButton?: Function
}

export interface CollapseProps extends ADKWidgetProps {
  collapseData?: Array<CollapseData>
  onChange?: Function
  showArrow?: boolean
  disabledBorder?: boolean
  activeKey?: any
  defaultActiveKey?: any
}

export interface CollapseData {
  header: string
  content: any
}

export interface FileUploadProps extends ADKWidgetProps {
  onChange?: Function
  shape?: string
}

export interface ADKTableProps extends ADKWidgetProps {
  tableProps?: any
  columns?: any
  data?: any
  expandedRowRender?: any
  expandIcon?: any
  expandIconColumnIndex?: any
  pagination?: Object
  expandRowByClick?: boolean
  expandAllRows?: boolean
}

interface LanguageSwitchOption {
  value: string
  text: string
  image?: string
}

export interface LanguageSwitcherProps extends ADKWidgetProps {
  options?: LanguageSwitchOption[]
}

export const enum DividerDirection {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL'
}
export interface DividerProps extends ADKWidgetProps {
  direction?: DividerDirection
}

export interface VideoPlayerProps extends ADKWidgetProps {
  url?: string
  width?: string
  height?: string
  controls?: boolean
  loop?: boolean
  playing?: boolean
  wrapper?: string
}