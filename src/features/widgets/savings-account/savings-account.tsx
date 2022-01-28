import * as React from 'react'
import {
  ADKInputProps,
  ADKButtonProps,
  LabelProps, 
  ImageProps, 
  ADKTableProps  
} from 'core-widget-props'
import {
  ApiRequestStatus
} from '../../type'

export interface SavingsAccountProps {
  className?: string
  componentId?: string
  translate?: Function
  font?: any

  addDepositButton?: React.FunctionComponent<ADKButtonProps>
  titleLabel?: React.FunctionComponent<LabelProps>
  searchInput?: React.FunctionComponent<ADKInputProps>
  accountBalance?: React.FunctionComponent<LabelProps>
  totalAccountBalance?: React.FunctionComponent<LabelProps>
  indexImageInput?: React.FunctionComponent<ImageProps>
  nameLabel?: React.FunctionComponent<LabelProps>
  accountTypeLabel?: React.FunctionComponent<LabelProps>
  accountType?: React.FunctionComponent<LabelProps>
  accountNumberLabel?: React.FunctionComponent<LabelProps>
  balanceLabel?: React.FunctionComponent<LabelProps>
  transactionHistoryButton?: React.FunctionComponent<ADKButtonProps>

  CIFNumberLabel?: React.FunctionComponent<LabelProps>
  currentBalanceLabel?: React.FunctionComponent<LabelProps>
  currentBalance?: React.FunctionComponent<LabelProps>
  unclearedBalanceLabel?: React.FunctionComponent<LabelProps>
  unclearedBalance?: React.FunctionComponent<LabelProps>
  savingsAccountTable?: React.FunctionComponent<ADKTableProps>
  accountNumber?: React.FunctionComponent<LabelProps>
  interestLabel?: React.FunctionComponent<LabelProps>

  savingsAccountListDetails?: any
  fetchSavingsAccountListDetailsAction?: Function
  savingsAccountListDetailsStatus?: any

  isBalanceConfig?: Boolean
  isSearchConfig?: Boolean
}

export interface SavingsAccountState { 
  searchValue?: string
  savingsAccountsData?: any
  totalBalanceAmount?: string
 }

export class SavingsAccount extends React.Component<SavingsAccountProps, SavingsAccountState> {

  constructor(props) {
    super(props)
    this.state = {
      searchValue:''
    }
  }

  componentDidMount() {
    console.log("This compenentDidMount")
    this.props.fetchSavingsAccountListDetailsAction?.('savings')
    this.setState({
      savingsAccountsData: this.props && this.props?.savingsAccountListDetails
    })
  }

