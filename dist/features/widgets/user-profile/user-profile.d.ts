import * as React from 'react';
import { LabelProps, ImageProps } from 'core-widget-props';
import { sampleUserDetailsAction } from '../../action';
export interface UserProfileProps {
    className?: string;
    componentId?: string;
    translate?: Function;
    userDetails?: any;
    userName?: React.FunctionComponent<LabelProps>;
    nameValue?: React.FunctionComponent<LabelProps>;
    imageInput?: React.FunctionComponent<ImageProps>;
    name?: React.FunctionComponent<LabelProps>;
    dob?: React.FunctionComponent<LabelProps>;
    dobValue?: React.FunctionComponent<LabelProps>;
    phone?: React.FunctionComponent<LabelProps>;
    phoneValue?: React.FunctionComponent<LabelProps>;
    address?: React.FunctionComponent<LabelProps>;
    address2?: React.FunctionComponent<LabelProps>;
    addressLine1?: React.FunctionComponent<LabelProps>;
    postalCode?: React.FunctionComponent<LabelProps>;
    email?: React.FunctionComponent<LabelProps>;
    emailValue?: React.FunctionComponent<LabelProps>;
    gender?: React.FunctionComponent<LabelProps>;
    genderValue?: React.FunctionComponent<LabelProps>;
    sampleUserDetailsAction?: typeof sampleUserDetailsAction;
    onProfileImageClick?: Function;
    isNameConfig?: boolean;
    isProfilPhoto?: boolean;
    isProfilName?: boolean;
    isDobConfig?: boolean;
    isPhoneNoConfig?: boolean;
    isAddressConfig?: boolean;
    isEmailConfig?: boolean;
    isGenderConfig?: boolean;
}
export interface UserProfileState {
}
export declare class UserProfile extends React.Component<UserProfileProps, UserProfileState> {
    constructor(props: any);
    handleProfileImageChange: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
