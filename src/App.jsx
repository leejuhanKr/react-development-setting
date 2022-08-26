import styled from 'styled-components';
import AppContent from './components/AppContent';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const HomePageTheme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <HomePageTheme>
      <Header />
      <AppContent />
      <Footer />
    </HomePageTheme>
  );
};
export default App;