  componentDidUpdate(prevProps){
    if(
      prevProps.savingsAccountListDetailsStatus !==
      this.props.savingsAccountListDetailsStatus
    ){
      this.handleLoading()
    }
  }

handleLoading() {
  switch (this.props.savingsAccountListDetailsStatus){
    case ApiRequestStatus.SUCCESS:
      return this.setState({
        savingsAccountsData: this.props.savingsAccountListDetails,
      })
    default:
      return
  }
}

getCurrentColumns = () => {
  let currentColumns = [
    {
      title: <this.props.nameLabel />,
      dataIndex: 'nameLabel',
      key: 'nameLabel',
      className: 'pa0'
    },
    {
      title: <this.props.accountNumberLabel />,
      dataIndex: 'accountNumberLabel',
      key: 'accountNumberLabel',
      className: 'pa0'
    },
    {
      title: <this.props.balanceLabel />,
      dataIndex: 'balanceLabel',
      key: 'balanceLabel',
      className: 'pa0'
    },
    {
      title: '',
      dataIndex: 'transactionHistoryBtn',
      key: 'transactionHistoryBtn',
      className: 'pa0'
    },
    {
      title: '',
      dataIndex: 'expandIcon',
      key: 'expandIcon',
      className: 'pa0'
    }
  ]
  let filterColumns = []
  if (!this.props.isBalanceConfig){
    filterColumns.push('balanceLabel')

    if(filterColumns.length > 0) {
      currentColumns = currentColumns.filter(
        (item) => !filterColumns.includes(item.key)
      )
    }
  }
  return currentColumns
}

renderSavingsAccountListDetailsItem() {
  let datas = []
  this.state.savingsAccountsData?.map((item, index) => {

    const accountNumber = item?.accountNumber?.isHashed? 
    item?.accountNumber?.maskedNumber: 
    item?.accountNumber?.accountNumber

    let dataObj = {
      key: index,
      nameLabel: this.getAccountAlias(item),
      accountNumberLabel: accountNumber? 
      <this.props.accountNumber className="black-text fw-5" text={accountNumber} />: '',
      balanceLabel: item.availableBalance?
      <this.props.accountBalance className="f6 fw5 black-text"
      text={item?.availableBalance ? item?.availableBalance : '0'}
      /> : '',
      transactionHistoryBtn: <this.props.transactionHistoryButton />,
      details: {
        CIFNumber: item.CIFNumber,
        currentBalance: item.currentBalance,
        unclearedBalance: item.unclearedBalance,
        interest: item.interest
      }
    } 
    datas.push(dataObj)
  })
  return datas
}

getAccountAlias = (item) => {
  const {alias} = item || {}

  return (
    <div className="flex-100 pv2 flex items-center">
      <this.props.indexImageInput />
      {alias ? (
        <div className={`flex flex-row pl2`}>
          <div className="flex items-center justify-center fw4"> {alias}</div>
        </div> 
      ) : (
        <div className={`flex flex-columns pl2 fw6 accent-text f6 pointer`}>
          Create a Name
        </div>
      )}
    </div>
  )
}

renderSavingAccountListDetail (record) {
  return (
    <div className="w-100 h-auto flex flex-row flex-wrap accent-s18-bg pv1">
      
      <div className="flex flex-column ph3 w-third">
        <div className="flex w-100 pt2 pb3">
          <div className="flex w-50">{<this.props.CIFNumberLabel />}</div>
          <div className="flex w-50">
            <div className="pl3 f6 fw4 black-text">
              {record?.details?.CIFNumber
                ? record.details?.CIFNumber
                : 'NA'}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-column ph3 w-third">
        <div className="flex w-100 pt2 pb3">
          <div className="flex w-50">{<this.props.currentBalanceLabel />}</div>
          <div className="flex w-50">
            <div className="pl3 f6  black-text fw4">
              <this.props.currentBalance
                text={
                  record?.details?.currentBalance
                    ? record.details?.currentBalance
                    : '0'
                }
              />
                </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-column ph3 w-third">
        <div className="flex w-100 pt2 pb3">
          <div className="flex w-50">{<this.props.interestLabel />}</div>
          <div className="flex w-50">
            <div className="pl3 f6  black-text fw4">
                  {record?.details?.interest
                    ? record.details?.interest
                    : 'NA'}
                </div>
          </div>
        </div>
      </div>

      <div className="flex flex-column ph3 w-third">
        <div className="flex w-100 pt2 pb3">
          <div className="flex w-50">
            {<this.props.unclearedBalanceLabel />}
          </div>
          <div className="flex w-50">
            <div className="pl3 f6  black-text">
              <this.props.unclearedBalance
                text={
                  record?.details?.unclearedBalance
                    ? record.details?.unclearedBalance
                    : 'NA'
                }
              />
                </div>
          </div>
        </div>
      </div>

    </div>
  )
}

renderData(){
  let {
    searchValue,
    totalBalanceAmount
  } = this.state
  let listItem = this.renderSavingsAccountListDetailsItem()
  let columns = this.getCurrentColumns ()

  const expendableProps = {
    ...({
      expendableRowRender: (record) => this.renderSavingAccountListDetail(record),
      expandIconColumnIndex: columns.length - 1,
      expandRowByClick: false
    })
  }
  return(
    <>
    <div className="flex justify-between row flex-row-reverse pt3 h3">
      
      <div className="w-50 pl4-ns pl3 flex justify-end">
        <div className="f7">
          {' '}
          <this.props.addDepositButton
          />{' '}
        </div>
      </div>

      <this.props.titleLabel />
    </div>

    <div className="flex w-100 pt2">
      <this.props.totalAccountBalance
        text={totalBalanceAmount}
        />
    </div>

    {this.props.isSearchConfig && <div>
      {' '}
      <this.props.searchInput
        value={searchValue}
        maxLength={60}
        className="mt3"
        />
    </div>}

    <div className="w-100 mt3">
      <table>
        <this.props.savingsAccountTable
          pagination={false}
          data={listItem}
          columns={columns}
          {...expendableProps}
        />
      </table>
    </div>
  </>
  )
}

renderSavingsData() {
  const { savingsAccountsData } = this.state
  return (
    <div className={`flex w-100 h-100 flex-column overflow-y-auto ph3`}>
      {
        savingsAccountsData && savingsAccountsData.length > 0
        ? this.renderData()
        : "DATA NOT AVAILABLE"
      }
    </div>
  )
}

render() {
  return (
    <div className={`flex flex-column ${this.props.className}`}>
      {
        this.renderSavingsData()
      }
    </div>
  )
}

}
