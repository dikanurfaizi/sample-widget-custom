import * as React from 'react';
export interface LoginSamplePanelProps {
    selection?: any;
    component?: any;
    theme?: any;
    fonts?: any;
    onPropChange?: Function;
    onMetaChange?: Function;
    onStyleChange?: Function;
}
export interface LoginSamplePanelState {
    showPopover?: boolean;
}
export declare class LoginSamplePanel extends React.Component<LoginSamplePanelProps, LoginSamplePanelState> {
    private deviceCompatibiltyPopover;
    constructor(props: any);
    getFontOptions(): any;
    changeFont: (font: string) => void;
    getFontNumber(fontSize?: string): number;
    getFontSize(num: number): number;
    changeFontSize: (fontSize: any) => void;
    getColorOptions(colors: any): any;
    changeColor: (color: any) => void;
    changeTextColor: (color: any) => void;
    changeBorderColor: (color: any) => void;
    getBorderNumber(radiusSize?: string): number;
    changeBorderRadius: (borderRadius: number) => void;
    changeComponentName: (name: any) => void;
    renderPopupContent: () => JSX.Element;
    showPopover(): void;
    getDeviceIcon: (item: any) => any;
    getPlatformIcon: (platfroms: any) => any;
    renderDesignPanel(): JSX.Element;
    render(): JSX.Element;
}
