import * as React from "react";
export interface SavingsAccountPanelProps {
    selection?: any;
    component?: any;
    onPropChange?: Function;
    onMetaChange?: Function;
    onStyleChange?: Function;
    fonts?: any;
}
export interface SavingsAccountPanelState {
    showPopover?: boolean;
}
export declare class SavingsAccountPanel extends React.Component<SavingsAccountPanelProps, SavingsAccountPanelState> {
    private deviceCompatibiltyPopover;
    constructor(props: any);
    changeComponentName: (name: any) => void;
    getFontOptions(): any;
    changeFont: (font: string) => void;
    handleBalanceChange: (selected: boolean) => void;
    handleSearchChange: (selected: boolean) => void;
    renderPopupContent: () => JSX.Element;
    showPopover(): void;
    getDeviceIcon: (item: any) => any;
    getPlatformIcon: (platfroms: any) => any;
    renderDesignPanel(): JSX.Element;
    render(): JSX.Element;
}
