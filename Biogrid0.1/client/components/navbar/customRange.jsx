CustomRange = React.createClass({
  componentWillMount() {
    let date = [];
    date[0] = this.getTodaysDate();
    date[1] = this.getTodaysDate();
    Session.set('timePeriod', date);
  },

  componentDidMount() {
    $("#subNavbarToday").css("border-color", "#2aa9dc");
    $('#datepicker').datepicker({
      autoclose: true,
      format: "dd M 'yy"
    });
    $('#from').datepicker()
      .on('changeDate', function(){
        $('#end').focus();
      });
  },

  handleButtonClicks(period) {
    let date = [];
    let today = new Date();
    switch (period) {
      case 'today':
        date[0] = this.getTodaysDate();
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavbarToday").css("border-color", "#2aa9dc");
        $("#subNavbarWeek").css("border-color", "#222222");
        $("#subNavbarMonth").css("border-color", "#222222");
        $("#subNavbarCustom").css("border-color", "#222222");
        break;
      case 'week':
        date[0] = this.getRequestedDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7));
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavbarToday").css("border-color", "#222222");
        $("#subNavbarWeek").css("border-color", "#2aa9dc");
        $("#subNavbarMonth").css("border-color", "#222222");
        $("#subNavbarCustom").css("border-color", "#222222");
        break;
      case 'month':
        date[0] = this.getRequestedDate(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        $("#subNavbarToday").css("border-color", "#222222");
        $("#subNavbarWeek").css("border-color", "#222222");
        $("#subNavbarMonth").css("border-color", "#2aa9dc");
        $("#subNavbarCustom").css("border-color", "#222222");
        break;
      case 'custom':
        date[0] = this.getRequestedDate(this.refs.from.value);
        date[1] = this.getRequestedDate(this.refs.end.value);
        Session.set('timePeriod', date);
        $("#subNavbarToday").css("border-color", "#222222");
        $("#subNavbarWeek").css("border-color", "#222222");
        $("#subNavbarMonth").css("border-color", "#222222");
        //$("#subNavbarCustom").css("border-color", "#2aa9dc");
        break;
      default:
        //todays date
        date[0] = this.getTodaysDate();
        date[1] = this.getTodaysDate();
        Session.set('timePeriod', date);
        break;
    }
  },

  dateRangeHandler() {
    $('#datepicker').datepicker();
  },

  getTodaysDate() {
    let date = new Date();
    return date.getFullYear() + "-" +
    ('0' + (date.getMonth() + 1)).slice(-2) + "-" +
    ('0' + date.getDate()).slice(-2);
  },

  getRequestedDate(inDate) {
    let date = new Date(inDate);
    return date.getFullYear() + "-" +
    ('0' + (date.getMonth() + 1)).slice(-2) + "-" +
    ('0' + date.getDate()).slice(-2);
  },
  render(){
    return(
      <ul className="nav navbar-nav">
        <li className="subNavbarLi" id="subNavbarToday"><a href="" onClick={this.handleButtonClicks.bind(this, 'today')}>Today</a></li>
        <li className="subNavbarLi" id="subNavbarWeek"><a href="" onClick={this.handleButtonClicks.bind(this, 'week')}>Last week</a></li>
        <li className="subNavbarLi" id="subNavbarMonth"><a href="" onClick={this.handleButtonClicks.bind(this, 'month')}>Last month</a></li>
        <li className="subNavbarLi" id="subNavbarCustom">
          <div className="input-group input-group-sm input-daterange" id="datepicker">
            <input type="text" className="input-sm form-control dateRangeInput" ref="from" id="from" onClick={this.dateRangeHandler}/>
            <input type="text" className="input-sm form-control dateRangeInput" ref="end" id="end" onClick={this.dateRangeHandler}/>
          </div>
        </li>
        <li>
            <i className="fa fa-search fa-lg" onClick={this.handleButtonClicks.bind(this, 'custom')}></i>
        </li>
      </ul>
    )
  }
});
