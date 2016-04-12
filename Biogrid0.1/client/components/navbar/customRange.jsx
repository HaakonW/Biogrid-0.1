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
      format: "yyyy-mm-dd",
      todayHighlight: true,
      weekStart: 1
    });
    $('#from').datepicker()
      .on('changeDate', function(){
        $('#end').focus();
      });
      $('#from').datepicker('update', new Date());
      $('#end').datepicker('update', new Date());
  },

  getToday(date) {
    date[0] = this.getTodaysDate();
    date[1] = this.getTodaysDate();
    Session.set('timePeriod', date);
    $("#subNavbarToday").css("border-color", "#2aa9dc");
    $("#subNavbarWeek").css("border-color", "#222222");
    $("#subNavbarMonth").css("border-color", "#222222");
    $("#subNavbarCustom").css("border-color", "#222222");
    $('#from').datepicker('update', new Date());
    $('#end').datepicker('update', new Date());
  },

  getWeek(date) {
    let today = new Date();
    let week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    date[0] = this.getRequestedDate(week);
    date[1] = this.getTodaysDate();
    Session.set('timePeriod', date);
    $("#subNavbarToday").css("border-color", "#222222");
    $("#subNavbarWeek").css("border-color", "#2aa9dc");
    $("#subNavbarMonth").css("border-color", "#222222");
    $("#subNavbarCustom").css("border-color", "#222222");
    $('#from').datepicker('update', week);
    $('#end').datepicker('update', today);
  },

  getMonth(date) {
    let today = new Date();
    let month = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    date[0] = this.getRequestedDate(month);
    date[1] = this.getTodaysDate();
    Session.set('timePeriod', date);
    $("#subNavbarToday").css("border-color", "#222222");
    $("#subNavbarWeek").css("border-color", "#222222");
    $("#subNavbarMonth").css("border-color", "#2aa9dc");
    $("#subNavbarCustom").css("border-color", "#222222");
    $('#from').datepicker('update', month);
    $('#end').datepicker('update', new Date());
  },

  getCustom(date) {
    date[0] = this.getRequestedDate(new Date(this.refs.from.value));
    date[1] = this.getRequestedDate(new Date(this.refs.end.value));
    Session.set('timePeriod', date);
    $("#subNavbarToday").css("border-color", "#222222");
    $("#subNavbarWeek").css("border-color", "#222222");
    $("#subNavbarMonth").css("border-color", "#222222");
  },

  getDefault(date) {
    date[0] = this.getTodaysDate();
    date[1] = this.getTodaysDate();
    Session.set('timePeriod', date);
    $('#from').datepicker('update', today);
    $('#end').datepicker('update', today);
  },

  handleButtonClicks(period) {
    let date = [];
    switch (period) {
      case 'today':
        this.getToday(date);
        break;
      case 'week':
        this.getWeek(date);
        break;
      case 'month':
        this.getMonth(date);
        break;
      case 'custom':
        this.getCustom(date);
        break;
      default:
        this.getDefault(date);
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
    return inDate.getFullYear() + "-" +
    ('0' + (inDate.getMonth() + 1)).slice(-2) + "-" +
    ('0' + inDate.getDate()).slice(-2);
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
