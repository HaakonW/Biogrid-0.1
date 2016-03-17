MainLayout = React.createClass({
  render() {
    return (
      <div>
        <header>
          {this.props.nav || <Nav />}
        </header>
        <main>
          {this.props.content}
        </main>
  
      </div>
    );
  }
});
