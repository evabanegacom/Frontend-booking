import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userBookingDetail } from '../actions/actions';
/* eslint-disable */
class BookingDetail extends Component {
  componentDidMount(){
    const { getDetail } = this.props
    getDetail()
  }
  
  render() {
    const { bookingDetail } = this.props
    const checkDetail = this.props.match.params.id
    console.log(this.props)
    const mappin = bookingDetail.filter(stock => stock.user_id === parseInt(checkDetail))
    const checking = mappin ? (
      mappin.map(mapp => (<p>{mapp.description}</p>)
    )) : (<p>nothing here</p>)
    
    return (
      <div>
        booking details goes here
        {checking}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookingDetail: state.bookingDetailReducer.userBooking,
})

const mapDispatchToProps = dispatch => ({
  getDetail: () => { dispatch(userBookingDetail()) },
})
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetail);
/* eslint-enable */
