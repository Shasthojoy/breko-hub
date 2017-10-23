import DocumentMeta from 'react-helmet'

export default class HomeRoute extends React.Component {
  render() {
    return (
      <section className='HomeRoute'>
        <DocumentMeta>
          <title></title>
        </DocumentMeta>
        <p>Welcome to breko-hub</p>
        <p>This app is intentionally minimal!</p>
        <p>There are various mini-examples showing how you can customise to your needs.</p>
        <p>Breko hub is designed to be quick to develop with:</p>
        <p>Make a change to the styles in a <code>*.module.scss</code> file or a component and see for yourself!</p>
        <p>Even the server routes and api endpoints auto update on changes very quickly!</p>
      </section>
    )
  }
}
