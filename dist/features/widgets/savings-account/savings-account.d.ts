import * as React from 'react';
import { ADKInputProps, ADKButtonProps, LabelProps, ImageProps, ADKTableProps } from 'core-widget-props';
export interface SavingsAccountProps {
    className?: string;
    componentId?: string;
    translate?: Function;
    font?: any;
    addDepositButton?: React.FunctionComponent<ADKButtonProps>;
    titleLabel?: React.FunctionComponent<LabelProps>;
    searchInput?: React.FunctionComponent<ADKInputProps>;
    accountBalance?: React.FunctionComponent<LabelProps>;
    totalAccountBalance?: React.FunctionComponent<LabelProps>;
    indexImageInput?: React.FunctionComponent<ImageProps>;
    nameLabel?: React.FunctionComponent<LabelProps>;
    productNameLabel?: React.FunctionComponent<LabelProps>;
    productName?: React.FunctionComponent<LabelProps>;
    accountNumberLabel?: React.FunctionComponent<LabelProps>;
    balanceLabel?: React.FunctionComponent<LabelProps>;
    transactionHistoryButton?: React.FunctionComponent<ADKButtonProps>;
    CIFNumberLabel?: React.FunctionComponent<LabelProps>;
    currentBalanceLabel?: React.FunctionComponent<LabelProps>;
    currentBalance?: React.FunctionComponent<LabelProps>;
    unclearedBalanceLabel?: React.FunctionComponent<LabelProps>;
    unclearedBalance?: React.FunctionComponent<LabelProps>;
    savingsAccountTable?: React.FunctionComponent<ADKTableProps>;
    accountNumber?: React.FunctionComponent<LabelProps>;
    interestLabel?: React.FunctionComponent<LabelProps>;
    savingsAccountListDetails?: any;
    fetchSavingsAccountListDetailsAction?: Function;
    savingsAccountListDetailsStatus?: any;
    isBalanceConfig?: Boolean;
    isSearchConfig?: Boolean;
}
export interface SavingsAccountState {
    searchValue?: string;
    savingsAccountsData?: any;
    totalBalanceAmount?: string;
}
export declare class SavingsAccount extends React.Component<SavingsAccountProps, SavingsAccountState> {
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    handleLoading(): void;
    getCurrentColumns: () => ({
        title: JSX.Element;
        dataIndex: string;
        key: string;
        className: string;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        className: string;
    })[];
    renderSavingsAccountListDetailsItem(): any[];
    getAccountAlias: (item: any) => JSX.Element;
    renderSavingAccountListDetail(record: any): JSX.Element;
    renderData(): JSX.Element;
    renderSavingsData(): JSX.Element;
    render(): JSX.Element;
}
