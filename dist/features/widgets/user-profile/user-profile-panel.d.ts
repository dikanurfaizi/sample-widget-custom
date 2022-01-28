import * as React from 'react';
export interface UserProfilePanelProps {
    selection?: any;
    component?: any;
    fonts?: any;
    onPropChange?: Function;
    onMetaChange?: Function;
    onStyleChange?: Function;
}
export interface UserProfilePanelState {
    showPopover?: boolean;
}
export declare class UserProfilePanel extends React.Component<UserProfilePanelProps, UserProfilePanelState> {
    private deviceCompatibiltyPopover;
    constructor(props: any);
    changeComponentName: (name: any) => void;
    handleUserNameChange: (selected: boolean) => void;
    handleProfilPhotoChange: (selected: boolean) => void;
    handleProfilNameChange: (selected: boolean) => void;
    handleUserDOBChange: (selected: boolean) => void;
    handlePhoneChange: (selected: boolean) => void;
    handleAddressChange: (selected: boolean) => void;
    handleEmailChange: (selected: boolean) => void;
    handleGenderChange: (selected: boolean) => void;
    getFontOptions(): any;
    changeFont: (font: string) => void;
    renderPopupContent: () => JSX.Element;
    showPopover(): void;
    getDeviceIcon: (item: any) => any;
    getPlatformIcon: (platfroms: any) => any;
    renderDesignPanel(): JSX.Element;
    render(): JSX.Element;
}
